import { useState } from "react";
import { Play } from "lucide-react";
import { youtubeId, type CaseItem } from "@/data/cases";

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

const CaseCard = ({ item }: { item: CaseItem }) => {
  const [playing, setPlaying] = useState(false);
  const vid = youtubeId(item.youtubeUrl);
  const thumb = vid ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg` : null;

  return (
    <div
      style={{ background: GLASS_BG }}
      className="card-gradient-border group flex h-full flex-col overflow-hidden rounded-3xl backdrop-blur-md transition sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-black/40"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black/40">
        {playing && vid ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : thumb ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Assistir: ${item.title}`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/15">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition group-hover:scale-110">
                <Play size={24} className="ml-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/40">
            Prévia em breve
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {item.tag && (
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            {item.tag}
          </span>
        )}
        <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CaseCard;
