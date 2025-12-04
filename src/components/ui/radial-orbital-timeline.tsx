import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ size?: number | string; className?: string }>;
type TimelineStatus = "completed" | "in-progress" | "pending";

type TimelineItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: IconComponent;
  relatedIds?: number[];
  status?: TimelineStatus;
  energy?: number;
};

const statusStyles: Record<
  TimelineStatus,
  { ring: string; badge: string; dot: string }
> = {
  completed: {
    ring: "border-emerald-300/50 bg-emerald-300/10 shadow-[0_0_24px_rgba(52,211,153,0.25)]",
    badge: "bg-emerald-300/20 text-emerald-50 border-emerald-200/50",
    dot: "bg-emerald-300",
  },
  "in-progress": {
    ring: "border-sky-200/40 bg-sky-200/10 shadow-[0_0_24px_rgba(125,211,252,0.2)]",
    badge: "bg-sky-200/20 text-sky-50 border-sky-200/50",
    dot: "bg-sky-200",
  },
  pending: {
    ring: "border-white/15 bg-white/5 shadow-[0_0_18px_rgba(255,255,255,0.08)]",
    badge: "bg-white/10 text-white border-white/15",
    dot: "bg-white/70",
  },
};

const HALO_SCALE = 0.7; // 30% menos espalhado

const RadialOrbitalTimeline = ({ timelineData }: { timelineData: TimelineItem[] }) => {
  const total = timelineData.length;
  const radius = 38;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-3xl text-white">
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.12) ${42 * HALO_SCALE}%, transparent ${70 * HALO_SCALE}%)`,
        }}
      />
      <div className="absolute inset-[18%] rounded-full border border-white/10" />
      <div className="absolute inset-[33%] rounded-full border border-white/10" />
      <div className="absolute inset-0 rounded-full border border-white/5" />
      <div className="absolute inset-[46%] flex items-center justify-center rounded-full border border-white/10 bg-[#0b1711]/70 backdrop-blur-sm">
        <span className="text-xs uppercase tracking-[0.18em] text-white/60">
          Etapas
        </span>
      </div>

      {timelineData.map((item, index) => {
        const angle = (index / total) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const orbit = radius + (item.energy ? Math.min(item.energy / 5, 8) : 0);
        const left = 50 + orbit * Math.cos(rad);
        const top = 50 + orbit * Math.sin(rad);
        const status = item.status ?? "pending";
        const colors = statusStyles[status];

        return (
          <div
            key={item.id}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={cn(
                "relative flex w-44 flex-col gap-2 rounded-2xl border p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10",
                colors.ring,
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10",
                    colors.dot,
                  )}
                >
                  <item.icon size={18} className="text-black/70 mix-blend-screen" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                    {item.date}
                  </p>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/70">{item.content}</p>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "rounded-full border px-2 py-[4px] text-[11px] font-semibold",
                    colors.badge,
                  )}
                >
                  {item.category}
                </span>
                {item.energy !== undefined && (
                  <span className="text-[11px] text-white/60">Energia {item.energy}%</span>
                )}
              </div>
              <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent blur-sm" />
            </div>
          </div>
        );
      })}

      {timelineData.map((_, index) => {
        const angle = (index / total) * 360 - 90;
        return (
          <div
            key={`line-${index}`}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[38%] w-px origin-top bg-gradient-to-b from-white/50 to-transparent"
            style={{
              transform: `rotate(${angle}deg) translateY(-12%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default RadialOrbitalTimeline;