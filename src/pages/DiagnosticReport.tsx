import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  BarChart,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Info,
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
    return "bg-emerald-100 text-emerald-700";
  if (level?.includes("Intermediário")) return "bg-blue-100 text-blue-700";
  if (level?.includes("Básico")) return "bg-amber-100 text-amber-700";
  return "bg-gray-100 text-gray-700";
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
    <div className="min-h-screen bg-gradient-to-br from-[#e9fbf1] via-[#ecf9ff] to-[#e7f7f2] text-[#0C140F]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="text-sm text-[#0C140F]">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA"
            alt="Simplí"
            className="h-9 w-auto"
            loading="lazy"
          />
        </Link>
        <Button
          variant="outline"
          className="rounded-full border-[#0C140F26] bg-white text-[#0C140F] hover:border-[#0C140F40]"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar ao Início
        </Button>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge className="rounded-full bg-emerald-100 text-emerald-700">
            Seu Relatório de Diagnóstico
          </Badge>
          <h1 className="text-3xl font-semibold text-[#0C140F] md:text-4xl">
            Resultado da sua{" "}
            <span className="text-emerald-600">Análise de Maturidade em IA</span>
          </h1>
          <p className="max-w-3xl text-base text-[#0C140F]/75">
            Com base nas suas respostas, preparamos uma visão completa do nível de
            preparação da sua empresa para implementar inteligência artificial.
          </p>
        </div>

        <section className="mt-8 space-y-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <BarChart size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0C140F]">
                      Índice de Maturidade Digital
                    </p>
                    <p className="text-xs text-[#0C140F]/60">
                      Avaliação do preparo atual para IA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  Nível de preparação
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-[#0C140F]">
                    {maturityScore}/100
                  </span>
                  <Badge className={`${badgeColor(levelLabel)} font-semibold`}>
                    {levelLabel}
                  </Badge>
                  <span className="text-sm text-[#0C140F]/60">
                    {summary.maturityLevel || "Requer estruturação antes da IA"}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#0C140F0F] md:w-64">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#1C3324] to-[#4ADE80]"
                    style={{ width: `${maturityScore}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-[#0C140F0D] bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0C140F]">
                    <Sparkles size={18} className="text-emerald-600" />
                    Objetivos Identificados
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#0C140F]">
                    {objectives}
                  </div>
                  <p className="text-xs text-[#0C140F]/60">
                    Áreas de foco para IA
                  </p>
                </div>
                <div className="rounded-xl border border-[#0C140F0D] bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0C140F]">
                    <ShieldAlert size={18} className="text-sky-600" />
                    Desafios Mapeados
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#0C140F]">
                    {challenges}
                  </div>
                  <p className="text-xs text-[#0C140F]/60">
                    Oportunidades de melhoria
                  </p>
                </div>
                <div className="rounded-xl border border-[#0C140F0D] bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0C140F]">
                    <Lightbulb size={18} className="text-lime-600" />
                    Recomendações
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#0C140F]">
                    {recommendationsCount}
                  </div>
                  <p className="text-xs text-[#0C140F]/60">Ações prioritárias</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-amber-50 shadow-sm">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#b18100]">
                <Award size={18} />
                Pontos Positivos da sua Empresa
              </div>
              <p className="text-sm text-[#0C140F]/70">
                Reconhecemos os pontos fortes que já existem na sua organização.
              </p>
              <div className="rounded-xl border border-amber-100 bg-white p-4 text-sm text-[#0C140F]">
                <div className="flex items-center gap-2 font-semibold">
                  <Star size={16} className="text-amber-500" />
                  Iniciativa Proativa
                </div>
                <p className="mt-2 text-[#0C140F]/70">
                  Ao fazer este diagnóstico, {personName || "você"} deu o primeiro
                  passo para a transformação digital em {companyName}.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#0C140F]">
                <Lightbulb size={18} className="text-amber-500" />
                Recomendações Estratégicas
              </div>
              <p className="text-sm text-[#0C140F]/70">
                Com base na sua análise, estas são as ações prioritárias para sua
                empresa.
              </p>
              <div className="space-y-4">
                {priorities.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`rounded-xl border p-4 ${
                      idx === 0 ? "border-red-200 bg-red-50/80" : "border-amber-200 bg-amber-50/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[#0C140F]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#0C140F]">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-base font-semibold">{item.title}</p>
                          <p className="text-xs text-[#0C140F]/60">
                            {idx === 0
                              ? "Primeiro passo fundamental para a jornada de IA"
                              : "Segundo passo após consolidar a primeira implementação"}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={`${
                          idx === 0
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.urgency}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-[#0C140F]/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#0C140F]">
                <Clock size={18} className="text-blue-600" />
                Roadmap de Implementação
              </div>
              <p className="text-sm text-[#0C140F]/70">
                Cronograma sugerido para sua jornada de transformação digital.
              </p>
              <div className="space-y-6">
                {roadmap.map((phase, idx) => (
                  <div
                    key={phase.title}
                    className="flex flex-col gap-3 rounded-xl border border-[#0C140F0F] bg-white p-4"
                  >
                    <div className="flex items-center gap-2 text-[#0C140F]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-base font-semibold">{phase.title}</p>
                        <Badge className="bg-[#e8f2ff] text-[#0C140F]">
                          {phase.duration}
                        </Badge>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-[#0C140F]/75">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-600" />
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
          <div className="rounded-2xl bg-gradient-to-r from-[#51e089] via-[#4ade80] to-[#b7f5d1] p-8 text-center text-[#0C140F] shadow-lg shadow-emerald-100">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#1C3324]">
              <Calendar size={22} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">
              Vamos Transformar seu Negócio?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#0C140F]/80">
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
            <p className="mt-3 text-xs text-[#0C140F]/70">
              Reunião gratuita • Sem compromisso • Especialistas em IA
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DiagnosticReport;