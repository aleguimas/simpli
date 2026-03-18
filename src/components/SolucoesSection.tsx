import { MessageCircle, Kanban, Package } from "lucide-react";
import { Link } from "react-router-dom";

const solucoes = [
  {
    slug: "simpli-agent",
    title: "Simplí Agent",
    badge: "Atendimento & Vendas",
    description:
      "Agente de IA que atende seus clientes 24h no WhatsApp, Instagram e Chat do Site. Resposta em 15s, com inteligência RAG treinada nos dados do seu negócio.",
    Icon: MessageCircle,
    highlights: ["Resposta em 15 segundos", "Disponível 24h/7 dias", "Omnichannel integrado"],
  },
  {
    slug: "simpli-crm",
    title: "Simplí CRM",
    badge: "Gestão de Vendas",
    description:
      "CRM integrado ao Simplí Agent que transforma atendimentos em oportunidades de venda. Funil Kanban, follow-up automático e gestão de leads alimentada pela IA.",
    Icon: Kanban,
    highlights: ["Funil de vendas Kanban", "Follow-up automático", "Leads qualificados pela IA"],
  },
  {
    slug: "simpli-estoque",
    title: "Simplí Estoque",
    badge: "Gestão de Estoque",
    description:
      "Plataforma de gestão de estoque com IA preditiva. Dashboards em tempo real, previsão de demanda e integração com ERP para decisões mais assertivas.",
    Icon: Package,
    highlights: ["Dashboards em tempo real", "IA preditiva de demanda", "Integração com ERP"],
  },
];

const SolucoesSection = () => {
  return (
    <section
      id="solucoes"
      className="bg-[#0f1d15] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Nossas Soluções
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Produtos desenvolvidos para{" "}
            <span className="text-[#86efac]">escalar o seu negócio</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Ferramentas de IA integradas que automatizam atendimento, organizam
            vendas e otimizam operações.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {solucoes.map(({ slug, title, badge, description, Icon, highlights }) => (
            <Link
              key={slug}
              to={`/solucoes/${slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0C140F]/80 p-5 transition active:scale-[0.98] sm:p-6 sm:hover:-translate-y-1 sm:hover:border-[#86efac]/30 sm:hover:bg-[#0f241c] sm:hover:shadow-xl sm:hover:shadow-black/30"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(134,239,172,0.06),_transparent_50%)]" />
              </div>

              <div className="relative flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between">
                  <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#86efac]/10 p-3 text-[#86efac]">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
                    {badge}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </div>

                <ul className="mt-2 flex flex-col gap-1.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#86efac]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:translate-x-1 group-hover:text-[#86efac]">
                  Saiba mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucoesSection;
