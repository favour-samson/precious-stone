import { useState, useEffect } from "react";
import {
  Call,
  LivestreamLayout,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Radio, Clock, Calendar, Bell, ExternalLink, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  createAnonymousClient,
  isStreamConfigured,
  LIVE_CALL_ID,
} from "@/lib/stream";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/share/1Ky6CrUmiB/";

const SERVICE_SCHEDULE = [
  { day: "Sunday", time: "8:00 AM", label: "Worship Service" },
];

// ---- inner component — needs StreamCall context ----
function LivestreamContent() {
  const { useIsCallLive, useCallEndedAt } = useCallStateHooks();
  const isLive = useIsCallLive();
  const endedAt = useCallEndedAt();

  if (endedAt) {
    return (
      <div className="aspect-video flex flex-col items-center justify-center gap-6 p-8">
        <Radio size={32} className="text-white/50" />
        <div className="text-center">
          <p className="text-white font-semibold text-lg mb-1">Service has ended</p>
          <p className="text-white/60 text-sm">Thank you for joining us today.</p>
        </div>
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
        >
          <ExternalLink size={14} />
          Watch Replay on Facebook
        </a>
      </div>
    );
  }

  if (!isLive) {
    return (
      <div className="aspect-video flex flex-col items-center justify-center gap-6 p-8">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Radio size={32} className="text-white" />
        </div>
        <div className="text-center">
          <p className="text-white font-semibold text-lg mb-1">We're not live right now</p>
          <p className="text-white/60 text-sm">
            Join us during one of our scheduled services below
          </p>
        </div>
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg transition"
        >
          <ExternalLink size={14} />
          Watch Past Services on Facebook
        </a>
      </div>
    );
  }

  return (
    <div className="aspect-video">
      <LivestreamLayout
        muted={false}
        enableFullScreen
        showParticipantCount
        showDuration
        showLiveBadge
        showMuteButton
      />
    </div>
  );
}

type ViewerStatus = "checking" | "offline" | "joining" | "live";

// ---- viewer that manages client/call lifecycle ----
function StreamLivestreamViewer() {
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [status, setStatus] = useState<ViewerStatus>("checking");

  useEffect(() => {
    if (!isStreamConfigured()) {
      setStatus("offline");
      return;
    }

    const c = createAnonymousClient();
    const liveCall = c.call("livestream", LIVE_CALL_ID);
    let mounted = true;
    let joined = false;

    async function checkAndJoin() {
      try {
        const { call: callData } = await liveCall.get();
        const isLive = !callData.backstage;

        if (!mounted) return;

        if (isLive && !joined) {
          if (mounted) setStatus("joining");
          await liveCall.join({ create: false });
          joined = true;
          if (mounted) {
            setClient(c);
            setCall(liveCall);
            setStatus("live");
          }
        } else if (!isLive) {
          if (mounted) setStatus("offline");
        }
      } catch (err) {
        console.error("[Stream] error:", err);
        if (mounted) setStatus("offline");
      }
    }

    checkAndJoin();
    // re-check every 30 s so the player auto-activates when you click Go Live
    const interval = setInterval(checkAndJoin, 30_000);

    return () => {
      mounted = false;
      clearInterval(interval);
      if (joined) liveCall.leave().catch(console.error);
      c.disconnectUser().catch(console.error);
    };
  }, []);

  if (status === "checking" || status === "joining") {
    return (
      <div className="aspect-video flex items-center justify-center">
        <Loader2 size={32} className="text-primary animate-spin" />
      </div>
    );
  }

  if (status === "offline") {
    return <OfflineState />;
  }

  if (!client || !call) return null;

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LivestreamContent />
      </StreamCall>
    </StreamVideo>
  );
}

function OfflineState() {
  return (
    <div className="aspect-video flex flex-col items-center justify-center gap-6 p-8">
      <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
        <Radio size={32} className="text-white" />
      </div>
      <div className="text-center">
        <p className="text-white font-semibold text-lg mb-1">We're not live right now</p>
        <p className="text-white/60 text-sm">
          Join us during one of our scheduled services
        </p>
      </div>
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg transition"
      >
        <ExternalLink size={14} />
        Watch Past Services on Facebook
      </a>
    </div>
  );
}

// ---- exported section ----
export function WatchUsLiveSection() {
  return (
    <section id="watch-live" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-sm mb-4">
            <Radio size={14} />
            Live Broadcast
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-3">Watch Us Live</h2>
          <p className="text-white/70 text-lg">Join our services from wherever you are</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Player — takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
              <StreamLivestreamViewer />
            </div>

            <div className="flex items-center justify-between mt-3 px-1">
              <p className="text-white/40 text-xs">
                Powered by{" "}
                <a
                  href="https://getstream.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Stream Video
                </a>{" "}
                &middot; Also on{" "}
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Facebook
                </a>
              </p>
              <Link
                to="/live"
                className="text-xs text-primary hover:underline"
              >
                Full screen &rarr;
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Service times */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-white text-sm font-medium mb-4">
                <Calendar size={15} />
                Service Schedule
              </div>
              <ul className="space-y-4">
                {SERVICE_SCHEDULE.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{s.label}</p>
                      <p className="text-white/60 text-xs">
                        {s.day} &bull; {s.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timezone note */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-white text-sm font-medium mb-2">
                <Clock size={15} />
                Timezone
              </div>
              <p className="text-white text-sm">
                All times in <span className="text-white font-semibold">WAT (UTC+1)</span>
              </p>
              <p className="text-white/50 text-xs mt-1">West Africa Time — Nigeria</p>
            </div>

            {/* Notify me */}
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6">
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                <Bell size={15} />
                Never Miss a Service
              </div>
              <p className="text-white/70 text-xs mb-4">
                Follow us on Facebook to get notified when we go live.
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-sm font-medium rounded-lg transition"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
