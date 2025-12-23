import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  nofollow?: boolean;
}

const DEFAULT_TITLE = "Simplí - Transformação Digital e Inovação | Desenvolvimento Web, IA e Consultoria";
const DEFAULT_DESCRIPTION = "Simplí oferece soluções completas de transformação digital: desenvolvimento web, agentes de IA, tráfego pago e consultoria digital. Transforme seu negócio com tecnologia de ponta.";
const DEFAULT_KEYWORDS = "transformação digital, desenvolvimento web, agentes de IA, inteligência artificial, tráfego pago, Google Ads, Facebook Ads, consultoria digital, SEO, sites responsivos, automação, chatbots, marketing digital, Recife, Brasil";
const BASE_URL = "https://www.simpli.ia.br";
const DEFAULT_OG_IMAGE = "https://www.simpli.ia.br/og-image.jpg";

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Simplí` : DEFAULT_TITLE;
  
  // Garantir que canonical seja sempre absoluta e limpa (sem trailing slash, sem query params)
  const getCanonicalUrl = () => {
    if (canonical) {
      // Remover trailing slash e garantir que comece com /
      const cleanCanonical = canonical.startsWith('/') 
        ? canonical.replace(/\/$/, '') || '/' 
        : `/${canonical.replace(/\/$/, '')}`;
      return `${BASE_URL}${cleanCanonical}`;
    }
    return BASE_URL;
  };
  
  const canonicalUrl = getCanonicalUrl();

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`);

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property");
    updateMetaTag("og:url", canonicalUrl, "property");
    updateMetaTag("og:type", ogType, "property");
    updateMetaTag("og:site_name", "Simplí", "property");
    updateMetaTag("og:locale", "pt_BR", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach((script) => script.remove());

      // Add new structured data
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    // Update lang attribute
    const html = document.documentElement;
    html.setAttribute("lang", "pt-BR");
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, structuredData, noindex, nofollow]);

  return null;
};

