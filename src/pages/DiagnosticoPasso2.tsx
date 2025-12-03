import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const challenges = [
  "Processos manuais e repetitivos",
  "Dificuldade na tomada de decisão",
  "Baixa eficiência operacional",
  "Falta de insights dos dados",
  "Alto custo operacional",
  "Dificuldade em escalar operações",
  "Baixa satisfação do cliente",
  "Competitividade no mercado",
];

const DiagnosticoPasso2 = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const progressValue = 40;

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <div className="min-h-screen bg-[#f3fbf7] text-[#0f172a]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <header className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 text-sm font-medium text-[#0f172a]/80 transition hover:text-[#0f172a]"
          >
            <img
              src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA"
              alt="Simplí"
              className="h-12 w-auto"
              loading="lazy"
            />
          </Link>
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-xl border-[#d1d9d3] bg-white text-[#0f172a] hover:border-[#0f172a]/30 hover:bg-[#eff5f1]"
          >
            <Link to="/diagnostico" className="inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Voltar
            </Link>
          </Button>
        </header>

        <main className="mt-10 space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-medium text-[#0f172a]">
              Passo 2 de 5
            </div>
            <div className="text-sm font-semibold text-[#15803d]">
              {progressValue}% completo
            </div>
          </div>

          <Progress
            value={progressValue}
            className="h-2 rounded-full bg-[#d8e4dd] [&>div]:bg-[#15803d]"
          />

          <Card className="border border-[#d7dfd8] bg-white shadow-sm">
            <CardContent className="space-y-6 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-[#d7dfd8] bg-[#f3fbf7] text-[#15803d]">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#0f172a] md:text-3xl">
                    Desafios Atuais
                  </h2>
                  <p className="text-sm text-[#475569] md:text-base">
                    Quais desafios você enfrenta no dia a dia?
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base font-semibold text-[#0f172a]">
                  Quais desafios você enfrenta? (Marque todos que aplicam)
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {challenges.map((challenge) => (
                    <label
                      key={challenge}
                      className="flex items-center gap-3 rounded-xl border border-[#d7dfd8] bg-white px-4 py-3 text-sm text-[#0f172a] transition hover:border-[#15803d]/50"
                    >
                      <Checkbox
                        checked={selected.includes(challenge)}
                        onCheckedChange={() => toggleOption(challenge)}
                        className="border-[#94a3b8] data-[state=checked]:border-[#15803d] data-[state=checked]:bg-[#15803d] data-[state=checked]:text-white"
                      />
                      <span>{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-xl border-[#d1d9d3] bg-white text-[#0f172a] transition hover:border-[#0f172a]/30 hover:bg-[#eff5f1] md:w-40"
            >
              <Link to="/diagnostico">
                <ArrowLeft size={16} className="mr-2" />
                Anterior
              </Link>
            </Button>
            <Button className="h-11 w-full rounded-xl bg-[#15803d] px-6 text-white transition hover:bg-[#0f9a4a] md:w-40">
              Próximo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DiagnosticoPasso2;