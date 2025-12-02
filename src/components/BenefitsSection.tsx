import { useInView } from "@/hooks/use-in-view";

const primaryBenefits = [
  {
    title: "Impulsione a Receita",
    description:
      "Crie jornadas personalizadas e aumente conversões com agentes que atuam em cada etapa.",
  },
  {
    title: "Melhore a Qualidade",
    description:
      "Padronize processos e reduza erros com validações automáticas e supervisão humana.",
  },
  {
    title: "Maximize a Eficiência",
    description:
      "Automatize tarefas repetitivas e libere tempo para o trabalho estratégico.",
  },
];

const detailedBenefits = [
  "Automação de Nível Empresarial",
  "Flexibilidade No-Code",
  "Implante no Primeiro Dia",
  "Colaboração Humano + IA",
  "Soluções Específicas por Indústria",
  "Integrações Perfeitas",
  "Monitoramento de Performance em Tempo Real",
];

const BenefitsSection = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id="beneficios"
      ref={ref}
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Benefícios
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Automação Inteligente para empresas que pensam à frente
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Reduza esforços em toda a sua empresa com fluxos criados para cada
            time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {primaryBenefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-white/10" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {detailedBenefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/5 bg-[#0C1218] p-5 transition hover:border-white/15"
            >
              <h4 className="text-lg font-semibold text-white">{item}</h4>
              <p className="mt-2 text-sm text-white/65">
                Tenha controle, visibilidade e rapidez com agentes configuráveis
                e métricas em tempo real.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;