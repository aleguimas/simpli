import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Brain, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type StepConfig = {
  step: number;
  progress: number;
  stageLabel: string;
  heading: string;
  subheading: string;
  prompt: string;
  options: string[];
  selectLabel?: string;
  selectPlaceholder?: string;
  selectOptions?: string[];
  budgetLabel?: string;
  budgetPlaceholder?: string;
  budgetOptions?: string[];
  timelineLabel?: string;
  timelinePlaceholder?: string;
  timelineOptions?: string[];
  notesLabel?: string;
  notesPlaceholder?: string;
};

const steps: StepConfig[] = [
  {
    step: 1,
    progress: 20,
    stageLabel: "Objetivos principais",
    heading: "Objetivos com IA",
    subheading: "Quais são seus principais objetivos com inteligência artificial?",
    prompt: "Escolha os objetivos prioritários",
    options: [
      "Reduzir custos operacionais",
      "Melhorar experiência do cliente",
      "Automatizar processos",
      "Melhorar qualidade",
      "Aumentar eficiência",
      "Obter insights dos dados",
      "Aumentar vendas",
      "Inovar no mercado",
    ],
  },
  {
    step: 2,
    progress: 40,
    stageLabel: "Desafios atuais",
    heading: "Desafios Atuais",
    subheading: "Quais desafios você enfrenta no dia a dia?",
    prompt: "Quais desafios você enfrenta? (Marque todos que aplicam)",
    options: [
      "Processos manuais e repetitivos",
      "Dificuldade na tomada de decisão",
      "Baixa eficiência operacional",
      "Falta de insights dos dados",
      "Alto custo operacional",
      "Dificuldade em escalar operações",
      "Baixa satisfação do cliente",
      "Competitividade no mercado",
    ],
  },
  {
    step: 3,
    progress: 60,
    stageLabel: "Maturidade tecnológica",
    heading: "Maturidade Tecnológica",
    subheading: "Avalie o nível atual de maturidade digital da sua empresa",
    prompt: "Quais tecnologias você já utiliza?",
    selectLabel: "Como você classificaria a maturidade digital da sua empresa?",
    selectPlaceholder: "Selecione o nível",
    selectOptions: [
      "Iniciante - Processos majoritariamente manuais",
      "Básico - Algumas automações simples",
      "Intermediário - Sistemas integrados e dados centralizados",
      "Avançado - Analytics e automação inteligente",
      "Maduro - IA e Machine Learning já em uso",
    ],
    options: [
      "ERP/Sistema de gestão",
      "CRM",
      "Analytics/Business Intelligence",
      "Banco de dados em nuvem",
      "Agentes de IA",
      "Chatbot",
      "Automação de processos (RPA)",
      "Machine Learning/IA",
    ],
  },
  {
    step: 4,
    progress: 80,
    stageLabel: "Investimento e prazo",
    heading: "Investimento e Prazo",
    subheading: "Informações sobre orçamento e timeline para implementação",
    prompt: "Quais tecnologias você já utiliza?",
    budgetLabel: "Orçamento disponível para projetos de IA",
    budgetPlaceholder: "Selecione a faixa de orçamento",
    budgetOptions: [
      "Até R$ 10.000",
      "R$ 10.000 - R$ 50.000",
      "R$ 50.000 - R$ 100.000",
      "R$ 100.000 - R$ 500.000",
      "Acima de R$ 500.000",
      "Ainda preciso definir",
    ],
    timelineLabel: "Prazo desejado para implementação",
    timelinePlaceholder: "Selecione o prazo",
    timelineOptions: [
      "Imediato (até 1 mês)",
      "Curto prazo (1-3 meses)",
      "Médio prazo (3-6 meses)",
      "Longo prazo (6+ meses)",
      "Flexível",
    ],
    notesLabel: "Descreva brevemente seu projeto ou necessidade específica",
    notesPlaceholder: "Conte-nos mais sobre o que você espera alcançar com a implementação de IA...",
    options: [
      "ERP/Sistema de gestão",
      "CRM",
      "Analytics/Business Intelligence",
      "Banco de dados em nuvem",
      "Agentes de IA",
      "Chatbot",
      "Automação de processos (RPA)",
      "Machine Learning/IA",
    ],
  },
];

