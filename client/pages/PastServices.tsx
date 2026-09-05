import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Film, Calendar, Loader2, PlayCircle, X, Radio } from "lucide-react";

interface Recording {
  url: string;
  sessionId: string;
  startTime: string;
  endTime: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDuration(startIso: string, endIso: string) {
  const ms = new Date(endIso).getTime() - new Date(startIso).getTime();
  if (!Number.isFinite(ms) || ms <= 0) return null;
  const mins = Math.round(ms / 60_000);
  return `${mins} min`;
}

export default function PastServices() {
  const [recordings, setRecordings] = useState<Recording[] | null>(null);
  const [playing, setPlaying] = useState<Recording | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/stream/recordings")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setRecordings(data.recordings ?? []);
      })
      .catch((err) => {
        console.error("[PastServices] failed to load recordings:", err);
        if (mounted) setRecordings([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary opacity-10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-sm mb-4">
              <Film size={14} />
              Past Services
            </div>
            <h1 className="text-4xl font-serif font-bold text-white mb-3">Watch Past Services</h1>
            <p className="text-white/70 text-lg">Catch up on any service you missed</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {recordings === null ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 size={32} className="text-primary animate-spin" />
              </div>
            ) : recordings.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Film size={32} className="text-white/50" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">No past services yet</p>
                  <p className="text-white/60 text-sm max-w-sm">
                    Recordings appear here a few minutes after a live service ends.
                  </p>
                </div>
                <Link
                  to="/live"
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg"
                >
                  <Radio size={14} />
                  Go to Watch Live
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recordings.map((r) => (
                  <div
                    key={r.sessionId + r.startTime}
                    className="rounded-2xl overflow-hidden bg-gray-900 border border-white/10"
                  >
                    {playing?.url === r.url ? (
                      <div className="relative aspect-video bg-black">
                        <video src={r.url} controls autoPlay className="w-full h-full" />
                        <button
                          onClick={() => setPlaying(null)}
                          className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setPlaying(r)}
                        className="w-full aspect-video flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition group"
                      >
                        <PlayCircle size={48} className="text-white/70 group-hover:text-white transition" />
                      </button>
                    )}
                    <div className="p-4">
                      <p className="text-white font-semibold flex items-center gap-2">
                        <Calendar size={14} className="text-primary shrink-0" />
                        {formatDate(r.startTime)}
                      </p>
                      {formatDuration(r.startTime, r.endTime) && (
                        <p className="text-white/50 text-xs mt-1">{formatDuration(r.startTime, r.endTime)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
