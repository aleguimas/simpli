import {
  EyeOff,
  Target,
  PackageX,
  FileSpreadsheet,
  AreaChart,
  LayoutDashboard,
  ScanSearch,
  TrendingUp,
  FileDown,
  ArrowLeftRight,
  ClipboardList,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";

const problems = [
  {
    icon: EyeOff,
    title: "Falta de Visibilidade",
    description:
      "Você não sabe exatamente o que tem em cada loja em tempo real, dependendo de relatórios atrasados.",
    badge: "Dados Desatualizados",
  },
  {
    icon: Target,
    title: "Decisões Reativas",
    description:
      "Compras são feitas baseadas no \"achismo\" ou urgência, sem previsão de demanda real e assertiva.",
    badge: "Sem Estratégia",
  },
  {
    icon: PackageX,
    title: "Excesso ou Ruptura",
    description:
      "Produtos encalhados gerando custo de armazenagem enquanto best-sellers faltam na prateleira.",
    badge: "Perda de Vendas",
  },
  {
    icon: FileSpreadsheet,
    title: "Análises Manuais",
    description:
      "Horas gastas cruzando planilhas complexas, sujeitas a erros humanos e demora na conclusão.",
    badge: "Baixa Eficiência",
  },
];

const solutionFeatures = [
  {
    icon: AreaChart,
    title: "Análise Histórica",
    description:
      "Identifique padrões de vendas e sazonalidade para antecipar tendências e preparar seu estoque para o momento certo.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & KPIs",
    description:
      "Visão 360° com Faturamento, CMV, Margem, Ticket Médio e Markup atualizados em tempo real.",
  },
  {
    icon: TrendingUp,
    title: "Previsão com IA",
    description:
      "O sistema recomenda compras e transferências entre lojas automaticamente baseado na demanda real prevista.",
  },
];

const features1 = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Executivo",
    description:
      "Visão macro do negócio com indicadores vitais em tempo real: Faturamento, Volume de vendas, Ticket Médio, CMV, Margem e Markup.",
  },
  {
    icon: ScanSearch,
    title: "Análise de Produtos/SKUs",
    description:
      "Detalhamento profundo da performance de cada item. Acompanhe o giro, vida útil do produto e identifique os top sellers por cor e tamanho.",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Demanda",
    description:
      "Inteligência para equilibrar seu estoque. Receba sugestões automáticas de reposição e transferências entre lojas baseadas no histórico real de vendas.",
  },
  {
    icon: FileDown,
    title: "Relatórios e Exportação",
    description:
      "Liberdade para seus dados. Exporte análises completas em CSV ou Excel com filtros avançados para criar visões personalizadas e auditorias.",
  },
];

const features2 = [
  {
    icon: ArrowLeftRight,
    title: "Devoluções e Transferências",
    description:
      "Controle total do fluxo de mercadorias entre lojas e Centro de Distribuição (CD), otimizando a logística reversa e reposição.",
  },
  {
    icon: ClipboardList,
    title: "Gestão de Tarefas Internas",
    description:
      "Workflow integrado para criação de demandas, atribuição de responsáveis e acompanhamento de follow-ups em tempo real.",
  },
  {
    icon: Database,
    title: "Integração com Base de Dados",
    description:
      "Conexão com seu ERP e ferramentas de BI para garantir que as análises reflitam sempre o dado mais atual da empresa.",
  },
];

const steps = [
  {
    number: "01",
    title: "Assinatura & Briefing",
    description:
      "Formalização simplificada do contrato digital e alinhamento inicial para acesso aos dados.",
  },
  {
    number: "02",
    title: "Desenvolvimento",
    description:
      "Integração e customização das regras de negócio do sistema em até 45 dias.",
  },
  {
    number: "03",
    title: "GoLive",
    description:
      "Sistema operacional e equipe capacitada para maximizar a gestão do estoque.",
    highlight: true,
  },
];

