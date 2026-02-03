import { Zap, BarChart3, Clock3, TrendingUp, MessageCircle, NotebookPen, Brain, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";

const WHATSAPP_URL = "https://wa.link/cpk8xf";
const HERO_BG =
  "/fundo-agent.webp";

const benefits = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Reduz tarefas manuais e aumenta a eficiência operacional.",
  },
  {
    icon: BarChart3,
    title: "Insights Valiosos",
    description: "Análise em tempo real para decisões estratégicas.",
  },
  {
    icon: Clock3,
    title: "Disponibilidade 24/7",
    description: "Atendimento e operação sem interrupções.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Cresce junto com seu negócio sem custos adicionais.",
  },
];

const processTimeline = [
  {
    id: 1,
    title: "Análise de Processos",
    date: "Etapa 1",
    content: "Mapeamos fluxos críticos e identificamos onde a IA gera maior impacto.",
    category: "Planejamento",
    icon: NotebookPen,
    relatedIds: [2],
    status: "completed" as const,
    energy: 25,
  },
  {
    id: 2,
    title: "Design da Solução",
    date: "Etapa 2",
    content: "Desenhamos arquitetura e integrações para agentes inteligentes sob medida.",
    category: "Design",
    icon: Brain,
    relatedIds: [3],
    status: "in-progress" as const,
    energy: 50,
  },
  {
    id: 3,
    title: "Desenvolvimento",
    date: "Etapa 3",
    content: "Construímos, treinamos e testamos os agentes com dados e regras do negócio.",
    category: "Execução",
    icon: Cog,
    relatedIds: [4],
    status: "pending" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Deploy & Monitoramento",
    date: "Etapa 4",
    content: "Publicamos, monitoramos performance e refinamos continuamente os agentes.",
    category: "Deploy",
    icon: TrendingUp,
    relatedIds: [],
    status: "pending" as const,
    energy: 100,
  },
];


const AgentesIA = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Agentes de Inteligência Artificial",
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
    },
    description: "Desenvolvemos agentes de Inteligência Artificial personalizados para automatizar processos e aumentar a eficiência do seu negócio. Chatbots inteligentes, automação de atendimento e machine learning.",
    offers: {
      "@type": "Offer",
      description: "Desenvolvimento de agentes de IA com machine learning, NLP e integrações com APIs",
    },
  };

  return (
    <div className="bg-[#0C140F] text-white">
      <SEO
        title="Agentes de IA | Chatbots Inteligentes e Automação"
        description="Desenvolvemos agentes de Inteligência Artificial personalizados para automatizar processos e aumentar a eficiência. Chatbots inteligentes, automação de atendimento 24/7 e machine learning."
        keywords="agentes de IA, inteligência artificial, chatbots, automação, machine learning, NLP, processamento de linguagem natural, automação de atendimento, IA para negócios, Recife"
        canonical="/servicos/agentes-de-ia"
        structuredData={structuredData}
      />
      <Navbar />
      <section
        className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(12,20,15,0.8), rgba(28,51,36,0.7)), url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
          <h1 className="text-4xl font-semibold md:text-5xl">Agentes de IA</h1>
          <p className="max-w-2xl text-lg text-white/75 md:text-xl">
            Desenvolvemos chatbots inteligentes e automações que revolucionam o atendimento.
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
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl">O que são Agentes de IA?</h2>
            <p className="text-base leading-relaxed text-white/70">
              Agentes de Inteligência Artificial são sistemas capazes de perceber o ambiente,
              tomar decisões e executar ações para alcançar objetivos específicos.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              Desenvolvemos agentes com tecnologias avançadas como machine learning, processamento
              de linguagem natural e integrações com APIs.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              Automatize tarefas repetitivas, melhore o atendimento e obtenha insights valiosos para
              decisões mais rápidas e precisas.
            </p>
          </div>
          <Card className="border-white/10 bg-white/5">
            <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#86efac] to-white text-black">
                <MessageCircle size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">Tecnologias Avançadas</h3>
              <p className="text-sm text-white/65">
                Machine Learning, NLP, APIs e muito mais para criar automações inteligentes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 pt-16 pb-6 md:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Como Desenvolvemos</h2>
          <p className="mt-2 text-base text-white/70">
            Visualize as etapas do nosso processo de criação de agentes de IA.
          </p>
          <div className="mt-10 flex justify-center overflow-hidden px-2">
            <div className="w-full max-w-[260px] origin-top scale-[0.64] sm:max-w-[520px] sm:scale-90 md:max-w-5xl md:scale-100">
              <RadialOrbitalTimeline timelineData={processTimeline} />
            </div>
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Entre em Contato</h2>
          <p className="mt-3 text-base text-white/75 md:text-lg">
            Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar com soluções digitais inovadoras.
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

      <SiteFooter />
    </div>
  );
};

export default AgentesIA;
