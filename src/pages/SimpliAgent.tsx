import {
  Clock,
  Moon,
  TrendingDown,
  Users,
  Brain,
  Zap,
  Link2,
  BookOpen,
  Sun,
  Layers,
  LayoutDashboard,
  FileBarChart2,
  Headphones,
  MessageCircle,
  Instagram,
  Monitor,
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
    icon: Clock,
    title: "Tempo de Resposta",
    description:
      "Clientes esperam horas ou dias por uma resposta simples, gerando frustração imediata.",
    badge: "Lento e Burocrático",
  },
  {
    icon: Moon,
    title: "Indisponibilidade",
    description:
      "Seu negócio fecha às 18h, mas seus clientes continuam comprando e tendo dúvidas 24/7.",
    badge: "Perda fora do Horário",
  },
  {
    icon: TrendingDown,
    title: "Oportunidades Perdidas",
    description:
      "Leads quentes esfriam rapidamente sem um atendimento imediato e proativo.",
    badge: "Vendas Perdidas",
  },
  {
    icon: Users,
    title: "Sobrecarga da Equipe",
    description:
      "Sua equipe humana gasta tempo respondendo perguntas repetitivas em vez de focar em estratégia.",
    badge: "Baixa Produtividade",
  },
];

const solutionFeatures = [
  {
    icon: Brain,
    title: "Inteligência Real [RAG]",
    description:
      "O agente entende contexto e histórico. Ele consulta sua base de conhecimento para responder perguntas complexas, não apenas scripts prontos.",
  },
  {
    icon: Zap,
    title: "Resposta em 15s",
    description:
      "Velocidade é conversão. Seu cliente é atendido instantaneamente, 24 horas por dia, sem filas de espera.",
  },
  {
    icon: Link2,
    title: "Integração Total",
    description:
      "Conectado ao seu ERP, CRM e E-commerce. O agente pode verificar estoque, status de pedidos e emitir segunda via de boletos.",
  },
];

const features1 = [
  {
    icon: Zap,
    title: "Atendimento em 15s",
    description:
      "Elimine filas de espera. O agente responde instantaneamente a qualquer interação do cliente, garantindo que o interesse de compra seja capturado no momento exato.",
  },
  {
    icon: Sun,
    title: "Disponível 24h/dia",
    description:
      "Seu negócio nunca fecha. Atenda clientes de madrugada, finais de semana e feriados com a mesma qualidade e precisão do horário comercial.",
  },
  {
    icon: BookOpen,
    title: "Base de Conhecimento",
    description:
      "O agente aprende com seus manuais, PDFs, site e histórico. Ele não alucina: responde com base nos dados reais e aprovados da sua empresa.",
  },
  {
    icon: Layers,
    title: "Multicanal Integrado",
    description:
      "Uma única inteligência operando simultaneamente no WhatsApp, Instagram Direct e Chat do Site. Centralize o atendimento e mantenha a consistência da marca.",
  },
];

const features2 = [
  {
    icon: LayoutDashboard,
    title: "Dashboard em Tempo Real",
    description:
      "Acompanhe volume de atendimentos, tempo médio de resposta (SLA) e satisfação do cliente (CSAT) ao vivo.",
  },
  {
    icon: FileBarChart2,
    title: "Relatórios Gerenciais",
    description:
      "Identifique tendências, gargalos e oportunidades com relatórios detalhados exportáveis para análise estratégica.",
  },
  {
    icon: Headphones,
    title: "Plataforma Multi-Atendentes",
    description:
      "Transbordo inteligente para humanos quando necessário. Vários atendentes na mesma conta de WhatsApp.",
  },
];

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description:
      "O canal preferido dos brasileiros. Atendimento rápido, envio de boletos e áudios transcritos.",
    color: "text-green-400",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description:
      "Responda DMs e comentários automaticamente. Transforme interações em vendas 24/7.",
    color: "text-pink-400",
  },
  {
    icon: Monitor,
    title: "Chat no Site",
    description:
      "Capture visitantes anônimos. O widget inteligente qualifica o lead antes de passar para o humano.",
    color: "text-blue-400",
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
      "Nossa equipe mapeia seus processos e configura a IA. Tudo pronto em até 10 dias.",
  },
  {
    number: "03",
    title: "GoLive",
    description:
      "Seu Agente de IA começa a atender clientes. Prazo máximo de entrega: 30 dias.",
    highlight: true,
  },
];

