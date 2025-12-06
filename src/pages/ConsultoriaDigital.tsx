import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brain,
  CheckCircle2,
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

const HERO_BG =
  "https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEl0IBtmnC1gi0eAP7XFElWz8cvS9UtBdY3wsV";

const benefits = [
  {
    title: "Estratégia Clara",
    description: "Roadmap estruturado para transformação digital.",
    icon: Compass,
  },
  {
    title: "Maior Eficiência",
    description: "Otimização de processos e redução de custos.",
    icon: Shield,
  },
  {
    title: "Inovação",
    description: "Aplicação das melhores práticas e tecnologias.",
    icon: Sparkles,
  },
  {
    title: "Resultados Mensuráveis",
    description: "KPIs claros e ROI acompanhado em tempo real.",
    icon: BarChart3,
  },
];

const steps = [
  {
    label: "01",
    title: "Diagnóstico",
    description: "Análise completa da situação atual.",
    icon: Brain,
  },
  {
    label: "02",
    title: "Planejamento",
    description: "Estratégia e plano detalhado de transformação.",
    icon: Layers,
  },
  {
    label: "03",
    title: "Implementação",
    description: "Execução das soluções priorizadas.",
    icon: Rocket,
  },
  {
    label: "04",
    title: "Monitoramento",
    description: "Acompanhamento e otimização contínua.",
    icon: BadgeCheck,
  },
];

const ConsultoriaDigital = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Consultoria Digital",
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
    },
    description: "Estratégia completa de transformação digital sob medida para sua empresa. Acompanhamos sua transformação digital do planejamento à execução, integrando tecnologia e processos.",
    offers: {
      "@type": "Offer",
      description: "Consultoria digital com metodologias comprovadas: Design Thinking, Agile, Lean Startup",
    },
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Consultoria Digital | Transformação Digital Estratégica"
        description="Estratégia completa de transformação digital sob medida para sua empresa. Consultoria digital com metodologias comprovadas: Design Thinking, Agile, Lean Startup."
        keywords="consultoria digital, transformação digital, estratégia digital, Design Thinking, Agile, Lean Startup, digitalização, inovação, tecnologia, Recife"
        canonical="/servicos/consultoria-digital"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
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
              Consultoria Digital
            </h1>
            <p className="max-w-2xl text-lg text-white/75 md:text-xl">
              Estratégia completa de transformação digital sob medida para sua empresa.
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

        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                O que é Consultoria Digital?
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Consultoria digital é o processo de orientar empresas na transformação dos seus
                negócios através de tecnologia e inovação, desde análise estratégica até
                implementação de soluções.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Trabalhamos com metodologias comprovadas, garantindo que a transformação seja
                eficaz, mensurável e sustentável.
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
                  Design Thinking, Agile, Lean Startup e outras abordagens inovadoras aplicadas ao seu contexto.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Benefícios da Consultoria Digital
            </h2>
            <p className="mt-2 text-base text-white/70">
              Por que investir em consultoria digital?
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

        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Consultamos</h2>
            <p className="mt-2 text-base text-white/70">
              Nosso processo de consultoria digital
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

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Case de Sucesso</h2>
            <p className="mt-2 text-base text-white/70">
              Veja como transformamos um cliente com consultoria digital
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
                    “A consultoria foi fundamental para nossa transformação. Aumentamos a eficiência
                    em 70% e abrimos novos mercados.”
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

        <section
          className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1C3324, #16402F, #0F1D15)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Entre em Contato</h2>
            <p className="mt-3 text-base text-white/75 md:text-lg">
              Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar com soluções digitais inovadoras.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Falar com especialista
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