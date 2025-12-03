import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trainings = [
  {
    title: "Imersão de IA para Negócios",
    description:
      "Transforme desafios em oportunidades com um workshop intensivo de 10 horas.",
    duration: "10 horas",
    format: "Presencial + Online",
    tag: "Tecnologia",
  },
  {
    title: "Atendimento ao Cliente",
    description:
      "Excelência no atendimento físico e online. Aumente a satisfação em 85% e reduza reclamações em 70%.",
    duration: "12 horas",
    format: "Presencial",
    tag: "Vendas",
  },
  {
    title: "Técnicas de Vendas",
    description:
      "Vendas que convertem em qualquer ambiente. Aumente as vendas em 150% e melhore a conversão em 80%.",
    duration: "20 horas",
    format: "Presencial/Híbrido",
    tag: "Vendas",
  },
  {
    title: "Visual Merchandising",
    description:
      "Transforme seu ponto de venda. Aumente o ticket médio em 25% e melhore a conversão em 40%.",
    duration: "8 horas",
    format: "Presencial/Online",
    tag: "Vendas",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="treinamento"
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
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
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trainings.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#101722]/80 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#121a26]"
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
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-white/30 bg-white/5 text-white transition hover:border-black hover:bg-black hover:text-white"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="h-12 rounded-xl bg-white px-6 text-base font-semibold text-black hover:bg-white/90">
            Solicitar Orçamento dos Treinamentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;