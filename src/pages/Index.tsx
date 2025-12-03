import { useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/ServicesSection";
import NichosSection from "@/components/NichosSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
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
        <LogoSection />
        <ServicesSection />
        <NichosSection />
        <TestimonialsSection />
        <EnterpriseSection />
        <CallToActionSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;