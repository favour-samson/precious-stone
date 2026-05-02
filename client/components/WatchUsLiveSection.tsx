import { useState, useEffect } from "react";
import { Radio, Clock, Calendar, Bell, ExternalLink } from "lucide-react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/share/1Ky6CrUmiB/";

const SERVICE_SCHEDULE = [
  { day: "Sunday", time: "8:00 AM", label: "Worship Service" },
];

function useIsLiveTime() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();       
      const hour = now.getHours();
      const min = now.getMinutes();
      const totalMin = hour * 60 + min;

      // Sunday 8:00 AM – 11:00 AM (adjust end time to match your service length)
      const isSunday = day === 0;
      const inServiceWindow = totalMin >= 480 && totalMin <= 660;

      setIsLive(isSunday && inServiceWindow);
    };

    check();
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  return isLive;
}

export function WatchUsLiveSection() {
  const isLive = useIsLiveTime();
  const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(FACEBOOK_PAGE_URL)}&show_text=false&autoplay=false&mute=false`;

  return (
    <section id="watch-live" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm mb-4">
            <Radio size={14} />
            Live Broadcast
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-3">
            Watch Us Live
          </h2>
          <p className="text-white/50 text-lg">
            Join our services from wherever you are
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

          {/* Player — takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
              {/* Live badge */}
              {isLive && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-red-600 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  <span className="text-white text-xs font-bold tracking-wide">LIVE</span>
                </div>
              )}

              {isLive ? (
                <iframe
                  src={embedSrc}
                  className="w-full aspect-video"
                  style={{ border: "none" }}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              ) : (
                /* Offline state */
                <div className="aspect-video flex flex-col items-center justify-center gap-6 p-8">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Radio size={32} className="text-white/30" />
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 font-semibold text-lg mb-1">
                      We're not live right now
                    </p>
                    <p className="text-white/40 text-sm">
                      Join us during one of our scheduled services below
                    </p>
                  </div>
                  <a
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary  text-white text-sm font-medium rounded-lg transition"
                  >
                    <ExternalLink size={14} />
                    Watch Past Services on Facebook
                  </a>
                </div>
              )}
            </div>

            {/* Facebook CTA below player */}
            <p className="text-white/30 text-xs text-center mt-3">
              Stream hosted on{" "}
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                our Facebook page
              </a>
            </p>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Service times */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-white/60 text-sm font-medium mb-4">
                <Calendar size={15} />
                Service Schedule
              </div>
              <ul className="space-y-4">
                {SERVICE_SCHEDULE.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{s.label}</p>
                      <p className="text-white/40 text-xs">
                        {s.day} • {s.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timezone note */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-white/60 text-sm font-medium mb-2">
                <Clock size={15} />
                Timezone
              </div>
              <p className="text-white/80 text-sm">All times in <span className="text-white font-semibold">WAT (UTC+1)</span></p>
              <p className="text-white/40 text-xs mt-1">West Africa Time — Nigeria</p>
            </div>

            {/* Notify me */}
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6">
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                <Bell size={15} />
                Never Miss a Service
              </div>
              <p className="text-white/50 text-xs mb-4">
                Follow us on Facebook to get notified when we go live.
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary  text-white text-sm font-medium rounded-lg transition"
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