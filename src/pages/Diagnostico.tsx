import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle2,
  Mail,
  Target,
  TrendingUp,
  UserRound,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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

const Diagnostico = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedByStep, setSelectedByStep] = useState<Record<number, string[]>>({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });
  const [selectedLevelByStep, setSelectedLevelByStep] = useState<
    Record<number, string>
  >({
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
  const [showResultsDialog, setShowResultsDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companySector, setCompanySector] = useState("");
  const [role, setRole] = useState("");
  const [roleArea, setRoleArea] = useState("");
  const [subscribeNews, setSubscribeNews] = useState(false);

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

  const Icon =
    current.stageLabel === "Desafios atuais"
      ? Brain
      : current.stageLabel.startsWith("Maturidade")
        ? TrendingUp
        : current.stageLabel.startsWith("Investimento")
          ? Calendar
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
  const goNext = () => setCurrentStep((prev) => Math.min(steps.length, prev + 1));

  const handlePrimaryAction = () => {
    if (currentStep === steps.length) {
      setShowResultsDialog(true);
      return;
    }
    goNext();
  };

  const openDetailsModal = () => {
    setShowResultsDialog(false);
    setShowDetailsDialog(true);
  };

  const handleDetailsSubmit = () => {
    setShowDetailsDialog(false);
  };

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
                        <SelectItem
                          key={option}
                          value={option}
                          className="text-white/90"
                        >
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
                        <SelectItem
                          key={option}
                          value={option}
                          className="text-white/90"
                        >
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
                        <SelectItem
                          key={option}
                          value={option}
                          className="text-white/90"
                        >
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
                      <p className="text-base font-semibold text-white">
                        {select.label}
                      </p>
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
                            <SelectItem
                              key={option}
                              value={option}
                              className="text-white/90"
                            >
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

      <Dialog open={showResultsDialog} onOpenChange={setShowResultsDialog}>
        <DialogContent className="max-w-md rounded-2xl border border-transparent bg-white text-[#0C140F] shadow-xl">
          <DialogHeader className="space-y-2">
            <div className="flex items-center gap-2 text-[#1C3324]">
              <Mail size={20} />
              <DialogTitle className="text-lg font-semibold">
                Acesse seus Resultados
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm text-[#0C140F]/70">
              Insira seu email para visualizar o relatório completo
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0C140F]">
              E-mail Corporativo *
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@empresa.com"
              className="h-11 rounded-xl border-[#0C140F33] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
            />
          </div>

          <div className="pt-4">
            <Button
              className="h-11 w-full rounded-xl border border-transparent bg-[#1C3324] text-white transition hover:bg-[#15271b]"
              onClick={openDetailsModal}
            >
              Continuar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-xl rounded-2xl border border-transparent bg-white text-[#0C140F] shadow-xl">
          <DialogHeader className="space-y-2">
            <div className="flex items-center gap-2 text-[#1C3324]">
              <UserRound size={20} />
              <DialogTitle className="text-lg font-semibold">
                Complete seus Dados
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm text-[#0C140F]/70">
              Para acessar o relatório, precisamos de algumas informações adicionais:
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">
                Nome *
              </label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="João"
                className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">
                Sobrenome *
              </label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Silva"
                className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-[#0C140F]">
              Número de telefone WhatsApp *
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+55 11 99999-9999"
              className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-[#0C140F]">
              Nome da empresa *
            </label>
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Minha Empresa Ltda"
              className="h-11 rounded-xl border-[#0C140F26] bg-white text-[#0C140F] placeholder:text-[#0C140F80] focus:border-[#1C3324] focus:ring-0"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">
                Qual é o tamanho da sua empresa? *
              </label>
              <Select value={companySize} onValueChange={setCompanySize}>
                <SelectTrigger className="h-11 w-full rounded-xl border-[#0C140F26] bg-white text-left text-[#0C140F] hover:border-[#1C3324] focus:border-[#1C3324] focus:ring-0">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="border-[#0C140F26] bg-white text-[#0C140F]">
                  <SelectItem value="1-50">Pequena (1-50)</SelectItem>
                  <SelectItem value="51-200">Média (51-200)</SelectItem>
                  <SelectItem value="201-1000">Grande (200-1000)</SelectItem>
                  <SelectItem value="1000+">Enterprise (1000+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">
                Qual é o setor de atuação da sua empresa? *
              </label>
              <Select value={companySector} onValueChange={setCompanySector}>
                <SelectTrigger className="h-11 w-full rounded-xl border-[#0C140F26] bg-white text-left text-[#0C140F] hover:border-[#1C3324] focus:border-[#1C3324] focus:ring-0">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="border-[#0C140F26] bg-white text-[#0C140F]">
                  <SelectItem value="financeiro">
                    Financeiro (Bancos & Pagamentos)
                  </SelectItem>
                  <SelectItem value="seguros">Seguros</SelectItem>
                  <SelectItem value="tecnologia">
                    Tecnologia (Software & Cloud)
                  </SelectItem>
                  <SelectItem value="telecomunicacoes">Telecomunicações</SelectItem>
                  <SelectItem value="varejo">
                    Varejo & E-commerce
                  </SelectItem>
                  <SelectItem value="industria">
                    Indústria & Manufatura
                  </SelectItem>
                  <SelectItem value="energia">
                    Energia & Combustíveis (Distribuição/Downstream)
                  </SelectItem>
                  <SelectItem value="utilities">
                    Serviços de Eletricidade, Gás, Água e Esgoto (Utilities)
                  </SelectItem>
                  <SelectItem value="logistica">
                    Logística, Transporte & Mobilidade
                  </SelectItem>
                  <SelectItem value="imobiliario">
                    Imobiliário / Construção civil
                  </SelectItem>
                  <SelectItem value="agronegocio">Agronegócio</SelectItem>
                  <SelectItem value="saude">
                    Saúde (Prestadores & Planos)
                  </SelectItem>
                  <SelectItem value="farmaceutica">
                    Farmacêutica & Biotecnologia
                  </SelectItem>
                  <SelectItem value="educacao">
                    Educação (Educação & Treinamentos)
                  </SelectItem>
                  <SelectItem value="midia">Mídia / Publishers</SelectItem>
                  <SelectItem value="martech">Agências / Martech</SelectItem>
                  <SelectItem value="publico">Setor Público (Governo)</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">
                Cargo na Empresa *
              </label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="h-11 w-full rounded-xl border-[#0C140F26] bg-white text-left text-[#0C140F] hover:border-[#1C3324] focus:border-[#1C3324] focus:ring-0">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="border-[#0C140F26] bg-white text-[#0C140F]">
                  <SelectItem value="founder">Founder</SelectItem>
                  <SelectItem value="presidente">Presidente</SelectItem>
                  <SelectItem value="ceo">CEO</SelectItem>
                  <SelectItem value="clevel">C-Level</SelectItem>
                  <SelectItem value="vp">VP</SelectItem>
                  <SelectItem value="diretor">Diretor</SelectItem>
                  <SelectItem value="superintendente">Superintendente</SelectItem>
                  <SelectItem value="head">Head</SelectItem>
                  <SelectItem value="gerente">Gerente</SelectItem>
                  <SelectItem value="coordenador">Coordenador</SelectItem>
                  <SelectItem value="especialista">Especialista</SelectItem>
                  <SelectItem value="analista">Analista</SelectItem>
                  <SelectItem value="assistente">Assistente</SelectItem>
                  <SelectItem value="estagiario">Estagiário</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#0C140F]">
                Área de atuação do seu cargo? *
              </label>
              <Select value={roleArea} onValueChange={setRoleArea}>
                <SelectTrigger className="h-11 w-full rounded-xl border-[#0C140F26] bg-white text-left text-[#0C140F] hover:border-[#1C3324] focus:border-[#1C3324] focus:ring-0">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="border-[#0C140F26] bg-white text-[#0C140F]">
                  <SelectItem value="tecnologia">Tecnologia / Produto</SelectItem>
                  <SelectItem value="operacoes">Operações</SelectItem>
                  <SelectItem value="marketing">Marketing / Vendas</SelectItem>
                  <SelectItem value="financas">Finanças</SelectItem>
                  <SelectItem value="rh">RH</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-[#0C140F]">
            <Checkbox
              checked={subscribeNews}
              onCheckedChange={(checked) => setSubscribeNews(!!checked)}
              className="border-[#0C140F66] data-[state=checked]:bg-[#1C3324] data-[state=checked]:text-white"
            />
            Quero assinar a Simplí News: AI
          </label>

          <div className="pt-2">
            <Button
              className="h-11 w-full rounded-xl border border-transparent bg-[#8BE0A3] text-[#0C140F] transition hover:bg-[#7ad48f]"
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