import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type CaseItem = {
  company: string;
  title: string;
  subtitle: string;
  category: string;
};

const categories = [
  "Atendimento",
  "Agendamento",
  "Qualificação de leads",
  "Leitura de estoque",
  "Suporte e dúvidas",
  "Disparo de emails / WhatsApp",
  "Automação de cobranças",
  "Projeto personalizados",
];

const caseItems: CaseItem[] = [
  {
    company: "Jusbrasil",
    title: "Varejo (lojas físicas e e-commerce)",
    subtitle: "Atendimento 24/7 para dúvidas sobre produtos, trocas e devoluções",
    category: "Atendimento",
  },
  {
    company: "Jusbrasil",
    title: "Clínicas e consultórios médicos",
    subtitle:
      "Informações sobre especialidades, convênios aceitos e preparos para exames",
    category: "Atendimento",
  },
  {
    company: "Jusbrasil",
    title: "Escritórios de advocacia",
    subtitle: "Triagem inicial de casos e informações sobre áreas de atuação",
    category: "Atendimento",
  },
  {
    company: "Jusbrasil",
    title: "Imobiliárias",
    subtitle: "Informações sobre imóveis disponíveis, características e valores",
    category: "Atendimento",
  },
  {
    company: "Jusbrasil",
    title: "Restaurantes e delivery",
    subtitle: "Cardápio, horários de funcionamento e acompanhamento de pedidos",
    category: "Atendimento",
  },
  {
    company: "Jusbrasil",
    title: "Hotéis e pousadas",
    subtitle: "Detalhes sobre acomodações, serviços oferecidos e reservas",
    category: "Atendimento",
  },
];

const CaseStudiesSection = () => {
  const [selected, setSelected] = useState(categories[0]);

  const filteredCases = useMemo(() => {
    if (selected === categories[0]) return caseItems;
    return caseItems.filter((item) => item.category === selected);
  }, [selected]);

  return (
    <section
      id="cases"
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/50">
              Aplicabilidade dos Agentes de IA
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Conheça os nichos de impacto dos Agentes de IA
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="hidden sm:block">Categorias</span>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0B1117] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#0B1117] to-transparent" />
          <div className="flex overflow-x-auto scroll-smooth px-4 py-3 text-sm text-white/80">
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`whitespace-nowrap rounded-xl border px-4 py-2 transition ${
                    selected === cat
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="group/card-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredCases.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141A21] to-[#0B1117] p-6 transition duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 group-hover/card-grid:opacity-60 hover:opacity-100"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.16),_transparent_58%)]" />
              </div>
              <div className="flex items-center justify-end">
                <span className="text-xs text-white/60">{item.category}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.subtitle}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:translate-x-1">
                Solicitar orçamento
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;