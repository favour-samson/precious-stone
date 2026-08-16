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
  Copy,
  Check,
  Loader2,
  Cable,
  PhoneOff,
  SwitchCamera,
  Users,
  ZoomIn,
  Mic,
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

// ---------- copyable field ----------
function CopyField({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <p className="text-white/50 text-xs mb-1">{label}</p>
      <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-lg px-3 py-2">
        <span className={`flex-1 text-white text-sm truncate ${mono ? "font-mono" : ""}`}>
          {value}
        </span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-white/60 hover:text-white shrink-0"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
}

// ---------- raw local camera preview (full-size, cropped to fill) ----------
function CameraPreview({ stream }: { stream: MediaStream | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream;
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />;
}

// ---------- live controls (needs StreamCall context) ----------
function HostControls({ token, onLeave }: { token: string; onLeave: () => void }) {
  const { useIsCallLive, useCallIngress, useParticipantCount, useCallSession } = useCallStateHooks();
  const isLive = useIsCallLive();
  const ingress = useCallIngress();
  const participantCount = useParticipantCount();
  const session = useCallSession();
  const [busy, setBusy] = useState(false);
  const [liveError, setLiveError] = useState("");
  const call = useCall();

  // Real distinct-attendee count, tracked independently in our own DB (see
  // /api/stream/attendance) — survives viewers leaving, unlike anything
  // Stream's anonymous connection can report on its own.
  const [attendeeCount, setAttendeeCount] = useState(0);
  const sessionId = session?.id;

  useEffect(() => {
    if (!sessionId) return;
    let mounted = true;
    async function poll() {
      try {
        const res = await fetch(`/api/stream/attendance/${sessionId}`);
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
  }, [sessionId]);

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
            {isLive
              ? "Distinct people who've joined this service so far, even if they've left."
              : "Will start counting once you go live."}
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center gap-2 text-white text-sm font-medium mb-3">
            <Cable size={15} />
            OBS / RTMP app
          </div>
          {ingress?.rtmp?.address ? (
            <div className="space-y-3">
              <CopyField label="Server / URL" value={ingress.rtmp.address} />
              <CopyField label="Stream Key" value={token} />
              <p className="text-white/50 text-xs pt-1">
                In OBS: Settings → Stream → Service: <b>Custom</b>, paste Server + Stream Key, then Start Streaming.
                On phone, use an RTMP app (e.g. Larix Broadcaster) with the same two values. Then click{" "}
                <b>Go Live</b> above.
              </p>
            </div>
          ) : (
            <p className="text-white/50 text-xs">Loading ingress details…</p>
          )}
        </div>
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
                Enter the broadcast passcode to unlock camera and OBS controls for the live service.
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
                <HostControls token={session.token} onLeave={leave} />
              </StreamCall>
            </StreamVideo>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
