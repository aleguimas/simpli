import { Button } from "@/components/ui/button";

const TransformarNegocioSection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#0C140F] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          <span className="bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
            Pronto para Transformar seu Negócio?
          </span>
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Entre em contato conosco e descubra como podemos ajudar sua empresa a
          alcançar o próximo nível na transformação digital.
        </p>
        <Button className="mt-8 h-12 rounded-xl bg-white px-6 text-base font-semibold text-black hover:bg-white/90">
          Fale conosco
        </Button>
      </div>
    </section>
  );
};

export default TransformarNegocioSection;