const Diagnostico = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedByStep, setSelectedByStep] = useState<Record<number, string[]>>({
    1: [],
    2: [],
    3: [],
    4: [],
  });
  const [selectedLevelByStep, setSelectedLevelByStep] = useState<Record<number, string>>({
    3: "Iniciante - Processos majoritariamente manuais",
  });
  const [budgetByStep, setBudgetByStep] = useState<Record<number, string>>({
    4: "",
  });
  const [timelineByStep, setTimelineByStep] = useState<Record<number, string>>({
    4: "",
  });
  const [notesByStep, setNotesByStep] = useState<Record<number, string>>({
    4: "",
  });

  const current = steps.find((s) => s.step === currentStep)!;
  const selected = selectedByStep[currentStep] ?? [];
  const selectedLevel = selectedLevelByStep[currentStep] ?? "";
  const selectedBudget = budgetByStep[currentStep] ?? "";
  const selectedTimeline = timelineByStep[currentStep] ?? "";
  const selectedNotes = notesByStep[currentStep] ?? "";

  const Icon =
    current.stageLabel === "Desafios atuais"
      ? Brain
      : current.stageLabel.startsWith("Maturidade")
        ? TrendingUp
        : Target;

  const toggleOption = (value: string) => {
    setSelectedByStep((prev) => {
      const currentSelections = prev[currentStep] ?? [];
      const updated = currentSelections.includes(value)
        ? currentSelections.filter((item) => item !== value)
        : [...currentSelections, value];
      return { ...prev, [currentStep]: updated };
    });
  };

  const goPrev = () => setCurrentStep((prev) => Math.max(1, prev - 1));
  const goNext = () =>
    setCurrentStep((prev) => Math.min(steps.length, prev + 1));

  return (
    <div className="relative min-h-screen bg-[#0C140F] text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1C3324] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-white/5 opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <header className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <img
              src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA"
              alt="Simplí"
              className="h-9 w-auto"
              loading="lazy"
            />
          </Link>
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-xl border-white/20 bg-white/5 text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Voltar
            </Link>
          </Button>
        </header>

        <main className="mt-10 space-y-6">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-white/80">
              <span className="font-semibold text-white">
                Passo {current.step} de 5
              </span>{" "}
              • {current.stageLabel}
            </div>
            <div className="text-sm font-semibold text-[#4ADE80]">
              {current.progress}% completo
            </div>
            <Progress
              value={current.progress}
              className="h-2 bg-white/10 [&>div]:bg-white"
            />
          </div>

          <Card className="border border-white/10 bg-[#0F1D15]/90 shadow-2xl shadow-black/30">
            <CardContent className="space-y-6 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                  <Icon size={20} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white md:text-3xl">
                    {current.heading}
                  </h2>
                  <p className="text-sm text-white/70 md:text-base">
                    {current.subheading}
                  </p>
                </div>
              </div>

              {current.selectOptions && (
                <div className="space-y-2">
                  <p className="text-base font-semibold text-white">
                    {current.selectLabel}
                  </p>
                  <Select
                    value={selectedLevel}
                    onValueChange={(value) =>
                      setSelectedLevelByStep((prev) => ({ ...prev, [currentStep]: value }))
                    }
                  >
                    <SelectTrigger className="h-11 w-full rounded-xl border-white/20 bg-white/5 text-left text-white/80 hover:border-white/30 focus:border-white focus:ring-0">
                      <SelectValue placeholder={current.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-[#0F1D15] text-white">
                      {current.selectOptions.map((option) => (
                        <SelectItem key={option} value={option} className="text-white/90">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {current.budgetOptions && (
                <div className="space-y-2">
                  <p className="text-base font-semibold text-white">
                    {current.budgetLabel}
                  </p>
                  <Select
                    value={selectedBudget}
                    onValueChange={(value) =>
                      setBudgetByStep((prev) => ({ ...prev, [currentStep]: value }))
                    }
                  >
                    <SelectTrigger className="h-11 w-full rounded-xl border-white/20 bg-white/5 text-left text-white/80 hover:border-white/30 focus:border-white focus:ring-0">
                      <SelectValue placeholder={current.budgetPlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-[#0F1D15] text-white">
                      {current.budgetOptions.map((option) => (
                        <SelectItem key={option} value={option} className="text-white/90">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {current.timelineOptions && (
                <div className="space-y-2">
                  <p className="text-base font-semibold text-white">
                    {current.timelineLabel}
                  </p>
                  <Select
                    value={selectedTimeline}
                    onValueChange={(value) =>
                      setTimelineByStep((prev) => ({ ...prev, [currentStep]: value }))
                    }
                  >
                    <SelectTrigger className="h-11 w-full rounded-xl border-white/20 bg-white/5 text-left text-white/80 hover:border-white/30 focus:border-white focus:ring-0">
                      <SelectValue placeholder={current.timelinePlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-[#0F1D15] text-white">
                      {current.timelineOptions.map((option) => (
                        <SelectItem key={option} value={option} className="text-white/90">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {current.notesLabel && (
                <div className="space-y-2">
                  <p className="text-base font-semibold text-white">
                    {current.notesLabel}
                  </p>
                  <Textarea
                    value={selectedNotes}
                    onChange={(e) =>
                      setNotesByStep((prev) => ({ ...prev, [currentStep]: e.target.value }))
                    }
                    placeholder={current.notesPlaceholder}
                    className="min-h-[120px] rounded-xl border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white focus:ring-0"
                  />
                </div>
              )}

              <div>
                <p className="text-base font-semibold text-white">
                  {current.prompt}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {current.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
                    >
                      <Checkbox
                        checked={selected.includes(option)}
                        onCheckedChange={() => toggleOption(option)}
                        className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-black"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            <Button
              variant="outline"
              className="h-11 w-full rounded-xl border-white/20 bg-white/5 text-white/70 transition hover:border-white/40 hover:bg-white/10 md:w-40"
              disabled={currentStep === 1}
              onClick={goPrev}
            >
              <ArrowLeft size={16} className="mr-2" />
              Anterior
            </Button>
            <Button
              className="h-11 w-full rounded-xl border border-white/0 bg-white px-5 text-black transition hover:border-white/70 hover:bg-transparent hover:text-white md:w-40"
              disabled={currentStep === steps.length}
              onClick={goNext}
            >
              Próximo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Diagnostico;