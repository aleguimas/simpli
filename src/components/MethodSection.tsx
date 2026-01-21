import { useMemo } from "react";

type Pillar = {
  letter: string;
  titleLine: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    letter: "S",
    titleLine: "Segurança: operação monitorada 24/7.",
    description:
      'Seu negócio nunca fica na mão. Em um mundo onde a IA pode "alucinar" ou servidores podem oscilar, a Simplí garante a estabilidade.',
  },
  {
    letter: "I",
    titleLine: "Inovação: antecipamos problemas e oportunidades.",
    description:
      'Não somos apenas "implementadores", somos parceiros estratégicos. Olhamos para sua empresa buscando onde a IA pode resolver o próximo grande problema.',
  },
  {
    letter: "M",
    titleLine: "Mapeamento: diagnóstico antes de investir.",
    description:
      "Sua empresa não investe errado. Filtramos o que é de fato um gargalo de alavancagem para solucionarmos com IA.",
  },
  {
    letter: "P",
    titleLine: "Personalização: IA criada pro seu negócio.",
    description:
      "Seu negócio não usa a mesma ferramenta que o concorrente. Construímos uma arquitetura que reflete a cultura e o modo de operar específico da empresa.",
  },
  {
    letter: "L",
    titleLine: "Lapidação: melhoria contínua dos modelos.",
    description:
      "A IA não fica obsoleta. O que entregamos hoje será ainda melhor amanhã através de ajustes de prompts e novos dados.",
  },
  {
    letter: "Í",
    titleLine: "Impacto: resultado metrificado em dados reais.",
    description:
      "O que não é medido não é gerido. Entregamos métricas que provam que o investimento tem impacto direto na performance do negócio.",
  },
];

const MethodSection = () => {
  const sectionBg = useMemo(
    () =>
      "linear-gradient(135deg, rgba(16,31,23,0.96), rgba(12,20,15,0.92))",
    [],
  );

  return (
    <section
      id="method"
      className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24"
      style={{ backgroundImage: sectionBg }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
            Method
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            IA sem método vira custo.
          </h2>
          <p className="text-base leading-relaxed text-white/75 md:whitespace-nowrap">
            O <span className="font-semibold">Simplí AI Method™</span> é a nossa metodologia para transformar processos em IA aplicada, trazendo resultado real.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.letter}
              className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 text-lg font-bold text-white shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                {pillar.letter}
              </div>
              <div className="space-y-1">
                <div className="text-base font-semibold text-white">
                  {pillar.titleLine}
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;