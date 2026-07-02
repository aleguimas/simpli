import { useState } from "react";
import { youtubeId, type CaseItem } from "@/data/cases";

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

const YouTubePlay = () => (
  <svg
    viewBox="0 0 68 48"
    className="w-[54px] drop-shadow-lg transition group-hover:scale-110"
    aria-hidden
  >
    <path
      fill="#FF0000"
      d="M66.52 7.74c-0.78-2.93-2.49-5.42-5.42-6.19C55.79 0.13 34 0 34 0S12.21 0.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74 0.06 13.05 0 24 0 24s0.06 10.95 1.48 16.26c0.78 2.93 2.49 5.42 5.42 6.19C12.21 47.87 34 48 34 48s21.79-0.13 27.1-1.55c2.93-0.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-0.06-10.95-1.48-16.26z"
    />
    <path fill="#fff" d="M45 24 27 14v20z" />
  </svg>
);

const CaseCard = ({ item }: { item: CaseItem }) => {
  const [playing, setPlaying] = useState(false);
  const vid = youtubeId(item.youtubeUrl);
  const [thumbSrc, setThumbSrc] = useState(
    vid ? `https://img.youtube.com/vi/${vid}/maxresdefault.jpg` : "",
  );

  return (
    <div
      style={{ background: GLASS_BG }}
      className="card-gradient-border group flex h-full flex-col overflow-hidden rounded-2xl backdrop-blur-md transition sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-black/40"
    >
      <div className="relative aspect-[9/16] w-full bg-black">
        {playing && vid ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : vid ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Assistir: ${item.title}`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={thumbSrc}
              alt={item.title}
              loading="lazy"
              onError={(e) => {
                if (vid && e.currentTarget.src.includes("maxresdefault")) {
                  setThumbSrc(`https://img.youtube.com/vi/${vid}/hqdefault.jpg`);
                }
              }}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <YouTubePlay />
            </span>
          </button>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/40">
            Prévia em breve
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        {item.tag && (
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/50">
            {item.tag}
          </span>
        )}
        <h3 className="mt-1.5 text-sm font-semibold leading-snug text-white">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/65">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CaseCard;
