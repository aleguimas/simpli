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

const Index = () => {
  const designTokens = useMemo(
    () =>
      ({
        "--bg-dark": "#0B1117",
        "--panel": "#141A21",
        "--accent": "#262C36B2",
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
        <TreinamentosSection />
        <TecnologiasSection />
        <TransformarNegocioSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;