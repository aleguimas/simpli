import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

const GA_MEASUREMENT_ID = "G-J4VGVQG24C";

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Rastrear mudanças de página (importante para SPAs)
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

// Função helper para eventos customizados
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Funções helpers para eventos comuns
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent("conversion", conversionType, undefined, value);
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("click", "button", `${buttonName}${location ? ` - ${location}` : ""}`);
};

export const trackWhatsAppClick = (location?: string) => {
  trackEvent("click", "whatsapp", location || "unknown");
  trackConversion("whatsapp_contact", 1);
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("submit", "form", formName);
  trackConversion("form_submit", 1);
};

