import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CrmScreen } from "./CrmScreen";
import { crmCaptures } from "./crmCaptures";

const steps = [
  {
    title: "Novo lead",
    text: "O primeiro contato ganha um lugar no funil.",
    src: "/crm/kanban-01.jpg",
  },
  {
    title: "Primeiro contato",
    text: "A equipe acompanha a conversa e o próximo passo.",
    src: "/crm/kanban-02.jpg",
  },
  {
    title: "Proposta enviada",
    text: "A oportunidade avança sem perder o contexto.",
    src: "/crm/kanban-03.jpg",
  },
];

export default function CrmKanbanTour() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const running = playing && visible && !reduced;
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    steps.forEach((item) => {
      const image = new Image();
      image.src = item.src;
    });
  }, [visible]);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(
      () => setStep((current) => (current + 1) % steps.length),
      3200,
    );
    return () => window.clearInterval(timer);
  }, [running]);
  return (
    <div ref={ref} className="mt-9" data-running={running}>
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div
          role="group"
          aria-label="Etapas da demonstração do funil"
          className="flex flex-wrap gap-2"
        >
          {steps.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={step === i}
              onClick={() => {
                setPlaying(false);
                setStep(i);
              }}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-xs transition-colors ${step === i ? "border-[#86efac]/50 bg-[#86efac]/10 text-[#a7f3c2]" : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"}`}
            >
              <span className="font-mono text-[10px] opacity-60">0{i + 1}</span>
              {item.title}
            </button>
          ))}
        </div>
        <button
          type="button"
          disabled={reduced}
          aria-pressed={playing}
          aria-label={
            playing
              ? "Pausar demonstração do Kanban"
              : "Reproduzir demonstração do Kanban"
          }
          onClick={() => setPlaying((value) => !value)}
          className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 text-xs text-white/75 transition-colors hover:bg-white/5 disabled:opacity-50"
        >
          {playing ? (
            <Pause size={14} aria-hidden="true" />
          ) : (
            <Play size={14} aria-hidden="true" />
          )}
          {reduced
            ? "Navegue pelas etapas"
            : playing
              ? "Pausar"
              : "Ver em movimento"}
        </button>
      </div>
      <CrmScreen
        capture={{ ...crmCaptures.kanban, src: steps[step].src }}
        onExpand={() => setPlaying(false)}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left bg-[#22c55e]"
          style={{
            width: `${((step + 1) / steps.length) * 100}%`,
            transition: reduced ? "none" : "width .5s ease",
          }}
        />
      </CrmScreen>
      <p
        className="mt-4 text-sm text-white/65"
        aria-live={playing ? "off" : "polite"}
      >
        <span className="mr-2 font-mono text-xs text-[#86efac]">
          0{step + 1} /
        </span>
        {steps[step].text}
      </p>
      <p className="mt-2 text-[11px] leading-relaxed text-white/50">
        Sequência de capturas do Kanban original com o mesmo lead fictício em
        três etapas. A demonstração não altera dados do CRM.
      </p>
    </div>
  );
}
