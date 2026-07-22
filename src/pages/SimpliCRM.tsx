import {
  ArrowRight,
  CheckCircle2,
  LineChart,
  MessageSquareText,
  Megaphone,
  ShoppingBag,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { crmFeatureSections } from "@/data/crmFeatures";

const WHATSAPP_URL = "https://wa.link/cpk8xf";

/* Os 3 pilares do hero apontam para as âncoras das seções de funcionalidades. */
const pillars = [
  {
    icon: MessageSquareText,
    title: "Atendimento com IA",
    description:
      "WhatsApp oficial, Instagram e um agente de IA 24/7 na mesma central — com passagem para humano no momento certo.",
    href: "#simplichat",
  },
  {
    icon: Megaphone,
    title: "Campanhas e Disparos",
    description:
      "Disparos em massa pela API oficial da Meta, flows estilo ManyChat e grupos de WhatsApp como canal de vendas.",
    href: "#campanhas",
  },
  {
    icon: LineChart,
    title: "Gestão e Inteligência de Clientes",
    description:
      "Dashboards em tempo real, funil Kanban e o ERP virando inteligência de relacionamento — classificação automática de clientes.",
    href: "#gestao",
  },
];

/* Perfis atendidos pelo produto — Varejo e Serviços. */
const profiles = [
  {
    icon: ShoppingBag,
    badge: "Plano Varejo",
    title: "Atendimento e vendas em volume",
    description:
      "Para o varejo que atende muita gente todo dia: central omnichannel, IA no WhatsApp, campanhas em massa, grupos, funil de vendas e inteligência de clientes conectada ao ERP.",
    items: [
      "Central SimpliChat + agente de IA",
      "Campanhas e grupos de WhatsApp",
      "Inteligência de clientes com ERP",
    ],
  },
  {
    icon: Handshake,
    badge: "Plano Serviços",
    title: "Agências, consultorias e contratos recorrentes",
    description:
      "O mesmo CRM no modo empresa de serviços: carteiras e contratos, projetos com kanban de execução, financeiro e painel de gestão consolidado — na mesma plataforma do atendimento.",
    items: [
      "Contratos e carteira recorrente",
      "Projetos com kanban por cliente",
      "Financeiro e painel do dono",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Assinatura",
    description:
      "Formalização simplificada do contrato digital. Sem burocracia excessiva para agilizar o início.",
  },
  {
    number: "02",
    title: "Briefing & Setup",
    description:
      "Nossa equipe conecta o WhatsApp oficial, o Instagram e o ERP, configura os funis, a IA e as automações conforme seu processo.",
  },
  {
    number: "03",
    title: "GoLive",
    description:
      "Sua operação começa a atender, disparar campanhas e gerenciar vendas na mesma plataforma — com IA desde o primeiro dia.",
    highlight: true,
  },
];

const SimpliCRM = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.simpli.ia.br/solucoes/simpli-crm#service",
    name: "Simplí CRM — o CRM que atende, vende e gerencia",
    serviceType: "CRM com Inteligência Artificial",
    description:
      "CRM completo com WhatsApp oficial da Meta, Instagram e agente de IA no mesmo lugar: central de atendimento omnichannel, campanhas e disparos em massa, grupos de WhatsApp, funil Kanban, dashboards em tempo real e inteligência de clientes integrada ao ERP.",
    url: "https://www.simpli.ia.br/solucoes/simpli-crm",
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
      name: "Planos Simplí CRM",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Simplí CRM — Plano Varejo",
          description:
            "Central de atendimento omnichannel (WhatsApp oficial + Instagram), agente de IA 24/7, campanhas e disparos em massa, grupos de WhatsApp, funil Kanban e inteligência de clientes integrada ao ERP.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Simplí CRM — Plano Serviços",
          description:
            "CRM para agências, consultorias e contratos recorrentes: gestão de carteiras e contratos, projetos com kanban de execução, financeiro e painel de gestão consolidado.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    serviceOutput:
      "Atendimento, campanhas e gestão de vendas centralizados em uma plataforma com IA, aumentando conversão e produtividade do time comercial",
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
        name: "Simplí CRM",
        item: "https://www.simpli.ia.br/solucoes/simpli-crm",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Simplí CRM é uma plataforma completa que atende, vende e gerencia: central de atendimento omnichannel com WhatsApp oficial da Meta e Instagram, agente de IA 24/7, campanhas e disparos em massa, funil de vendas Kanban, dashboards em tempo real e inteligência de clientes integrada ao ERP.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM usa a API oficial do WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O Simplí CRM conecta o WhatsApp da empresa direto na infraestrutura oficial da Meta (WhatsApp Cloud API), com número verificado, sem risco de banimento, envio de templates aprovados e suporte à janela de 24 horas.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM se integra com o Instagram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. As mensagens do Direct do perfil profissional caem na mesma central de atendimento, e é possível automatizar respostas a comentários por palavra-chave e acompanhar métricas de perfil e publicações com dados reais da API da Meta.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o agente de IA do Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O agente de IA responde clientes 24/7 no WhatsApp, entende texto, áudio, imagem e PDF, e é treinado com a base de conhecimento da sua empresa. Quando não consegue resolver, transfere para o time humano — e o atendente pode ligar ou desligar a IA em qualquer conversa com um clique.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM faz disparos em massa e campanhas de WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Campanhas para milhares de contatos pela API oficial da Meta com templates aprovados, flows visuais de disparo estilo ManyChat, campanhas de datas comemorativas e métricas reais de entrega (enviado, entregue, lido e respondido) por mensagem.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM se integra com ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A sincronização automática com o ERP traz pedidos, produtos e clientes para o CRM: classificação automática de clientes (novo, ativo, VIP, em risco), histórico de compras na tela de atendimento e validação de quantos leads de campanha realmente compraram.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM atende empresas de serviços?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O plano Serviços é voltado para agências, consultorias e empresas de contrato recorrente: gestão de carteiras e contratos, projetos com kanban de execução, financeiro, despesas de viagem e painel de gestão consolidado.",
        },
      },
    ],
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="CRM — atende, vende e gerencia com WhatsApp oficial, Instagram e IA"
        description="O CRM que atende, vende e gerencia: WhatsApp oficial da Meta, Instagram e agente de IA no mesmo lugar. Campanhas em massa, funil Kanban, dashboards e inteligência de clientes com ERP."
        keywords="CRM com inteligência artificial, WhatsApp API oficial Meta, atendimento omnichannel, disparo em massa WhatsApp, agente de IA WhatsApp, CRM integrado Instagram, funil de vendas Kanban, campanhas WhatsApp, grupos de WhatsApp vendas, CRM integrado ERP, Simplí CRM, CRM para varejo, CRM para agências"
        canonical="/solucoes/simpli-crm"
        ogTitle="Simplí CRM — o CRM que atende, vende e gerencia"
        ogDescription="WhatsApp oficial, Instagram e IA no mesmo lugar: atendimento, campanhas e gestão de vendas em uma plataforma só."
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(12,20,15,0.88), rgba(28,51,36,0.80)), url('/fundo-agent.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(134,239,172,0.07),_transparent_50%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
            Simplí CRM
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            O CRM que <span className="text-[#86efac]">atende, vende e gerencia</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/75 md:text-xl">
            WhatsApp oficial da Meta, Instagram e IA no mesmo lugar. Da primeira
            mensagem ao pós-venda: central de atendimento, campanhas em massa,
            funil de vendas e inteligência de clientes em uma única plataforma.
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

      {/* Pilares */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description, href }) => (
              <a
                key={title}
                href={href}
                className="group rounded-2xl border border-white/10 bg-[#0f241c]/60 p-6 transition hover:border-[#86efac]/40 hover:bg-[#0f241c]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#86efac]/20 text-[#86efac]">
                  <Icon size={20} />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#86efac]">
                  Ver funcionalidades
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Perfis: Varejo e Serviços */}
      <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Para quem é
            </span>
          </div>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Um CRM, <span className="text-[#86efac]">dois modos de operar</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {profiles.map(({ icon: Icon, badge, title, description, items }) => (
              <div
                key={badge}
                className="rounded-2xl border border-[#86efac]/20 bg-[#0f241c]/60 p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#86efac]/20 text-[#86efac]">
                    <Icon size={20} />
                  </div>
                  <span className="rounded-full bg-[#86efac]/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#86efac]">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {description}
                </p>
                <ul className="mt-5 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#86efac]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navegação por âncoras das seções de funcionalidades */}
      <nav
        aria-label="Seções de funcionalidades"
        className="sticky top-16 z-40 border-b border-white/10 bg-[#0C140F]/90 px-6 py-3 backdrop-blur md:px-10"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {crmFeatureSections.map(({ id, navLabel }) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 transition hover:border-[#86efac]/40 hover:text-[#86efac]"
            >
              {navLabel}
            </a>
          ))}
        </div>
      </nav>

      {/* Seções de funcionalidades (src/data/crmFeatures.ts) */}
      {crmFeatureSections.map(
        (
          { id, eyebrow, title, titleHighlight, subtitle, audience, features },
          index,
        ) => (
          <section
            key={id}
            id={id}
            className={`scroll-mt-32 px-6 py-16 md:px-10 md:py-20 ${
              index % 2 === 1 ? "bg-[#0f1d15]" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-8 bg-white/30" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  {eyebrow}
                </span>
                {audience === "servicos" && (
                  <span className="rounded-full bg-[#86efac]/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#86efac]">
                    Agências e consultorias
                  </span>
                )}
              </div>
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                {title}
                <span className="text-[#86efac]">{titleHighlight}</span>
              </h2>
              <p className="mb-10 max-w-2xl text-white/60">{subtitle}</p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map(({ icon: Icon, title: featureTitle, description }) => (
                  <Card
                    key={featureTitle}
                    className="border-white/10 bg-[#0C140F]/80 text-white transition hover:border-[#86efac]/30"
                  >
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#86efac]/20 text-[#86efac]">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-base font-semibold">{featureTitle}</h3>
                      <p className="text-sm leading-relaxed text-white/60">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ),
      )}

      {/* Próximos Passos */}
      <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
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
            Um processo simples e ágil para você ter atendimento, campanhas e
            gestão rodando na mesma plataforma em dias.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map(({ number, title, description, highlight }) => (
              <div
                key={number}
                className={`relative rounded-2xl border p-6 ${
                  highlight
                    ? "border-[#86efac]/40 bg-[#86efac]/10"
                    : "border-white/10 bg-[#0C140F]/80"
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
                    GoLive em até 30 dias
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Pronto para atender, vender e gerenciar em um lugar só?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Fale com nossa equipe e descubra como o Simplí CRM pode transformar
            seu atendimento e seu processo comercial.
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
            {[
              "WhatsApp API Oficial da Meta",
              "IA treinada com a sua empresa",
              "Integrado ao seu ERP",
            ].map((item) => (
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

export default SimpliCRM;