const SimpliEstoque = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.simpli.ia.br/solucoes/simpli-estoque#service",
    name: "Simplí Estoque — Gestão de Estoque com IA Preditiva",
    serviceType: "Gestão de Estoque com Inteligência Artificial",
    description:
      "Plataforma de gestão de estoque com IA preditiva que transforma dados de vendas em decisões automáticas de compra e reposição. Dashboards em tempo real, análise de SKUs, previsão de demanda e integração com ERP.",
    url: "https://www.simpli.ia.br/solucoes/simpli-estoque",
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
      logo: "https://www.simpli.ia.br/logonome-branca-cortada.webp",
      telephone: "+55-81-99194-2628",
      email: "contato@simpli.ia.br",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.instagram.com/simpli.inovacao/",
        "https://www.linkedin.com/company/simpli-inovacao-digital/",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planos Simplí Estoque",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Simplí Estoque",
          description:
            "Plataforma de gestão de estoque com IA preditiva, dashboards executivos, análise de SKUs, gestão de demanda, exportação de dados, integração com ERP e usuários ilimitados.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    serviceOutput: "Redução de rupturas, eliminação de excesso de estoque e aumento da lucratividade com decisões baseadas em dados",
    additionalType: "https://schema.org/SoftwareApplication",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.simpli.ia.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soluções",
        item: "https://www.simpli.ia.br/#solucoes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Simplí Estoque",
        item: "https://www.simpli.ia.br/solucoes/simpli-estoque",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o Simplí Estoque?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Simplí Estoque é uma plataforma de gestão de estoque com inteligência artificial preditiva. Ela transforma dados históricos de vendas em sugestões automáticas de compra e transferência entre lojas, com dashboards em tempo real de faturamento, margem, CMV, ticket médio e markup.",
        },
      },
      {
        "@type": "Question",
        name: "Como a IA do Simplí Estoque prevê a demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O sistema analisa o histórico de vendas, sazonalidade e padrões de comportamento para gerar previsões de demanda. Com base nessa análise, o Simplí Estoque recomenda automaticamente compras e transferências entre lojas e o Centro de Distribuição.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí Estoque se integra com meu ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O Simplí Estoque se conecta diretamente à sua base de dados e ERP, lendo vendas, estoque, transferências e devoluções automaticamente para garantir que as análises sempre reflitam o dado mais atual da empresa.",
        },
      },
      {
        "@type": "Question",
        name: "Quais indicadores o Simplí Estoque monitora?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Simplí Estoque monitora em tempo real: Faturamento, Volume de vendas, Ticket Médio, CMV (Custo de Mercadoria Vendida), Margem, Markup, giro de produto, vida útil por SKU, top sellers por cor e tamanho, produtos sem venda e muito mais.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí Estoque funciona para múltiplas lojas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O Simplí Estoque foi desenvolvido para operações com múltiplas lojas e Centro de Distribuição (CD). Ele controla transferências entre unidades, devoluções e logística reversa, além de sugerir a reposição mais eficiente para cada ponto de venda.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para implementar o Simplí Estoque?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O processo começa com assinatura, briefing e acesso aos dados. O desenvolvimento e customização das regras de negócio é feito em até 45 dias. Após o GoLive, a equipe é capacitada para maximizar o uso da plataforma.",
        },
      },
    ],
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Simplí Estoque — Gestão de Estoque com IA Preditiva"
        description="Elimine rupturas e excesso de estoque com IA. Dashboards em tempo real, previsão de demanda, análise de SKUs e integração com ERP. Decisões automáticas baseadas nos seus dados reais."
        keywords="gestão de estoque com IA, previsão de demanda estoque, sistema de gestão de estoque, análise preditiva estoque, ERP integrado IA, gestão de SKUs varejo, Simplí Estoque, ruptura de estoque, dashboard de estoque, controle de estoque inteligente"
        canonical="/solucoes/simpli-estoque"
        ogTitle="Simplí Estoque — Gestão de Estoque com IA Preditiva"
        ogDescription="Elimine rupturas e excesso de estoque. Dashboards em tempo real, previsão de demanda e integração com ERP para decisões mais assertivas."
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(12,20,15,0.88), rgba(28,51,36,0.80)), url('/fundo-consultoria.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(134,239,172,0.07),_transparent_50%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
            Simplí Estoque
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Gestão de Estoque com{" "}
            <span className="text-[#86efac]">IA Preditiva</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/75 md:text-xl">
            Transforme dados de vendas e estoque em decisões automáticas e
            previsões confiáveis. Análise preditiva para otimizar sua operação.
          </p>
          <Button
            asChild
            className="h-12 rounded-xl border border-transparent bg-white px-8 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Quero saber mais
            </a>
          </Button>
        </div>
      </section>

      {/* Cenário Atual */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              O Cenário Atual
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Gestão manual de estoque{" "}
            <span className="text-[#86efac]">gera prejuízo</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Problemas invisíveis que drenam a lucratividade do seu negócio.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ icon: Icon, title, description, badge }) => (
              <Card
                key={title}
                className="border-white/10 bg-[#0f241c]/90 text-white"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#86efac]/30 bg-[#86efac]/10 text-[#86efac]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {description}
                    </p>
                  </div>
                  <span className="mt-auto rounded-md bg-red-900/40 px-3 py-1 text-xs font-medium text-red-300">
                    {badge}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0f241c]/60 p-6 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-4xl font-black text-[#86efac]">30%</span>
            <div>
              <p className="font-semibold text-white">do capital parado em estoque errado</p>
              <p className="text-sm text-white/60">
                "Sem inteligência, estoque vira custo: capital imobilizado onde não vende e cliente insatisfeito onde falta produto."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução */}
      <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              A Solução
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Gestão de Estoque{" "}
            <span className="text-[#86efac]">Inteligente</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Transforme dados brutos em estratégias de compra e venda precisas
            com nossa plataforma analítica centralizada. Sistema desenvolvido
            com arquitetura flexível para a operação específica do cliente.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {solutionFeatures.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="border-white/10 bg-[#0C140F]/80 text-white"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#86efac]/20 text-[#86efac]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Principais Funcionalidades
            </span>
          </div>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Gestão completa com{" "}
            <span className="text-[#86efac]">visão estratégica</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features1.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="border-white/10 bg-[#0f241c]/90 text-white"
              >
                <CardContent className="flex gap-4 p-6">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#86efac]/20 text-[#86efac]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gestão Integrada */}
      <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Gestão Integrada
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Gestão Integrada e{" "}
            <span className="text-[#86efac]">Estratégica</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Conecte todas as pontas da sua operação. Do controle de estoque
            físico à inteligência de dados para tomada de decisão.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {features2.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="border-white/10 bg-[#0C140F]/80 text-white"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#86efac]/20 text-[#86efac]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Próximos Passos
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Vamos <span className="text-[#86efac]">Começar?</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Transforme a gestão do seu estoque com inteligência artificial. Um
            processo estruturado para gerar resultados rápidos.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map(({ number, title, description, highlight }) => (
              <div
                key={number}
                className={`relative rounded-2xl border p-6 ${
                  highlight
                    ? "border-[#86efac]/40 bg-[#86efac]/10"
                    : "border-white/10 bg-[#0f241c]/80"
                }`}
              >
                <span className="text-5xl font-black text-white/10">
                  {number}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {description}
                </p>
                {highlight && (
                  <span className="mt-3 inline-block rounded-full bg-[#86efac]/20 px-3 py-1 text-xs font-medium text-[#86efac]">
                    Sistema operacional
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm italic text-white/40">
            "Dados históricos + IA preditiva = Estoque eficiente e lucrativo."
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Pronto para otimizar seu estoque com IA?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Fale com nossa equipe e descubra como o Simplí Estoque pode
            transformar a gestão do seu inventário.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-12 rounded-xl border border-transparent bg-white px-8 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Quero começar agora
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-white/60">
            {["Sem fidelidade", "Usuários ilimitados", "Integração com ERP"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle2 size={14} className="text-[#86efac]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SimpliEstoque;
