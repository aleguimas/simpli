import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cases } from "@/data/cases";
import CaseCard from "@/components/CaseCard";

const CasesSection = () => {
  const preview = cases.slice(0, 3);
  if (preview.length === 0) return null;

  return (
    <section id="cases" className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Cases
            </p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-3xl font-semibold leading-tight text-transparent md:text-4xl">
              Resultados que entregamos
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Veja na prática como aplicamos IA e automação para gerar impacto
              real nos negócios.
            </p>
          </div>
          <Link
            to="/cases"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Ver todos os cases
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
