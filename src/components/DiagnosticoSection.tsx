import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiagnosticoSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0C140F] px-6 py-20 md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <Sparkles size={16} className="text-white/80" />
          <span>Agentes de IA para o seu negócio</span>
        </div>
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
          Descubra o potencial da{" "}
          <span className="text-[#4ADE80]">IA</span> na sua Empresa
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
          Faça nosso diagnóstico gratuito e veja como os{" "}
          <span className="text-[#4ADE80]">Agentes de IA</span> podem otimizar
          processos, reduzir custos e impulsionar a competitividade do seu
          negócio.
        </p>

        <div className="relative mt-10 w-full max-w-5xl">
          <div className="pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-full bg-white/5 blur-3xl md:-left-28 md:top-0 md:h-80 md:w-80" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-[#1C3324]/40 blur-3xl md:-right-24 md:h-72 md:w-72" />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0F1D15]/70 shadow-2xl shadow-black/40">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="relative px-3 py-4 sm:px-6 sm:py-6">
              <div className="mx-auto max-w-5xl [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_14%,rgba(0,0,0,0.9)_48%,rgba(0,0,0,1)_68%,rgba(0,0,0,1)_100%)]">
                <div className="mx-auto max-w-4xl md:-mr-12 md:pl-12 lg:-mr-20 lg:pl-20 md:[perspective:1400px] md:[mask-image:linear-gradient(to_right,black_65%,transparent_100%)]">
                  <div className="relative transition-transform duration-700 md:[transform:rotateX(12deg)_skewX(-6deg)]">
                    <img
                      src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsE7Cpjs4JbNsEXlrThLj3By4kOfWQ51aHmIixU"
                      alt="Visual da plataforma Simplí"
                      className="mx-auto h-56 w-full max-w-3xl rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/40 sm:h-72 md:h-96"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button className="mt-8 h-12 rounded-xl bg-[#4ADE80] px-6 text-base font-semibold text-black transition hover:bg-[#3ccb70]">
          Fazer diagnóstico gratuito
        </Button>
        <div className="mt-4 text-xs uppercase tracking-[0.14em] text-white/60">
          Gratuito • Rápido • Relatório personalizado
        </div>
      </div>
    </section>
  );
};

export default DiagnosticoSection;