import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DiagnosticoSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0C140F] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <Brain size={16} className="text-white" />
          <span>Agentes de IA para o seu negócio</span>
        </div>
        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Descubra o potencial da{" "}
          <span className="text-[#4ADE80]">IA</span> na sua Empresa
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Faça nosso diagnóstico gratuito e veja como os{" "}
          <span className="text-[#4ADE80]">Agentes de IA</span> podem otimizar
          processos, reduzir custos e impulsionar a competitividade do seu
          negócio.
        </p>

        <div className="relative mt-10 w-full max-w-4xl overflow-hidden rounded-[16px] border border-white/15 bg-white/5 shadow-2xl shadow-black/40 aspect-[16/9]">
          <img
            src="/Horizontal - Agentes IA v2.webp"
            alt="Visual do diagnostico de agentes de IA"
            className="h-full w-full object-cover"
          />
        </div>

        <Button
          asChild
          className="mt-6 min-h-[48px] h-12 w-full max-w-sm rounded-xl border border-white/0 bg-white px-6 text-base font-semibold text-black transition-colors active:scale-95 sm:mt-8 sm:w-auto sm:px-7 sm:text-lg hover:border-white/70 hover:bg-transparent hover:text-white touch-manipulation"
        >
          <Link to="/diagnostico">Fazer diagnóstico gratuito</Link>
        </Button>
        <div className="mt-4 text-xs uppercase tracking-[0.14em] text-white/60">
          Gratuito • Rápido • Relatório personalizado
        </div>
      </div>
    </section>
  );
};

export default DiagnosticoSection;
