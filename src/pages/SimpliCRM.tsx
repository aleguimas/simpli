import {
  Kanban,
  UserCheck,
  ListTodo,
  RefreshCcw,
  Bot,
  Database,
  MessageSquareText,
  BarChart2,
  Wrench,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";

const mainFeatures = [
  {
    icon: Kanban,
    title: "Funil de Vendas Customizável",
    description:
      "Visualize e gerencie todo o pipeline de vendas em formato Kanban. Crie etapas personalizadas que refletem exatamente o seu processo comercial.",
  },
  {
    icon: UserCheck,
    title: "Gestão de Leads Automática",
    description:
      "Leads capturados pelo Simplí Agent chegam automaticamente ao CRM, já qualificados e com o contexto da conversa preenchido pela IA.",
  },
  {
    icon: ListTodo,
    title: "Gestão de Tarefas Inteligente",
    description:
      "Cada vendedor recebe tarefas contextualizadas criadas pela IA com base nas interações, garantindo que nenhuma oportunidade seja esquecida.",
  },
  {
    icon: RefreshCcw,
    title: "Follow Up Automático",
    description:
      "Cobranças e interações com base no contexto exato do que foi conversado com o cliente. Follow-up na hora certa, com a mensagem certa.",
  },
  {
    icon: Bot,
    title: "Automações com IA",
    description:
      "Automações que eliminam tarefas repetitivas e permitem que sua equipe foque no que realmente importa: fechar negócios.",
  },
];

const differentials = [
  {
    icon: Database,
    title: "Alimentação Automática",
    description:
      "A IA preenche os dados do CRM por você com o contexto da conversa realizada. Zero trabalho manual de cadastro.",
  },
  {
    icon: MessageSquareText,
    title: "Follow Up Contextual",
    description:
      "Cobranças e interações com base no contexto exato do que foi conversado com o cliente. Personalizado e eficaz.",
  },
  {
    icon: BarChart2,
    title: "Orçamentos",
    description:
      "Acompanhe os orçamentos abertos, fechados e em risco. Mediante integração com o ERP, tenha visibilidade total do pipeline financeiro.",
  },
  {
    icon: ListTodo,
    title: "Gestão de Tarefas com IA",
    description:
      "O vendedor recebe tarefas contextualizadas criadas pela IA, garantindo produtividade máxima e foco nos leads mais quentes.",
  },
  {
    icon: TrendingUp,
    title: "Aumentar Performance",
    description:
      "Automações eliminam tarefas repetitivas e liberam sua equipe para atividades de alto valor, aumentando a produtividade do time.",
  },
  {
    icon: Wrench,
    title: "Ajustes e Manutenções",
    description:
      "Melhoria contínua dos prompts, atualizações de segurança e ajustes técnicos para manter a IA sempre afiada e performática.",
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
      "Nossa equipe configura os funis, integrações e automações conforme seu processo comercial. Tudo pronto em até 10 dias.",
  },
  {
    number: "03",
    title: "GoLive",
    description:
      "Seu CRM começa a operar integrado ao Simplí Agent. Gestão de vendas com inteligência artificial desde o primeiro dia.",
    highlight: true,
  },
];

const SimpliCRM = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.simpli.ia.br/solucoes/simpli-crm#service",
    name: "Simplí CRM — Gestão de Vendas com IA",
    serviceType: "CRM com Inteligência Artificial",
    description:
      "CRM integrado à IA de atendimento que transforma conversas em oportunidades de venda. Funil Kanban, alimentação automática de leads, follow-up contextual e automações com IA para escalar seu time comercial.",
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
          name: "Simplí Agent + Simplí CRM",
          description:
            "CRM integrado ao Simplí Agent com funil Kanban, gestão automática de leads, follow-up contextual, automações com IA e usuários ilimitados.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    serviceOutput: "Pipeline de vendas organizado e automatizado com IA, aumentando a taxa de conversão do time comercial",
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
          text: "O Simplí CRM é uma plataforma de gestão de vendas integrada à IA de atendimento. Ele organiza automaticamente os leads capturados pelo Simplí Agent em um funil de vendas Kanban, com follow-up automático, gestão de tarefas e automações que eliminam trabalho manual do time comercial.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM se integra com o WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O Simplí CRM é 100% integrado ao Simplí Agent, que opera no WhatsApp, Instagram e Chat do Site. Cada conversa do cliente é automaticamente registrada no CRM com o contexto preenchido pela IA.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a alimentação automática de leads no Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A IA preenche automaticamente os dados do lead no CRM com base no contexto da conversa realizada. Nome, contato, interesse e estágio do funil são registrados sem nenhum trabalho manual do vendedor.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM possui funil de vendas personalizável?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O funil de vendas do Simplí CRM é totalmente customizável em formato Kanban. Você cria as etapas que refletem exatamente o processo comercial da sua empresa.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o follow-up automático do Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O follow-up contextual do Simplí CRM envia cobranças e interações baseadas no contexto exato do que foi conversado com o cliente. O sistema identifica o melhor momento e a melhor mensagem para cada lead.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso contratar o Simplí Agent para usar o Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Simplí CRM foi desenvolvido para operar de forma integrada ao Simplí Agent, extraindo o máximo valor das conversas automatizadas. Entre em contato com nossa equipe para entender a melhor combinação para o seu negócio.",
        },
      },
    ],
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Simplí CRM — Gestão de Vendas com IA"
        description="CRM integrado à IA que transforma atendimentos em vendas. Funil Kanban, alimentação automática de leads, follow-up contextual e automações. Sem fidelidade. GoLive em 30 dias."
        keywords="CRM com inteligência artificial, gestão de vendas IA, funil de vendas Kanban, follow-up automático WhatsApp, CRM integrado WhatsApp, automação comercial IA, Simplí CRM, pipeline de vendas automatizado, CRM para pequenas empresas, gestão de leads automática"
        canonical="/solucoes/simpli-crm"
        ogTitle="Simplí CRM — Funil de Vendas Automatizado com IA"
        ogDescription="Transforme atendimentos em fechamentos. Funil Kanban, leads qualificados pela IA, follow-up contextual e automações para escalar seu time comercial."
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
            Gestão inteligente e{" "}
            <span className="text-[#86efac]">automatizada</span> para o seu
            time de vendas
          </h1>
          <p className="max-w-2xl text-lg text-white/75 md:text-xl">
            Transforme o atendimento em fechamento. O Simplí CRM é a ferramenta
            definitiva para organizar, acompanhar e escalar suas conversas
            comerciais, operando de forma 100% integrada com a nossa IA.
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

      {/* Integração com Agent */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#86efac]/20 bg-[#0f241c]/60 p-8 md:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full bg-[#86efac]/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#86efac]">
                  100% integrado ao Simplí Agent
                </span>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                  Não é apenas um CRM.
                  <br />
                  É inteligência aplicada ao seu processo de vendas.
                </h2>
                <p className="mt-4 text-white/60">
                  O Simplí CRM nasce integrado ao Simplí Agent. Cada conversa
                  do seu cliente vira um lead automaticamente cadastrado, com
                  o contexto preenchido pela IA e as próximas ações sugeridas
                  para o vendedor.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Zap, label: "Alimentação automática pela IA" },
                  { icon: Bot, label: "Automações sem código" },
                  { icon: UserCheck, label: "Leads qualificados" },
                  { icon: RefreshCcw, label: "Follow-up contextual" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0C140F]/60 px-4 py-3"
                  >
                    <Icon size={16} className="text-[#86efac]" />
                    <span className="text-sm text-white/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Funcionalidades */}
      <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Principais Funcionalidades
            </span>
          </div>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Tudo que seu time de vendas{" "}
            <span className="text-[#86efac]">precisa</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map(({ icon: Icon, title, description }) => (
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

      {/* Diferenciais */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Escopo Completo
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            O diferencial do{" "}
            <span className="text-[#86efac]">Simplí CRM</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Não é apenas um CRM. É inteligência aplicada ao seu processo de
            vendas.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map(({ icon: Icon, title, description }) => (
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
            Um processo simples e ágil para você ter o CRM integrado à IA
            funcionando em dias.
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
            Pronto para escalar suas vendas com IA?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Fale com nossa equipe e descubra como o Simplí CRM pode transformar
            seu processo comercial.
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
            {["Sem fidelidade", "Usuários ilimitados", "Integrado ao Simplí Agent"].map((item) => (
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
