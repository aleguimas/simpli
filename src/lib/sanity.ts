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

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { _type: string; asset?: { _ref: string } } | undefined) {
  if (!source?.asset?._ref) return null;
  return builder.image(source).auto("format");
}
