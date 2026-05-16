import { useEffect, useRef, useState } from "react";
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Video, Mic, Users, Lock, Copy, Check, Loader2, PhoneOff } from "lucide-react";
import { createGuestClient, isStreamConfigured } from "@/lib/stream";

type CallMode = "video" | "audio";

// ---------- active call UI ----------
function ActiveCall({ call, mode, onLeave }: { call: Call; mode: CallMode; onLeave: () => void }) {
  const { useParticipantCount } = useCallStateHooks();
  const participantCount = useParticipantCount();

  return (
    <div className="flex flex-col h-full">
      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-green-400 text-xs font-medium">
              {mode === "audio" ? "Audio Call" : "Video Call"}
            </span>
          </div>
          <span className="text-white/50 text-xs">
            {participantCount} participant{participantCount !== 1 ? "s" : ""}
          </span>
        </div>
        <button
          onClick={onLeave}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg transition"
        >
          <PhoneOff size={12} />
          Leave Call
        </button>
      </div>

      {/* video / audio area */}
      <div className="flex-1 bg-gray-950">
        {mode === "audio" ? (
          <AudioOnlyView participantCount={participantCount} />
        ) : (
          <SpeakerLayout />
        )}
      </div>

      {/* controls */}
      <div className="flex justify-center py-4 bg-gray-900 border-t border-white/10">
        <CallControls onLeave={onLeave} />
      </div>
    </div>
  );
}

function AudioOnlyView({ participantCount }: { participantCount: number }) {
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
      <div className="flex flex-wrap justify-center gap-6">
        {participants.map((p) => (
          <div key={p.sessionId} className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-2xl font-bold text-white">
              {(p.name || p.userId || "?")[0].toUpperCase()}
            </div>
            <span className="text-white/80 text-xs">{p.name || p.userId}</span>
            {p.isSpeaking && (
              <span className="text-xs text-green-400 animate-pulse">Speaking...</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
        <Mic size={14} className="text-green-400" />
        <span className="text-white/60 text-xs">{participantCount} on the call</span>
      </div>
    </div>
  );
}

// ---------- main page ----------
export default function VideoCall() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [mode, setMode] = useState<CallMode>("video");
  const [joining, setJoining] = useState(false);
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [activeMode, setActiveMode] = useState<CallMode>("video");
  const [copied, setCopied] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const clientRef = useRef<StreamVideoClient | null>(null);

  const generatedRoomId = useRef(`psc-${Math.random().toString(36).slice(2, 9)}`);
  const effectiveRoomId = roomId.trim() || generatedRoomId.current;

  async function joinCall() {
    if (!name.trim()) return;
    setJoining(true);

    const c = createGuestClient(name.trim());
    clientRef.current = c;
    const liveCall = c.call("default", effectiveRoomId);

    try {
      // Enable devices BEFORE join — the SDK initialises state on join,
      // so calling enable() after the fact leaves the button showing as off.
      await liveCall.microphone.enable();
      if (mode === "video") {
        await liveCall.camera.enable();
      }

      await liveCall.join({ create: true });

      setActiveMode(mode);
      setClient(c);
      setCall(liveCall);
    } catch (err) {
      console.error("Join error:", err);
      c.disconnectUser().catch(console.error);
    } finally {
      setJoining(false);
    }
  }

  async function leaveCall() {
    await call?.leave().catch(console.error);
    await clientRef.current?.disconnectUser().catch(console.error);
    setCall(null);
    setClient(null);
    clientRef.current = null;
  }

  useEffect(() => {
    return () => {
      call?.leave().catch(console.error);
      clientRef.current?.disconnectUser().catch(console.error);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function copyRoomId() {
    navigator.clipboard.writeText(effectiveRoomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const notConfigured = !isStreamConfigured();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* hero */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm mb-4">
              <Video size={14} />
              Video & Audio Calling
            </div>
            <h1 className="text-4xl font-serif font-bold mb-3">Connect Face to Face</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Meet with your pastor, join a small group, or pray with a friend — from anywhere.
            </p>
          </div>
        </section>

        {/* call area */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {notConfigured ? (
              <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-8 text-center">
                <Video size={40} className="text-primary mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Stream Not Configured</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Add your <code className="bg-gray-100 px-1 rounded">VITE_STREAM_API_KEY</code> to{" "}
                  <code className="bg-gray-100 px-1 rounded">.env</code> to enable calling.
                </p>
                <a
                  href="https://dashboard.getstream.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
                >
                  Get API Keys
                </a>
              </div>
            ) : call && client ? (
              <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" style={{ height: "75vh" }}>
                <StreamVideo client={client}>
                  <StreamCall call={call}>
                    <div className="h-full flex">
                      <div className="flex-1 flex flex-col">
                        <ActiveCall call={call} mode={activeMode} onLeave={leaveCall} />
                      </div>
                      {showParticipants && (
                        <div className="w-72 bg-gray-900 border-l border-white/10 overflow-y-auto">
                          <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <span className="text-white text-sm font-medium">Participants</span>
                            <button
                              onClick={() => setShowParticipants(false)}
                              className="text-white/50 hover:text-white text-xs"
                            >
                              Close
                            </button>
                          </div>
                          <CallParticipantsList onClose={() => setShowParticipants(false)} />
                        </div>
                      )}
                    </div>
                  </StreamCall>
                </StreamVideo>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Join a Call</h2>

                  {/* Mode selector */}
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden mb-6">
                    <button
                      onClick={() => setMode("video")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition ${
                        mode === "video"
                          ? "bg-primary text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Video size={15} />
                      Video Call
                    </button>
                    <button
                      onClick={() => setMode("audio")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition ${
                        mode === "audio"
                          ? "bg-primary text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Mic size={15} />
                      Audio Call
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Adeleke"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && joinCall()}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    {/* Room ID */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Room Code{" "}
                        <span className="text-gray-400 font-normal">(leave blank to create a new room)</span>
                      </label>
                      <input
                        type="text"
                        placeholder={generatedRoomId.current}
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm font-mono"
                      />
                    </div>
                  </div>

                  {/* Room preview */}
                  <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock size={13} />
                      Room:{" "}
                      <span className="font-mono font-medium text-gray-900">{effectiveRoomId}</span>
                    </div>
                    <button
                      onClick={copyRoomId}
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition"
                    >
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <button
                    onClick={joinCall}
                    disabled={!name.trim() || joining}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {joining ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : mode === "video" ? (
                      <Video size={18} />
                    ) : (
                      <Mic size={18} />
                    )}
                    {joining ? "Joining..." : mode === "video" ? "Join Video Call" : "Join Audio Call"}
                  </button>
                </div>

                {/* use-cases */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: "🙏", title: "Prayer Sessions", desc: "Pray together with church members" },
                    { icon: "📖", title: "Bible Study", desc: "Small group virtual study sessions" },
                    { icon: "💬", title: "Pastoral Care", desc: "One-on-one with your pastor" },
                  ].map((item) => (
                    <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm border text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* how to share */}
                <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                    <Users size={14} />
                    How to invite someone
                  </div>
                  <ol className="text-xs text-gray-600 space-y-1.5 list-decimal list-inside">
                    <li>Choose Video or Audio call, enter your name, and click Join</li>
                    <li>Copy the room code shown above</li>
                    <li>Share it with whoever you want to invite</li>
                    <li>They enter the same code and join instantly</li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
