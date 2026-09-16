import { useEffect, useRef, useState } from "react";
import {
  Call,
  CallControls,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createHostClient } from "@/lib/stream";
import {
  Lock,
  Radio,
  Loader2,
  PhoneOff,
  SwitchCamera,
  Users,
  ZoomIn,
  Mic,
  Film,
  Trash2,
  Calendar,
} from "lucide-react";

type Stage = "locked" | "connecting" | "ready" | "error";

interface HostSession {
  client: StreamVideoClient;
  call: Call;
  token: string;
}

// zoom is a real, widely-supported (mainly Android Chrome) but non-standard
// MediaTrackConstraint the DOM lib types don't know about.
interface ZoomRange {
  min: number;
  max: number;
  step: number;
}
type CapabilitiesWithZoom = MediaTrackCapabilities & { zoom?: ZoomRange };
type SettingsWithZoom = MediaTrackSettings & { zoom?: number };
type ConstraintsWithZoom = MediaTrackConstraintSet & { zoom?: number };

// ---------- raw local camera preview (full-size, cropped to fill) ----------
function CameraPreview({ stream }: { stream: MediaStream | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream;
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />;
}

// ---------- past recordings management (list + delete) ----------
interface Recording {
  url: string | null;
  sessionId: string;
  filename: string;
  startTime: string;
  endTime: string;
  status: "ready" | "processing" | "failed";
}

function formatRecordingDuration(startIso: string, endIso: string): string | null {
  const ms = new Date(endIso).getTime() - new Date(startIso).getTime();
  if (!Number.isFinite(ms) || ms <= 0) return null;
  const totalMin = Math.round(ms / 60_000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function RecordingsManager({ passcode }: { passcode: string }) {
  const [recordings, setRecordings] = useState<Recording[] | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState("");

  function load() {
    fetch("/api/stream/recordings")
      .then((res) => res.json())
      .then((data) => setRecordings(data.recordings ?? []))
      .catch((err) => {
        console.error("[Broadcast] failed to load recordings:", err);
        setRecordings([]);
      });
  }

  useEffect(load, []);

  async function handleDelete(r: Recording) {
    if (!confirm(`Delete the recording from ${new Date(r.startTime).toLocaleDateString()}? This can't be undone.`)) {
      return;
    }
    setDeleting(r.filename);
    setError("");
    try {
      const res = await fetch("/api/stream/recordings", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: r.sessionId, filename: r.filename, passcode }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to delete recording.");
      }
      setRecordings((prev) => prev?.filter((x) => x.filename !== r.filename) ?? null);
    } catch (err) {
      console.error("[Broadcast] delete recording failed:", err);
      setError(err instanceof Error ? err.message : "Failed to delete recording.");
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="flex items-center gap-2 text-white text-sm font-medium mb-3">
        <Film size={15} />
        Past Recordings
      </div>
      {recordings === null ? (
        <p className="text-white/50 text-xs">Loading…</p>
      ) : recordings.length === 0 ? (
        <p className="text-white/50 text-xs">No recordings yet.</p>
      ) : (
        <ul className="space-y-2">
          {recordings.map((r) => (
            <li
              key={r.filename}
              className="flex items-center justify-between gap-3 bg-black/20 rounded-lg px-3 py-2"
            >
              <span className="flex items-center gap-2 text-white/80 text-xs min-w-0">
                <Calendar size={12} className="text-primary shrink-0" />
                <span className="truncate">
                  {new Date(r.startTime).toLocaleString(undefined, {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                  {formatRecordingDuration(r.startTime, r.endTime) && (
                    <span className="text-white/40">
                      {" "}
                      · {formatRecordingDuration(r.startTime, r.endTime)}
                    </span>
                  )}
                </span>
                {r.status === "processing" && (
                  <span className="shrink-0 px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px] font-medium">
                    Processing
                  </span>
                )}
                {r.status === "failed" && (
                  <span className="shrink-0 px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded text-[10px] font-medium">
                    Failed
                  </span>
                )}
              </span>
              <button
                onClick={() => handleDelete(r)}
                disabled={deleting === r.filename}
                className="text-white/50 hover:text-red-400 shrink-0 transition disabled:opacity-50"
              >
                {deleting === r.filename ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Trash2 size={14} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  );
}

// ---------- live controls (needs StreamCall context) ----------
function HostControls({
  passcode,
  onLeave,
}: {
  passcode: string;
  onLeave: () => void;
}) {
  const { useIsCallLive, useParticipantCount } = useCallStateHooks();
  const isLive = useIsCallLive();
  const participantCount = useParticipantCount();
  const [busy, setBusy] = useState(false);
  const [liveError, setLiveError] = useState("");
  const call = useCall();

  // Real distinct-attendee count, tracked independently in our own DB (see
  // /api/stream/attendance) — survives viewers leaving, and survives the
  // stream itself dropping and going live again mid-service, since it's
  // bucketed by calendar day server-side rather than by Stream's call
  // session id (which resets on a reconnect).
  const [attendeeCount, setAttendeeCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    async function poll() {
      try {
        const res = await fetch("/api/stream/attendance/today");
        const data = await res.json();
        if (mounted) setAttendeeCount(data.count ?? 0);
      } catch (err) {
        console.error("[Broadcast] attendance poll failed:", err);
      }
    }
    poll();
    const interval = setInterval(poll, 10_000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [zoomTrack, setZoomTrack] = useState<MediaStreamTrack | null>(null);
  const [zoomRange, setZoomRange] = useState<ZoomRange | null>(null);
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    if (!call) return;
    const sub = call.camera.state.mediaStream$.subscribe((stream) => {
      setCameraStream(stream ?? null);
      const track = stream?.getVideoTracks()[0] ?? null;
      setZoomTrack(track);
      const caps = track?.getCapabilities?.() as CapabilitiesWithZoom | undefined;
      if (track && caps?.zoom) {
        setZoomRange(caps.zoom);
        const settings = track.getSettings?.() as SettingsWithZoom;
        setZoom(settings.zoom ?? caps.zoom.min);
      } else {
        setZoomRange(null);
      }
    });
    return () => sub.unsubscribe();
  }, [call]);

  function handleZoomChange(value: number) {
    setZoom(value);
    const constraint: ConstraintsWithZoom = { zoom: value };
    zoomTrack
      ?.applyConstraints({ advanced: [constraint] })
      .catch((err) => console.error("[Broadcast] zoom failed:", err));
  }

  // A visual mic level meter so the host can confirm audio is being picked
  // up without needing to hear themselves — the preview video is (correctly)
  // muted locally, since playing your own mic back through your own speaker
  // causes a feedback howl. This gives the same confirmation, safely.
  const [micLevel, setMicLevel] = useState(0);

  useEffect(() => {
    if (!call) return;
    let audioCtx: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let source: MediaStreamAudioSourceNode | null = null;
    let raf = 0;

    function teardown() {
      if (raf) cancelAnimationFrame(raf);
      source?.disconnect();
      audioCtx?.close().catch(() => {});
      audioCtx = null;
      analyser = null;
      source = null;
    }

    const sub = call.microphone.state.mediaStream$.subscribe((stream) => {
      teardown();
      const track = stream?.getAudioTracks()[0];
      if (!stream || !track) {
        setMicLevel(0);
        return;
      }

      audioCtx = new AudioContext();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      const data = new Uint8Array(analyser.frequencyBinCount);
      const tick = () => {
        analyser!.getByteFrequencyData(data);
        const avg = data.reduce((a, b) => a + b, 0) / data.length;
        setMicLevel(Math.min(1, avg / 128));
        raf = requestAnimationFrame(tick);
      };
      tick();
    });

    return () => {
      sub.unsubscribe();
      teardown();
    };
  }, [call]);

  async function toggleLive() {
    if (!call) return;
    setBusy(true);
    setLiveError("");
    try {
      if (isLive) {
        await call.stopRecording().catch(() => {});
        await call.stopLive();
      } else {
        // Reverted from "individual" back to "composite" (2026-09-16):
        // individual recording looked appealing (no compositor padding
        // around portrait video) but proved unreliable for long sessions —
        // verified directly against Stream's API that a real 3h+ service
        // only produced an 8-minute, audio-only file. Composite recording
        // reliably captured full ~1hr services before the switch. The
        // white-padding cosmetic issue is a much smaller problem than
        // silently losing most of a service.
        await call.goLive({ start_composite_recording: true });
      }
    } catch (err) {
      console.error("[Broadcast] go live / stop live failed:", err);
      setLiveError(err instanceof Error ? err.message : "Failed to change live status.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* preview — full width */}
      <div>
        <div
          className="relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10"
          style={{ height: "65vh" }}
        >
          <CameraPreview stream={cameraStream} />

          <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 backdrop-blur px-2.5 py-1.5 rounded-lg">
            <Mic size={13} className="text-white/80 shrink-0" />
            <div className="w-14 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 transition-[width] duration-75"
                style={{ width: `${micLevel * 100}%` }}
              />
            </div>
          </div>

          <div className="absolute top-3 right-3">
            <button
              onClick={() => call?.camera.flip()}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 hover:bg-black/70 backdrop-blur text-white text-xs rounded-lg transition"
            >
              <SwitchCamera size={13} />
              Flip
            </button>
          </div>

          {zoomRange && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-2 rounded-lg">
              <ZoomIn size={14} className="text-white/80 shrink-0" />
              <input
                type="range"
                min={zoomRange.min}
                max={zoomRange.max}
                step={zoomRange.step || 0.1}
                value={zoom}
                onChange={(e) => handleZoomChange(Number(e.target.value))}
                className="flex-1 accent-primary"
              />
              <span className="text-white/80 text-xs w-9 text-right shrink-0">{zoom.toFixed(1)}x</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={toggleLive}
            disabled={busy}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition disabled:opacity-50 ${
              isLive ? "bg-red-600 hover:bg-red-700 text-white" : "bg-primary hover:bg-opacity-90 text-white"
            }`}
          >
            {busy ? <Loader2 size={16} className="animate-spin" /> : <Radio size={16} />}
            {isLive ? "End Stream" : "Go Live"}
          </button>
          <button
            onClick={onLeave}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 text-xs rounded-lg transition shrink-0"
          >
            <PhoneOff size={12} />
            Leave
          </button>
        </div>
        <p className="text-white/50 text-xs mt-2">
          {/* participantCount includes the host itself — subtract 1 to show viewers only */}
          {isLive
            ? `Visible to viewers · ${Math.max(0, participantCount - 1)} watching`
            : "In backstage — viewers can't see this yet"}
        </p>
        {liveError && <p className="text-red-400 text-xs mt-2">{liveError}</p>}
        <div className="mt-3">
          <CallControls onLeave={onLeave} />
        </div>
      </div>

      {/* feed sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center gap-2 text-white text-sm font-medium mb-3">
            <Users size={15} />
            Attendance
          </div>
          <p className="text-white text-3xl font-bold">{attendeeCount}</p>
          <p className="text-white/50 text-xs mt-1">
            Distinct people who've joined today's service, even if they left or the stream
            reconnected.
          </p>
        </div>

        <RecordingsManager passcode={passcode} />
      </div>
    </div>
  );
}

// ---------- main page ----------
export default function Broadcast() {
  const [stage, setStage] = useState<Stage>("locked");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [session, setSession] = useState<HostSession | null>(null);

  useEffect(() => {
    return () => {
      session?.call.leave().catch(console.error);
      session?.client.disconnectUser().catch(console.error);
    };
  }, [session]);

  async function unlock() {
    setStage("connecting");
    setError("");
    try {
      const res = await fetch("/api/stream/host-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to unlock broadcast controls.");

      const client = createHostClient(data.userId, data.token, "Church Broadcast Host");
      const call = client.call(data.callType, data.callId);

      await call.microphone.enable();
      // default to the rear camera on phones — front-facing is the wrong
      // choice for filming a service. selectDirection() enables the camera too.
      await call.camera.selectDirection("back");
      await call.join({ create: true });

      setSession({ client, call, token: data.token });
      setStage("ready");
    } catch (err) {
      console.error("[Broadcast] unlock failed:", err);
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStage("error");
    }
  }

  async function leave() {
    await session?.call.leave().catch(console.error);
    await session?.client.disconnectUser().catch(console.error);
    setSession(null);
    setStage("locked");
    setPasscode("");
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          {stage !== "ready" ? (
            <div className="max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lock size={22} className="text-primary" />
              </div>
              <h1 className="text-white text-xl font-serif font-bold mb-2">Broadcast Controls</h1>
              <p className="text-white/60 text-sm mb-6">
                Enter the broadcast passcode to unlock camera controls for the live service.
              </p>
              <input
                type="password"
                placeholder="Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && passcode && unlock()}
                className="w-full px-4 py-3 mb-4 bg-black/30 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {error && <p className="text-red-400 text-xs mb-4">{error}</p>}
              <button
                onClick={unlock}
                disabled={!passcode || stage === "connecting"}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {stage === "connecting" ? <Loader2 size={18} className="animate-spin" /> : <Radio size={18} />}
                {stage === "connecting" ? "Connecting…" : "Unlock"}
              </button>
            </div>
          ) : session ? (
            <StreamVideo client={session.client}>
              <StreamCall call={session.call}>
                <HostControls passcode={passcode} onLeave={leave} />
              </StreamCall>
            </StreamVideo>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
