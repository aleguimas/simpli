import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { academyProducts } from "@/data/aiAcademy";

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

/* Teaser da Simplí AI Academy na home. O catálogo completo — o que entra em
   cada formato, para quem é e as objeções — vive em /ai-academy. */
const TreinamentosSection = () => {
  return (
    <section
      id="treinamento"
      className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Braço educacional da Simplí
          </p>
          {/* Todos os títulos de seção da home usam este gradiente; abrir
              excecao aqui quebraria o ritmo da página. */}
          {/* impeccable-disable-next-line gradient-text -- padrão firmado da home */}
          <h2 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-3xl font-semibold text-transparent md:text-4xl">
            Simplí AI Academy
          </h2>
          <p className="mt-3 text-base text-white/70">
            A IA amplifica o processo que já existe: se ele é bom, ela acelera;
            se é ruim, ela acelera o erro. Por isso a Academy não começa pela
            ferramenta — são quatro formatos que levam a empresa do “ouvi falar
            de IA” ao “tenho IA rodando no meu processo”.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academyProducts.map(
            ({ id, icon: Icon, shortName, promise, highlights }) => (
              <Link
                key={id}
                to={`/ai-academy#${id}`}
                style={{ background: GLASS_BG }}
                className="card-gradient-border group flex h-full flex-col justify-between rounded-3xl p-6 backdrop-blur-md transition sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-black/40"
              >
                <div className="flex flex-col gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20E000]/15 text-[#86efac]">
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {shortName}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {promise}
                  </p>
                </div>

                {/* Tópicos do programa. Sem preço de propósito: o
                    investimento de cada um vive na página da Academy. */}
                <dl className="mt-6 space-y-1.5 border-t border-white/10 pt-5 text-sm leading-relaxed">
                  {highlights.map((topic) => (
                    <div key={topic.label} className="flex gap-2">
                      {/* Largura fixa no rótulo: sem ela os valores
                          começam em pontos diferentes e a coluna
                          fica irregular. */}
                      <dt className="w-[5.25rem] shrink-0 text-white/60">
                        {topic.label}:
                      </dt>
                      <dd className="flex-1 font-semibold text-white">
                        {topic.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Link>
            ),
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="h-12 rounded-xl border border-transparent bg-white px-6 text-base font-semibold text-black transition hover:border-white hover:bg-[#0B1117] hover:text-white"
          >
            <Link to="/ai-academy">
              Saiba mais sobre a AI Academy
              <ArrowRight size={17} className="ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreinamentosSection;
