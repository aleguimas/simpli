import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const options = [
  "Reduzir custos operacionais",
  "Melhorar experiência do cliente",
  "Automatizar processos",
  "Melhorar qualidade",
  "Aumentar eficiência",
  "Obter insights dos dados",
  "Aumentar vendas",
  "Inovar no mercado",
];

const Diagnostico = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const progressValue = 20;

  const headingHighlight = useMemo(
    () => "Objetivos com IA",
    [],
  );

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1faf4] via-[#f3fbf6] to-[#eef7f5] px-4 py-10 text-slate-900 md:px-8">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-sm font-medium text-emerald-700 hover:text-emerald-800">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA"
            alt="Simplí"
            className="h-10 w-auto"
            loading="lazy"
          />
        </Link>
        <Button asChild variant="outline" className="h-10 rounded-lg border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
          <Link to="/">Voltar</Link>
        </Button>
      </header>

      <main className="mx-auto mt-8 w-full max-w-5xl space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-medium text-slate-800">Passo 1 de 5</div>
          <div className="text-sm font-semibold text-emerald-700">
            {progressValue}% completo
          </div>
        </div>
        <Progress value={progressValue} className="h-2 bg-slate-200" />

        <Card className="border border-slate-200 bg-white shadow-sm">
          <CardContent className="space-y-4 p-6 md:p-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Target size={20} />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                  {headingHighlight}
                </h1>
                <p className="text-sm text-slate-600 md:text-base">
                  Quais são seus principais objetivos com inteligência artificial?
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-base font-semibold text-slate-800">
                Quais seus principais objetivos com IA?
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-800 transition hover:border-emerald-200 hover:bg-white"
                  >
                    <Checkbox
                      checked={selected.includes(option)}
                      onCheckedChange={() => toggleOption(option)}
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
            className="h-11 w-full rounded-lg border-slate-200 bg-white text-slate-600 hover:bg-slate-50 md:w-40"
            disabled
          >
            <ArrowLeft size={16} className="mr-2" />
            Anterior
          </Button>
          <Button className="h-11 w-full rounded-lg bg-emerald-600 text-white transition hover:bg-emerald-700 md:w-40">
            Próximo
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Diagnostico;