const SimpliAgent = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.simpli.ia.br/solucoes/simpli-agent#service",
    name: "Simplí Agent — Agente de IA para Atendimento",
    serviceType: "Atendimento Automático com Inteligência Artificial",
    description:
      "Agente de IA omnichannel que atende seus clientes 24h no WhatsApp, Instagram e Chat do Site com resposta em até 15 segundos. Tecnologia RAG treinada com os dados reais do seu negócio.",
    url: "https://www.simpli.ia.br/solucoes/simpli-agent",
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
      name: "Planos Simplí Agent",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Simplí Agent",
          description:
            "Atendimento com IA omnichannel (WhatsApp, Instagram, Chat do Site), base de conhecimento RAG, dashboard em tempo real, plataforma multi-atendentes e usuários ilimitados.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    serviceOutput: "Atendimento automatizado com IA disponível 24 horas por dia, 7 dias por semana",
    termsOfService: "https://www.simpli.ia.br",
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
        name: "Simplí Agent",
        item: "https://www.simpli.ia.br/solucoes/simpli-agent",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o Simplí Agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Simplí Agent é um agente de inteligência artificial para atendimento ao cliente, treinado com os dados reais do seu negócio. Ele responde dúvidas, qualifica leads e atende clientes 24 horas por dia com resposta em até 15 segundos, integrado ao WhatsApp, Instagram e Chat do Site.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí Agent funciona no WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O Simplí Agent opera de forma nativa no WhatsApp, além de Instagram Direct e Chat no Site. Uma única inteligência atende todos os canais simultaneamente, mantendo o contexto e a qualidade do atendimento.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí Agent substitui os atendentes humanos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não necessariamente. O Simplí Agent realiza o atendimento automatizado de forma inteligente, mas possui transbordo para atendentes humanos quando necessário. A plataforma multi-atendentes permite que sua equipe assuma conversas específicas com histórico completo.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a tecnologia RAG do Simplí Agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RAG (Retrieval-Augmented Generation) permite que o agente consulte sua base de conhecimento — manuais, PDFs, site, histórico de conversas — para responder com base nos dados reais da sua empresa, sem alucinar ou inventar informações.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para implementar o Simplí Agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O processo começa com assinatura e briefing. Nossa equipe configura e treina o agente em até 10 dias. O GoLive — quando o agente começa a atender seus clientes — ocorre em no máximo 30 dias.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí Agent tem contrato de fidelidade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O Simplí Agent não possui multa rescisória ou contrato de fidelidade. Solicitamos apenas um aviso prévio de 60 dias em caso de cancelamento para offboarding da estrutura.",
        },
      },
    ],
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Simplí Agent — Atendimento com IA 24h"
        description="Automatize o atendimento da sua empresa com IA. Resposta em 15s, disponível 24h, omnichannel no WhatsApp, Instagram e Chat. RAG treinado com os dados do seu negócio. Sem fidelidade."
        keywords="agente de IA atendimento, chatbot inteligente WhatsApp, atendimento automático 24 horas, IA para atendimento ao cliente, chatbot omnichannel, RAG inteligência artificial, Simplí Agent, automação de atendimento, chatbot WhatsApp Brasil, atendimento IA Recife"
        canonical="/solucoes/simpli-agent"
        ogTitle="Simplí Agent — Agente de IA para Atendimento 24h"
        ogDescription="Resposta em 15s, disponível 24h, integrado ao WhatsApp, Instagram e Chat do Site. IA treinada com os dados do seu negócio."
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(12,20,15,0.85), rgba(28,51,36,0.75)), url('/fundo-agent.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
            Simplí Agent
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Agente de IA no{" "}
            <span className="text-[#86efac]">Atendimento</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/75 md:text-xl">
            Atendimento inteligente, rápido e integrado ao seu negócio.
            Automatize sem perder a humanização e converta mais clientes com IA.
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
            O atendimento tradicional{" "}
            <span className="text-[#86efac]">tem um custo alto</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Gargalos que impedem o crescimento da sua empresa hoje.
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
            <span className="text-4xl font-black text-[#86efac]">70%</span>
            <div>
              <p className="font-semibold text-white">dos clientes desistem da compra</p>
              <p className="text-sm text-white/60">
                "A falta de agilidade no atendimento é o principal motivo de abandono de carrinho e perda de fidelidade no digital."
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
            Conheça o{" "}
            <span className="text-[#86efac]">Simplí Agent</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Esqueça os chatbots burros. Nossa IA é moldada ao seu negócio,
            conectada aos seus dados e aprende com cada interação.
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
            Potencialize seu atendimento com{" "}
            <span className="text-[#86efac]">recursos avançados</span>
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

      {/* Controle total */}
      <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Gestão e Métricas
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Controle total na{" "}
            <span className="text-[#86efac]">palma da mão</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Não apenas automação, mas gestão completa. Tenha visibilidade de
            cada interação e performance em tempo real.
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

      {/* Omnichannel */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Omnichannel
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Um agente,{" "}
            <span className="text-[#86efac]">todos os seus canais</span>
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Centralize sua operação. O Simplí Agent atende simultaneamente onde
            seu cliente estiver, mantendo o contexto e a qualidade.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, description, color }) => (
              <Card
                key={title}
                className="border-white/10 bg-[#0f241c]/90 text-white"
              >
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${color}`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
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
            Inicie sua transformação digital hoje. Um processo simples, ágil e
            focado em gerar valor desde o primeiro dia.
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

          <p className="mt-10 text-center text-sm italic text-white/40">
            "IA moldada aos processos, regras e dados do seu negócio."
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Pronto para automatizar seu atendimento?
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Fale com nossa equipe e descubra como o Simplí Agent pode
            transformar o atendimento da sua empresa.
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
            {["Sem fidelidade", "Usuários ilimitados", "GoLive em 30 dias"].map((item) => (
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

export default SimpliAgent;
