import { useMemo } from "react";

type Pillar = {
  letter: string;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  { letter: "S", title: "Segurança", description: "Operação monitorada 24/7." },
  { letter: "I", title: "Inovação", description: "Antecipamos problemas e oportunidades." },
  { letter: "M", title: "Mapeamento", description: "Diagnóstico antes de investir." },
  { letter: "P", title: "Personalização", description: "IA criada pro seu negócio." },
  { letter: "L", title: "Lapidação", description: "Melhoria contínua dos modelos." },
  { letter: "Í", title: "Impacto", description: "Resultado metrificado em dados reais." },
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
          <p className="text-base leading-relaxed text-white/75">
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
                <div className="text-base font-semibold text-white">{pillar.title}</div>
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