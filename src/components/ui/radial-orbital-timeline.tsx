import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Link2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineStatus = "completed" | "in-progress" | "pending";

type TimelineItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds?: number[];
  status?: TimelineStatus;
  energy?: number;
};

type RadialOrbitalTimelineProps = {
  timelineData: TimelineItem[];
};

const statusRings: Record<TimelineStatus, string> = {
  completed: "border-emerald-300/60 bg-emerald-300/10",
  "in-progress": "border-amber-300/60 bg-amber-300/10",
  pending: "border-white/30 bg-white/5",
};

const clampProgress = (value?: number) => {
  if (typeof value !== "number") return 70;
  if (value < 0) return 0;
  if (value > 100) return 100;
  return Math.round(value);
};

const RadialOrbitalTimeline = ({ timelineData }: RadialOrbitalTimelineProps) => {
  const [activeId, setActiveId] = useState<number | null>(
    timelineData[0]?.id ?? null,
  );

  const items = useMemo(() => {
    if (timelineData.length === 0) return [];
    const angleStep = (2 * Math.PI) / timelineData.length;
    const baseRadius = 155;
    const radiusScale = 0.6;

    return timelineData.map((item, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const radius = baseRadius + (item.energy ?? 0) * radiusScale;
      return {
        ...item,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  }, [timelineData]);

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];
  const connections =
    activeItem?.relatedIds
      ?.map((id) => items.find((item) => item.id === id)?.title)
      .filter(Boolean) ?? [];
  const progressValue = clampProgress(activeItem?.energy);

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative flex h-[520px] w-full max-w-4xl items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white animate-pulse shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          <div className="absolute h-20 w-20 rounded-full border border-white/60 animate-ping opacity-70" />
          <div className="absolute h-24 w-24 rounded-full border border-white/40 animate-ping opacity-50 delay-500" />
          <div className="h-8 w-8 rounded-full bg-[#1a1a1a] shadow-inner shadow-black/40 backdrop-blur-md" />
        </div>

        <div className="absolute h-80 w-80 md:h-96 md:w-96 rounded-full border border-white/10" />

        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          const statusClass = statusRings[item.status ?? "pending"];

          return (
            <div
              key={item.id}
              className="absolute cursor-pointer transition-all duration-700"
              style={{
                transform: `translate(${item.x}px, ${item.y}px)`,
                zIndex: isActive ? 150 : 60 + index,
                opacity: isActive ? 1 : 0.55,
              }}
              onMouseEnter={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black text-white transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
                  statusClass,
                  isActive && "scale-110 border-white",
                )}
              >
                <Icon size={18} />
              </div>
              <div className="absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider text-white/70">
                {item.title}
              </div>
            </div>
          );
        })}

        {activeItem && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto relative flex flex-col items-center gap-2 animate-[pull-up_0.65s_ease]">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0c130f] shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
                  <activeItem.icon size={20} />
                </div>
                <div className="text-sm font-semibold text-white">
                  {activeItem.title}
                </div>
                <div className="h-5 w-px bg-white/25" />
              </div>

              <div className="w-[min(92vw,380px)] rounded-2xl border border-white/10 bg-[#0c130f]/95 p-5 text-white shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                <div className="flex items-center justify-between text-[11px] font-semibold text-white/75">
                  <span className="inline-flex items-center rounded-full bg-white/8 px-3 py-1 uppercase tracking-[0.18em] text-white">
                    {activeItem.category}
                  </span>
                  <span className="text-white/60">{activeItem.date}</span>
                </div>

                <div className="mt-3 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {activeItem.content}
                  </p>
                </div>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                    <span className="inline-flex items-center gap-2">
                      <Zap size={14} className="text-[#5ad1ff]" />
                      Progresso
                    </span>
                    <span>{progressValue}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#4ADE80] via-[#5ad1ff] to-white"
                      style={{ width: `${progressValue}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Conexões
                  </p>
                  {connections.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {connections.map((connection) => (
                        <button
                          key={connection}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 transition hover:border-white/30"
                        >
                          <Link2 size={14} />
                          {connection}
                          <ArrowRight size={14} />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-xs text-white/60">
                      Nenhuma conexão listada.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pull-up {
          0% { transform: translateY(40px) scale(0.96); opacity: 0; }
          60% { transform: translateY(-6px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default RadialOrbitalTimeline;