import {
  ArrowDown,
  ArrowRight,
  BellRing,
  CalendarCheck,
  Check,
  ClipboardList,
  HardHat,
  History,
  CalendarRange,
  Smartphone,
  Users,
  Megaphone,
  MessageSquareText,
  Store,
  Tags,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CaseCard from "@/components/CaseCard";
import { SEO } from "@/components/SEO";
import { CrmScreen } from "@/components/crm/CrmScreen";
import { crmCaptures } from "@/components/crm/crmCaptures";
import {
  BookingCTA,
  ContactCTA,
  MobileBookingBar,
} from "@/components/crm/CrmLandingContent";
import { cases } from "@/data/cases";
import CrmObraMockup from "@/components/crm/CrmObraMockup";
import CrmOrcamentosMockup from "@/components/crm/CrmOrcamentosMockup";
import { bookingUrl, handleBookingClick } from "@/components/crm/booking";
import "@/components/crm/crm-landing.css";

const PAGE_PATH = "/solucoes/simpli-crm/material-de-construcao";
const PAGE_URL = `https://www.simpli.ia.br${PAGE_PATH}`;
const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5581975062426&text=Quero%20conhecer%20o%20Simpl%C3%AD%20CRM%20para%20material%20de%20constru%C3%A7%C3%A3o";

/* Fases reais do módulo Ciclo da Obra; produtos de cada fase são exemplos. */
const obraPhases = [
  {
    phase: "Estrutura e Vedação",
    bought: "Cimento, ferragem, blocos",
    next: "Telhas, mantas e impermeabilizantes",
  },
  {
    phase: "Cobertura e Impermeabilização",
    bought: "Telhas, mantas, impermeabilizantes",
    next: "Tubos, conexões e fios",
  },
  {
    phase: "Instalações",
    bought: "Tubos, conexões, fios",
    next: "Pisos, porcelanatos e argamassa",
  },
  {
    phase: "Revestimentos",
    bought: "Pisos, porcelanatos, rejunte",
    next: "Louças, metais e portas",
  },
  {
    phase: "Acabamento",
    bought: "Louças, metais, portas",
    next: "Tintas, massa e iluminação",
  },
  {
    phase: "Pintura e Decoração",
    bought: "Tintas, massa, iluminação",
    next: "Manutenção e a próxima reforma",
  },
];

const resources = [
  {
    icon: CalendarRange,
    title: "Eventos de Vendas",
    description:
      "Ações por período e por loja, metas de faturamento e de clientes, campanhas vinculadas e vendas integradas ao ERP.",
  },
  {
    icon: History,
    title: "Histórico de compras do ERP",
    description:
      "Pedidos e histórico de compras na mesma tela do atendimento, sem abrir o ERP. O vendedor sabe o que o cliente já levou.",
  },
  {
    icon: Tags,
    title: "Classificação automática de clientes",
    description:
      "Novo, ativo, recorrente, VIP, em risco ou inativo, com critérios configuráveis. Saiba quem precisa de atenção hoje.",
  },
  {
    icon: Store,
    title: "Catálogo digital no WhatsApp",
    description:
      "Catálogo de produtos em página web com link compartilhável, pronto para mandar na conversa com o cliente.",
  },
  {
    icon: Megaphone,
    title: "Campanhas pelo WhatsApp oficial",
    description:
      "Disparos pela API oficial da Meta para avisar clientes sobre promoções, eventos e novidades da loja.",
  },
  {
    icon: MessageSquareText,
    title: "Atendimento com IA",
    description:
      "WhatsApp e Instagram na mesma central, com agente de IA treinado com os dados da loja e passagem para o vendedor.",
  },
];

/* Caminho do orçamento: do ERP ao follow-up com o vendedor. */
const quoteFlow = [
  {
    title: "Orçamento lançado no ERP",
    text: "O vendedor faz o orçamento no sistema que a loja já usa. Nada muda no balcão.",
  },
  {
    title: "Chega ao CRM com o cliente",
    text: "A integração traz o orçamento para o CRM, ligado ao cliente e ao vendedor responsável.",
  },
  {
    title: "Follow-up por estágios",
    text: "Orçamento sem retorno avança do Follow-up 1 ao 4, e o vendedor retoma o cliente pelo WhatsApp oficial da loja.",
  },
  {
    title: "Venda ou perda, com números",
    text: "Cada orçamento fecha como venda realizada ou perdida. Total vendido, perdido e ticket médio por loja, equipe e vendedor.",
  },
];

const appFeatures = [
  {
    Icon: Users,
    title: "A carteira dele, no bolso",
    text: "Cada vendedor vê os seus clientes, o histórico de compras e as conversas, com as permissões do seu perfil.",
  },
  {
    Icon: ClipboardList,
    title: "Orçamentos em aberto e follow-ups do dia",
    text: "Veja os orçamentos que pedem retorno e os follow-ups do dia. Do balcão ou da rua, resolve em poucos toques.",
  },
  {
    Icon: BellRing,
    title: "Avisos no celular",
    text: "Notificações de novas mensagens, lembretes e follow-ups para nenhum cliente ficar sem resposta.",
  },
  {
    Icon: Smartphone,
    title: "Instala em um minuto",
    text: "Instalado pelo navegador no Android ou no iPhone, direto na tela inicial. Sem loja de aplicativos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Conversa e diagnóstico",
    description:
      "Entendemos como sua loja vende hoje: balcão, WhatsApp, vendedores externos e o ERP que você usa.",
  },
  {
    number: "02",
    title: "Integração e setup",
    description:
      "Conectamos o WhatsApp oficial, trazemos os dados de vendas do ERP e configuramos funis, classificação de clientes e o Ciclo de Vida da Obra.",
  },
  {
    number: "03",
    title: "Time vendendo",
    description:
      "Seus vendedores passam a enxergar a fase da obra de cada cliente e a ofertar a próxima etapa no momento certo.",
  },
];

const faqs = [
  {
    name: "O que é o Ciclo de Vida da Obra?",
    text: "É um módulo do Simplí CRM feito para lojas de material de construção. Ele detecta a fase da obra do cliente pelos produtos que ele já comprou (de Estrutura e Vedação até Pintura e Decoração), mostra a janela da próxima etapa para o vendedor e sinaliza obras paradas, antes que o cliente compre no concorrente.",
  },
  {
    name: "O Simplí CRM substitui o meu ERP?",
    text: "Não. O Simplí CRM trabalha junto com o seu ERP: traz pedidos, produtos e clientes para o CRM e transforma esses dados em inteligência de relacionamento e vendas. A emissão de notas, o caixa e o estoque continuam no seu sistema atual.",
  },
  {
    name: "Funciona para home center e revenda de material de construção?",
    text: "Sim. O módulo foi pensado para o varejo de material de construção, de lojas de bairro a home centers com várias lojas, com eventos de vendas e metas por loja.",
  },
  {
    name: "Os orçamentos do ERP entram no CRM?",
    text: "Sim. A integração com o ERP traz os orçamentos para o CRM, ligados ao cliente, à loja e ao vendedor. Eles seguem num Kanban do envio ao fechamento, com estágios de Follow-up 1 a 4, e terminam como venda realizada ou orçamento perdido, com totais e ticket médio.",
  },
  {
    name: "O vendedor de loja consegue usar pelo celular?",
    text: "Sim. O Simplí CRM é instalado no celular pelo navegador, no Android ou no iPhone, e o vendedor acessa os seus clientes, conversas, orçamentos em aberto e follow-ups, com notificações.",
  },
  {
    name: "Como o WhatsApp da loja é conectado?",
    text: "Pela API oficial da Meta (WhatsApp Cloud API), com templates aprovados. Atendimento, campanhas e histórico ficam na mesma plataforma, com várias pessoas atendendo o mesmo número.",
  },
  {
    name: "Quanto custa?",
    text: "Os planos começam a partir de R$ 798 por mês. Na demonstração gratuita mostramos o CRM com o processo da sua loja e indicamos o plano mais adequado.",
  },
];

const CrmMaterialConstrucao = () => {
  const revestir = cases.find((c) => c.id === "revestir-home-center");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Simplí CRM para lojas de material de construção",
    serviceType: "CRM para varejo de material de construção",
    description:
      "CRM com IA para lojas de material de construção e home centers: módulo Ciclo de Vida da Obra, integração com o ERP, orçamentos com follow-up, classificação de clientes e WhatsApp oficial da Meta.",
    url: PAGE_URL,
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
      telephone: "+55-81-97506-2426",
      email: "contato@simpli.ia.br",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    additionalType: "https://schema.org/SoftwareApplication",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.name,
      acceptedAnswer: { "@type": "Answer", text: faq.text },
    })),
  };

  return (
    <div className="crm-landing bg-[#0C140F] text-white antialiased">
      <SEO
        title="CRM para Loja de Material de Construção"
        description="CRM com IA para loja de material de construção: o Ciclo de Vida da Obra mostra a fase da obra do cliente e a hora de vender a próxima etapa. Integrado ao ERP."
        keywords="CRM para material de construção, CRM para loja de material de construção, CRM para home center, software para loja de material de construção, sistema de vendas material de construção, WhatsApp loja de material de construção, ciclo de vida da obra, Simplí CRM"
        canonical={PAGE_PATH}
        ogTitle="Simplí CRM para material de construção — venda a próxima etapa da obra"
        ogDescription="Saiba em que fase está a obra de cada cliente e oferte a próxima etapa na hora certa. CRM com IA integrado ao seu ERP."
        structuredData={[serviceSchema, faqSchema]}
        noindex
      />
      {/* Landing page da campanha: cabeçalho sem menu para manter o foco no agendamento. */}
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <img
            src="/logonome-branca-cortada.webp"
            alt="Simplí"
            width={112}
            height={28}
            className="h-7 w-auto"
          />
          <a
            href={bookingUrl("construcao_header")}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => handleBookingClick(event, "construcao_header")}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold text-[#0c1710] hover:bg-[#d9fbe5]"
          >
            <CalendarCheck size={14} aria-hidden="true" />
            Agendar demonstração
          </a>
        </div>
      </header>

      <main id="crm-conteudo">
        {/* Hero */}
        <section className="crm-hero relative isolate overflow-hidden px-6 pb-16 pt-16 md:px-10 md:pb-24">
          <div className="crm-grid pointer-events-none absolute inset-0 -z-10" />
          <div className="crm-rise mx-auto max-w-4xl text-center">
            <p className="crm-eyebrow justify-center">
              <HardHat size={13} aria-hidden="true" /> SIMPLÍ CRM · MATERIAL DE
              CONSTRUÇÃO
            </p>
            <h1 className="mt-7 text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
              Saiba em que fase está a obra do seu cliente.
              <br />
              <span className="text-[#86efac]">E venda a próxima etapa.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              O Simplí CRM lê as compras do seu ERP, identifica a fase da obra
              de cada cliente e mostra ao vendedor a hora certa de ofertar o que
              vem depois — antes que ele compre no concorrente.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <BookingCTA location="construcao_hero">
                Agende sua demonstração gratuita
              </BookingCTA>
              <ContactCTA location="construcao_hero" href={WHATSAPP_URL} secondary>
                Falar no WhatsApp
              </ContactCTA>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Integrado ao seu ERP · WhatsApp oficial da Meta · planos a partir
              de R$ 798/mês
            </p>
            <a
              href="#ciclo-da-obra"
              className="mt-3 inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-[#86efac]"
            >
              Veja como funciona o Ciclo de Vida da Obra
              <ArrowDown size={13} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Ciclo de Vida da Obra */}
        <section
          id="ciclo-da-obra"
          className="crm-section border-t border-white/[0.08] bg-[#101e16]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-end">
              <div>
                <p className="crm-eyebrow">// MÓDULO CICLO DE VIDA DA OBRA</p>
                <h2 className="crm-heading mt-4">
                  Cada compra conta
                  <br />
                  <span className="text-[#86efac]">em que pé está a obra.</span>
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/65">
                Quem comprou cimento e ferragem está começando. Quem levou
                tubos e fios vai precisar de piso em breve. O módulo, exclusivo
                para material de construção, detecta a fase da obra pelos
                produtos comprados, mostra a janela da próxima transição para
                cada vendedor e sinaliza as obras paradas.
              </p>
            </div>

            <div className="mt-10">
              <CrmObraMockup />
            </div>
            <p className="mt-4 text-[11px] text-white/50">
              Tela real do módulo Ciclo da Obra, reproduzida com dados fictícios.
            </p>

            <h3 className="mt-14 text-lg font-medium">
              Como as compras indicam a próxima venda
            </h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {obraPhases.map(({ phase, bought, next }, i) => (
                <li
                  key={phase}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="font-mono text-[10px] text-white/50">
                    FASE 0{i + 1}
                  </span>
                  <h3 className="mt-3 text-base font-medium">{phase}</h3>
                  <p className="mt-3 text-[11px] uppercase tracking-[.12em] text-white/45">
                    Comprou
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    {bought}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[.12em] text-[#86efac]">
                    Próxima oferta
                  </p>
                  <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-white">
                    <ArrowRight
                      size={13}
                      className="mt-0.5 shrink-0 text-[#86efac]"
                      aria-hidden="true"
                    />
                    {next}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[11px] text-white/50">
              As fases são as do módulo; os produtos são exemplos. A
              classificação é feita sobre o catálogo da sua loja na implantação.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Venda que não escapa",
                  text: "O cliente da obra volta à sua loja na etapa seguinte, em vez de cotar no concorrente.",
                },
                {
                  title: "Vendedor com contexto",
                  text: "Antes de chamar, ele já sabe o que o cliente comprou e o que provavelmente vai precisar.",
                },
                {
                  title: "Obra parada recuperada",
                  text: "Veja quem parou de comprar no meio da obra e acione o vendedor antes de perder o cliente.",
                },
                {
                  title: "Campanha na hora certa",
                  text: "Com a fase da obra em mãos, planeje a oferta e fale com o cliente pelo WhatsApp oficial.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t border-white/10 pt-5">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Orçamentos do ERP com follow-up */}
        <section id="orcamentos" className="crm-section">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-end">
              <div>
                <p className="crm-eyebrow">// ORÇAMENTOS DO ERP COM FOLLOW-UP</p>
                <h2 className="crm-heading mt-4">
                  Orçamento aberto no ERP
                  <br />
                  <span className="text-[#86efac]">não fica mais esquecido.</span>
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/65">
                Na loja de material de construção, o cliente pede orçamento,
                compara preço e some. O Simplí CRM acompanha cada orçamento
                lançado no ERP do envio até o fechamento, em estágios de
                follow-up, e mostra quanto a loja vendeu e quanto deixou na
                mesa.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quoteFlow.map(({ title, text }, i) => (
                <li
                  key={title}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="font-mono text-xl text-[#86efac]">0{i + 1}</span>
                  <h3 className="mt-4 text-base font-medium">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{text}</p>
                  {i < quoteFlow.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#86efac]/60 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <CrmOrcamentosMockup />
            </div>
            <p className="mt-4 text-[11px] text-white/50">
              Tela real de Orçamentos do Simplí CRM, reproduzida com dados
              fictícios.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
              {[
                "Kanban do envio ao fechamento",
                "Follow-up 1 a 4 para cada orçamento",
                "Vendido x perdido por loja, equipe e vendedor",
                "Loja física e digital",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <Check size={13} className="text-[#86efac]" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* App do vendedor */}
        <section
          id="app-vendedor"
          className="crm-section border-y border-white/[0.08] bg-[#101e16]"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
            <div className="max-w-xl">
              <p className="crm-eyebrow">// APP DO VENDEDOR DE LOJA</p>
              <h2 className="crm-heading mt-4">
                Clientes e orçamentos
                <br />
                <span className="text-[#86efac]">na palma da mão.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/65">
                O vendedor trabalha a própria carteira pelo celular, de forma
                simples: vê quem precisa de retorno, abre o orçamento, chama o
                cliente no WhatsApp e segue para o próximo.
              </p>
              <ul className="mt-8 space-y-5">
                {appFeatures.map(({ Icon, title, text }) => (
                  <li key={title} className="flex gap-4 border-t border-white/10 pt-5">
                    <Icon className="mt-0.5 shrink-0 text-[#86efac]" size={20} aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/65">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="relative isolate mx-auto flex w-full max-w-sm flex-col items-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(134,239,172,0.17),transparent_70%)]"
              />
              <div className="w-full max-w-[290px] rounded-[2rem] border border-white/20 bg-[#080f0b] p-2 shadow-2xl shadow-black/35">
                <img
                  src="/crm/dashboard-mobile.png"
                  alt="Simplí CRM no celular, com indicadores de atendimento e barra de navegação na parte inferior"
                  width={1179}
                  height={2577}
                  loading="lazy"
                  className="block h-auto w-full rounded-[1.45rem]"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-white/60">
                Simplí CRM no celular · dados de demonstração
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Depoimento */}
        {revestir && (
          <section id="depoimento" className="crm-section">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_300px] md:items-center">
              <div>
                <p className="crm-eyebrow">// QUEM JÁ USA</p>
                <h2 className="crm-heading mt-4">
                  Revestir Home Center,
                  <br />
                  <span className="text-[#86efac]">Ceará.</span>
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65">
                  Breno Vasconcelos, Diretor Geral da Revestir Home Center, um
                  dos maiores nomes de construção e reforma no Ceará, conta como
                  foram os primeiros dias com o Simplí CRM em operação. O Ciclo
                  da Obra também está em uso no Grupo Premocil.
                </p>
                <div className="mt-8">
                  <BookingCTA location="construcao_depoimento">
                    Quero ver na minha loja
                  </BookingCTA>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[300px]">
                <CaseCard item={revestir} />
              </div>
            </div>
          </section>
        )}

        {/* Recursos */}
        <section
          id="recursos-construcao"
          className="crm-section border-t border-white/[0.08] bg-[#101e16]"
        >
          <div className="mx-auto max-w-6xl">
            <p className="crm-eyebrow">// FEITO PARA O BALCÃO E PARA O WHATSAPP</p>
            <h2 className="crm-heading mt-4">
              Tudo o que a loja precisa
              <br />
              <span className="text-[#86efac]">para vender mais à mesma base.</span>
            </h2>
            <div className="mt-10 grid gap-x-8 gap-y-9 md:grid-cols-3">
              {resources.map(({ icon: Icon, title, description }) => (
                <div key={title} className="border-t border-white/15 pt-6">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#86efac]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-base font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <CrmScreen capture={crmCaptures.eventos} />
            </div>
            <p className="mt-4 text-xs text-white/55">
              Eventos de vendas com metas por loja, campanhas vinculadas e vendas
              integradas ao ERP.
            </p>
          </div>
        </section>

        {/* Implantação */}
        <section id="implantacao" className="crm-section">
          <div className="mx-auto max-w-6xl">
            <p className="crm-eyebrow">// IMPLANTAÇÃO ACOMPANHADA</p>
            <h2 className="crm-heading mt-4">
              Do seu ERP
              <br />à venda da próxima etapa.
            </h2>
            <ol className="mt-10 grid gap-7 md:grid-cols-3">
              {steps.map(({ number, title, description }) => (
                <li key={number} className="border-t border-white/15 pt-5">
                  <span className="font-mono text-xl text-[#86efac]">
                    {number}
                  </span>
                  <h3 className="mt-5 text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
              {[
                "Não substitui o seu ERP",
                "API oficial da Meta",
                "Equipe da Simplí na implantação",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <Check size={13} className="text-[#86efac]" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="crm-section border-t border-white/[0.08]">
          <div className="mx-auto max-w-4xl">
            <p className="crm-eyebrow">// PERGUNTAS FREQUENTES</p>
            <h2 className="crm-heading mt-4">Antes de começar.</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.name}
                  value={`faq-${i}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="gap-4 py-5 text-left text-sm hover:no-underline">
                    {faq.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-white/65">
                    {faq.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="crm-section pt-0">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[#86efac]/20 bg-[#12271b] px-6 py-14 text-center md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(134,239,172,0.12),transparent_65%)]" />
            <div className="relative">
              <p className="crm-eyebrow justify-center">
                // VAMOS OLHAR A SUA LOJA?
              </p>
              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-.04em] md:text-5xl">
                Pare de perder a próxima etapa
                <br className="hidden md:block" /> da obra para o concorrente.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65">
                Escolha um horário e veja, ao vivo, o Ciclo de Vida da Obra e o
                CRM funcionando com o processo da sua loja.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <BookingCTA location="construcao_footer">
                  Agendar minha demonstração
                </BookingCTA>
                <ContactCTA location="construcao_footer" href={WHATSAPP_URL} secondary>
                  Prefiro falar no WhatsApp
                </ContactCTA>
              </div>
              <p className="mt-4 text-[11px] text-white/60">
                Gratuito e sem compromisso. Você escolhe o dia e o horário.
              </p>
            </div>
          </div>
        </section>
        <MobileBookingBar
          location="construcao_barra_mobile"
          whatsappUrl={WHATSAPP_URL}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-[11px] text-white/50">
        © {new Date().getFullYear()} Simplí · Recife, PE · contato@simpli.ia.br
      </footer>
    </div>
  );
};

export default CrmMaterialConstrucao;
