/**
 * Gera sitemap.xml no build (dist/sitemap.xml).
 * Busca posts no Sanity e monta XML com páginas estáticas + posts.
 * Assim o sitemap é um arquivo estático servido direto, sem depender de redirect/function.
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const OUT_FILE = join(DIST, 'sitemap.xml')

const SANITY_PROJECT_ID = 'olcfi9tu'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'
const BASE_URL = 'https://www.simpli.ia.br'

const POSTS_GROQ = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  "slug": slug.current,
  publishedAt
}`

async function fetchPosts() {
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(POSTS_GROQ)}`
  const res = await fetch(url)
  const data = await res.json()
  return data.result || []
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

async function main() {
  const today = new Date().toISOString().slice(0, 10)
  const staticPages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/servicos/desenvolvimento-web', changefreq: 'monthly', priority: '0.9' },
    { path: '/servicos/agentes-de-ia', changefreq: 'monthly', priority: '0.9' },
    { path: '/servicos/trafego-pago', changefreq: 'monthly', priority: '0.9' },
    { path: '/servicos/consultoria-digital', changefreq: 'monthly', priority: '0.9' },
    { path: '/diagnostico', changefreq: 'monthly', priority: '0.8' },
    { path: '/conteudo', changefreq: 'weekly', priority: '0.9' },
    { path: '/solucoes/simpli-agent', changefreq: 'monthly', priority: '0.9' },
    { path: '/solucoes/simpli-crm', changefreq: 'monthly', priority: '0.9' },
    { path: '/solucoes/simpli-estoque', changefreq: 'monthly', priority: '0.9' },
  ]

  let posts = []
  try {
    posts = await fetchPosts()
  } catch (e) {
    console.error('[generate-sitemap] Sanity fetch error:', e.message)
  }

  const urls = [
    ...staticPages.map((p) =>
      urlEntry(`${BASE_URL}${p.path}`, today, p.changefreq, p.priority)
    ),
    ...posts
      .filter((p) => p.slug)
      .map((p) =>
        urlEntry(`${BASE_URL}/conteudo/${p.slug}`, p.publishedAt, 'monthly', '0.8')
      ),
  ]

  const postCount = posts.filter((p) => p.slug).length
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Sitemap gerado no build - ${urls.length} URLs, ${postCount} posts Sanity -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('\n')}
</urlset>
`

  mkdirSync(DIST, { recursive: true })
  writeFileSync(OUT_FILE, xml, 'utf8')
  console.log(`[generate-sitemap] Written ${OUT_FILE} (${urls.length} URLs, ${postCount} posts)`)
}

main().catch((e) => {
  console.error('[generate-sitemap] Error:', e)
  process.exit(1)
})
