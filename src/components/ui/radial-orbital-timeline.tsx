import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type TimelineStatus = "completed" | "in-progress" | "pending";

export type RadialTimelineItem = {
  id: number | string;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
  relatedIds?: Array<number | string>;
  status?: TimelineStatus;
  energy?: number;
};

type RadialOrbitalTimelineProps = {
  timelineData: RadialTimelineItem[];
  className?: string;
};

const RadialOrbitalTimeline = ({
  timelineData,
  className,
}: RadialOrbitalTimelineProps) => {
  const total = Math.max(timelineData.length, 1);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[520px] sm:max-w-[640px]",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-full border border-white/10 bg-[#0C140F]/70 shadow-[0_0_60px_rgba(0,0,0,0.35)]" />
      <div className="absolute inset-[12%] rounded-full border border-emerald-200/25 bg-emerald-200/5" />
      <div className="absolute inset-[26%] rounded-full border border-white/10" />
      <div className="absolute inset-[34%] rounded-full bg-gradient-to-br from-white/12 via-white/4 to-transparent blur-2xl" />

      <div className="absolute inset-0 animate-orbit">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          const angle = (index / total) * Math.PI * 2;
          const orbitPercent = 42;
          const left = 50 + orbitPercent * Math.cos(angle);
          const top = 50 + orbitPercent * Math.sin(angle);

          return (
            <div
              key={item.id}
              className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: `translate(-50%, -50%) rotate(${-angle}rad)`,
              }}
            >
              <Icon size={20} />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit-spin 18s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-orbit {
            animation-duration: 22s;
          }
        }
      `}</style>
    </div>
  );
};

export default RadialOrbitalTimeline;