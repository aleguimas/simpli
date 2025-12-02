import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Souza",
    role: "COO, Jusbrasil",
    quote:
      "Os agentes de IA reduziram drasticamente o tempo de análise de documentos e liberaram nosso time para decisões estratégicas.",
  },
  {
    name: "Bruno Lima",
    role: "Head de Operações, Unimed",
    quote:
      "Conseguimos escalar o atendimento com consistência e segurança, mantendo a personalização para cada paciente.",
  },
  {
    name: "Carla Menezes",
    role: "CTO, Vórtx",
    quote:
      "A orquestração de tarefas críticas ficou mais confiável e visível. O impacto em eficiência é claro.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="changelog"
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Depoimentos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            O que nossos clientes estão dizendo sobre nosso trabalho
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative h-full rounded-2xl border border-white/10 bg-[#1C242D]/60 p-6 shadow-lg shadow-black/30"
            >
              <Quote className="absolute right-4 top-4 text-white/20" size={20} />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-white/60">{item.role}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;