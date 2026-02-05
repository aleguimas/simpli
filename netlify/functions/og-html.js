/**
 * Netlify Function: serve HTML with correct Open Graph / SEO meta tags
 * for /conteudo/:slug so crawlers (WhatsApp, Facebook, etc.) get the post's
 * title, description and image instead of the default site meta.
 */

const SANITY_PROJECT_ID = 'olcfi9tu'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'

const GROQ_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0]{
  title,
  excerpt,
  "mainImageUrl": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url
  }
}`

function buildSanityUrl(slug) {
  const query = encodeURIComponent(GROQ_QUERY)
  const params = encodeURIComponent(JSON.stringify({ slug }))
  return `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}&$slug=${encodeURIComponent(JSON.stringify(slug))}`
}

function escapeAttr(s) {
  if (!s) return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceMeta(html, replacements) {
  let out = html
  const { title, description, image, canonical } = replacements
  const safeTitle = escapeAttr(title)
  const safeDesc = escapeAttr(description)
  const safeImage = escapeAttr(image)
  const safeCanonical = escapeAttr(canonical)

  if (title) {
    out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
    out = out.replace(
      /<meta\s+name="title"\s+content="[^"]*"/i,
      `<meta name="title" content="${safeTitle}"`
    )
    out = out.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"/i,
      `<meta property="og:title" content="${safeTitle}"`
    )
    out = out.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"/i,
      `<meta name="twitter:title" content="${safeTitle}"`
    )
  }
  if (description) {
    out = out.replace(
      /<meta\s+name="description"\s+content="[^"]*"/i,
      `<meta name="description" content="${safeDesc}"`
    )
    out = out.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"/i,
      `<meta property="og:description" content="${safeDesc}"`
    )
    out = out.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"/i,
      `<meta name="twitter:description" content="${safeDesc}"`
    )
  }
  if (image) {
    out = out.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"/i,
      `<meta property="og:image" content="${safeImage}"`
    )
    out = out.replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"/i,
      `<meta name="twitter:image" content="${safeImage}"`
    )
  }
  if (canonical) {
    out = out.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"/i,
      `<meta property="og:url" content="${safeCanonical}"`
    )
    out = out.replace(
      /<meta\s+name="twitter:url"\s+content="[^"]*"/i,
      `<meta name="twitter:url" content="${safeCanonical}"`
    )
    out = out.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"/i,
      `<link rel="canonical" href="${safeCanonical}"`
    )
  }
  out = out.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"/i,
    '<meta property="og:type" content="article"'
  )
  return out
}

export async function handler(event) {
  const slug = event.queryStringParameters?.splat || event.queryStringParameters?.slug || ''
  if (!slug) {
    return { statusCode: 404, body: 'Not found' }
  }

  const proto = event.headers['x-forwarded-proto'] || 'https'
  const host = event.headers['x-forwarded-host'] || event.headers['host'] || 'www.simpli.ia.br'
  const baseUrl = `${proto}://${host}`
  const canonical = `${baseUrl}/conteudo/${slug}`

  let post = null
  try {
    const sanityUrl = buildSanityUrl(slug)
    const res = await fetch(sanityUrl)
    const data = await res.json()
    post = data?.result || null
  } catch (e) {
    console.error('Sanity fetch error:', e)
  }

  let indexHtml
  try {
    const indexRes = await fetch(`${baseUrl}/`)
    indexHtml = await indexRes.text()
  } catch (e) {
    console.error('Index fetch error:', e)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title></head><body>Erro ao carregar.</body></html>',
    }
  }

  if (!post) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: indexHtml,
    }
  }

  const title = post.seo?.metaTitle || post.title
  const description = (post.seo?.metaDescription || post.excerpt || '').slice(0, 160)
  let image = post.seo?.ogImageUrl || post.mainImageUrl || `${baseUrl}/og-image.jpg`
  if (image && !image.startsWith('http')) image = `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`
  const fullTitle = title ? `${title} | Simplí` : 'Simplí'

  const html = replaceMeta(indexHtml, {
    title: fullTitle,
    description: description.slice(0, 160),
    image,
    canonical,
  })

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body: html,
  }
}
