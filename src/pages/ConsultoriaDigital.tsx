import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronDown,
  Compass,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";
const HERO_BG = "/fundo-consultoria.webp";

const benefits = [
  {
    title: "Estratégia Clara",
    description:
      "Roadmap estruturado com prioridades definidas, metas mensuráveis e etapas sequenciais para a transformação digital do seu negócio.",
    icon: Compass,
  },
  {
    title: "Maior Eficiência",
    description:
      "Otimização de processos internos com eliminação de gargalos, automação de tarefas e redução de custos operacionais.",
    icon: Shield,
  },
  {
    title: "Inovação Aplicada",
    description:
      "Aplicação das melhores práticas e tecnologias — IA, automação, dados — adaptadas à realidade e ao momento da sua empresa.",
    icon: Sparkles,
  },
  {
    title: "Resultados Mensuráveis",
    description:
      "KPIs definidos desde o início, dashboards de acompanhamento e ROI calculado ao longo de todo o projeto.",
    icon: BarChart3,
  },
];

const steps = [
  {
    label: "01",
    title: "Diagnóstico",
    description:
      "Mapeamento completo da situação atual: processos, tecnologia, pessoas e oportunidades de melhoria com maior impacto.",
    icon: Brain,
  },
  {
    label: "02",
    title: "Planejamento",
    description:
      "Definição de estratégia, priorização de iniciativas, roadmap de transformação e metas claras para cada etapa.",
    icon: Layers,
  },
  {
    label: "03",
    title: "Implementação",
    description:
      "Execução das soluções priorizadas com metodologias ágeis, gestão de mudança e suporte à adoção pela equipe.",
    icon: Rocket,
  },
  {
    label: "04",
    title: "Monitoramento",
    description:
      "Acompanhamento contínuo dos indicadores, ajustes de rota e relatórios periódicos para garantir os resultados esperados.",
    icon: BadgeCheck,
  },
];

const faqs = [
  {
    question: "O que inclui uma consultoria digital?",
    answer:
      "Nossa consultoria digital inclui diagnóstico da situação atual, definição de estratégia, roadmap de transformação, acompanhamento da implementação e monitoramento de resultados. Cobrimos processos, tecnologia, marketing digital e cultura organizacional conforme a necessidade de cada empresa.",
  },
  {
    question: "Minha empresa precisa de consultoria digital?",
    answer:
      "Se sua empresa enfrenta processos manuais e ineficientes, dificuldade de escalar, baixa visibilidade online ou quer adotar tecnologias como IA e automação, a consultoria digital é o ponto de partida ideal. Atendemos desde pequenas empresas até organizações de grande porte.",
  },
  {
    question: "Qual a diferença entre consultoria digital e agência de marketing?",
    answer:
      "Uma agência de marketing foca na execução de campanhas e canais de comunicação. A consultoria digital tem escopo mais amplo: envolve estratégia, processos internos, tecnologia, cultura e transformação organizacional. As duas são complementares e podem atuar juntas.",
  },
  {
    question: "Quanto tempo dura um projeto de consultoria digital?",
    answer:
      "Depende do escopo. Um diagnóstico inicial pode ser entregue em 2 a 4 semanas. Projetos de transformação digital mais abrangentes costumam durar de 3 a 12 meses. Trabalhamos com sprints curtos para que os resultados apareçam ao longo do projeto, não só no final.",
  },
  {
    question: "Como é mensurado o resultado da consultoria?",
    answer:
      "Definimos KPIs no início do projeto e acompanhamos periodicamente. Os indicadores variam conforme o objetivo: redução de custo operacional, aumento de receita, melhora em NPS, velocidade de processos ou adoção de novas tecnologias.",
  },
];

