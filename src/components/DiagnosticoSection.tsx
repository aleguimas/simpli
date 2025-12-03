import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiagnosticoSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0C140F] px-6 py-20 md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center text-white">
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