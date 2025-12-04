import type React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds?: number[];
  status?: "completed" | "in-progress" | "pending";
  energy?: number;
};

type RadialOrbitalTimelineProps = {
  timelineData: TimelineItem[];
  className?: string;
};

const statusStyles: Record<
  NonNullable<TimelineItem["status"]>,
  { badge: string; ring: string }
> = {
  completed: {
    badge: "bg-[#86efac] text-[#0C140F] border-[#86efac]",
    ring: "shadow-[0_0_0_6px_rgba(134,239,172,0.15)]",
  },
  "in-progress": {
    badge: "bg-white/10 text-white border-white/25",
    ring: "shadow-[0_0_0_6px_rgba(255,255,255,0.12)]",
  },
  pending: {
    badge: "bg-[#111f18] text-white/70 border-white/15",
    ring: "shadow-[0_0_0_6px_rgba(255,255,255,0.06)]",
  },
};

const RadialOrbitalTimeline: React.FC<RadialOrbitalTimelineProps> = ({
  timelineData,
  className,
}) => {
  const orbitRadius = "clamp(140px, 28vw, 220px)";
  // Halo central 20% menor (80% do tamanho anterior padrão)
  const haloSize = "240px";

  return (
    <div
      className={cn(
        "relative flex min-h-[520px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0C140F] via-[#0F1D15] to-[#10271d] px-6 py-10 text-white shadow-2xl shadow-black/40",
        className,
      )}
      style={
        {
          "--orbit-radius": orbitRadius,
          "--halo-size": haloSize,
        } as React.CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(134,239,172,0.06),transparent_55%)]" />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: "var(--halo-size)",
          height: "var(--halo-size)",
          background:
            "radial-gradient(circle, rgba(134,239,172,0.26), rgba(12,20,15,0.08) 55%, transparent 72%)",
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-70"
        style={{
          width: "calc(var(--halo-size) * 0.9)",
          height: "calc(var(--halo-size) * 0.9)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-30"
        style={{
          width: "calc(var(--halo-size) * 1.1)",
          height: "calc(var(--halo-size) * 1.1)",
        }}
      />

      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[#0C140F] shadow-[0_0_0_18px_rgba(134,239,172,0.08),0_25px_80px_rgba(0,0,0,0.45)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-[#0C140F] font-semibold shadow-[0_10px_40px_rgba(134,239,172,0.35)]">
          IA
        </div>
      </div>

      {timelineData.map((item, index) => {
        const angle = (index / timelineData.length) * 360;
        const status = item.status ?? "pending";
        const { badge, ring } = statusStyles[status];
        const energyFill = Math.max(0, Math.min(100, item.energy ?? 70));

        return (
          <div
            key={item.id}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--orbit-radius)) rotate(${-angle}deg)`,
            }}
          >
            <div
              className={cn(
                "relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-[#0F1D15]/90 p-3 text-center shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#0F1D15]",
                ring,
              )}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `conic-gradient(from -90deg, rgba(134,239,172,0.5) ${energyFill}%, rgba(255,255,255,0.08) ${energyFill}% 100%)`,
                  opacity: 0.7,
                  maskImage:
                    "radial-gradient(circle at center, transparent 58%, black 60%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, transparent 58%, black 60%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
                    badge,
                  )}
                >
                  <item.icon size={12} />
                  {item.date}
                </span>
                <div className="text-xs font-semibold leading-tight text-white">
                  {item.title}
                </div>
                <p className="text-[11px] leading-tight text-white/65">
                  {item.category}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-6 left-1/2 z-10 w-full max-w-[420px] -translate-x-1/2 text-center text-xs text-white/60">
        Etapas posicionadas ao redor do núcleo — halo central reduzido em 20% para
        menos dispersão do brilho.
      </div>
    </div>
  );
};

export default RadialOrbitalTimeline;