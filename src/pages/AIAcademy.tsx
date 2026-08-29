import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";
import PreLaunchDialog from "@/components/PreLaunchDialog";
import {
  ACADEMY_GRUPO_PRELANCAMENTO,
  ACADEMY_WHATSAPP,
  academyInstructors,
  academyLadder,
  academyProducts,
  type AcademyProduct,
} from "@/data/aiAcademy";

const GREEN = "#12CC1E";

/* -------------------------------------------------------------------------- */
/* Bloco de produto                                                            */
/* -------------------------------------------------------------------------- */

const ProductBlock = ({ product }: { product: AcademyProduct }) => {
  const { icon: Icon, featured } = product;

  return (
    <article id={product.id} className="scroll-mt-24">
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
        {/* Coluna esquerda: identidade, preço e os fatos duros */}
        <div className="lg:col-span-4">
          <div
            className={
              featured
                ? "rounded-3xl border border-[#12CC1E]/25 bg-[#12CC1E]/[0.07] p-6 lg:sticky lg:top-24"
                : "lg:sticky lg:top-24"
            }
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: "rgba(18,204,30,0.12)",
                color: GREEN,
              }}
            >
              <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-white md:text-[1.75rem]">
              {product.name}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/70">
              {product.promise}
            </p>

            <p className="tabular mt-6 text-4xl font-bold text-white md:text-5xl">
              {product.price}
            </p>
            {product.priceNote && (
              <p
                className="mt-2 text-sm font-medium leading-snug"
                style={{ color: GREEN }}
              >
                {product.priceNote}
              </p>
            )}

            <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
              {product.facts.map((fact) => (
                <div key={fact.label} className="flex gap-4">
                  <dt className="w-24 shrink-0 text-white/50">{fact.label}</dt>
                  <dd className="flex-1 font-medium text-white/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Só a turma passa pelo formulário; os outros vão direto
                para a conversa no WhatsApp. */}
            {product.cta.href === ACADEMY_GRUPO_PRELANCAMENTO ? (
              <PreLaunchDialog>
                <Button className="mt-7 h-12 w-full rounded-xl border border-transparent bg-white px-6 text-[0.9375rem] font-semibold text-[#0C140F] transition-colors hover:border-white/70 hover:bg-transparent hover:text-white">
                  {product.cta.label}
                </Button>
              </PreLaunchDialog>
            ) : (
              <Button
                asChild
                className="mt-7 h-12 w-full rounded-xl border border-transparent bg-white px-6 text-[0.9375rem] font-semibold text-[#0C140F] transition-colors hover:border-white/70 hover:bg-transparent hover:text-white"
              >
                <a href={product.cta.href} target="_blank" rel="noreferrer">
                  {product.cta.label}
                </a>
              </Button>
            )}
            {product.cta.note && (
              <p className="mt-3 text-[0.8125rem] leading-snug text-white/50">
                {product.cta.note}
              </p>
            )}
          </div>
        </div>

        {/* Coluna direita: o que é, o que entra, para quem, objeção */}
        <div className="lg:col-span-8">
          <p className="max-w-[68ch] text-lg leading-relaxed text-white/85 md:text-xl">
            {product.what}
          </p>

          <h4 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
            {product.includesTitle}
          </h4>
          <ul className="mt-5 space-y-5">
            {product.includes.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(18,204,30,0.14)" }}
                  aria-hidden="true"
                >
                  <Check size={12} strokeWidth={3} style={{ color: GREEN }} />
                </span>
                <div className="max-w-[66ch]">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-white/70">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
                Para quem é
              </h4>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">
                {product.who}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
                Por que funciona
              </h4>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">
                {product.argument}
              </p>
            </div>
          </div>

          {product.objection && (
            <div
              className="mt-10 rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-base font-semibold italic text-white/90">
                “{product.objection.question}”
              </p>
              <p className="mt-3 max-w-[68ch] text-[0.9375rem] leading-relaxed text-white/70">
                {product.objection.answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

/* -------------------------------------------------------------------------- */
/* Página                                                                      */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    q: "Quando começa a próxima turma?",
    a: "Ainda não há data pública. O anúncio sai no grupo de pré-lançamento — é por isso que ele existe. São dez vagas reais por turma, e os 10 primeiros do grupo garantem o valor de R$ 297; nas turmas seguintes, o preço regular é R$ 497.",
  },
  {
    q: "Eu não consigo configurar o ambiente sozinho vendo um tutorial?",
    a: "Consegue, com tempo. A questão é que configuração de ambiente é um trabalho de decisão, não de execução: o que vira skill, o que vira instrução de projeto, o que conectar. Errar essas decisões gera um ambiente que atrapalha mais do que ajuda. As duas horas compram as decisões certas, não os cliques.",
  },
  {
    q: "O treinamento em grupo vale a pena se eu já uso ChatGPT?",
    a: "Sim, e provavelmente mais. Quem já usa costuma ter vícios que limitam o resultado — prompts longos demais, contexto perdido, falta de estrutura. O treinamento corrige isso mais rápido do que ensina do zero.",
  },
  {
    q: "R$ 2.997 não é caro para um treinamento?",
    a: "É caro para um treinamento e barato para uma consultoria de processo com software incluso. A mentoria entrega diagnóstico da operação, relatório com indicadores e o Agentic Office configurado, com dois meses de uso sem custo. A comparação correta não é com um curso — é com o custo de manter a operação como está por mais um ano.",
  },
  {
    q: "Vocês ensinam a usar a ferramenta ou a mudar o processo?",
    a: "Os dois, nessa ordem de importância. A IA amplifica o processo que já existe: se o processo é bom, ela acelera; se é ruim, ela acelera o erro. Por isso nenhum dos quatro formatos começa pela ferramenta — todos começam pelo que a sua operação faz hoje.",
  },
  {
    q: "Preciso ser da área de tecnologia?",
    a: "Não. O público da Academy é dono de pequena e média empresa, profissional liberal com operação estruturada e gestor de equipe. Não é conteúdo técnico de programação.",
  },
];

const AIAcademy = () => {
  const courseSchemas = academyProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `https://www.simpli.ia.br/ai-academy#${product.id}`,
    name: product.name,
    description: product.what,
    inLanguage: "pt-BR",
    provider: {
      "@type": "EducationalOrganization",
      name: "Simplí AI Academy",
      url: "https://www.simpli.ia.br/ai-academy",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: product.facts.find((f) => f.label === "Duração")?.value,
    },
    ...(product.price.startsWith("R$")
      ? {
          offers: {
            "@type": "Offer",
            price: product.price.replace(/[^\d,]/g, "").replace(",", "."),
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: "https://www.simpli.ia.br/ai-academy",
          },
        }
      : {}),
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.simpli.ia.br/ai-academy#organization",
    name: "Simplí AI Academy",
    alternateName: "Simplí AI Academy — braço educacional da Simplí",
    description:
      "Braço educacional da Simplí. Treinamentos, consultoria de configuração de ambiente de IA e mentoria com diagnóstico de processo para pequenas e médias empresas.",
    url: "https://www.simpli.ia.br/ai-academy",
    logo: "https://www.simpli.ia.br/ai-academy-logo-branca.png",
    parentOrganization: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    email: "contato@simpli.ia.br",
    telephone: "+55-81-99194-2628",
    employee: academyInstructors.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
    })),
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
        name: "Simplí AI Academy",
        item: "https://www.simpli.ia.br/ai-academy",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="academy bg-[#0C140F] text-white">
      <SEO
        title="Simplí AI Academy — Treinamento Claude, primeira turma em pré-lançamento"
        description="Primeira turma do Treinamento Claude: 4h ao vivo, turma de dez, aplicando Claude Chat, Cowork e Code. Entre no grupo de pré-lançamento — os 10 primeiros garantem R$ 297. A Academy também tem configuração de ambiente, in-company e mentoria com diagnóstico."
        keywords="curso de IA para empresas, treinamento Claude, treinamento in-company inteligência artificial, consultoria configuração Claude, mentoria IA para empresas, diagnóstico de processo, Simplí AI Academy, curso de inteligência artificial Recife, treinamento IA para equipes"
        canonical="/ai-academy"
        ogTitle="Treinamento Claude — primeira turma da Simplí AI Academy"
        ogDescription="4h ao vivo, turma de dez, prático. Entre no grupo de pré-lançamento: a data sai por lá e os 10 primeiros garantem os R$ 297."
        ogImage="https://www.simpli.ia.br/treinamento-claude-horizontal.png"
        structuredData={[
          organizationSchema,
          breadcrumbSchema,
          faqSchema,
          ...courseSchemas,
        ]}
      />
      <Navbar />

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, rgba(18,204,30,0.16), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* A arte já traz a logo da Academy e a identidade do programa,
              então ela entra no lugar do lockup. O h1 abaixo continua em
              texto de verdade — a arte não responde por hierarquia. */}
          <div className="academy-rise academy-rise-1 w-full max-w-[720px] overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/treinamento-claude-horizontal.png"
              alt="Simplí AI Academy — Treinamento Claude: 4h ao vivo, prático, vagas limitadas. Claude Chat, Claude Cowork e Claude Code."
              className="h-full w-full"
              width={1280}
              height={720}
              fetchPriority="high"
            />
          </div>

          <h1 className="academy-rise academy-rise-2 mt-8 max-w-[24ch] text-balance text-[2.125rem] font-bold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            A primeira turma do Treinamento Claude está chegando.
          </h1>

          <p className="academy-rise academy-rise-3 mt-6 max-w-[60ch] text-lg leading-relaxed text-white/75">
            Quatro horas ao vivo, turma de dez, aplicando Claude Chat, Cowork e
            Code no trabalho que você já faz. Entre no grupo do pré-lançamento:
            é lá que a data é anunciada, e{" "}
            <strong className="font-semibold text-white">
              os 10 primeiros garantem o valor de R$ 297
            </strong>{" "}
            — depois, o preço regular é R$ 497.
          </p>

          <div className="academy-rise academy-rise-3 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <PreLaunchDialog>
              <Button
                className="h-12 rounded-xl border border-transparent px-7 text-base font-semibold text-[#06170A] transition-colors hover:brightness-110"
                style={{ backgroundColor: GREEN }}
              >
                Entrar no grupo do pré-lançamento
              </Button>
            </PreLaunchDialog>
            <Button
              asChild
              variant="ghost"
              className="h-12 rounded-xl border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <a href="#formatos">
                Ver os quatro formatos
                <ArrowRight size={17} className="ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Tese                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <hr className="academy-rule" />
          <p className="mt-14 max-w-[24ch] text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:max-w-[26ch] md:text-[3.25rem]">
            A IA amplifica o processo que já existe.
          </p>
          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <p className="text-xl font-semibold" style={{ color: GREEN }}>
              Se o processo é bom, ela acelera.
            </p>
            <p className="text-xl font-semibold text-[#F87171]">
              Se é ruim, ela acelera o erro.
            </p>
          </div>
          <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-white/70">
            Por isso a Simplí não começa pela ferramenta — começa pelo processo.
            O diferencial da Academy não é ensinar a clicar em IA. É configurar
            o ambiente e redesenhar o processo para que ela funcione dentro da
            realidade específica do seu negócio.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* A escada — em que estágio você está                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Em que estágio você está?
          </h2>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-white/70">
            Os quatro formatos resolvem estágios diferentes da mesma jornada.
            Encontre a frase que descreve o seu momento.
          </p>

          <ul className="mt-10 border-t border-white/10">
            {academyLadder.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex flex-col gap-2 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-8 sm:px-4 sm:-mx-4"
                >
                  <span className="flex-1 text-lg font-medium text-white/90 transition-colors group-hover:text-white md:text-xl">
                    “{item.stage}”
                  </span>
                  <span className="flex items-center gap-4 sm:justify-end">
                    <span className="text-[0.9375rem] font-semibold text-white/70 transition-colors group-hover:text-white">
                      {item.product}
                    </span>
                    <span
                      className="tabular text-[0.9375rem] font-semibold"
                      style={{ color: GREEN }}
                    >
                      {item.price}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Os quatro formatos                                                */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="formatos"
        className="scroll-mt-20 px-6 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-[20ch] text-3xl font-bold leading-tight text-white md:text-[2.75rem]">
            Os quatro formatos da Academy
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-white/70">
            O Treinamento Claude é a porta de entrada. Os outros três vão mais
            fundo — cada um resolve um estágio diferente, e nenhum depende do
            outro.
          </p>

          <div className="mt-16 space-y-20 md:space-y-28">
            {academyProducts.map((product, index) => (
              <div key={product.id}>
                {index > 0 && <hr className="academy-rule mb-20 md:mb-28" />}
                <ProductBlock product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Instrutores                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="instrutores"
        className="scroll-mt-20 px-6 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <hr className="academy-rule" />
          <h2 className="mt-14 max-w-[22ch] text-3xl font-bold leading-tight text-white md:text-[2.75rem]">
            Quem conduz
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-white/70">
            Os treinamentos são conduzidos pelos próprios sócios da Simplí — as
            mesmas pessoas que implantam IA nos clientes.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-14">
            {academyInstructors.map((person) => (
              <div key={person.name}>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0F1D15]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {person.name}
                </h3>
                <p
                  className="mt-1.5 text-[0.9375rem] font-semibold"
                  style={{ color: GREEN }}
                >
                  {person.role}
                </p>
                <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed text-white/70">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Quem somos                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <hr className="academy-rule" />
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-[2.5rem]">
                A Academy é o braço educacional da Simplí
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-[64ch] text-lg leading-relaxed text-white/80">
                A Simplí é uma empresa brasileira de IA aplicada a negócios,
                sediada no Recife. O trabalho do dia a dia é implantar IA dentro
                da operação de outras empresas — atendimento, vendas, estoque e
                processos internos.
              </p>
              <p className="mt-5 max-w-[64ch] text-[0.9375rem] leading-relaxed text-white/65">
                A Academy existe porque parte dos clientes não precisa de mais
                software: precisa entender o que fazer com o que já tem. O
                conteúdo dos treinamentos sai dessas implantações, não de
                material de curso.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.9375rem] font-medium">
                {[
                  { label: "Simplí Agent", to: "/solucoes/simpli-agent" },
                  { label: "Simplí CRM", to: "/solucoes/simpli-crm" },
                  { label: "Simplí Estoque", to: "/solucoes/simpli-estoque" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={15}
                      className="text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section id="faq" className="scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <hr className="academy-rule" />
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Perguntas frequentes
              </h2>
            </div>
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={item.q}
                    value={`item-${index}`}
                    className="border-b border-white/10"
                  >
                    <AccordionTrigger className="gap-6 py-5 text-left text-lg font-semibold text-white hover:no-underline [&>svg]:text-white/50">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-[0.9375rem] leading-relaxed text-white/70">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA final                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-6 pb-24 pt-8 md:px-10 md:pb-32">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border p-8 md:p-14"
          style={{
            borderColor: "rgba(18,204,30,0.22)",
            backgroundColor: "rgba(18,204,30,0.06)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 120% at 100% 0%, rgba(18,204,30,0.14), transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="max-w-[24ch] text-balance text-3xl font-bold leading-tight text-white md:text-[2.75rem]">
              A primeira turma tem dez vagas.
            </h2>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-white/75">
              Quatro horas ao vivo, com espaço para aplicar no seu contexto
              durante a aula. A data sai no grupo do pré-lançamento, e os 10
              primeiros do grupo garantem os R$ 297 — depois, R$ 497.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PreLaunchDialog>
                <Button
                  className="h-12 rounded-xl border border-transparent px-7 text-base font-semibold text-[#06170A] transition-colors hover:brightness-110"
                  style={{ backgroundColor: GREEN }}
                >
                  Entrar no grupo do pré-lançamento
                </Button>
              </PreLaunchDialog>
              <Button
                asChild
                variant="ghost"
                className="h-12 rounded-xl border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <a href={ACADEMY_WHATSAPP} target="_blank" rel="noreferrer">
                  Quero para a minha equipe
                </a>
              </Button>
            </div>
            <p className="mt-6 max-w-[52ch] text-[0.8125rem] leading-relaxed text-white/50">
              Para in-company, mande nome, empresa, tamanho da equipe e o que
              motivou o interesse — a proposta sai depois da conversa de escopo.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default AIAcademy;
