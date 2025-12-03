import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const WHATSAPP_URL = "https://wa.link/cpk8xf";

const DesenvolvimentoWeb = () => {
  const heroGradient = useMemo(
    () =>
      "linear-gradient(120deg, rgba(12,20,15,0.8), rgba(28,51,36,0.85)), url('https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEOhLCzGvlFckbRnSjQ8zYfpeZKW20DUVLvgE5')",
    [],
  );

  return (
    <div className="bg-[#0C140F] text-white">
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{
            backgroundImage: heroGradient,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">Desenvolvimento Web</h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              Criamos sites e landing pages modernos e responsivos que convertem visitantes em clientes.
            </p>
            <Button
              asChild
              className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-r from-[#1C3324] via-[#16402F] to-[#0F1D15] px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para iniciar seu projeto web?
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Fale com nosso time e descubra como podemos criar um site moderno, rápido e seguro para o seu negócio.
            </p>
            <div className="mt-7 flex justify-center">
              <Button
                asChild
                className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default DesenvolvimentoWeb;