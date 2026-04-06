import { useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
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
    description:
      "Sites com carregamento em menos de 2 segundos, melhorando a experiência do usuário e o posicionamento no Google.",
  },
  {
    icon: Search,
    title: "SEO Técnico Avançado",
    description:
      "Estrutura de URLs amigáveis, meta tags, dados estruturados, sitemap e Core Web Vitals otimizados desde o primeiro dia.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description:
      "Layout adaptável que funciona perfeitamente em celular, tablet e desktop — onde seus clientes estiverem.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description:
      "HTTPS, proteção contra ataques, backups automáticos e boas práticas de segurança para manter seu site protegido.",
  },
];

const steps = [
  {
    label: "01",
    title: "Descoberta e Planejamento",
    description:
      "Análise das necessidades, objetivos de negócio e público-alvo para definir a melhor estratégia para o projeto.",
  },
  {
    label: "02",
    title: "Design e Prototipagem",
    description:
      "Criação de wireframes, identidade visual e protótipos interativos aprovados pelo cliente antes do desenvolvimento.",
  },
  {
    label: "03",
    title: "Desenvolvimento",
    description:
      "Codificação com as melhores tecnologias do mercado: React, Next.js, TypeScript e Node.js.",
  },
  {
    label: "04",
    title: "Testes e Publicação",
    description:
      "Testes de performance, acessibilidade, SEO técnico e lançamento com monitoramento contínuo.",
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
      '\u201cA Simplí transformou completamente nossa presença online. O novo site www.martaamaliaestetica.com.br aumentou significativamente nosso tráfego orgânico e conversões. Agora nossos clientes encontram facilmente nossos serviços e conseguimos mais agendamentos.\u201d',
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
      '\u201cO portal superou todas as expectativas, batendo recorde de participação e demonstrando a eficiência da solução desenvolvida pela Simplí.\u201d',
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

const faqs = [
  {
    question: "Quanto tempo leva para criar um site profissional?",
    answer:
      "O prazo varia conforme a complexidade. Uma landing page fica pronta em até 1 semana; um site institucional leva de 2 a 4 semanas. Projetos maiores, como e-commerces e sistemas web, podem levar de 6 a 12 semanas. Sempre definimos o prazo junto com o cliente antes de começar.",
  },
  {
    question: "Qual a diferença entre site institucional e landing page?",
    answer:
      "Um site institucional apresenta sua empresa de forma completa, com múltiplas páginas (sobre, serviços, portfólio, contato). Já uma landing page é uma página única, focada em converter o visitante em lead ou cliente — ideal para campanhas e lançamentos de produtos.",
  },
  {
    question: "O site vai aparecer no Google?",
    answer:
      "Sim. Todo site que desenvolvemos já sai com SEO técnico implementado: URLs amigáveis, meta tags, dados estruturados, sitemap.xml, robots.txt e Core Web Vitals otimizados. Isso cria uma base sólida para ranquear nos resultados do Google desde o lançamento.",
  },
  {
    question: "Vocês oferecem manutenção após a entrega?",
    answer:
      "Sim. Oferecemos planos de manutenção e suporte contínuo para manter o site seguro, atualizado e com bom desempenho. Assim você foca no seu negócio enquanto cuidamos da tecnologia.",
  },
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "O investimento varia conforme o escopo do projeto. Entre em contato para receber um orçamento personalizado — analisamos suas necessidades e apresentamos a melhor solução dentro do seu orçamento.",
  },
];

const DesenvolvimentoWeb = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroGradient = useMemo(
    () =>
      "linear-gradient(120deg, rgba(12,20,15,0.8), rgba(28,51,36,0.85)), url('/fundo-devweb.webp')",
    [],
  );

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Desenvolvimento Web",
      name: "Criação de Sites Profissionais e Landing Pages",
      provider: {
        "@type": "Organization",
        name: "Simplí",
        url: "https://www.simpli.ia.br",
        telephone: "",
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
        "Criamos sites profissionais, landing pages e sistemas web que convertem visitantes em clientes. Foco em SEO técnico, performance e experiência do usuário.",
      offers: {
        "@type": "Offer",
        description:
          "Desenvolvimento web completo com foco em SEO, performance e experiência do usuário para empresas em Recife e em todo o Brasil.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Desenvolvimento Web",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site Institucional" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistema Web" } },
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
          name: "Desenvolvimento Web",
          item: "https://www.simpli.ia.br/servicos/desenvolvimento-web",
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
        title="Criação de Sites Profissionais | Desenvolvimento Web"
        description="Criamos sites profissionais, landing pages e sistemas web que convertem visitantes em clientes. Agência de desenvolvimento web em Recife com foco em SEO, performance e resultado."
        keywords="criação de sites, desenvolvimento web, sites profissionais, landing page profissional, agência de desenvolvimento web, site para empresa, desenvolvimento web Recife, criar site para negócio, sites responsivos, React, Next.js, TypeScript"
        canonical="/servicos/desenvolvimento-web"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        {/* Hero */}
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
            <h1 className="text-4xl font-semibold md:text-5xl">
              Criação de Sites Profissionais e Landing Pages
            </h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              Desenvolvemos sites que atraem clientes e geram resultados reais — com SEO, performance e design moderno, para empresas em Recife e em todo o Brasil.
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
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">O que é Desenvolvimento Web?</h2>
              <p className="text-base leading-relaxed text-white/70">
                O desenvolvimento web é o processo de criação de sites e aplicações web que funcionam na internet. Envolve desde landing pages e sites institucionais até e-commerces e sistemas web complexos — sempre com foco em conversão e resultado para o negócio.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Na Simplí, utilizamos as tecnologias mais modernas do mercado — React, Next.js, TypeScript e Node.js — para criar soluções que não apenas impressionam visualmente, mas também entregam performance excepcional e experiência de usuário superior.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Atendemos empresas em Recife, Pernambuco e em todo o Brasil. Nossa abordagem combina design criativo com desenvolvimento técnico robusto, garantindo que cada projeto seja único, funcional e alinhado com os objetivos de negócio do cliente.
              </p>
            </div>
            <Card className="border-white/10 bg-[#0C140F]/80 shadow-2xl shadow-black/30">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                  <Monitor size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">Tecnologias Modernas</h3>
                <p className="text-sm text-white/65">
                  React, Next.js, TypeScript e Node.js para criar experiências web rápidas, seguras e escaláveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Benefícios do Desenvolvimento Web Profissional
            </h2>
            <p className="mt-2 text-base text-white/70">
              Por que escolher a Simplí para criar o site da sua empresa?
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

        {/* Como Fazemos */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Desenvolvemos Seu Site</h2>
            <p className="mt-2 text-base text-white/70">
              Nosso processo de criação de sites em etapas claras e transparentes
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

        {/* Cases de Sucesso */}
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

        {/* FAQ */}
        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mt-2 text-base text-white/70">
                Dúvidas sobre criação de sites e desenvolvimento web
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
              Pronto para criar o site da sua empresa?
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Fale com nosso time e descubra como podemos criar um site moderno, rápido e otimizado para o seu negócio.
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
