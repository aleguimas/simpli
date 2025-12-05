import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
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

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const RadialOrbitalTimeline = ({ timelineData }: RadialOrbitalTimelineProps) => {
  const [activeId, setActiveId] = useState<number | null>(
    timelineData[0]?.id ?? null,
  );

  const items = useMemo(() => {
    if (timelineData.length === 0) return [];
    const useCardinal = timelineData.length === 4;
    const angleStep = (2 * Math.PI) / timelineData.length;
    const baseRadius = 170;
    const radiusScale = 0.6;
    const cardinalAngles = [
      -Math.PI / 2, // top
      0, // right
      Math.PI / 2, // bottom
      Math.PI, // left
    ];

    return timelineData.map((item, index) => {
      const angle = useCardinal
        ? cardinalAngles[index]
        : angleStep * index - Math.PI / 2;
      const radius = baseRadius + (item.energy ?? 0) * radiusScale;
      return {
        ...item,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        step: index + 1,
      };
    });
  }, [timelineData]);

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];
  const activeIndex = items.findIndex((item) => item.id === activeItem?.id);

  const advanceStep = () => {
    if (!items.length) return;
    const nextIndex = (activeIndex + 1) % items.length;
    setActiveId(items[nextIndex].id);
  };

  const progressFor = (item: TimelineItem) => {
    if (item.energy !== undefined) return clamp(item.energy, 5, 100);
    if (item.status === "completed") return 100;
    if (item.status === "in-progress") return 75;
    return 40;
  };

  const connectionTitles =
    activeItem?.relatedIds
      ?.map((relId) => items.find((i) => i.id === relId)?.title)
      .filter(Boolean) ?? [];

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        className="relative flex h-[560px] w-full max-w-4xl items-center justify-center bg-transparent"
        style={{ perspective: "1000px" }}
        onClick={advanceStep}
      >
        <div className="absolute h-[430px] w-[430px] rounded-full border border-white/10" />

        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          const statusClass = statusRings[item.status ?? "pending"];

          return (
            <div
              key={item.id}
              className="absolute cursor-pointer transition-all duration-300"
              style={{
                transform: `translate(${item.x}px, ${item.y}px)`,
                zIndex: isActive ? 150 : 60 + index,
                opacity: isActive ? 1 : 0.28,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveId(item.id);
              }}
              onMouseEnter={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white text-[#0C140F] shadow-[0_10px_35px_rgba(0,0,0,0.35)]",
                  statusClass,
                  isActive && "scale-105 border-white/90",
                )}
              >
                <Icon size={18} />
              </div>
              <div
                className={cn(
                  "absolute top-14 w-max -translate-x-1/2 text-xs font-semibold tracking-wider text-white/60",
                  isActive && "text-white",
                )}
                style={{ left: "50%" }}
              >
                {item.title}
              </div>
            </div>
          );
        })}

        {activeItem && (
          <div
            className="pointer-events-auto absolute inset-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md translate-y-6">
              <div className="absolute -top-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70 bg-white text-[#0C140F] shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                  <activeItem.icon size={22} />
                </div>
                <div className="text-sm font-semibold tracking-wide text-white">
                  {activeItem.title}
                </div>
              </div>

              <div className="rounded-2xl border border-white/12 bg-[#0b1711] px-6 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between text-xs font-semibold text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white">
                    {activeItem.category}
                  </span>
                  <span className="text-[11px]">Etapa {activeItem.step}</span>
                </div>

                <div className="mt-3 text-center text-lg font-semibold text-white">
                  {activeItem.title}
                </div>
                <p className="mt-2 text-center text-sm leading-relaxed text-white/70">
                  {activeItem.content}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-[13px] font-semibold text-white/75">
                    <span className="inline-flex items-center gap-2">
                      <Zap size={14} className="text-white/70" />
                      Progresso
                    </span>
                    <span>{progressFor(activeItem)}%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-[#1ab6d6] transition-all"
                      style={{ width: `${progressFor(activeItem)}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Conexões
                  </div>
                  {connectionTitles.length > 0 ? (
                    <div className="mt-3 flex flex-col gap-2">
                      {connectionTitles.map((title) => (
                        <button
                          key={title}
                          className="group inline-flex items-center justify-between rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:bg-white/10"
                          onClick={() => {
                            const target = items.find((i) => i.title === title);
                            if (target) setActiveId(target.id);
                          }}
                        >
                          <span className="inline-flex items-center gap-2">
                            <LinkIcon size={14} className="text-white/60" />
                            {title}
                          </span>
                          <ArrowRight
                            size={16}
                            className="transition group-hover:translate-x-0.5"
                          />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-white/55">
                      Sem conexões.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadialOrbitalTimeline;