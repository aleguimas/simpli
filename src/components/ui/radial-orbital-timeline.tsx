import React from "react";
import type { LucideIcon } from "lucide-react";

type TimelineItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  category?: string;
  icon: LucideIcon;
  relatedIds?: number[];
  status?: "completed" | "in-progress" | "pending";
  energy?: number;
};

type Props = {
  timelineData: TimelineItem[];
};

const statusStyles: Record<
  NonNullable<TimelineItem["status"]>,
  { border: string; bg: string; text: string }
> = {
  completed: {
    border: "border-emerald-300/50",
    bg: "bg-emerald-300/15",
    text: "text-emerald-100",
  },
  "in-progress": {
    border: "border-amber-300/50",
    bg: "bg-amber-300/15",
    text: "text-amber-100",
  },
  pending: {
    border: "border-white/20",
    bg: "bg-white/5",
    text: "text-white/70",
  },
};

const RadialOrbitalTimeline = ({ timelineData }: Props) => {
  const items = timelineData.length > 0 ? timelineData : [];
  const count = Math.max(1, items.length);
  const angleStep = 360 / count;
  const orbitStyle = {
    ["--orbit-radius" as "--orbit-radius"]: "46%",
  } as React.CSSProperties;

  return (
    <div className="flex w-full flex-col items-center gap-8 text-white">
      <div className="relative aspect-square w-full max-w-[320px] overflow-visible px-2 sm:max-w-[480px] md:max-w-[520px]">
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />
        <div className="absolute inset-6 rounded-full border border-white/10" />
        <div className="absolute inset-[14%] rounded-full border border-white/15" />
        <div className="absolute inset-[26%] rounded-full border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-[0_0_60px_rgba(134,239,172,0.28)] backdrop-blur-sm" />
        <div className="absolute inset-[18%] animate-[spin_28s_linear_infinite]">
          {items.map((item, index) => {
            const angle = index * angleStep;
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(-${angle}deg)`,
                  ...orbitStyle,
                }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                  <Icon size={20} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-[#123026] via-[#0c140f] to-[#123026] shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Processo
              </p>
              <p className="text-sm font-semibold text-white">Agentes de IA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const status = item.status ?? "pending";
          const style = statusStyles[status];
          return (
            <div
              key={item.id}
              className={`flex flex-col gap-2 rounded-xl border ${style.border} ${style.bg} p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/60">
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                    {item.date}
                  </span>
                  {item.category && (
                    <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/70">
                      {item.category}
                    </span>
                  )}
                </div>
                <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${style.text}`}>
                  {status === "completed"
                    ? "Concluído"
                    : status === "in-progress"
                      ? "Em andamento"
                      : "Pendente"}
                </span>
              </div>
              <p className="text-base font-semibold text-white">{item.title}</p>
              <p className="text-sm text-white/75">{item.content}</p>
              {typeof item.energy === "number" && (
                <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#86efac] via-white to-[#86efac]"
                    style={{ width: `${Math.min(100, Math.max(0, item.energy))}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadialOrbitalTimeline;