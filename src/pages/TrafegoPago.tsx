import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Radar,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";
const HERO_BG = "/trafego-pago.webp";

const benefits = [
  {
    icon: Target,
    title: "Segmentação Precisa",
    description:
      "Alcance exatamente quem tem interesse no seu produto ou serviço, com base em intenção de busca, interesses e comportamento de compra.",
  },
  {
    icon: BarChart3,
    title: "Resultados Mensuráveis",
    description:
      "Dashboards com métricas detalhadas em tempo real: CPL, CPA, ROAS e ROI calculados com transparência total.",
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    description:
      "Aumente o investimento conforme os resultados crescem. Campanhas desenhadas para escalar sem perder eficiência.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Rápidos",
    description:
      "Comece a receber leads e vendas em dias — sem esperar meses para ver retorno, como acontece só com SEO orgânico.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pesquisa de Mercado",
    description:
      "Análise de concorrência, público-alvo e palavras-chave para definir a estratégia com base em dados reais.",
    tools: ["Pesquisa", "Benchmark", "Personas"],
  },
  {
    step: "02",
    title: "Estratégia de Campanha",
    description:
      "Definição de objetivos, oferta, canais e orçamento com metas de CPL e ROAS estabelecidas antes do início.",
    tools: ["Objetivos", "Oferta", "Canais"],
  },
  {
    step: "03",
    title: "Execução",
    description:
      "Criação de anúncios, criativos e landing pages otimizadas para converter o clique em lead ou venda.",
    tools: ["Criativos", "Landing", "Tags"],
  },
  {
    step: "04",
    title: "Otimização Contínua",
    description:
      "Ajustes semanais baseados em dados, testes A/B e foco constante em reduzir custo e aumentar ROI.",
    tools: ["A/B", "CRO", "Relatórios"],
  },
];

const faqs = [
  {
    question: "Qual o orçamento mínimo para anunciar no Google Ads?",
    answer:
      "Não há um mínimo exigido pelo Google, mas recomendamos a partir de R$ 1.000/mês em mídia para que os algoritmos tenham dados suficientes para otimizar os resultados. O orçamento ideal depende do seu mercado, da concorrência e dos objetivos da campanha.",
  },
  {
    question: "Quanto tempo leva para ver resultados com tráfego pago?",
    answer:
      "As primeiras semanas servem para aprendizado e calibração dos algoritmos. Em geral, resultados consistentes aparecem a partir do 2º ou 3º mês de campanha, quando já há dados suficientes para otimização contínua. Muitos clientes já veem leads na primeira semana.",
  },
  {
    question: "Qual a diferença entre Google Ads e Meta Ads (Facebook e Instagram)?",
    answer:
      "O Google Ads captura intenção de compra: você aparece quando alguém já está buscando seu produto ou serviço. O Meta Ads (Facebook e Instagram) é mais indicado para criar demanda e alcançar públicos por interesse, comportamento e dados demográficos. As duas plataformas são complementares.",
  },
  {
    question: "Vocês fazem gestão completa ou só a criação das campanhas?",
    answer:
      "Fazemos a gestão completa: estratégia, criação de campanhas, criativos, configuração de rastreamento (pixels e conversões), relatórios periódicos e otimização contínua baseada em dados. Você foca no seu negócio enquanto cuidamos dos anúncios.",
  },
  {
    question: "Como funciona o acompanhamento dos resultados?",
    answer:
      "Você recebe relatórios com os principais indicadores: investimento, cliques, leads gerados, custo por lead (CPL), taxa de conversão e ROI. Também configuramos painéis de acompanhamento em tempo real para você monitorar quando quiser.",
  },
];

