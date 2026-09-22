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
  if (typeof window === "undefined") return;
  // Garante a fila mesmo se o snippet do GTM ainda não rodou (o GTM consome
  // os eventos acumulados quando carrega) — evita perder conversão.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};

// Evento de conversão consumido pelo pixel do ChatGPT Ads (OpenAI Ads).
// O nome precisa ser exatamente "generate_lead".
const GENERATE_LEAD_EVENT = "generate_lead";

// Janela padrão de deduplicação: um mesmo visitante não gera dois leads
// dentro desse intervalo (protege contra reload e contra clicar em mais de
// um CTA na mesma página).
const GENERATE_LEAD_DEDUPE_WINDOW_MS = 30 * 60 * 1000;

const leadStorageKey = (dedupeKey: string) =>
  `simpli_generate_lead_${dedupeKey}`;

/**
 * Dispara `dataLayer.push({ event: "generate_lead" })` uma única vez por
 * janela de deduplicação.
 *
 * @returns true se o evento foi disparado agora, false se foi suprimido.
 */
export const trackGenerateLead = (options?: {
  /** Identificador do funil/página. Mesma chave = mesma trava. */
  dedupeKey?: string;
  /** Sobrescreve a janela de deduplicação (ms). Use 0 para sempre disparar. */
  dedupeWindowMs?: number;
}) => {
  if (typeof window === "undefined") return false;

  const dedupeKey = options?.dedupeKey || "default";
  const windowMs =
    options?.dedupeWindowMs ?? GENERATE_LEAD_DEDUPE_WINDOW_MS;

  if (windowMs > 0) {
    try {
      const last = window.localStorage.getItem(leadStorageKey(dedupeKey));
      if (last && Date.now() - Number(last) < windowMs) {
        return false;
      }
    } catch {
      // localStorage bloqueado (navegação privada / cookies off):
      // segue em frente e dispara — perder conversão é pior que duplicar.
    }
  }

  pushToDataLayer({ event: GENERATE_LEAD_EVENT });

  try {
    window.localStorage.setItem(leadStorageKey(dedupeKey), String(Date.now()));
  } catch {
    // idem acima: sem storage, seguimos sem a trava.
  }

  return true;
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

