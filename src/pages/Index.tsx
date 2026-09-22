import { useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import ClientesSection from "@/components/ClientesSection";
import ServicosSection from "@/components/ServicosSection";
import SolucoesSection from "@/components/SolucoesSection";
import MethodSection from "@/components/MethodSection";
import WhyUsSection from "@/components/WhyUsSection";
import NichosImpactoSection from "@/components/NichosImpactoSection";
import TreinamentosSection from "@/components/TreinamentosSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import CasesSection from "@/components/CasesSection";
import ConteudoSection from "@/components/ConteudoSection";
import TransformarNegocioSection from "@/components/TransformarNegocioSection";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import { SEO } from "@/components/SEO";

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Simplí",
    url: "https://www.simpli.ia.br",
    logo: "/logonome-branca-cortada.webp",
    description:
      "Simplí oferece soluções completas de transformação digital: desenvolvimento web, agentes de IA, tráfego pago e consultoria digital.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-81-99194-2628",
      contactType: "customer service",
      email: "contato@simpli.ia.br",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      "https://www.instagram.com/simpli.inovacao/",
      "https://www.linkedin.com/company/simpli-inovacao-digital/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Simplí",
    url: "https://www.simpli.ia.br",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.simpli.ia.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div
      style={designTokens}
      className="min-h-screen bg-[var(--bg-dark)] text-white antialiased"
    >
      <SEO
        title="Agentes de IA que vendem e qualificam sua empresa"
        description="SDRs digitais, CRM com IA e automações que prospectam, qualificam e fecham vendas sem intervenção manual. Agende um diagnóstico estratégico com a Simpli."
        keywords="transformação digital, desenvolvimento web, agentes de IA, inteligência artificial, tráfego pago, Google Ads, Facebook Ads, consultoria digital, SEO, sites responsivos, automação, chatbots, marketing digital, Recife, Brasil"
        canonical="/"
        ogTitle="Simpli — Agentes de IA que vendem e qualificam sua empresa"
        ogDescription="SDRs digitais, CRM com IA e automações que prospectam e fecham sem intervenção manual."
        structuredData={[structuredData, websiteStructuredData]}
      />
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <ClientesSection />
        <ServicosSection />
        <SolucoesSection />
        <MethodSection />
        <WhyUsSection />
        <NichosImpactoSection />
        <CasesSection />
        <ConteudoSection />
        <TreinamentosSection />
        <TecnologiasSection />
        <TransformarNegocioSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;