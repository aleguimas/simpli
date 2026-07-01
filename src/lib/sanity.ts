import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "olcfi9tu";
const dataset = "production";
const apiVersion = "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Query fetch that also works on localhost: in dev it goes through the Vite
// proxy (/__sanity) to avoid the browser CORS block; in prod it hits the CDN
// directly (the production origin is whitelisted in Sanity).
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T> {
  const base = import.meta.env.DEV
    ? "/__sanity"
    : `https://${projectId}.apicdn.sanity.io`;
  let url = `${base}/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(
    query,
  )}`;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url += `&$${encodeURIComponent(key)}=${encodeURIComponent(
        JSON.stringify(value),
      )}`;
    }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity query failed (${res.status})`);
  const { result } = await res.json();
  return result as T;
}

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { _type: string; asset?: { _ref: string } } | undefined) {
  if (!source?.asset?._ref) return null;
  return builder.image(source).auto("format");
}
