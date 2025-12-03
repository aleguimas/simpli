import { useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import ClientesSection from "@/components/ClientesSection";
import ServicosSection from "@/components/ServicosSection";
import NichosImpactoSection from "@/components/NichosImpactoSection";
import TreinamentosSection from "@/components/TreinamentosSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import TransformarNegocioSection from "@/components/TransformarNegocioSection";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import DiagnosticoSection from "@/components/DiagnosticoSection";

const Index = () => {
  const designTokens = useMemo(
    () =>
      ({
        "--bg-dark": "#0C140F",
        "--panel": "#0F1D15",
        "--accent": "#1C3324B2",
      }) as React.CSSProperties,
    [],
  );

  return (
    <div
      style={designTokens}
      className="min-h-screen bg-[var(--bg-dark)] text-white antialiased"
    >
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ClientesSection />
        <ServicosSection />
        <NichosImpactoSection />
        <DiagnosticoSection />
        <TreinamentosSection />
        <TecnologiasSection />
        <TransformarNegocioSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;