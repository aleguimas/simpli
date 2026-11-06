import { ArrowUpRight, MessageCircle, Kanban, Package, Bot, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

const solucoes: {
  href: string;
  title: string;
  badge: string;
  description: string;
  Icon: LucideIcon;
  highlights: string[];
  // fora do SPA (proxy no vercel.json): precisa de <a>, não <Link>
  external?: boolean;
}[] = [
  {
    href: "/solucoes/simpli-crm",
    title: "Simplí CRM",
    badge: "Gestão de Vendas",
    description:
      "CRM integrado ao Simplí Agent que transforma atendimentos em oportunidades de venda. Funil Kanban, follow-up automático e gestão de leads alimentada pela IA.",
    Icon: Kanban,
    highlights: ["Funil de vendas Kanban", "Follow-up automático", "Leads qualificados pela IA"],
  },
  {
    href: "/agenticoffice",
    title: "Agentic Office",
    badge: "Operação com IA",
    description:
      "Plataforma de agentes de IA que assume as tarefas repetitivas da sua operação. Começa por um diagnóstico de processos e entrega os agentes já configurados para a sua empresa.",
    Icon: Bot,
    highlights: ["Diagnóstico gratuito de processos", "Agentes já configurados", "Sua empresa operada por IA"],
    external: true,
  },
  {
    href: "/solucoes/simpli-estoque",
    title: "Simplí Estoque",
    badge: "Gestão de Estoque",
    description:
      "Plataforma de gestão de estoque com IA preditiva. Dashboards em tempo real, previsão de demanda e integração com ERP para decisões mais assertivas.",
    Icon: Package,
    highlights: ["Dashboards em tempo real", "IA preditiva de demanda", "Integração com ERP"],
  },
  {
    href: "/solucoes/simpli-agent",
    title: "Simplí Agent",
    badge: "Atendimento & Vendas",
    description:
      "Agente de IA que atende seus clientes 24h no WhatsApp, Instagram e Chat do Site. Resposta em 15s, com inteligência RAG treinada nos dados do seu negócio.",
    Icon: MessageCircle,
    highlights: ["Resposta em 15 segundos", "Disponível 24h/7 dias", "Omnichannel integrado"],
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
          <h2 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-2xl font-semibold leading-tight text-transparent sm:text-3xl md:text-4xl">
            Produtos desenvolvidos para escalar o seu negócio
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Ferramentas de IA integradas que automatizam atendimento, organizam
            vendas e otimizam operações.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solucoes.map(({ href, title, badge, description, Icon, highlights, external }) => {
            const cardProps = {
              style: { background: GLASS_BG },
              className:
                "card-gradient-border group relative flex h-full flex-col rounded-3xl p-6 backdrop-blur-md transition active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-black/40",
            };
            const content = (
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] p-3 text-white">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
                    {badge}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-xl font-semibold leading-tight text-transparent">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {description}
                  </p>
                </div>

                <ul className="mt-2 flex flex-col gap-1.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/55">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#86efac]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3">
                  Saiba mais
                  <ArrowUpRight size={18} />
                </span>
              </div>
            );
            return external ? (
              <a key={href} href={href} {...cardProps}>
                {content}
              </a>
            ) : (
              <Link key={href} to={href} {...cardProps}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucoesSection;
