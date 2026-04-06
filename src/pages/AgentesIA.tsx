import { useState } from "react";
import {
  Zap,
  BarChart3,
  Clock3,
  TrendingUp,
  MessageCircle,
  NotebookPen,
  Brain,
  Cog,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";
const HERO_BG = "/fundo-agent.webp";

const benefits = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description:
      "Elimine tarefas manuais e repetitivas com agentes que executam fluxos complexos de forma autônoma, reduzindo erros e custo operacional.",
  },
  {
    icon: BarChart3,
    title: "Insights em Tempo Real",
    description:
      "Análise contínua de dados para gerar insights acionáveis e dar suporte a decisões estratégicas com base em informações precisas.",
  },
  {
    icon: Clock3,
    title: "Disponibilidade 24/7",
    description:
      "Agentes que operam sem interrupção — atendimento, suporte e processos funcionando a qualquer hora, sem custo adicional.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description:
      "Soluções que crescem junto com seu negócio. Atenda 10x mais clientes ou processe 10x mais dados sem aumentar a equipe.",
  },
];

const processTimeline = [
  {
    id: 1,
    title: "Análise de Processos",
    date: "Etapa 1",
    content: "Mapeamos fluxos críticos e identificamos onde a IA gera maior impacto.",
    category: "Planejamento",
    icon: NotebookPen,
    relatedIds: [2],
    status: "completed" as const,
    energy: 25,
  },
  {
    id: 2,
    title: "Design da Solução",
    date: "Etapa 2",
    content: "Desenhamos arquitetura e integrações para agentes inteligentes sob medida.",
    category: "Design",
    icon: Brain,
    relatedIds: [3],
    status: "in-progress" as const,
    energy: 50,
  },
  {
    id: 3,
    title: "Desenvolvimento",
    date: "Etapa 3",
    content: "Construímos, treinamos e testamos os agentes com dados e regras do negócio.",
    category: "Execução",
    icon: Cog,
    relatedIds: [4],
    status: "pending" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Deploy & Monitoramento",
    date: "Etapa 4",
    content: "Publicamos, monitoramos performance e refinamos continuamente os agentes.",
    category: "Deploy",
    icon: TrendingUp,
    relatedIds: [],
    status: "pending" as const,
    energy: 100,
  },
];

const useCases = [
  "Atendimento automatizado via WhatsApp, chat e e-mail",
  "Qualificação e triagem de leads de forma autônoma",
  "Resposta a perguntas frequentes com base no seu conteúdo",
  "Processamento e análise de documentos e contratos",
  "Automação de fluxos internos e aprovações",
  "Integração com CRM, ERP e sistemas legados",
];

const faqs = [
  {
    question: "O que é um agente de IA?",
    answer:
      "Um agente de IA é um sistema autônomo que percebe o contexto, toma decisões e executa ações para atingir um objetivo específico — sem precisar de intervenção humana a cada passo. Vai além de um chatbot simples: pode integrar sistemas, processar dados, gerar respostas contextuais e aprender com o histórico de interações.",
  },
  {
    question: "Quais processos podem ser automatizados com agentes de IA?",
    answer:
      "Atendimento ao cliente (WhatsApp, chat, e-mail), qualificação de leads, triagem de suporte, processamento de documentos, resposta a perguntas frequentes, automação de aprovações internas, relatórios automáticos e integração entre sistemas são alguns dos casos mais comuns. Fazemos um diagnóstico para identificar onde a IA gera mais impacto no seu negócio.",
  },
  {
    question: "Um agente de IA substitui funcionários?",
    answer:
      "Não necessariamente — e esse não é o objetivo. Agentes de IA assumem tarefas repetitivas e de baixo valor agregado, liberando a equipe para atividades estratégicas, criativas e de relacionamento. O resultado costuma ser uma equipe mais produtiva e satisfeita, não menor.",
  },
  {
    question: "Quanto tempo leva para desenvolver um agente de IA?",
    answer:
      "Depende da complexidade e das integrações necessárias. Agentes mais simples, como atendimento via WhatsApp com base em um FAQ, podem ser entregues em 2 a 4 semanas. Soluções mais robustas, com múltiplas integrações e fluxos complexos, costumam levar de 6 a 12 semanas.",
  },
  {
    question: "Os agentes de IA se integram com meus sistemas atuais?",
    answer:
      "Sim. Desenvolvemos integrações com CRMs (HubSpot, Salesforce, RD Station), ERPs, plataformas de atendimento (WhatsApp, Zendesk), e-commerce e sistemas legados via API. A integração é parte do processo de desenvolvimento desde o início.",
  },
];

