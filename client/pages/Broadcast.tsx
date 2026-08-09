import { useEffect, useState } from "react";
import {
  Call,
  CallControls,
  SpeakerLayout,
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
  Video,
  Cable,
  PhoneOff,
  SwitchCamera,
} from "lucide-react";

type Stage = "locked" | "connecting" | "ready" | "error";

interface HostSession {
  client: StreamVideoClient;
  call: Call;
  token: string;
}

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

// ---------- live controls (needs StreamCall context) ----------
function HostControls({ token, onLeave }: { token: string; onLeave: () => void }) {
  const { useIsCallLive, useCallIngress, useParticipantCount } = useCallStateHooks();
  const isLive = useIsCallLive();
  const ingress = useCallIngress();
  const participantCount = useParticipantCount();
  const [busy, setBusy] = useState(false);
  const [liveError, setLiveError] = useState("");
  const call = useCall();

  async function toggleLive() {
    if (!call) return;
    setBusy(true);
    setLiveError("");
    try {
      if (isLive) {
        await call.stopLive();
      } else {
        await call.goLive();
      }
    } catch (err) {
      console.error("[Broadcast] go live / stop live failed:", err);
      setLiveError(err instanceof Error ? err.message : "Failed to change live status.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* preview + controls */}
      <div className="lg:col-span-2">
        <div className="rounded-2xl overflow-hidden bg-gray-900 border border-white/10" style={{ height: "60vh" }}>
          <SpeakerLayout />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
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
            <span className="text-white/50 text-xs">
              {isLive ? `Visible to viewers · ${participantCount} watching` : "In backstage — viewers can't see this yet"}
            </span>
          </div>
          <button
            onClick={onLeave}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 text-xs rounded-lg transition"
          >
            <PhoneOff size={12} />
            Leave
          </button>
        </div>
        {liveError && <p className="text-red-400 text-xs mt-2">{liveError}</p>}
        <div className="mt-3">
          <CallControls onLeave={onLeave} />
        </div>
      </div>

      {/* feed sources */}
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <Video size={15} />
              This device's camera
            </div>
            <button
              onClick={() => call?.camera.flip()}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition"
            >
              <SwitchCamera size={13} />
              Flip
            </button>
          </div>
          <p className="text-white/60 text-xs">
            Defaults to the rear camera. On a phone, just keep this page open in the browser — no app needed.
            Use "Flip" to switch to the front camera, or the buttons below the preview to mute.
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
