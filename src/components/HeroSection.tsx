import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const HeroSection = () => {
  const { ref, isVisible } = useInView({ threshold: 0.35 });
  const buttonBaseClasses =
    "h-12 w-full sm:w-auto sm:min-w-[190px] rounded-xl px-7 text-lg";

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-[#0C140F] px-6 pb-24 pt-24 md:px-10 md:pb-28 md:pt-28"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1C3324] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-[#1C3324] blur-3xl opacity-60" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl opacity-50" />

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center text-center">
        <div
          className={`max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEC5TQ8yp21UvLpyMJBwa8FG4e7tORbIrXYjEk"
            alt="Tela.com logo"
            className="mx-auto h-10 w-auto opacity-90 md:h-12"
            loading="lazy"
          />
          <h1 className="mt-6 pb-3 bg-gradient-to-r from-white via-white/90 to-white/40 bg-clip-text text-5xl font-semibold leading-[1.28] text-transparent sm:text-6xl md:text-7xl">
            Simplificando a Transformação Digital
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
            Transformamos ideias em soluções digitais inovadoras que impulsionam
            seu negócio.
          </p>
          <div className="mt-9 mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className={`${buttonBaseClasses} border border-white/0 bg-white text-black transition-colors hover:border-white/70 hover:bg-transparent hover:text-white`}
            >
              <a href="https://wa.link/cpk8xf" target="_blank" rel="noreferrer">
                Fale conosco
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className={`${buttonBaseClasses} border-white/20 bg-white/5 text-white transition-colors hover:border-white hover:bg-white hover:text-black`}
            >
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;