const ConsultoriaDigital = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Consultoria Digital",
      name: "Consultoria Digital e Transformação Digital para Empresas",
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
        "Consultoria digital estratégica para transformação de empresas em Recife e no Brasil. Diagnóstico, planejamento, implementação e monitoramento com metodologias comprovadas.",
      offers: {
        "@type": "Offer",
        description:
          "Consultoria digital com metodologias comprovadas: Design Thinking, Agile e Lean Startup para empresas em Recife e em todo o Brasil.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Consultoria Digital",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnóstico Digital" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estratégia de Transformação Digital" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Implementação de Tecnologia" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Otimização de Processos" } },
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
          name: "Consultoria Digital",
          item: "https://www.simpli.ia.br/servicos/consultoria-digital",
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
        title="Consultoria Digital | Transformação Digital para Empresas"
        description="Consultoria digital estratégica para transformar empresas com tecnologia e inovação. Diagnóstico, planejamento e implementação sob medida — em Recife e em todo o Brasil."
        keywords="consultoria digital, transformação digital, consultoria de tecnologia, digitalização de empresas, estratégia digital, consultoria digital Recife, inovação empresarial, otimização de processos, Design Thinking, Agile"
        canonical="/servicos/consultoria-digital"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(28,51,36,0.9), rgba(12,20,15,0.92)), url('${HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Consultoria Digital e Transformação Digital para Empresas
            </h1>
            <p className="max-w-2xl text-lg text-white/75 md:text-xl">
              Acompanhamos sua empresa do diagnóstico à execução — com estratégia, tecnologia e metodologias comprovadas para gerar resultado real.
            </p>
            <Button
              asChild
              className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </div>
        </section>

        {/* O que é */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                O que é Consultoria Digital?
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Consultoria digital é o processo de orientar empresas na transformação dos seus negócios por meio de tecnologia e inovação — desde a análise estratégica até a implementação de soluções que geram eficiência e crescimento.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Trabalhamos com metodologias comprovadas como Design Thinking, Agile e Lean Startup, garantindo que cada iniciativa seja focada em resultado mensurável. Não entregamos apenas diagnóstico: acompanhamos a execução e medimos o impacto real no negócio.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Atendemos empresas em Recife, Pernambuco e em todo o Brasil — desde pequenos negócios que dão os primeiros passos no digital até médias e grandes organizações que precisam escalar suas operações com tecnologia.
              </p>
            </div>
            <Card className="border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <CardContent className="flex flex-col gap-3 p-6 md:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4ADE80] to-white text-black shadow-lg">
                  <Sparkles size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Metodologias Comprovadas
                </h3>
                <p className="text-sm text-white/70">
                  Design Thinking, Agile e Lean Startup aplicadas ao contexto real da sua empresa para gerar resultado com menos risco.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Por que investir em Consultoria Digital?
            </h2>
            <p className="mt-2 text-base text-white/70">
              Transformação com estratégia, execução e resultados mensuráveis — do início ao fim.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <Card
                  key={item.title}
                  className="border-white/10 bg-white/5 shadow-lg shadow-black/30"
                >
                  <CardContent className="flex flex-col gap-3 p-5 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4ADE80] to-white text-black">
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

        {/* Processo */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Trabalhamos</h2>
            <p className="mt-2 text-base text-white/70">
              Processo estruturado em 4 etapas para transformar seu negócio com segurança e resultado
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-lg shadow-black/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4ADE80] to-white text-black font-semibold">
                    {step.label}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                    <step.icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Case de Sucesso</h2>
            <p className="mt-2 text-base text-white/70">
              Como dobramos a eficiência e triplicamos as vendas de uma indústria tradicional
            </p>
            <Card className="mt-10 border-white/10 bg-[#0C140F]/80 shadow-2xl shadow-black/40">
              <CardContent className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8 md:items-center">
                <div className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    Indústria Moderna — Transformação Completa
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75">
                    Empresa tradicional que precisava se adaptar ao digital. Nossa consultoria incluiu:
                  </p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {[
                      "Digitalização de processos internos",
                      "Implementação de CRM e ERP integrados",
                      "Estratégia de marketing digital orientada a dados",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#4ADE80]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                    "A consultoria foi fundamental para nossa transformação. Aumentamos a eficiência em 70% e abrimos novos mercados."
                    <span className="mt-2 block text-xs text-white/60">
                      — Carlos Mendes, CEO da Indústria Moderna
                    </span>
                  </blockquote>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#123026] via-[#16402F] to-[#0F1D15] p-6 text-center shadow-inner shadow-black/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4ADE80] to-white text-black">
                    <Target size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Resultados</h4>
                  <div className="flex flex-col gap-2 text-sm text-white/80">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-white">70%</span>
                      <span className="text-xs text-white/60">Mais eficiência</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-white">3x</span>
                      <span className="text-xs text-white/60">Mais vendas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mt-2 text-base text-white/70">
                Dúvidas sobre consultoria digital e transformação digital
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
        <section
          className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20"
          style={{
            backgroundImage: "linear-gradient(to right, #1C3324, #16402F, #0F1D15)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para transformar sua empresa com estratégia digital?
            </h2>
            <p className="mt-3 text-base text-white/75 md:text-lg">
              Fale com nosso time e descubra como podemos acelerar a transformação digital do seu negócio com resultado mensurável.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Falar com Especialista
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

export default ConsultoriaDigital;
