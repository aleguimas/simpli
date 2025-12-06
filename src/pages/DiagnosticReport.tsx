import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  BarChart,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  ShieldAlert,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

type SummaryState = {
  selections?: Record<number, string[]>;
  maturityLevel?: string;
  budget?: string;
  timeline?: string;
  notes?: string;
  readiness?: Record<string, string>;
  contact?: Record<string, string | boolean>;
};

const fallbackSummary: SummaryState = {
  selections: { 1: [], 2: [], 3: [] },
  maturityLevel: "Iniciante - Processos majoritariamente manuais",
  readiness: { team: "", knowledge: "", training: "" },
};

const badgeColor = (level: string) => {
  if (level?.toLowerCase().includes("maduro") || level?.includes("Avançado"))
    return "bg-emerald-200/20 text-emerald-200";
  if (level?.includes("Intermediário")) return "bg-blue-200/20 text-blue-200";
  if (level?.includes("Básico")) return "bg-amber-200/20 text-amber-200";
  return "bg-white/10 text-white";
};

const DiagnosticReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const summary: SummaryState = location.state?.summary ?? fallbackSummary;

  const objectives = summary.selections?.[1] ?? [];
  const challenges = summary.selections?.[2] ?? [];
  const technologies = summary.selections?.[3] ?? [];
  const readiness = summary.readiness ?? {};
  const maturityText = summary.maturityLevel ?? "";
  const budget = summary.budget ?? "";
  const timeline = summary.timeline ?? "";

  const recommendations: { title: string; description: string; urgency: "Alta" | "Média" | "Baixa" }[] = [];
  const positives: { title: string; description: string }[] = [];

  const needsAutomation =
    challenges.some((c) => c.includes("Processos manuais")) ||
    objectives.some((o) => o.includes("Automatizar processos") || o.includes("Aumentar eficiência"));
  const needsInsights =
    challenges.some((c) => c.includes("insights") || c.includes("decisão")) ||
    objectives.some((o) => o.includes("insights"));
  const needsCX =
    challenges.some((c) => c.includes("satisfação") || c.includes("experiência") || c.includes("cliente")) ||
    objectives.some((o) => o.includes("experiência do cliente"));
  const needsScale = challenges.some((c) => c.includes("escalar"));
  const needsGrowth = objectives.some((o) => o.includes("vendas")) || challenges.some((c) => c.includes("Competitividade"));
  const needsCost =
    challenges.some((c) => c.includes("custo")) || objectives.some((o) => o.includes("custos"));

  if (needsAutomation) {
    recommendations.push({
      title: "Automação de Processos e Agentes",
      description:
        "Mapeie fluxos críticos e implemente agentes de IA para reduzir tarefas manuais e ganhar eficiência imediata.",
      urgency: "Alta",
    });
  }
  if (needsInsights) {
    recommendations.push({
      title: "Fundação de Dados e Analytics",
      description:
        "Centralize dados em um repositório confiável e habilite dashboards preditivos para decisões mais rápidas.",
      urgency: "Alta",
    });
  }
  if (needsCX) {
    recommendations.push({
      title: "Experiência do Cliente Inteligente",
      description:
        "Implemente chatbots de suporte, roteamento inteligente e personalização de jornada para elevar a satisfação.",
      urgency: "Média",
    });
  }
  if (needsScale) {
    recommendations.push({
      title: "Arquitetura Escalável",
      description:
        "Padronize integrações e automatize handoffs entre times para crescer com estabilidade e menor custo operacional.",
      urgency: "Média",
    });
  }
  if (needsGrowth || needsCost) {
    recommendations.push({
      title: "Crescimento Rentável",
      description:
        "Otimize aquisição e retenção com automações de marketing e priorização de leads mais qualificados.",
      urgency: "Média",
    });
  }
  if (recommendations.length === 0) {
    recommendations.push({
      title: "Piloto Rápido com IA",
      description:
        "Selecione um processo-chave, implemente um piloto de IA em poucas semanas e meça impacto antes de expandir.",
      urgency: "Média",
    });
  }

  if (maturityText.includes("Avançado") || maturityText.includes("Maduro")) {
    positives.push({
      title: "Boa maturidade digital",
      description: "Você já tem bases sólidas e pode acelerar a adoção de IA em escala.",
    });
  } else if (maturityText.includes("Intermediário")) {
    positives.push({
      title: "Base digital intermediária",
      description: "Há integração de sistemas e dados centralizados para evoluir rapidamente.",
    });
  }

  if (technologies.length > 0) {
    const techPreview = technologies.slice(0, 2).join(", ");
    positives.push({
      title: "Stack tecnológica existente",
      description: `Você já utiliza ${techPreview}${technologies.length > 2 ? " e outras ferramentas" : ""}, facilitando integrações.`,
    });
  }

  if (readiness.team?.includes("equipe completa") || readiness.team?.includes("limitada")) {
    positives.push({
      title: "Equipe técnica disponível",
      description: "Há time interno que pode acelerar implementação e suporte contínuo.",
    });
  }

  if (readiness.knowledge?.includes("Avançado") || readiness.knowledge?.includes("Intermediário")) {
    positives.push({
      title: "Conhecimento prévio de IA",
      description: "A familiaridade do time com IA reduz curva de aprendizado.",
    });
  }

  if (budget && budget !== "Ainda preciso definir") {
    positives.push({
      title: "Orçamento dedicado",
      description: "Investimento já sinalizado para projetos de IA.",
    });
  }

  if (timeline) {
    positives.push({
      title: "Prazo claro",
      description: "Definição de cronograma ajuda a priorizar entregas e ganhos rápidos.",
    });
  }

  if (positives.length === 0) {
    positives.push({
      title: "Movimento estratégico",
      description: "Realizar o diagnóstico já é um passo relevante para a transformação digital.",
    });
  }

  const objectivesCount = objectives.length;
  const challengesCount = challenges.length;
  const recommendationsCount = recommendations.length;

  const maturityScore = (() => {
    const level = maturityText;
    if (level.includes("Maduro")) return 85;
    if (level.includes("Avançado")) return 75;
    if (level.includes("Intermediário")) return 55;
    if (level.includes("Básico")) return 35;
    return 20;
  })();

  const levelLabel = maturityText.split("-")[0]?.trim() || "Básico / Inicial";

  const companyName = summary.contact?.company || "sua empresa";
  const personName =
    summary.contact?.firstName && summary.contact?.lastName
      ? `${summary.contact.firstName} ${summary.contact.lastName}`
      : "";

  const phase1Tasks: string[] = [];
  const phase2Tasks: string[] = [];

  if (needsAutomation) {
    phase1Tasks.push("Mapear processos críticos e desenhar agentes de IA");
    phase2Tasks.push("Implantar agentes em produção e medir eficiência");
  }
  if (needsInsights) {
    phase1Tasks.push("Organizar base de dados e configurar dashboards");
    phase2Tasks.push("Habilitar analytics preditivo para decisões rápidas");
  }
  if (needsCX) {
    phase1Tasks.push("Desenhar jornadas e scripts de atendimento inteligente");
    phase2Tasks.push("Lançar chatbots/roteamento e ajustar pela satisfação");
  }
  if (needsGrowth) {
    phase1Tasks.push("Priorizar funis de aquisição e definir ICP/lead scoring");
    phase2Tasks.push("Automatizar nutrição e otimizar campanhas");
  }
  if (needsCost) {
    phase1Tasks.push("Identificar gargalos de custo e definir KPIs de redução");
    phase2Tasks.push("Automatizar tarefas repetitivas com foco em ROI");
  }
  if (needsScale) {
    phase1Tasks.push("Definir padrões de integração e arquitetura escalável");
    phase2Tasks.push("Automatizar handoffs entre times e expandir cobertura");
  }

  if (phase1Tasks.length === 0) {
    phase1Tasks.push("Escolher processo-piloto e preparar dados/escopo");
  }
  if (phase2Tasks.length === 0) {
    phase2Tasks.push("Executar piloto, medir impacto e planejar expansão");
  }

  const phase1Duration =
    timeline.includes("Imediato") || timeline.includes("Curto")
      ? "1-2 meses"
      : timeline.includes("Médio") || timeline.includes("Longo")
        ? "2-4 meses"
        : "2-3 meses";
  const phase2Duration =
    timeline.includes("Imediato") || timeline.includes("Curto")
      ? "2-4 meses"
      : timeline.includes("Longo")
        ? "4-6 meses"
        : "3-5 meses";

  return (
    <div className="min-h-screen bg-[#0C140F] text-white">
      <SEO
        title="Relatório de Diagnóstico de IA | Resultado da Análise"
        description="Acesse seu relatório completo de diagnóstico de maturidade digital e descubra recomendações personalizadas para implementar IA na sua empresa."
        canonical="/diagnostico/resultado"
        noindex={true}
        nofollow={true}
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="text-sm text-white">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsESG9QwVRNPlEoRcVxpjTndZFs8IqQ6NKb4Xhi"
            alt="Simplí"
            className="h-9 w-auto"
            loading="lazy"
          />
        </Link>
        <Button
          variant="outline"
          className="h-10 rounded-xl border-white/20 bg-white/5 text-white transition hover:border-white hover:bg-white hover:text-black"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar ao Início
        </Button>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge className="rounded-full border border-emerald-300/40 bg-emerald-300/10 text-emerald-100">
            Seu Relatório de Diagnóstico
          </Badge>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Resultado da sua{" "}
            <span className="text-emerald-300">Análise de Maturidade em IA</span>
          </h1>
          <p className="max-w-3xl text-base text-white/70">
            Com base nas suas respostas, preparamos uma visão completa do nível de
            preparação da sua empresa para implementar inteligência artificial.
          </p>
        </div>

        <section className="mt-8 space-y-6">
          <Card className="border border-white/5 bg-[#0F1D15] shadow-2xl shadow-black/40">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-200">
                    <BarChart size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Índice de Maturidade Digital
                    </p>
                    <p className="text-xs text-white/60">
                      Avaliação do preparo atual para IA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-200">
                  <Star size={16} className="fill-amber-300 text-amber-300" />
                  Nível de preparação
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">
                    {maturityScore}/100
                  </span>
                  <Badge className={`${badgeColor(levelLabel)} font-semibold`}>
                    {levelLabel}
                  </Badge>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 md:w-64">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#1C3324] to-[#4ADE80]"
                    style={{ width: `${maturityScore}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Sparkles size={18} className="text-emerald-200" />
                    Objetivos Identificados
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {objectivesCount}
                  </div>
                  <p className="text-xs text-white/60">Áreas de foco para IA</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <ShieldAlert size={18} className="text-sky-200" />
                    Desafios Mapeados
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {challengesCount}
                  </div>
                  <p className="text-xs text-white/60">
                    Oportunidades de melhoria
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Lightbulb size={18} className="text-amber-200" />
                    Recomendações
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {recommendationsCount}
                  </div>
                  <p className="text-xs text-white/60">Ações prioritárias</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-[#fff4c4] via-[#fff8e6] to-white shadow-2xl shadow-black/30">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#0C140F]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                  <ThumbsUp size={18} className="text-[#c98a00]" />
                </span>
                Pontos Positivos da sua Empresa
              </div>
              <p className="text-sm text-[#4b5563]">
                Reconhecemos os pontos fortes que já existem na sua organização.
              </p>
              <div className="rounded-xl border border-[#f2d792] bg-white p-4 text-sm text-[#0C140F]">
                <div className="flex flex-col gap-3">
                  {positives.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#c98a00] mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#0C140F]">
                          {item.title}
                        </div>
                        <div className="text-[#4b5563]">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-[#0F1D15] shadow-2xl shadow-black/40">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <Lightbulb size={18} className="text-amber-200" />
                Recomendações Estratégicas
              </div>
              <p className="text-sm text-white/70">
                Geradas a partir dos objetivos e dores informados no diagnóstico.
              </p>
              <div className="space-y-4">
                {recommendations.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border p-4 ${
                      item.urgency === "Alta"
                        ? "border-red-200/40 bg-red-200/10"
                        : "border-amber-200/40 bg-amber-200/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-white">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-base font-semibold">{item.title}</p>
                          <p className="text-xs text-white/70">
                            {item.urgency === "Alta"
                              ? "Ação imediata recomendada"
                              : "Planeje nos próximos ciclos"}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={`${
                          item.urgency === "Alta"
                            ? "bg-red-200/20 text-red-100"
                            : "bg-amber-200/20 text-amber-100"
                        }`}
                      >
                        {item.urgency}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-white/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-[#0F1D15] shadow-2xl shadow-black/40">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <Clock size={18} className="text-blue-200" />
                Roadmap de Implementação
              </div>
              <p className="text-sm text-white/70">
                Cronograma sugerido para sua jornada de transformação digital.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Fase 1: Fundação", duration: phase1Duration, items: phase1Tasks },
                  { title: "Fase 2: Implementação", duration: phase2Duration, items: phase2Tasks },
                ].map((phase, idx) => (
                  <div
                    key={phase.title}
                    className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-2 text-white">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300/20 text-sm font-semibold text-emerald-100">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-base font-semibold">{phase.title}</p>
                        <Badge className="bg-blue-200/20 text-blue-100">
                          {phase.duration}
                        </Badge>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-white/75">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-200" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-emerald-200/30 bg-gradient-to-r from-[#123026] via-[#16402F] to-[#1F5C3E] p-8 text-center text-white shadow-2xl shadow-black/50">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-emerald-100">
              <Calendar size={22} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">
              Vamos Transformar seu Negócio?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/75">
              Nossos especialistas estão prontos para analisar seu diagnóstico em
              detalhes e criar um plano de ação personalizado. Agende agora uma
              reunião estratégica e dê o primeiro passo rumo à transformação
              digital.
            </p>
            <div className="mt-5 flex justify-center">
              <Button asChild className="h-11 rounded-full bg-white px-5 text-[#0C140F] shadow-md hover:bg-white/90">
                <a
                  href="https://api.whatsapp.com/send?phone=5581991942628&text=Quero%20agendar%20minha%20call"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Calendar size={16} className="mr-2" />
                  Agendar Reunião Estratégica
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/70">
              Reunião gratuita • Sem compromisso • Especialistas em IA
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DiagnosticReport;