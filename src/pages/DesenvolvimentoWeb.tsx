import { useMemo } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Laptop,
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
      "linear-gradient(120deg, #9cff1d 0%, #10d6a1 55%, #00c6ff 100%)",
    [],
  );

  return (
    <div className="bg-[#0C140F] text-white">
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{ backgroundImage: heroGradient }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_40%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Desenvolvimento Web
            </h1>
            <p className="max-w-2xl text-lg text-white/90 md:text-xl">
              Criamos sites e landing pages modernos e responsivos que convertem
              visitantes em clientes.
            </p>
            <Button
              asChild
              className="h-12 rounded-xl bg-white px-7 text-base font-semibold text-[#0C140F] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-[#0f172a] md:px-10 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                O que é Desenvolvimento Web?
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                O desenvolvimento web é o processo de criação de sites e aplicações
                web que funcionam na internet. Envolve desde a criação de sites
                institucionais até e-commerces complexos e aplicações web
                avançadas.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Utilizamos as tecnologias mais modernas do mercado, como React,
                Next.js, TypeScript e Node.js, para criar soluções que não apenas
                impressionam visualmente, mas também oferecem performance
                excepcional e experiência de usuário superior.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Nossa abordagem combina design criativo com desenvolvimento
                técnico robusto, garantindo que cada projeto seja único, funcional e
                alinhado com os objetivos de negócio dos nossos clientes.
              </p>
            </div>
            <Card className="w-full max-w-md border-slate-100 bg-slate-50 shadow-md">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#9cff1d] to-[#00c6ff] text-white shadow-lg">
                  <Monitor size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Tecnologias Modernas
                </h3>
                <p className="text-sm text-slate-600">
                  React, Next.js, TypeScript, Node.js e muito mais para criar
                  experiências web excepcionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#f7f9fb] px-6 py-16 text-[#0f172a] md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Benefícios do Desenvolvimento Web
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Por que escolher nossos serviços de desenvolvimento web?
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <Card
                  key={item.title}
                  className="border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <CardContent className="flex flex-col gap-3 p-5 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d7f7a6] text-[#0f172a]">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-[#0f172a] md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Fazemos</h2>
            <p className="mt-2 text-base text-slate-600">
              Nosso processo de desenvolvimento web em 4 etapas
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#9cff1d] to-[#00c6ff] text-base font-semibold text-white shadow-md">
                    {step.label}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fb] px-6 py-16 text-[#0f172a] md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Cases de Sucesso</h2>
            <p className="mt-2 text-base text-slate-600">
              Conheça alguns dos projetos que desenvolvemos e os resultados alcançados
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-8">
            {cases.map((item, idx) => (
              <Card
                key={item.title}
                className="overflow-hidden border-slate-100 bg-white shadow-md"
              >
                <CardContent className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
                  <div className="space-y-4 text-left">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 text-[#22c55e]"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <blockquote className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-700">
                      {item.quote}
                      <span className="mt-2 block text-xs text-slate-500">
                        {item.author}
                      </span>
                    </blockquote>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-100 ${
                      idx % 2 === 0
                        ? "bg-gradient-to-br from-[#e8fff3] to-[#dff7ff]"
                        : "bg-gradient-to-br from-[#e9e9ff] to-[#dfe9ff]"
                    } p-6 text-center`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#9cff1d] to-[#00c6ff] text-white shadow-lg">
                      {idx === 0 ? <Rocket size={22} /> : <BarChart3 size={22} />}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.resultTitle}
                    </h4>
                    <div className="flex flex-col gap-1 text-sm text-slate-700">
                      {item.resultStats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-xl font-semibold text-slate-900">
                            {stat.value}
                          </span>
                          <span className="text-xs text-slate-600">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    {item.badge && (
                      <span className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#2563eb] shadow">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 text-white md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para iniciar seu projeto web?
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Fale com nosso time e descubra como podemos criar um site moderno,
              rápido e seguro para o seu negócio.
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