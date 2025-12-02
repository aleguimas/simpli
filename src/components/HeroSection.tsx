import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const HeroSection = () => {
  const { ref, isVisible } = useInView({ threshold: 0.35 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-[#0B1117] px-6 pb-28 pt-28 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1b2430] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-[#262C36] blur-3xl opacity-60" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl opacity-50" />

      <div className="mx-auto flex min-h-[120vh] max-w-6xl flex-col items-center justify-center text-center md:min-h-[180vh]">
        <div
          className={`max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Automação com IA • Tela
          </p>
          <h1 className="mt-4 bg-gradient-to-r from-white via-white/90 to-white/40 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl">
            Agentes de IA que trabalham pra você
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Escale operações, reduza tarefas repetitivas e ganhe eficiência com
            fluxos inteligentes que combinam humanos e IA em um só lugar.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button className="h-11 rounded-xl bg-white text-black hover:bg-white/90">
              Agendar Demo
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Ver Casos de Uso
            </Button>
          </div>
        </div>

        <div
          className={`relative mt-16 w-full max-w-5xl transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-white/10 to-white/0 blur-3xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0F1620] p-3 shadow-2xl shadow-black/40 transition hover:border-white/20">
            <div className="transform rounded-[20px] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/2 p-2 shadow-inner shadow-black/50 transition duration-500 hover:scale-[1.01] hover:skew-y-[-1deg]">
              <div className="h-[320px] w-full overflow-hidden rounded-[16px] bg-gradient-to-br from-[#1c232d] via-[#151b23] to-[#0f141a]">
                <div className="relative h-full w-full">
                  <div className="absolute inset-6 rounded-2xl border border-white/10 bg-[#0C1218]/70 backdrop-blur">
                    <div className="h-full w-full skew-y-[-4deg] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                  </div>
                  <div className="absolute left-6 top-6 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black">
                    Preview da Plataforma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;