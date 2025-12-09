import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  Mail,
  Target,
  TrendingUp,
} from "lucide-react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { showError } from "@/utils/toast";

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

type ReadinessKey = "team" | "knowledge" | "training";

const WEBHOOK_URL = "https://webhook.n8n1.agenciaevodigital.com/webhook/forms1";

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
      "Básico",
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
    prompt: "",
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
    notesPlaceholder:
      "Conte-nos mais sobre o que você espera alcançar com a implementação de IA...",
    options: [],
  },
  {
    step: 5,
    progress: 100,
    stageLabel: "Recursos e capacitação",
    heading: "Recursos e Capacitação",
    subheading:
      "Entender a prontidão da equipe é crucial para o sucesso da implementação",
    prompt: "",
    options: [],
  },
];

const readinessSelects: {
  key: ReadinessKey;
  label: string;
  placeholder: string;
  options: string[];
}[] = [
  {
    key: "team",
    label: "Sua empresa possui equipe técnica interna?",
    placeholder: "Selecione uma opção",
    options: [
      "Sim, equipe completa de TI/Tecnologia",
      "Sim, mas limitada",
      "Não, dependemos de terceiros",
      "Não temos equipe técnica",
    ],
  },
  {
    key: "knowledge",
    label: "Qual o nível de conhecimento da equipe sobre IA?",
    placeholder: "Selecione o nível",
    options: [
      "Avançado - Já trabalham com IA",
      "Intermediário - Conhecem conceitos",
      "Básico - Pouco conhecimento",
      "Nenhum - Precisam de capacitação",
    ],
  },
  {
    key: "training",
    label: "Há disponibilidade para treinamento da equipe?",
    placeholder: "Selecione uma opção",
    options: [
      "Sim, totalmente",
      "Sim, parcialmente",
      "Não, precisamos de solução pronta",
      "Ainda não definimos",
    ],
  },
];

const maturityMap: Record<string, string> = {
  "Iniciante - Processos majoritariamente manuais": "iniciante",
  "Básico": "basico",
  "Intermediário - Sistemas integrados e dados centralizados": "intermediario",
  "Avançado - Analytics e automação inteligente": "avancado",
  "Maduro - IA e Machine Learning já em uso": "maduro",
};

const budgetMap: Record<string, string> = {
  "Até R$ 10.000": "ate10k",
  "R$ 10.000 - R$ 50.000": "10k-50k",
  "R$ 50.000 - R$ 100.000": "50k-100k",
  "R$ 100.000 - R$ 500.000": "100k-500k",
  "Acima de R$ 500.000": "500k-plus",
  "Ainda preciso definir": "indefinido",
};

const timelineMap: Record<string, string> = {
  "Imediato (até 1 mês)": "imediato",
  "Curto prazo (1-3 meses)": "curto",
  "Médio prazo (3-6 meses)": "medio",
  "Longo prazo (6+ meses)": "longo",
  Flexível: "flexivel",
};

const teamMap: Record<string, string> = {
  "Sim, equipe completa de TI/Tecnologia": "equipe-completa",
  "Sim, mas limitada": "equipe-limitada",
  "Não, dependemos de terceiros": "terceiros",
  "Não temos equipe técnica": "sem-equipe",
};

const knowledgeMap: Record<string, string> = {
  "Avançado - Já trabalham com IA": "avancado",
  "Intermediário - Conhecem conceitos": "intermediario",
  "Básico - Pouco conhecimento": "basico",
  "Nenhum - Precisam de capacitação": "nenhum",
};

const trainingMap: Record<string, string> = {
  "Sim, totalmente": "totalmente",
  "Sim, parcialmente": "parcialmente",
  "Não, precisamos de solução pronta": "sem-treinamento",
  "Ainda não definimos": "indefinido",
};

