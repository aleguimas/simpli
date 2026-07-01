import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";
import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";

const Cases = () => {
  return (
    <div className="min-h-screen bg-[#0C140F] text-white">
      <SEO
        title="Cases | Resultados com IA e Automação"
        description="Conheça os cases da Simplí: como aplicamos IA, automação e dados para gerar impacto real nos negócios."
        canonical="/cases"
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(134,239,172,0.08),_transparent_45%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Cases</p>
            <h1 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-4xl font-semibold text-transparent md:text-5xl">
              Resultados que entregamos
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
              Veja na prática como aplicamos IA e automação para gerar impacto
              real nos negócios.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-10 md:pb-24">
          <div className="mx-auto max-w-6xl">
            {cases.length === 0 ? (
              <p className="text-center text-xl text-white/80">Em breve.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cases.map((item) => (
                  <CaseCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Cases;
