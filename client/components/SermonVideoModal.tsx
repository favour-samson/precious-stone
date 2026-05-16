import { useEffect } from "react";
import { X, Calendar, User, BookOpen, Clock } from "lucide-react";

export interface SermonMeta {
  id: number;
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  series: string;
  duration: string;
  type?: "video" | "audio";
  views?: number;
  thumbnail?: string;
  videoId?: string; // YouTube video ID
  videoUrl?: string; // fallback direct URL
}

interface Props {
  sermon: SermonMeta | null;
  onClose: () => void;
}

export function SermonVideoModal({ sermon, onClose }: Props) {
  // close on Escape key
  useEffect(() => {
    if (!sermon) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [sermon, onClose]);

  // lock body scroll while open
  useEffect(() => {
    if (sermon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sermon]);

  if (!sermon) return null;

  const embedSrc = sermon.videoId
    ? `https://www.youtube.com/embed/${sermon.videoId}?autoplay=1&rel=0`
    : sermon.videoUrl ?? "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-gray-950 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* video */}
        <div className="aspect-video bg-black">
          {embedSrc ? (
            <iframe
              src={embedSrc}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; encrypted-media; picture-in-picture"
              title={sermon.title}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white/50">
              <BookOpen size={40} />
              <p className="text-sm">No video available for this sermon</p>
            </div>
          )}
        </div>

        {/* meta */}
        <div className="p-5">
          <h2 className="text-white font-serif font-bold text-xl mb-1">{sermon.title}</h2>
          <p className="text-primary text-sm font-medium mb-3">{sermon.series}</p>

          <div className="flex flex-wrap gap-4 text-white/60 text-xs">
            <span className="flex items-center gap-1.5">
              <User size={12} />
              {sermon.speaker}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(sermon.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={12} />
              {sermon.scripture}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {sermon.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
