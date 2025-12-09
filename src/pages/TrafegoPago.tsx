import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
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
const HERO_BG =
  "/trafego-pago.webp";

const benefits = [
  {
    icon: Target,
    title: "Segmentação Precisa",
    description: "Atinga exatamente quem tem interesse no seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Resultados Mensuráveis",
    description: "Métricas detalhadas e ROI calculável.",
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    description: "Aumente investimentos conforme necessidade.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Rápidos",
    description: "Ganhe tração em dias, não em meses.",
  },
];

const process = [
  {
    step: "01",
    title: "Pesquisa de Mercado",
    description: "Análise de concorrência e público-alvo para acertar a estratégia.",
    tools: ["Pesquisa", "Benchmark", "Personas"],
  },
  {
    step: "02",
    title: "Estratégia de Campanha",
    description: "Definição de objetivos, oferta e canais com metas claras.",
    tools: ["Objetivos", "Oferta", "Canais"],
  },
  {
    step: "03",
    title: "Execução",
    description: "Criação de anúncios, criativos e landing pages que convertem.",
    tools: ["Criativos", "Landing", "Tags"],
  },
  {
    step: "04",
    title: "Otimização",
    description: "Ajustes semanais, testes A/B e foco em ROI contínuo.",
    tools: ["A/B", "CRO", "Relatórios"],
  },
];

const TrafegoPago = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % process.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const progress =
    process.length > 1 ? (activeStep / (process.length - 1)) * 100 : 100;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Gestão de Tráfego Pago",
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
    },
    description: "Planejamos, executamos e otimizamos campanhas em Google Ads, Meta Ads e LinkedIn Ads para maximizar ROI com inteligência e velocidade. Segmentação avançada e remarketing.",
    offers: {
      "@type": "Offer",
      description: "Gestão completa de campanhas de tráfego pago com foco em ROI e resultados mensuráveis",
    },
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Tráfego Pago | Google Ads, Facebook Ads e LinkedIn Ads"
        description="Gestão completa de campanhas de tráfego pago em Google Ads, Meta Ads e LinkedIn Ads. Maximize ROI com segmentação avançada, remarketing e otimização contínua."
        keywords="tráfego pago, Google Ads, Facebook Ads, LinkedIn Ads, gestão de campanhas, remarketing, segmentação, ROI, marketing digital, anúncios online, Recife"
        canonical="/servicos/trafego-pago"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
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
              Tráfego Pago que Gera Resultados Reais
            </h1>
            <p className="max-w-3xl text-lg text-white/75 md:text-xl">
              Planejamos, executamos e otimizamos campanhas em Google Ads, Meta Ads
              e LinkedIn Ads para maximizar ROI com inteligência e velocidade.
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

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">O que é Tráfego Pago?</h2>
              <p className="text-base leading-relaxed text-white/70">
                Tráfego pago é investir em anúncios para atrair visitantes qualificados de forma
                rápida e mensurável. Atuamos em múltiplas plataformas para encontrar seu público no
                momento certo.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Utilizamos segmentação avançada, remarketing e otimização contínua para que cada real
                investido gere retorno claro, com dashboards e KPIs acompanhados em tempo real.
              </p>
            </div>
            <Card className="border border-white/10 bg-[#0C140F]/80 shadow-2xl shadow-black/40">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                  <ArrowUpRight size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">Plataformas Avançadas</h3>
                <p className="text-sm text-white/70">
                  Google Ads, Meta Ads, LinkedIn Ads e analytics para decisões baseadas em dados.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Benefícios do Tráfego Pago</h2>
            <p className="mt-3 text-base text-white/70">
              Resultados rápidos, medidos e escaláveis com foco em ROI.
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

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Gestão Completa de Campanhas</h2>
            <p className="mt-3 text-base text-white/70">
              Linha do tempo horizontal com destaque automático em cada etapa.
            </p>

            <div className="relative mx-auto mt-10 max-w-5xl space-y-6">
              <div className="flex itemscenter justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                {process.map((item, idx) => (
                  <span key={item.step} className={idx === activeStep ? "text-white" : ""}>
                    Step {idx + 1}
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
                {process.map((_, idx) => {
                  const left = process.length > 1 ? (idx / (process.length - 1)) * 100 : 0;
                  const isActive = idx === activeStep;
                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white/50 shadow-[0_0_0_6px_rgba(255,255,255,0.08)] transition"
                      style={{
                        left: `calc(${left}% - 6px)`,
                        transform: `translateY(-50%) scale(${isActive ? 1.15 : 1})`,
                        background: isActive
                          ? "linear-gradient(135deg,#86efac,#ffffff)"
                          : "rgba(255,255,255,0.55)",
                      }}
                    />
                  );
                })}
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {process.map((item, idx) => {
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

        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Resultados que falam por si
            </h2>
            <p className="mt-3 text-base text-white/70">
              Exemplo real de otimização e crescimento em e-commerce.
            </p>
            <Card className="mt-10 overflow-hidden border border-white/10 bg-[#0F1D15]/80 shadow-2xl shadow-black/40">
              <CardContent className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
                <div className="space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <Radar size={14} /> E-commerce Plus - Google Ads
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
                    “A Simplí transformou nossas campanhas, aumentando vendas em 200% e reduzindo o CPA
                    em 40%.”
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

        <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para acelerar com Tráfego Pago?
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Fale com nosso time e descubra o plano ideal para crescer com eficiência e controle.
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
