import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Kanban,
  MessageSquareText,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackWhatsAppClick } from "@/components/GoogleAnalytics";
import { CrmScreen } from "./CrmScreen";
import { crmCaptures } from "./crmCaptures";
import CrmKanbanTour from "./CrmKanbanTour";
import CrmCampaignTour from "./CrmCampaignTour";
import CrmFeatureCatalog from "./CrmFeatureCatalog";
import CrmInsightsAndResults from "./CrmInsightsAndResults";
import "./crm-landing.css";

const WHATSAPP_URL = "https://wa.link/cpk8xf";
type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};
type Profile = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  items: string[];
};
type Step = {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
};
type FAQ = { name: string; acceptedAnswer: { text: string } };
function ContactCTA({
  children,
  location,
  secondary = false,
}: {
  children: React.ReactNode;
  location: string;
  secondary?: boolean;
}) {
  return (
    <Button
      asChild
      className={`min-h-12 rounded-full px-6 text-sm font-semibold ${secondary ? "border border-white/15 bg-white/[0.03] text-white hover:bg-white/10" : "crm-primary"}`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          trackWhatsAppClick(location);
        }}
      >
        {children}
        <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
      </a>
    </Button>
  );
}
const previewTabs = [
  { id: "kanban", label: "Funil de vendas", Icon: Kanban },
  { id: "chat", label: "Atendimento", Icon: MessageSquareText },
  { id: "campanhas", label: "Campanhas", Icon: Workflow },
];

