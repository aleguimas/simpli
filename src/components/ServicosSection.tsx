import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Laptop,
  Lightbulb,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/components/GoogleAnalytics";
import { trackGTMServiceClick } from "@/components/GoogleTagManager";

const services = [
  {
    slug: "desenvolvimento-web",
    title: "Desenvolvimento Web",
    description:
      "Criamos sites e landing pages modernos e responsivos utilizando as melhores tecnologias, otimizados para SEO e performance.",
    Icon: Laptop,
  },
  {
    slug: "agentes-de-ia",
    title: "Agentes de IA",
    description:
      "Desenvolvemos agentes de Inteligência Artificial personalizados para automatizar processos e aumentar a eficiência do seu negócio.",
    Icon: Bot,
  },
  {
    slug: "trafego-pago",
    title: "Tráfego Pago",
    description:
      "Gerenciamos campanhas em Google Ads, Facebook Ads e LinkedIn Ads, maximizando ROI e atraindo leads qualificados.",
    Icon: Megaphone,
  },
  {
    slug: "consultoria-digital",
    title: "Consultoria Digital",
    description:
      "Assessoramos empresas na transformação digital, desde a estratégia até a implementação de soluções.",
    Icon: Lightbulb,
  },
];

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

// Vertical scroll (in vh) allotted to each card. The section is pinned for the
// whole distance, so scrolling cannot skip the section without passing every card.
const PIN_VH = 55;

type CardStyle = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  blur: number;
  opacity: number;
  z: number;
  interactive: boolean;
};

const styleForOffset = (offset: number, isDesktop: boolean): CardStyle => {
  const abs = Math.abs(offset);
  const z = 30 - abs;

  if (isDesktop) {
    // Wider fan: neighbouring cards peek out clearly on both sides.
    return {
      x: offset * 175,
      y: abs * 16,
      rotate: offset * 7,
      scale: Math.max(0.62, 1 - abs * 0.1),
      blur: abs >= 3 ? 3 : abs === 2 ? 1.5 : 0,
      opacity: abs > 3 ? 0 : 1 - abs * 0.26,
      z,
      interactive: abs <= 2,
    };
  }

  // Mobile: tighter fan.
  return {
    x: offset * 46,
    y: abs * 22,
    rotate: offset * 8,
    scale: Math.max(0.72, 1 - abs * 0.06),
    blur: abs >= 2 ? 3 : abs === 1 ? 1 : 0,
    opacity: abs > 2 ? 0 : 1 - abs * 0.16,
    z,
    interactive: abs <= 2,
  };
};

const ServicosSection = () => {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const trackRef = useRef<HTMLElement | null>(null);
  const activeRef = useRef(0);
  const wheelLock = useRef(false);
  const count = services.length;

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Track desktop vs mobile so the fan can open wider on larger screens.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Map the page scroll position within the pinned track to the active card.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(
        1,
        Math.max(0, -track.getBoundingClientRect().top / scrollable),
      );
      const idx = Math.round(progress * (count - 1));
      setActive((prev) => (prev === idx ? prev : idx));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count]);

  // Scroll the page so the pinned track lands on a given card.
  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(count - 1, index));
    const scrollable = track.offsetHeight - window.innerHeight;
    const top = track.offsetTop + (clamped / (count - 1)) * scrollable;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // One wheel gesture advances exactly one card. The pinned track still forces
  // the user through every card before the page can scroll past the section.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      const rect = track.getBoundingClientRect();
      const pinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (!pinned) return; // section not filling the viewport -> normal scroll

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = activeRef.current + dir;
      if (next < 0 || next >= count) return; // boundary -> let the page leave

      e.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = true;
      activeRef.current = next;
      scrollToIndex(next);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      scrollToIndex(active + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      scrollToIndex(active - 1);
    }
  };

  return (
    <section
      id="servicos"
      ref={trackRef}
      className="relative bg-[#0C140F]"
      style={{ height: `${count * PIN_VH}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-4 px-4 py-4 sm:px-6 md:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Nossos Serviços
            </p>
            <h2 className="mt-2 max-w-3xl bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-2xl font-semibold leading-tight text-transparent sm:text-3xl md:text-4xl">
              Oferecemos soluções completas para transformação digital
            </h2>
          </div>

          {/* Fan viewport */}
          <div
            role="group"
            aria-roledescription="carrossel"
            aria-label="Nossos serviços"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="relative h-[440px] w-full select-none outline-none sm:h-[520px]"
          >
            {services.map(({ slug, title, description, Icon }, index) => {
              const offset = index - active;
              const s = styleForOffset(offset, isDesktop);
              const isActive = offset === 0;

              return (
                <Link
                  key={slug}
                  to={`/servicos/${slug}`}
                  aria-hidden={!s.interactive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      scrollToIndex(index);
                      return;
                    }
                    trackEvent("click", "service_card", title);
                    trackGTMServiceClick(title);
                  }}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${s.x}px) translateY(${s.y}px) rotate(${s.rotate}deg) scale(${s.scale})`,
                    transformOrigin: "bottom center",
                    filter: s.blur ? `blur(${s.blur}px)` : undefined,
                    opacity: s.opacity,
                    zIndex: s.z,
                    pointerEvents: s.interactive ? "auto" : "none",
                    background: GLASS_BG,
                  }}
                  className={`card-gradient-border absolute left-1/2 top-1/2 flex h-[400px] w-[86vw] max-w-[360px] flex-col justify-between rounded-3xl p-6 backdrop-blur-md transition-all duration-500 ease-out will-change-transform sm:h-[480px] sm:max-w-[400px] sm:p-8 ${
                    isActive ? "shadow-2xl shadow-black/50" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                        Serviço
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] text-white">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="mt-6 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-2xl font-semibold leading-tight text-transparent sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                      {description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Saiba mais
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Serviço anterior"
              onClick={() => scrollToIndex(active - 1)}
              disabled={active === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-white/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2.5">
              {services.map(({ slug }, index) => (
                <button
                  key={slug}
                  type="button"
                  aria-label={`Ir para o serviço ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-7 bg-white"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Próximo serviço"
              onClick={() => scrollToIndex(active + 1)}
              disabled={active === count - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-white/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
