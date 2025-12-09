import { useMemo } from "react";
import {
  BarChart3,
  CheckCircle2,
  Monitor,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";

const benefits = [
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sites rápidos e responsivos que carregam em segundos",
  },
  {
    icon: Search,
    title: "SEO Avançado",
    description: "Otimização completa para motores de busca",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Funciona perfeitamente em todos os dispositivos",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Proteção completa contra ameaças digitais",
  },
];

const steps = [
  {
    label: "01",
    title: "Discovery & Planning",
    description: "Análise profunda das necessidades e objetivos do projeto",
  },
  {
    label: "02",
    title: "Design & Prototyping",
    description: "Criação de wireframes e protótipos interativos",
  },
  {
    label: "03",
    title: "Development",
    description: "Desenvolvimento com as melhores tecnologias do mercado",
  },
  {
    label: "04",
    title: "Testing & Launch",
    description: "Testes rigorosos e lançamento otimizado",
  },
];

const cases = [
  {
    title: "Marta Amália Estética - Transformação Digital",
    description:
      "A Marta Amália Estética precisava de um site moderno e responsivo que refletisse a qualidade e profissionalismo dos seus serviços. Desenvolvemos uma solução completa que incluiu:",
    bullets: [
      "Site responsivo com design moderno",
      "Otimização completa para SEO",
      "Landing page otimizada para conversões",
    ],
    quote:
      "“A Simplí transformou completamente nossa presença online. O novo site www.martaamaliaestetica.com.br aumentou significativamente nosso tráfego orgânico e conversões. Agora nossos clientes encontram facilmente nossos serviços e conseguimos mais agendamentos.”",
    author: "– Marta Amália, Esteticista",
    resultTitle: "Resultados",
    resultStats: [
      { label: "Aumento em conversões", value: "200%" },
      { label: "Mais tráfego orgânico", value: "4x" },
    ],
  },
  {
    title: "Consulta Popular 2025",
    description:
      "A Prefeitura de Jaboatão dos Guararapes precisava de um sistema para realizar a consulta popular que é fundamental para o PPA (Plano Plurianual). Foi desenvolvido um portal integrado ao sistema para receber a consulta da população.",
    bullets: [
      "Portal integrado ao sistema municipal",
      "10 áreas de avaliação para o cidadão",
      "Sistema responsivo e acessível",
      "Integração com banco de dados municipal",
    ],
    quote:
      "“O portal superou todas as expectativas, batendo recorde de participação e demonstrando a eficiência da solução desenvolvida pela Simplí.”",
    author:
      "– Norma Selene Guimarães, Secretária Executiva de Planejamento e Gestão",
    resultTitle: "Resultados Impressionantes",
    resultStats: [
      { label: "Acessos únicos", value: "+10 mil" },
      { label: "Respostas coletadas", value: "40 mil" },
    ],
    badge: "Recorde de cadastros batido!",
  },
];

const DesenvolvimentoWeb = () => {
  const heroGradient = useMemo(
    () =>
      "linear-gradient(120deg, rgba(12,20,15,0.8), rgba(28,51,36,0.85)), url('/fundo-devweb.webp')",
    [],
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Desenvolvimento Web",
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    description: "Criamos sites e landing pages modernos e responsivos que convertem visitantes em clientes. Utilizamos React, Next.js, TypeScript e Node.js para criar soluções com performance excepcional.",
    offers: {
      "@type": "Offer",
      description: "Desenvolvimento web completo com foco em SEO, performance e experiência do usuário",
    },
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Desenvolvimento Web | Sites Modernos e Responsivos"
        description="Criamos sites e landing pages modernos e responsivos que convertem visitantes em clientes. Sites otimizados para SEO, performance e experiência do usuário. Tecnologias: React, Next.js, TypeScript."
        keywords="desenvolvimento web, criação de sites, landing pages, sites responsivos, React, Next.js, TypeScript, SEO, performance web, sites institucionais, desenvolvimento frontend, Recife"
        canonical="/servicos/desenvolvimento-web"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{
            backgroundImage: heroGradient,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">Desenvolvimento Web</h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              Criamos sites e landing pages modernos e responsivos que convertem visitantes em clientes.
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

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">O que é Desenvolvimento Web?</h2>
              <p className="text-base leading-relaxed text-white/70">
                O desenvolvimento web é o processo de criação de sites e aplicações web que funcionam na internet. Envolve
                desde a criação de sites institucionais até e-commerces complexos e aplicações web avançadas.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Utilizamos as tecnologias mais modernas do mercado, como React, Next.js, TypeScript e Node.js, para criar
                soluções que não apenas impressionam visualmente, mas também oferecem performance excepcional e experiência
                de usuário superior.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Nossa abordagem combina design criativo com desenvolvimento técnico robusto, garantindo que cada projeto seja
                único, funcional e alinhado com os objetivos de negócio dos nossos clientes.
              </p>
            </div>
            <Card className="border-white/10 bg-[#0C140F]/80 shadow-2xl shadow-black/30">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                  <Monitor size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">Tecnologias Modernas</h3>
                <p className="text-sm text-white/65">
                  React, Next.js, TypeScript, Node.js e muito mais para criar experiências web excepcionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Benefícios do Desenvolvimento Web
            </h2>
            <p className="mt-2 text-base text-white/70">
              Por que escolher nossos serviços de desenvolvimento web?
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

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Fazemos</h2>
            <p className="mt-2 text-base text-white/70">
              Nosso processo de desenvolvimento web em passos claros e sequenciais
            </p>
            <div className="relative mx-auto mt-12 max-w-4xl space-y-8">
              <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-white/10 sm:block" />
              {steps.map((step, idx) => (
                <div key={step.label} className="relative flex gap-4 sm:gap-6">
                  <div className="relative z-10 mt-1 flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-base font-semibold text-black shadow-md">
                      {step.label}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="hidden h-full w-px bg-white/15 sm:block" />
                    )}
                  </div>
                  <Card className="flex-1 border-white/10 bg-white/5 shadow-2xl shadow-black/20">
                    <CardContent className="p-5 text-left sm:p-6">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                          Etapa {idx + 1}
                        </p>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <p className="text-sm text-white/70">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Cases de Sucesso</h2>
            <p className="mt-2 text-base text-white/70">
              Conheça alguns dos projetos que desenvolvemos e os resultados alcançados
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-8">
            {cases.map((item, idx) => (
              <Card
                key={item.title}
                className="overflow-hidden border-white/10 bg-[#0F1D15]/80 shadow-2xl shadow-black/40"
              >
                <CardContent className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
                  <div className="space-y-4 text-left">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/75">{item.description}</p>
                    <ul className="space-y-2 text-sm text-white/75">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 text-[#4ADE80]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <blockquote className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                      {item.quote}
                      <span className="mt-2 block text-xs text-white/60">{item.author}</span>
                    </blockquote>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#123026] via-[#16402F] to-[#0F1D15] p-6 text-center shadow-inner shadow-black/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black shadow-lg">
                      {idx === 0 ? <Rocket size={22} /> : <BarChart3 size={22} />}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{item.resultTitle}</h4>
                    <div className="flex flex-col gap-1 text-sm text-white/80">
                      {item.resultStats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-xl font-semibold text-white">{stat.value}</span>
                          <span className="text-xs text-white/60">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    {item.badge && (
                      <span className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para iniciar seu projeto web?
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Fale com nosso time e descubra como podemos criar um site moderno, rápido e seguro para o seu negócio.
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

export default DesenvolvimentoWeb;