export default function CrmLandingContent({
  pillars,
  profiles,
  steps,
  faqs,
}: {
  pillars: Pillar[];
  profiles: Profile[];
  steps: Step[];
  faqs: FAQ[];
}) {
  const [heroTab, setHeroTab] = useState("kanban");
  return (
    <>
      <section
        id="crm-hero"
        className="crm-hero relative isolate overflow-hidden px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-16"
      >
        <div className="crm-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl">
          <div className="crm-rise mx-auto max-w-4xl text-center">
            <p className="crm-eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#86efac]" /> SIMPLÍ
              CRM COM IA · ATENDIMENTO, VENDAS E GESTÃO
            </p>
            <h1 className="mt-7 text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
              CRM com IA: a conversa começa,
              <br />
              <span className="text-[#86efac]">a venda continua.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              WhatsApp oficial, Instagram e IA no mesmo lugar. Organize o
              atendimento, acompanhe cada oportunidade e conecte suas campanhas
              ao trabalho comercial.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ContactCTA location="crm_hero">Quero saber mais</ContactCTA>
              <Button
                asChild
                variant="outline"
                className="min-h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-sm text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#simplichat">
                  Conheça o CRM por dentro
                  <ArrowDown size={15} className="ml-3" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Planos a partir de R$ 798/mês
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] text-white/60">
              {[
                "API oficial da Meta",
                "IA com o contexto da empresa",
                "Implantação acompanhada",
              ].map((text) => (
                <span key={text} className="inline-flex items-center gap-2">
                  <Check
                    size={12}
                    className="text-[#86efac]"
                    aria-hidden="true"
                  />
                  {text}
                </span>
              ))}
            </div>
          </div>
          <Tabs
            value={heroTab}
            onValueChange={setHeroTab}
            className="crm-rise mt-10 md:mt-10"
          >
            <TabsList
              aria-label="Telas do Simplí CRM"
              className="mx-auto mb-5 grid h-auto max-w-xl grid-cols-3 gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
            >
              {previewTabs.map(({ id, label, Icon }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="min-h-11 gap-2 rounded-full px-2 text-[10px] text-white/65 data-[state=active]:bg-[#86efac] data-[state=active]:text-[#0c1710] sm:text-xs"
                >
                  <Icon
                    size={14}
                    className="hidden sm:block"
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {previewTabs.map(({ id }) => (
              <TabsContent key={id} value={id} className="mt-0">
                <CrmScreen
                  capture={crmCaptures[id]}
                  priority={id === "kanban"}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <nav
        aria-label="Explore a página do CRM"
        className="crm-product-nav sticky z-40 border-y border-white/10 bg-[#0c1710]/95 px-6 backdrop-blur-xl md:px-10"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <span className="hidden shrink-0 text-xs font-semibold text-white/85 lg:block">
            SIMPLÍ <span className="text-[#86efac]">CRM</span>
          </span>
          <div className="flex min-w-0 gap-5 overflow-x-auto py-4 text-[11px] text-white/65 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { href: "#simplichat", label: "Atendimento" },
              { href: "#crm-funil", label: "Funil de vendas" },
              { href: "#campanhas", label: "Campanhas" },
              { href: "#insights-crm", label: "Insights" },
              { href: "#historico-disparos", label: "Rastreamento" },
              { href: "#eventos-crm", label: "Eventos" },
              { href: "#recursos", label: "Todos os recursos" },
              { href: "#perfis-crm", label: "Para sua empresa" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 py-2 transition-colors hover:text-[#86efac]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 shrink-0 items-center gap-2 text-xs text-[#86efac] md:inline-flex"
          >
            Fale com a Simplí
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </nav>
      <section className="crm-section">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description, href }, i) => (
            <a
              key={title}
              href={href}
              className="group border-t border-white/15 pt-6"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={23}
                  strokeWidth={1.5}
                  className="text-[#86efac]"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] text-white/50">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-6 text-lg font-medium">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {description}
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-[#86efac]">
                Ver funcionalidades
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section
        id="simplichat"
        className="crm-section border-t border-white/[0.08] bg-[#101e16]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-end">
            <div>
              <p className="crm-eyebrow">// CENTRAL DE ATENDIMENTO</p>
              <h2 className="crm-heading mt-4">
                Todas as conversas.
                <br />
                <span className="text-[#86efac]">Um contexto só.</span>
              </h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-white/65">
                Sua equipe acompanha WhatsApp e Instagram na mesma central.
                Histórico, atribuição e notas privadas ajudam o próximo
                atendente a continuar de onde a conversa parou.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/65">
                {[
                  "Canais reunidos",
                  "Passagem para humano",
                  "Notas da equipe",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-2">
                    <CheckCircle2
                      size={13}
                      className="text-[#86efac]"
                      aria-hidden="true"
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-9">
            <CrmScreen capture={crmCaptures.chat} />
          </div>
          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl text-xs leading-relaxed text-white/60">
              O agente de IA apoia o atendimento com o conhecimento da empresa.
              A equipe pode assumir a conversa e controlar o uso da IA por
              canal.
            </p>
            <a href="#ia-atendimento" className="crm-text-link shrink-0">
              Explore a IA no atendimento
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section id="crm-funil" className="crm-section">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="crm-eyebrow">// DO CONTATO À PROPOSTA</p>
              <h2 className="crm-heading mt-4">
                Cada oportunidade.
                <br />
                <span className="text-[#86efac]">Um próximo passo.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              Veja o mesmo lead avançar entre etapas do Kanban real do
              aplicativo. O funil dá visibilidade ao trabalho que precisa
              continuar depois da primeira mensagem.
            </p>
          </div>
          <CrmKanbanTour />
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Organize por etapa",
                text: "Entenda em que ponto está cada negociação.",
              },
              {
                title: "Mantenha o contexto",
                text: "Contatos, observações e histórico para a equipe.",
              },
              {
                title: "Acompanhe os retornos",
                text: "Follow-ups e tarefas conectados ao comercial.",
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
      <section
        id="campanhas"
        className="crm-section border-t border-white/[0.08] bg-[#101e16]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-[1.15fr_1fr] md:items-end">
            <div>
              <p className="crm-eyebrow">// CAMPANHAS E AUTOMAÇÃO</p>
              <h2 className="crm-heading mt-4">
                O disparo é o começo.
                <br />
                <span className="text-[#86efac]">Desenhe a sequência.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              No editor visual, combine templates, esperas e condições. Planeje
              o caminho da campanha e acompanhe o que foi enviado, entregue,
              lido e respondido.
            </p>
          </div>
          <CrmCampaignTour />
          <a href="#historico-disparos" className="crm-text-link mt-6 inline-flex">
            Acompanhe os disparos e resultados
            <ArrowDown size={15} aria-hidden="true" />
          </a>
          <p className="mt-6 text-[11px] leading-relaxed text-white/55">
            Disponibilidade conforme conexões, templates aprovados, permissões e
            políticas dos canais. Nenhum disparo é executado nesta página.
          </p>
        </div>
      </section>
      <CrmInsightsAndResults />
      <CrmFeatureCatalog />
      <section id="perfis-crm" className="crm-section">
        <div className="mx-auto max-w-6xl">
          <p className="crm-eyebrow">// PARA O SEU JEITO DE OPERAR</p>
          <h2 className="crm-heading mt-4">
            Um CRM.
            <br />
            <span className="text-[#86efac]">Dois modos de trabalhar.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {profiles.map(
              ({ icon: Icon, badge, title, description, items }) => (
                <div
                  key={badge}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={23}
                      className="text-[#86efac]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <p className="font-mono text-[10px] uppercase tracking-[.12em] text-[#86efac]">
                      {badge}
                    </p>
                  </div>
                  <h3 className="mt-7 text-xl font-medium tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {items.map((text) => (
                      <li
                        key={text}
                        className="flex items-center gap-2 text-xs text-white/75"
                      >
                        <Check
                          size={13}
                          className="text-[#86efac]"
                          aria-hidden="true"
                        />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section
        id="implantacao-crm"
        className="crm-section border-t border-white/[0.08]"
      >
        <div className="mx-auto max-w-6xl">
          <p className="crm-eyebrow">// IMPLANTAÇÃO ACOMPANHADA</p>
          <h2 className="crm-heading mt-4">
            Do seu processo
            <br />à operação no CRM.
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
        </div>
      </section>
      <section
        id="faq-crm"
        className="crm-section border-t border-white/[0.08]"
      >
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
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="crm-section pt-0">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[#86efac]/20 bg-[#12271b] px-6 py-14 text-center md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(134,239,172,0.12),transparent_65%)]" />
          <div className="relative">
            <p className="crm-eyebrow justify-center">
              // VAMOS CONECTAR SUA OPERAÇÃO?
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-.04em] md:text-5xl">
              Pronto para atender, vender
              <br className="hidden md:block" /> e gerenciar em um lugar só?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65">
              Converse com nosso time sobre os canais que você usa, seu processo
              de vendas e o que precisa funcionar melhor.
            </p>
            <div className="mt-8">
              <ContactCTA location="crm_footer">Quero começar agora</ContactCTA>
            </div>
            <p className="mt-4 text-[11px] text-white/60">
              Contato direto com a equipe Simplí pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
