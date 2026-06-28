import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Pulse = {
  axis: "h" | "v";
  line: number; // grid line index
  pos: number; // head position in px along the axis
  speed: number; // px per frame
  length: number; // trail length px
  dir: 1 | -1;
};

const GRID = 44; // must match the CSS grid background-size below
const GRID_MASK =
  "radial-gradient(ellipse 78% 75% at 50% 32%, black 12%, transparent 82%)";

/**
 * Layered animated background for the hero section.
 *
 *  1. Tech grid (static CSS lines)
 *  2. Energy pulses traveling along the grid lines (canvas + rAF)
 *  3. Two diagonal halos with pulsing opacity (CSS keyframes)
 *  4. Cursor glow following the mouse on desktop
 *
 * Respects prefers-reduced-motion and pauses the canvas while off-screen
 * or on a hidden tab.
 */
const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isTouch = window.matchMedia("(hover: none)").matches;
    const section = canvas.closest("section");

    let width = 0;
    let height = 0;
    let pulses: Pulse[] = [];
    let rafId = 0;
    let running = false;
    let inView = true;

    const spawnPulse = (initial = false): Pulse => {
      const axis: "h" | "v" = Math.random() < 0.5 ? "h" : "v";
      const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1;
      const span = axis === "h" ? width : height;
      const maxLine = Math.max(1, Math.floor((axis === "h" ? height : width) / GRID));
      const length = 60 + Math.random() * 120;
      // initial pulses are scattered across the screen; respawns enter from the edge
      const pos = initial
        ? Math.random() * span
        : dir === 1
          ? -length
          : span + length;
      return {
        axis,
        dir,
        line: 1 + Math.floor(Math.random() * (maxLine - 1)),
        pos,
        speed: 1.4 + Math.random() * 2.2,
        length,
      };
    };

    const createPulses = () => {
      const count = Math.max(
        6,
        Math.min(prefersReducedMotion ? 0 : 16, Math.round((width + height) / 150)),
      );
      pulses = Array.from({ length: count }, () => spawnPulse(true));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPulses();
    };

    const drawPulse = (p: Pulse) => {
      const tail = p.pos - p.dir * p.length;
      const x1 = p.axis === "h" ? tail : p.line * GRID + 0.5;
      const y1 = p.axis === "h" ? p.line * GRID + 0.5 : tail;
      const x2 = p.axis === "h" ? p.pos : p.line * GRID + 0.5;
      const y2 = p.axis === "h" ? p.line * GRID + 0.5 : p.pos;

      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, "rgba(134, 239, 172, 0)");
      grad.addColorStop(1, "rgba(134, 239, 172, 0.68)");

      ctx.save();
      ctx.shadowColor = "rgba(74, 222, 128, 0.72)";
      ctx.shadowBlur = 8;
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // bright head
      ctx.beginPath();
      ctx.arc(x2, y2, 1.7, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(209, 255, 224, 0.76)";
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.pos += p.speed * p.dir;
        const span = p.axis === "h" ? width : height;
        // recycle once the whole streak has left the screen
        if (
          (p.dir === 1 && p.pos - p.length > span) ||
          (p.dir === -1 && p.pos + p.length < 0)
        ) {
          pulses[i] = spawnPulse(false);
          continue;
        }
        drawPulse(p);
      }
    };

    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    resize();

    // Reduced motion: no pulses, keep the static grid + frozen halos only.
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      const ro = new ResizeObserver(() => resize());
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    const updateRunning = () => {
      if (inView && !document.hidden) start();
      else stop();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const glowEl = glowRef.current;
      if (glowEl) {
        glowEl.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        glowEl.style.setProperty("--my", `${e.clientY - rect.top}px`);
        glowEl.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
        updateRunning();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    document.addEventListener("visibilitychange", updateRunning);

    if (!isTouch && section) {
      section.addEventListener("mousemove", onMouseMove);
      section.addEventListener("mouseleave", onMouseLeave);
    }

    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", updateRunning);
      if (!isTouch && section) {
        section.removeEventListener("mousemove", onMouseMove);
        section.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Layer 1: static tech grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(134,239,172,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: `${GRID}px ${GRID}px`,
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />

      {/* Layer 2: energy pulses traveling along the grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        style={{ maskImage: GRID_MASK, WebkitMaskImage: GRID_MASK }}
      />

      {/* Layer 3: two diagonal halos with pulsing opacity */}
      <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] animate-halo-pulse-a rounded-full bg-[#16402F] opacity-40 blur-3xl will-change-transform" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] animate-halo-pulse-b rounded-full bg-[#1C3324] opacity-40 blur-3xl will-change-transform" />

      {/* Layer 4: cursor glow (desktop) */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(134,239,172,0.12), transparent 70%)",
        }}
      />
    </div>
  );
};

export default HeroBackground;