const TrafegoPago = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const progress =
    processSteps.length > 1 ? (activeStep / (processSteps.length - 1)) * 100 : 100;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Gestão de Tráfego Pago",
      name: "Gestão de Tráfego Pago — Google Ads, Meta Ads e LinkedIn Ads",
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
        "Gestão completa de campanhas de tráfego pago em Google Ads, Meta Ads e LinkedIn Ads para gerar leads e vendas com ROI mensurável.",
      offers: {
        "@type": "Offer",
        description:
          "Gestão completa de campanhas de tráfego pago com foco em ROI, CPL e resultados mensuráveis para empresas em Recife e em todo o Brasil.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Tráfego Pago",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads (Facebook e Instagram)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "LinkedIn Ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remarketing" } },
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
          name: "Tráfego Pago",
          item: "https://www.simpli.ia.br/servicos/trafego-pago",
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
        title="Gestão de Tráfego Pago | Google Ads, Meta Ads e LinkedIn Ads"
        description="Gestão completa de campanhas de tráfego pago em Google Ads, Meta Ads e LinkedIn Ads. Agência de tráfego pago em Recife com foco em leads, vendas e ROI mensurável."
        keywords="tráfego pago, gestão de tráfego pago, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, agência de tráfego pago, tráfego pago Recife, gestor de tráfego, campanhas de anúncios, remarketing, geração de leads, ROI"
        canonical="/servicos/trafego-pago"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(12,20,15,0.86), rgba(28,51,36,0.8)), url('${HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Gestão de Tráfego Pago que Gera Leads e Vendas
            </h1>
            <p className="max-w-3xl text-lg text-white/75 md:text-xl">
              Planejamos, executamos e otimizamos campanhas em Google Ads, Meta Ads e LinkedIn Ads para maximizar ROI com inteligência e velocidade — para empresas em Recife e em todo o Brasil.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 min-w-[180px] rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">O que é Tráfego Pago?</h2>
              <p className="text-base leading-relaxed text-white/70">
                Tráfego pago é investir em anúncios para atrair visitantes qualificados de forma rápida e mensurável. Diferente do SEO orgânico, os resultados aparecem imediatamente — e cada real investido tem retorno rastreável.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Atuamos em múltiplas plataformas — Google Ads, Meta Ads (Facebook e Instagram) e LinkedIn Ads — para encontrar seu público no momento certo, com a mensagem certa. Utilizamos segmentação avançada, remarketing e otimização contínua para que cada campanha gere leads e vendas reais.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Atendemos empresas em Recife, Pernambuco e em todo o Brasil. Nosso processo inclui estratégia, execução e relatórios com KPIs acompanhados semanalmente — sem achismo, só dados.
              </p>
            </div>
            <Card className="border border-white/10 bg-[#0C140F]/80 shadow-2xl shadow-black/40">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                  <ArrowUpRight size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">Multiplataforma</h3>
                <p className="text-sm text-white/70">
                  Google Ads, Meta Ads, LinkedIn Ads e analytics integrado para decisões baseadas em dados reais.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Por que investir em Tráfego Pago?
            </h2>
            <p className="mt-3 text-base text-white/70">
              Resultados rápidos, mensuráveis e escaláveis — com foco em ROI desde o primeiro dia.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <Card
                  key={item.title}
                  className="border border-white/10 bg-white/5 shadow-lg shadow-black/30"
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

        {/* Como gerenciamos */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Como Gerenciamos Suas Campanhas
            </h2>
            <p className="mt-3 text-base text-white/70">
              Processo estruturado em 4 etapas para máxima eficiência e controle dos investimentos.
            </p>

            <div className="relative mx-auto mt-10 max-w-5xl space-y-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                {processSteps.map((item, idx) => (
                  <span key={item.step} className={idx === activeStep ? "text-white" : ""}>
                    Etapa {idx + 1}
                  </span>
                ))}
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-[#86efac] via-white to-[#86efac]"
                  style={{
                    width: `${progress}%`,
                    transition: "width 1.2s ease",
                  }}
                />
                {processSteps.map((_, idx) => {
                  const left = processSteps.length > 1 ? (idx / (processSteps.length - 1)) * 100 : 0;
                  const isActive = idx === activeStep;
                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full transition"
                      style={{
                        left: `calc(${left}% - 6px)`,
                        transform: `translateY(-50%) scale(${isActive ? 1.15 : 1})`,
                        background: isActive
                          ? "linear-gradient(135deg,#86efac,#ffffff)"
                          : "rgba(255,255,255,0.55)",
                        boxShadow: isActive ? "0 0 0 6px rgba(255,255,255,0.08)" : "none",
                      }}
                    />
                  );
                })}
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {processSteps.map((item, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <Card
                      key={item.step}
                      className={`relative overflow-hidden border bg-white/5 transition-all duration-500 ${
                        isActive
                          ? "scale-[1.02] border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-2 ring-white/25"
                          : "border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.25)]"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(134,239,172,0.12),_transparent_60%)]" />
                      <CardContent className="relative space-y-4 p-6 text-left">
                        <div className="flex items-center text-xs uppercase tracking-[0.16em] text-white/70">
                          <span className="font-semibold text-white">{item.step}</span>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px] text-white/70">
                          {item.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-white/10 bg-white/5 px-2 py-1"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Case */}
        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Case de Sucesso: E-commerce
            </h2>
            <p className="mt-3 text-base text-white/70">
              Como dobramos as vendas e reduzimos o custo por aquisição de um e-commerce em 40%.
            </p>
            <Card className="mt-10 overflow-hidden border border-white/10 bg-[#0F1D15]/80 shadow-2xl shadow-black/40">
              <CardContent className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
                <div className="space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <Radar size={14} /> E-commerce Plus — Google Ads & Meta Ads
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">
                    Implementamos uma estratégia completa de tráfego pago com:
                  </p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {[
                      "Campanhas de pesquisa e display no Google Ads",
                      "Remarketing no Facebook e Instagram",
                      "Otimização contínua baseada em dados",
                      "KPIs de ROI e CPA monitorados semanalmente",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check size={16} className="text-[#4ADE80]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                    "A Simplí transformou nossas campanhas, aumentando vendas em 200% e reduzindo o CPA em 40%."
                    <span className="mt-2 block text-xs text-white/60">
                      — Ana Costa, Marketing Manager
                    </span>
                  </blockquote>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#123026] via-[#16402F] to-[#0F1D15] p-6 text-center shadow-inner shadow-black/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                    <BarChart3 size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Resultados</h4>
                  <div className="flex flex-col gap-1 text-sm text-white/80">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-white">200%</span>
                      <span className="text-xs text-white/60">Aumento em vendas</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-white">40%</span>
                      <span className="text-xs text-white/60">Redução de CPA</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mt-2 text-base text-white/70">
                Dúvidas sobre tráfego pago, Google Ads e Meta Ads
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

        {/* CTA Final */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para gerar mais leads e vendas com Tráfego Pago?
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Fale com nosso time e descubra o plano ideal para crescer com eficiência e controle total sobre seus anúncios.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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

export default TrafegoPago;
