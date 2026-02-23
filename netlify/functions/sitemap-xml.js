/**
 * Netlify Function: sitemap.xml dinâmico com páginas estáticas + posts do Sanity.
 * Inclui /conteudo e todos os posts publicados, com lastmod correto.
 */

const SANITY_PROJECT_ID = 'olcfi9tu'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'
const BASE_URL = 'https://www.simpli.ia.br'

const POSTS_GROQ = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  "slug": slug.current,
  publishedAt
}`

function sanityFetch(query) {
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`
  return fetch(url).then((r) => r.json()).then((d) => d.result || [])
}

function formatLastmod(date) {
  if (!date) return new Date().toISOString().slice(0, 10)
  const d = new Date(date)
  return isNaN(d.getTime()) ? new Date().toISOString().slice(0, 10) : d.toISOString().slice(0, 10)
}

function urlEntry(loc, lastmod, changefreq = 'monthly', priority = '0.8') {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${formatLastmod(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export async function handler() {
  const today = new Date().toISOString().slice(0, 10)
  const staticPages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/servicos/desenvolvimento-web', changefreq: 'monthly', priority: '0.9' },
    { path: '/servicos/agentes-de-ia', changefreq: 'monthly', priority: '0.9' },
    { path: '/servicos/trafego-pago', changefreq: 'monthly', priority: '0.9' },
    { path: '/servicos/consultoria-digital', changefreq: 'monthly', priority: '0.9' },
    { path: '/diagnostico', changefreq: 'monthly', priority: '0.8' },
    { path: '/conteudo', changefreq: 'weekly', priority: '0.9' },
  ]

  let posts = []
  try {
    posts = await sanityFetch(POSTS_GROQ)
  } catch (e) {
    console.error('Sanity sitemap fetch error:', e)
  }

  const urls = [
    ...staticPages.map((p) =>
      urlEntry(`${BASE_URL}${p.path}`, today, p.changefreq, p.priority)
    ),
    ...posts
      .filter((p) => p.slug)
      .map((p) =>
        urlEntry(
          `${BASE_URL}/conteudo/${p.slug}`,
          p.publishedAt,
          'monthly',
          '0.8'
        )
      ),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('\n')}
</urlset>`

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
    body: xml,
  }
}
