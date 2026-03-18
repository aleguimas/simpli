import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trainings = [
  {
    title: "Imersão de IA para Negócios",
    description:
      "Transforme desafios em oportunidades com um treinamento intensivo que prepara sua equipe para usar IA no dia a dia da empresa.",
    duration: "10 horas",
    format: "Presencial + Online",
    tag: "Inteligência Artificial",
  },
  {
    title: "Workshop IA na Prática",
    description:
      "Mãos na massa com as principais ferramentas de IA do mercado. Sua equipe sai aplicando no mesmo dia.",
    duration: "4 horas",
    format: "Presencial + Online",
    tag: "Inteligência Artificial",
  },
  {
    title: "Workshop Ecossistema Google AI",
    description:
      "Domine o ecossistema de ferramentas de IA do Google: Gemini, NotebookLM, Google AI Studio e muito mais.",
    duration: "4 horas",
    format: "Presencial + Online",
    tag: "Inteligência Artificial",
  },
];

const TreinamentosSection = () => {
  return (
    <section
      id="treinamento"
      className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Qualificação de equipes
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Treinamentos In Company
          </h2>
          <p className="mt-3 text-base text-white/70">
            Além de desenvolvimento e consultoria, oferecemos treinamentos
            corporativos especializados para transformar sua equipe e impulsionar
            os resultados da sua empresa.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {trainings.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0F1D15]/80 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#13241C]"
            >
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border border-white/20 bg-white/10 text-white">
                  {item.tag}
                </Badge>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Duração:</span>
                  <span className="font-semibold text-white">
                    {item.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Formato:</span>
                  <span className="font-semibold text-white">
                    {item.format}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="h-12 rounded-xl border border-transparent bg-white px-6 text-base font-semibold text-black transition hover:border-white hover:bg-[#0B1117] hover:text-white"
          >
            <a href="https://wa.link/cpk8xf" target="_blank" rel="noreferrer">
              Solicitar Orçamento dos Treinamentos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreinamentosSection;