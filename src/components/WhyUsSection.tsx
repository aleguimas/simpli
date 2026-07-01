import { Fragment } from "react";
import { AlertTriangle, Check, X, type LucideIcon } from "lucide-react";

type IconKind = "check" | "warn" | "x";

type Cell = { kind: IconKind; text: string };
type Row = { label: string; simpli: Cell; others: Cell; inhouse: Cell };

const rows: Row[] = [
  {
    label: "Abordagem",
    simpli: { kind: "check", text: "Mapeamento de processos primeiro" },
    others: { kind: "warn", text: "Foco na ferramenta" },
    inhouse: { kind: "warn", text: "Depende da contratação" },
  },
  {
    label: "Fluxo de trabalho",
    simpli: { kind: "check", text: "Em torno da sua operação" },
    others: { kind: "x", text: "Quase tudo em template" },
    inhouse: { kind: "check", text: "Se houver expertise" },
  },
  {
    label: "Velocidade",
    simpli: { kind: "check", text: "Semanas, não meses" },
    others: { kind: "warn", text: "Quase sempre atrasado" },
    inhouse: { kind: "x", text: "Contratação e onboarding" },
  },
  {
    label: "Otimização",
    simpli: { kind: "check", text: "Melhoria contínua" },
    others: { kind: "warn", text: "Configura e desaparece" },
    inhouse: { kind: "warn", text: "Limitado pela capacidade" },
  },
  {
    label: "Eficiência de custo",
    simpli: { kind: "check", text: "Escopo e custo definidos" },
    others: { kind: "warn", text: "Escopo que só cresce" },
    inhouse: { kind: "x", text: "Salário + encargos" },
  },
];

const iconFor: Record<IconKind, { Icon: LucideIcon; className: string }> = {
  check: { Icon: Check, className: "text-[#4ADE80]" },
  warn: { Icon: AlertTriangle, className: "text-amber-400/80" },
  x: { Icon: X, className: "text-white/35" },
};

const CellContent = ({ cell }: { cell: Cell }) => {
  const { Icon, className } = iconFor[cell.kind];
  return (
    <>
      <Icon size={18} className={`shrink-0 ${className}`} />
      <span className="text-sm text-white/85 sm:text-[15px]">{cell.text}</span>
    </>
  );
};

const WhyUsSection = () => {
  return (
    <section id="por-que-nos" className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Por que nós
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Feito para Gerar Impacto Real no Negócio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            A maioria das agências fala sobre IA. Nós construímos sistemas que
            reduzem o trabalho manual, aumentam a precisão e escalam com a sua
            operação.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="grid min-w-[720px] grid-cols-[minmax(110px,0.9fr)_repeat(3,minmax(0,1.2fr))]">
            {/* Header row */}
            <div className="px-5 py-6" />
            <div className="relative flex items-center overflow-hidden rounded-t-2xl bg-white/[0.05] px-5 py-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white to-[#20E000]" />
              <img
                src="/logonome-branca-cortada.webp"
                alt="Simplí"
                className="h-6 w-auto md:h-7"
              />
            </div>
            <div className="flex items-center px-5 py-6 text-lg font-medium text-white">
              Outras Agências
            </div>
            <div className="flex items-center px-5 py-6 text-lg font-medium text-white">
              Time Interno
            </div>

            {/* Data rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              return (
                <Fragment key={row.label}>
                  <div className="flex items-center border-t border-white/10 px-5 py-5 text-sm text-white/60">
                    {row.label}
                  </div>
                  <div
                    className={`flex items-center gap-2.5 border-t border-white/10 bg-white/[0.05] px-5 py-5 ${
                      isLast ? "rounded-b-2xl" : ""
                    }`}
                  >
                    <CellContent cell={row.simpli} />
                  </div>
                  <div className="flex items-center gap-2.5 border-t border-white/10 px-5 py-5">
                    <CellContent cell={row.others} />
                  </div>
                  <div className="flex items-center gap-2.5 border-t border-white/10 px-5 py-5">
                    <CellContent cell={row.inhouse} />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
