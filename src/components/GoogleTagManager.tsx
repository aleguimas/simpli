import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GTM_ID = "GTM-NCF67L6B";

export const GoogleTagManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Push page view to dataLayer for GTM (importante para SPAs)
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "page_view",
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
};

// Função helper para eventos customizados via GTM dataLayer
export const pushToDataLayer = (data: {
  event: string;
  [key: string]: any;
}) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push(data);
  }
};

// Funções helpers para eventos comuns via GTM
export const trackGTMEvent = (
  eventName: string,
  eventData?: {
    [key: string]: any;
  }
) => {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  });
};

export const trackGTMPageView = (pagePath: string, pageTitle?: string) => {
  pushToDataLayer({
    event: "page_view",
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
  });
};

export const trackGTMWhatsAppClick = (location?: string) => {
  pushToDataLayer({
    event: "whatsapp_click",
    click_location: location || "unknown",
    event_category: "engagement",
    event_label: "whatsapp_contact",
  });
};

export const trackGTMButtonClick = (buttonName: string, location?: string) => {
  pushToDataLayer({
    event: "button_click",
    button_name: buttonName,
    click_location: location || "unknown",
    event_category: "engagement",
    event_label: buttonName,
  });
};

export const trackGTMFormSubmit = (formName: string, formData?: any) => {
  pushToDataLayer({
    event: "form_submit",
    form_name: formName,
    event_category: "conversion",
    event_label: formName,
    ...formData,
  });
};

export const trackGTMServiceClick = (serviceName: string) => {
  pushToDataLayer({
    event: "service_click",
    service_name: serviceName,
    event_category: "engagement",
    event_label: serviceName,
  });
};

export const trackGTMConversion = (
  conversionType: string,
  value?: number,
  currency?: string
) => {
  pushToDataLayer({
    event: "conversion",
    conversion_type: conversionType,
    value: value || 0,
    currency: currency || "BRL",
    event_category: "conversion",
    event_label: conversionType,
  });
};

