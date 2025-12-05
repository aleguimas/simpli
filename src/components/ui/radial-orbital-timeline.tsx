import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
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

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="relative flex h-[520px] w-full max-w-4xl items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white animate-pulse shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          <div className="absolute h-20 w-20 rounded-full border border-white/60 animate-ping opacity-70" />
          <div className="absolute h-24 w-24 rounded-full border border-white/40 animate-ping opacity-50 delay-500" />
          <div className="h-8 w-8 rounded-full bg-[#1a1a1a] shadow-inner shadow-black/40 backdrop-blur-md" />
        </div>

        {/* Antes: h-96 w-96 */}
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
                opacity: 1,
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
      </div>

      {activeItem && (
        <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/30">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
              {activeItem.category}
            </span>
            <span className="text-white/70">{activeItem.date}</span>
            {activeItem.relatedIds?.length ? (
              <span className="text-white/60">
                {activeItem.relatedIds.length} conexões
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {activeItem.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {activeItem.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default RadialOrbitalTimeline;