const AgentesIA = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Agentes de Inteligência Artificial",
      name: "Desenvolvimento de Agentes de IA para Empresas",
      provider: {
        "@type": "Organization",
        name: "Simplí",
        url: "https://www.simpli.ia.br",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Recife",
          addressRegion: "PE",
          addressCountry: "BR",
        },
      },
      areaServed: [
        { "@type": "City", name: "Recife" },
        { "@type": "State", name: "Pernambuco" },
        { "@type": "Country", name: "Brasil" },
      ],
      description:
        "Desenvolvimento de agentes de Inteligência Artificial personalizados para automatizar processos, atendimento e operações de empresas em Recife e no Brasil.",
      offers: {
        "@type": "Offer",
        description:
          "Agentes de IA com machine learning, NLP e integrações com CRM, ERP e canais de atendimento para empresas em Recife e em todo o Brasil.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluções de Agentes de IA",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chatbot Inteligente" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automação de Atendimento" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agente de Qualificação de Leads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automação de Processos Internos" } },
        ],
      },
    },
    {
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
          name: "Serviços",
          item: "https://www.simpli.ia.br/#servicos",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Agentes de IA",
          item: "https://www.simpli.ia.br/servicos/agentes-de-ia",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Agentes de IA | Chatbots e Automação Inteligente para Empresas"
        description="Desenvolvemos agentes de IA personalizados para automatizar atendimento, qualificar leads e otimizar processos. Inteligência artificial para empresas em Recife e em todo o Brasil."
        keywords="agentes de IA, inteligência artificial para empresas, chatbot inteligente, automação de atendimento, automação com IA, IA para negócios, agente de IA Recife, machine learning, NLP, automação de processos"
        canonical="/servicos/agentes-de-ia"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(12,20,15,0.8), rgba(28,51,36,0.7)), url('${HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Agentes de Inteligência Artificial para Empresas
            </h1>
            <p className="max-w-2xl text-lg text-white/75 md:text-xl">
              Desenvolvemos agentes de IA personalizados que automatizam atendimento, qualificam leads e otimizam processos — para empresas em Recife e em todo o Brasil.
            </p>
            <Button
              asChild
              className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </section>

        {/* O que é */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">O que são Agentes de IA?</h2>
              <p className="text-base leading-relaxed text-white/70">
                Agentes de Inteligência Artificial são sistemas autônomos capazes de perceber o contexto, tomar decisões e executar ações para alcançar objetivos específicos — sem intervenção humana a cada passo. Vão muito além de um chatbot simples.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Desenvolvemos agentes com tecnologias avançadas como machine learning, processamento de linguagem natural (NLP) e integrações com APIs — conectados aos canais e sistemas que sua empresa já usa: WhatsApp, CRM, ERP e plataformas de atendimento.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Atendemos empresas em Recife, Pernambuco e em todo o Brasil. Nosso processo começa pelo diagnóstico dos seus processos para identificar onde a IA gera mais impacto com menos complexidade.
              </p>
            </div>
            <Card className="border-white/10 bg-white/5">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                  <MessageCircle size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">Tecnologias Avançadas</h3>
                <p className="text-sm text-white/65">
                  Machine Learning, NLP e integrações com APIs para criar agentes que realmente funcionam no dia a dia do negócio.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Por que adotar Agentes de IA na sua empresa?
            </h2>
            <p className="mt-2 text-base text-white/70">
              Automação inteligente que reduz custos, escala operações e melhora a experiência do cliente.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <Card
                  key={item.title}
                  className="border-white/10 bg-white/5 shadow-lg shadow-black/30"
                >
                  <CardContent className="flex flex-col gap-3 p-5 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#86efac] to-white text-black">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de uso */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">O que podemos automatizar</h2>
              <p className="mt-2 text-base text-white/70">
                Casos de uso mais comuns de agentes de IA em empresas
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#4ADE80]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como desenvolvemos */}
        <section className="bg-[#0f1d15] px-6 pt-16 pb-6 md:px-10 md:pt-20 md:pb-14">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Desenvolvemos seu Agente de IA</h2>
            <p className="mt-2 text-base text-white/70">
              Processo em 4 etapas: do diagnóstico ao deploy, com monitoramento contínuo.
            </p>
            <div className="mt-10 flex justify-center overflow-hidden px-2">
              <div className="w-full max-w-[260px] origin-top scale-[0.64] sm:max-w-[520px] sm:scale-90 md:max-w-5xl md:scale-100">
                <RadialOrbitalTimeline timelineData={processTimeline} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mt-2 text-base text-white/70">
                Dúvidas sobre agentes de IA e automação inteligente
              </p>
            </div>
            <div className="flex flex-col divide-y divide-white/10">
              {faqs.map((faq, idx) => (
                <div key={faq.question}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span className="text-base font-medium text-white">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-white/50 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="pb-5 text-sm leading-relaxed text-white/70">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para automatizar seu negócio com Inteligência Artificial?
            </h2>
            <p className="mt-3 text-base text-white/75 md:text-lg">
              Fale com nosso time e descubra como um agente de IA pode reduzir custos, escalar operações e melhorar a experiência dos seus clientes.
            </p>
            <div className="mt-7 flex justify-center">
              <Button
                asChild
                className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default AgentesIA;
