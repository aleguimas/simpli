import { trackEvent } from "@/components/GoogleAnalytics";

const BOOKING_BASE = "https://crm.simpli.ia.br/agendamento";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

/**
 * Link de agendamento da demonstração do CRM.
 * Repassa a origem real do visitante: UTMs da URL, ou google/cpc quando chega
 * com gclid (anúncio do Google Ads). Sem nenhum dos dois, marca como site.
 * `location` vai em utm_content para saber qual botão gerou o agendamento.
 */
export function bookingUrl(location: string): string {
  const params = new URLSearchParams();
  const current =
    typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;

  if (current?.get("utm_source")) {
    UTM_KEYS.forEach((key) => {
      const value = current.get(key);
      if (value) params.set(key, value);
    });
  } else if (current?.get("gclid")) {
    params.set("utm_source", "google");
    params.set("utm_medium", "cpc");
  } else {
    params.set("utm_source", "site");
    params.set("utm_medium", "landing_crm");
  }
  if (!params.get("utm_campaign")) params.set("utm_campaign", "simpli_crm");
  if (!params.get("utm_content")) params.set("utm_content", location);
  const gclid = current?.get("gclid");
  if (gclid) params.set("gclid", gclid);

  return `${BOOKING_BASE}?${params.toString()}`;
}

/** Abre o agendamento com a origem atualizada no momento do clique. */
export function handleBookingClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  location: string,
) {
  event.currentTarget.href = bookingUrl(location);
  trackEvent("click", "agendamento_demo", location);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "agendamento_demo_click", cta_location: location });
}
