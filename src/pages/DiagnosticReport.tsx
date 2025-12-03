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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  const objectives = summary.selections?.[1]?.length ?? 0;
  const challenges = summary.selections?.[2]?.length ?? 0;
  const recommendationsCount = Math.max(2, Math.ceil(challenges / 2) || 2);

  const maturityScore = (() => {
    const level = summary.maturityLevel ?? "";
    if (level.includes("Maduro")) return 85;
    if (level.includes("Avançado")) return 75;
    if (level.includes("Intermediário")) return 55;
    if (level.includes("Básico")) return 35;
    return 20;
  })();

  const levelLabel =
    summary.maturityLevel?.split("-")[0]?.trim() ?? "Básico / Inicial";

  const priorities = [
    {
      title: "Estruturação de Dados",
      urgency: "Alta",
      description:
        "Organize e centralize seus dados antes de implementar IA. Crie um data warehouse e defina KPIs claros.",
    },
    {
      title: "Melhoria da Experiência do Cliente",
      urgency: "Média",
      description:
        "Implemente fluxos com chatbots e personalização para elevar satisfação e reduzir tempo de resposta.",
    },
  ];

  const roadmap = [
    {
      title: "Fase 1: Fundação",
      duration: "2-3 meses",
      items: [
        "Estruturação de dados",
        "Treinamento básico da equipe",
        "Definição de KPIs",
      ],
    },
    {
      title: "Fase 2: Implementação",
      duration: "3-6 meses",
      items: [
        "Primeiros projetos piloto",
        "Integração de sistemas",
        "Expansão gradual",
      ],
    },
  ];

  const companyName = summary.contact?.company || "Sua empresa";
  const personName =
    summary.contact?.firstName && summary.contact?.lastName
      ? `${summary.contact.firstName} ${summary.contact.lastName}`
      : "";

  return (
    <div className="min-h-screen bg-[#0C140F] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="text-sm text-white">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA"
            alt="Simplí"
            className="h-9 w-auto"
            loading="lazy"
          />
        </Link>
        <Button
          variant="outline"
          className="rounded-full border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
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
                  <span className="text-sm text-white/60">
                    {summary.maturityLevel || "Requer estruturação antes da IA"}
                  </span>
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
                    {objectives}
                  </div>
                  <p className="text-xs text-white/60">Áreas de foco para IA</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <ShieldAlert size={18} className="text-sky-200" />
                    Desafios Mapeados
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {challenges}
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

          <Card className="border border-amber-200/20 bg-gradient-to-br from-amber-200/10 via-amber-200/5 to-transparent shadow-2xl shadow-black/40">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-amber-200">
                <Award size={18} />
                Pontos Positivos da sua Empresa
              </div>
              <p className="text-sm text-white/75">
                Reconhecemos os pontos fortes que já existem na sua organização.
              </p>
              <div className="rounded-xl border border-amber-200/30 bg-[#0F1D15] p-4 text-sm text-white">
                <div className="flex items-center gap-2 font-semibold text-amber-200">
                  <Star size={16} className="text-amber-300" />
                  Iniciativa Proativa
                </div>
                <p className="mt-2 text-white/75">
                  Ao fazer este diagnóstico, {personName || "você"} deu o primeiro
                  passo para a transformação digital em {companyName}.
                </p>
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
                Com base na sua análise, estas são as ações prioritárias para sua
                empresa.
              </p>
              <div className="space-y-4">
                {priorities.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border p-4 ${
                      idx === 0
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
                            {idx === 0
                              ? "Primeiro passo fundamental para a jornada de IA"
                              : "Segundo passo após consolidar a primeira implementação"}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={`${
                          idx === 0
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
                {roadmap.map((phase, idx) => (
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
              <Button className="h-11 rounded-full bg-white px-5 text-[#0C140F] shadow-md hover:bg-white/90">
                <Calendar size={16} className="mr-2" />
                Agendar Reunião Estratégica
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