const Diagnostico = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedByStep, setSelectedByStep] = useState<Record<number, string[]>>({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
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
  const [readinessByStep, setReadinessByStep] = useState<
    Record<number, Record<ReadinessKey, string>>
  >({
    5: { team: "", knowledge: "", training: "" },
  });

  const [showDetailsDialog, setShowDetailsDialog] = useState(true);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [hasCompany, setHasCompany] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [employeesCount, setEmployeesCount] = useState("");

  const current = steps.find((s) => s.step === currentStep)!;
  const selected = selectedByStep[currentStep] ?? [];
  const selectedLevel = selectedLevelByStep[currentStep] ?? "";
  const selectedBudget = budgetByStep[currentStep] ?? "";
  const selectedTimeline = timelineByStep[currentStep] ?? "";
  const selectedNotes = notesByStep[currentStep] ?? "";
  const readiness = readinessByStep[currentStep] ?? {
    team: "",
    knowledge: "",
    training: "",
  };

  const Icon = useMemo(() => {
    if (current.stageLabel === "Desafios atuais") return Brain;
    if (current.stageLabel.startsWith("Maturidade")) return TrendingUp;
    if (current.stageLabel.startsWith("Investimento")) return Calendar;
    if (current.stageLabel.includes("Recursos")) return BookOpen;
    return Target;
  }, [current.stageLabel]);

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
  const goNext = () => setCurrentStep((prev) => Math.min(steps.length, prev + 1));

  const validateCurrentStep = () => {
    if (currentStep === 1 && selected.length === 0) {
      showError("Selecione pelo menos um objetivo para avançar.");
      return false;
    }
    if (currentStep === 2 && selected.length === 0) {
      showError("Selecione pelo menos um desafio para avançar.");
      return false;
    }
    if (currentStep === 3) {
      if (!selectedLevel) {
        showError("Escolha o nível de maturidade digital para avançar.");
        return false;
      }
      if (selected.length === 0) {
        showError("Selecione ao menos uma tecnologia utilizada.");
        return false;
      }
    }
    if (currentStep === 4) {
      if (!selectedBudget) {
        showError("Informe o orçamento disponível para avançar.");
        return false;
      }
      if (!selectedTimeline) {
        showError("Informe o prazo desejado para avançar.");
        return false;
      }
      if (!selectedNotes.trim()) {
        showError("Descreva brevemente seu projeto antes de avançar.");
        return false;
      }
    }
    if (currentStep === 5) {
      const { team, knowledge, training } = readiness;
      if (!team || !knowledge || !training) {
        showError("Responda todos os campos de prontidão para avançar.");
        return false;
      }
    }
    return true;
  };

  const handlePrimaryAction = () => {
    if (!validateCurrentStep()) return;
    if (currentStep === steps.length) {
      setShowDetailsDialog(true);
      return;
    }
    goNext();
  };

  const maturityScore = (level: string) => {
    if (level.includes("Maduro")) return 85;
    if (level.includes("Avançado")) return 75;
    if (level.includes("Intermediário")) return 55;
    if (level.includes("Básico")) return 35;
    return 20;
  };

  const validateDetails = () => {
    if (!firstName.trim()) {
      showError("Informe seu nome.");
      return false;
    }
    if (!lastName.trim()) {
      showError("Informe seu sobrenome.");
      return false;
    }
    if (!email.trim()) {
      showError("Informe seu e-mail.");
      return false;
    }
    if (!phone.trim()) {
      showError("Informe seu WhatsApp.");
      return false;
    }
    if (hasCompany) {
      if (!companyName.trim()) {
        showError("Informe o nome da empresa.");
        return false;
      }
      if (!employeesCount.trim()) {
        showError("Informe quantos funcionários.");
        return false;
      }
    }
    return true;
  };

  const handleDetailsSubmit = async () => {
    if (!validateDetails()) return;

    const levelText = selectedLevelByStep[3] ?? "";
    const score = maturityScore(levelText);
    const payload = {
      formType: "diagnostico_ia",
      timestamp: new Date().toISOString(),
      completeData: {
        nome: firstName,
        sobrenome: lastName,
        telefone: phone,
        email,
        possuiEmpresa: hasCompany,
        empresa: hasCompany ? companyName : "",
        funcionarios: hasCompany ? employeesCount : "",
        desafios: selectedByStep[2] ?? [],
        objetivos: selectedByStep[1] ?? [],
        tecnologias: selectedByStep[3] ?? [],
        maturidade: maturityMap[levelText] ?? "",
        orcamento: budgetMap[budgetByStep[4] ?? ""] ?? "",
        prazo: timelineMap[timelineByStep[4] ?? ""] ?? "",
        descricao: notesByStep[4] ?? "",
        equipeTecnica: teamMap[readinessByStep[5]?.team ?? ""] ?? "",
        conhecimentoIA: knowledgeMap[readinessByStep[5]?.knowledge ?? ""] ?? "",
        disponibilidadeTreinamento: trainingMap[readinessByStep[5]?.training ?? ""] ?? "",
        IMD: score,
      },
    };

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const summary = {
      selections: selectedByStep,
      maturityLevel: selectedLevelByStep[3] ?? "",
      budget: budgetByStep[4] ?? "",
      timeline: timelineByStep[4] ?? "",
      notes: notesByStep[4] ?? "",
      readiness: readinessByStep[5] ?? { team: "", knowledge: "", training: "" },
      contact: {
        email,
        firstName,
        lastName,
        phone,
        hasCompany,
        company: hasCompany ? companyName : "",
        employeesCount: hasCompany ? employeesCount : "",
      },
    };
    setShowDetailsDialog(false);
    navigate("/diagnostico/resultado", { state: { summary } });
  };

  useEffect(() => {
    setShowDetailsDialog(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C140F] text-white">
      <SEO
        title="Diagnóstico de IA | Avalie a Maturidade Digital da Sua Empresa"
        description="Faça um diagnóstico completo da maturidade digital da sua empresa e descubra como a Inteligência Artificial pode transformar seu negócio. Avaliação gratuita e personalizada."
        keywords="diagnóstico IA, maturidade digital, avaliação de IA, diagnóstico empresarial, transformação digital, análise de processos, Recife"
        canonical="/diagnostico"
        noindex={true}
      />
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1C3324] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-white/5 opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <header className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <img
              src="/logonome-branca-cortada.webp"
              alt="Simpli logo"
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
              <span className="font-semibold text-white">Passo {current.step} de 5</span>{" "}
              • {current.stageLabel}
            </div>
            <div className="text-sm font-semibold text-[#4ADE80]">{current.progress}% completo</div>
            <Progress value={current.progress} className="h-2 bg-white/10 [&>div]:bg-white" />
          </div>

          <Card className="border border-white/10 bg-[#0F1D15]/90 shadow-2xl shadow-black/30">
            <CardContent className="space-y-6 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                  <Icon size={20} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white md:text-3xl">{current.heading}</h2>
                  <p className="text-sm text-white/70 md:text-base">{current.subheading}</p>
                </div>
              </div>

              {current.selectOptions && (
                <div className="space-y-2">
                  <p className="text-base font-semibold text-white">{current.selectLabel}</p>
                  <Select
                    value={selectedLevel}
                    onValueChange={(value) =>
                      setSelectedLevelByStep((prev) => ({
                        ...prev,
                        [currentStep]: value,
                      }))
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
                  <p className="text-base font-semibold text-white">{current.budgetLabel}</p>
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
                  <p className="text-base font-semibold text-white">{current.timelineLabel}</p>
                  <Select
                    value={selectedTimeline}
                    onValueChange={(value) =>
                      setTimelineByStep((prev) => ({
                        ...prev,
                        [currentStep]: value,
                      }))
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
                  <p className="text-base font-semibold text-white">{current.notesLabel}</p>
                  <Textarea
                    value={selectedNotes}
                    onChange={(e) =>
                      setNotesByStep((prev) => ({
                        ...prev,
                        [currentStep]: e.target.value,
                      }))
                    }
                    placeholder={current.notesPlaceholder}
                    className="min-h-[120px] rounded-xl border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white focus:ring-0"
                  />
                </div>
              )}

              {current.step === 5 && (
                <div className="space-y-4">
                  {readinessSelects.map((select) => (
                    <div key={select.key} className="space-y-2">
                      <p className="text-base font-semibold text-white">{select.label}</p>
                      <Select
                        value={readiness[select.key]}
                        onValueChange={(value) =>
                          setReadinessByStep((prev) => ({
                            ...prev,
                            [currentStep]: {
                              ...(prev[currentStep] ?? {
                                team: "",
                                knowledge: "",
                                training: "",
                              }),
                              [select.key]: value,
                            },
                          }))
                        }
                      >
                        <SelectTrigger className="h-11 w-full rounded-xl border-white/20 bg-white/5 text-left text-white/80 hover:border-white/30 focus:border-white focus:ring-0">
                          <SelectValue placeholder={select.placeholder} />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-[#0F1D15] text-white">
                          {select.options.map((option) => (
                            <SelectItem key={option} value={option} className="text-white/90">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              )}

              {current.options.length > 0 && current.prompt && (
                <div>
                  <p className="text-base font-semibold text-white">{current.prompt}</p>
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
              )}
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
              onClick={handlePrimaryAction}
            >
              {currentStep === steps.length ? (
                <>
                  Ver diagnóstico
                  <CheckCircle2 size={18} className="ml-2" />
                </>
              ) : (
                <>
                  Próximo
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </Button>
          </div>
        </main>
      </div>

      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-xl rounded-2xl border border-transparent bg-white text-[#0C140F] shadow-xl">
          <DialogHeader className="space-y-2">
            <div className="flex items-center gap-2 text-[#1C3324]">
              <Mail size={20} />
              <DialogTitle className="text-lg font-semibold">Acesse seus Resultados</DialogTitle>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">Nome *</label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="João"
                className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">Sobrenome *</label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Silva"
                className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-[#0C140F]">E-mail *</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@empresa.com"
              className="h-11 rounded-xl border-[#0C140F33] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-[#0C140F]">WhatsApp *</label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+55 11 99999-9999"
              className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
            />
          </div>

          <label className="flex items-center gap-3 text-sm text-[#0C140F]">
            <Checkbox
              checked={hasCompany}
              onCheckedChange={(checked) => setHasCompany(!!checked)}
              className="border-[#0C140F66] data-[state=checked]:bg-[#1C3324] data-[state=checked]:text-white"
            />
            Possui empresa?
          </label>

          {hasCompany && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-[#0C140F]">Nome da empresa *</label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Minha Empresa Ltda"
                  className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-[#0C140F]">Quantos funcionários *</label>
                <Input
                  value={employeesCount}
                  onChange={(e) => setEmployeesCount(e.target.value)}
                  placeholder="Ex: 20"
                  className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
                />
              </div>
            </div>
          )}

          <div className="pt-2">
            <Button
              className="h-11 w-full rounded-xl border border-transparent bg-[#1C3324] text-white transition hover:bg-[#15271b]"
              onClick={handleDetailsSubmit}
            >
              Acessar Relatório Completo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Diagnostico;