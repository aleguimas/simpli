import fs from 'node:fs/promises';
import path from 'node:path';

const SANITY_PROJECT_ID = 'olcfi9tu';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2024-01-01';
const SOLUTIONS_SEO = {
  'servico-desenvolvimento-web': {
    title: 'Criação de Sites Profissionais | Desenvolvimento Web | Simplí',
    ogTitle: 'Criação de Sites Profissionais e Landing Pages | Simplí',
    description:
      'Criamos sites profissionais, landing pages e sistemas web que convertem visitantes em clientes. Agência de desenvolvimento web em Recife com foco em SEO, performance e resultado.',
    canonicalPath: '/servicos/desenvolvimento-web',
    snippet:
      'A Simplí é uma agência de desenvolvimento web em Recife especializada em criação de sites profissionais, landing pages e sistemas web. Desenvolvemos com React, Next.js e TypeScript, entregando sites rápidos, responsivos e otimizados para SEO. Atendemos empresas em Recife, Pernambuco e em todo o Brasil com foco em conversão, performance e resultado real para o negócio.',
  },
  'servico-agentes-de-ia': {
    title: 'Agentes de IA | Chatbots e Automação Inteligente para Empresas | Simplí',
    ogTitle: 'Agentes de IA | Chatbots e Automação Inteligente para Empresas | Simplí',
    description:
      'Desenvolvemos agentes de IA personalizados para automatizar atendimento, qualificar leads e otimizar processos. Inteligência artificial para empresas em Recife e em todo o Brasil.',
    canonicalPath: '/servicos/agentes-de-ia',
    snippet:
      'A Simplí desenvolve agentes de Inteligência Artificial personalizados para empresas em Recife e em todo o Brasil. Criamos chatbots inteligentes, automação de atendimento via WhatsApp, qualificação de leads e automação de processos internos com machine learning e NLP. Nossos agentes integram com CRM, ERP e canais de atendimento para operar 24h sem interrupção, escalando operações sem aumentar a equipe.',
  },
  'simpli-agent': {
    title: 'Simplí Agent — Atendimento com IA 24h | Simplí',
    ogTitle: 'Simplí Agent — Agente de IA para Atendimento 24h | Simplí',
    description:
      'Automatize o atendimento da sua empresa com IA. Resposta em 15s, disponível 24h, omnichannel no WhatsApp, Instagram e Chat.',
    canonicalPath: '/solucoes/simpli-agent',
    snippet:
      'Simplí Agent automatiza atendimento com IA 24h, responde em segundos, integra canais e utiliza RAG treinado com os dados do seu negócio.',
  },
  'simpli-estoque': {
    title: 'Simplí Estoque — Gestão de Estoque com IA Preditiva | Simplí',
    ogTitle: 'Simplí Estoque — Gestão de Estoque com IA Preditiva | Simplí',
    description:
      'Elimine rupturas e excesso de estoque com IA. Dashboards em tempo real, previsão de demanda, análise de SKUs e integração com ERP.',
    canonicalPath: '/solucoes/simpli-estoque',
    snippet:
      'Simplí Estoque usa IA preditiva para reduzir rupturas, excesso de estoque e melhorar decisões com base em demanda, margem, giro e dados do ERP.',
  },
  'servico-trafego-pago': {
    title: 'Gestão de Tráfego Pago | Google Ads, Meta Ads e LinkedIn Ads | Simplí',
    ogTitle: 'Gestão de Tráfego Pago | Google Ads, Meta Ads e LinkedIn Ads | Simplí',
    description:
      'Gestão completa de campanhas de tráfego pago em Google Ads, Meta Ads e LinkedIn Ads. Agência de tráfego pago em Recife com foco em leads, vendas e ROI mensurável.',
    canonicalPath: '/servicos/trafego-pago',
    snippet:
      'A Simplí é uma agência de tráfego pago em Recife especializada em gestão de campanhas no Google Ads, Meta Ads (Facebook e Instagram) e LinkedIn Ads. Planejamos, executamos e otimizamos campanhas com segmentação avançada, remarketing e testes A/B para gerar leads e vendas com ROI mensurável. Atendemos empresas em Recife, Pernambuco e em todo o Brasil com relatórios semanais e otimização contínua baseada em dados.',
  },
  'servico-consultoria-digital': {
    title: 'Consultoria Digital | Transformação Digital para Empresas | Simplí',
    ogTitle: 'Consultoria Digital | Transformação Digital para Empresas | Simplí',
    description:
      'Consultoria digital estratégica para transformar empresas com tecnologia e inovação. Diagnóstico, planejamento e implementação sob medida — em Recife e em todo o Brasil.',
    canonicalPath: '/servicos/consultoria-digital',
    snippet:
      'A Simplí oferece consultoria digital estratégica para empresas em Recife e em todo o Brasil. Realizamos diagnóstico completo, planejamento de transformação digital, implementação de soluções e monitoramento de resultados com metodologias comprovadas como Design Thinking, Agile e Lean Startup. Atendemos desde pequenas empresas até organizações de grande porte que precisam digitalizar processos e escalar com tecnologia.',
  },
  'simpli-crm': {
    title: 'Simplí CRM — Gestão de Vendas com IA | Simplí',
    ogTitle: 'Simplí CRM — Funil de Vendas Automatizado com IA | Simplí',
    description:
      'CRM integrado à IA que transforma atendimentos em vendas. Funil Kanban, alimentação automática de leads, follow-up contextual e automações.',
    canonicalPath: '/solucoes/simpli-crm',
    snippet:
      'Simplí CRM organiza funil comercial, automatiza follow-up e prioriza leads com IA para aumentar conversão e produtividade do time de vendas.',
  },
};

// Inclui também texto do corpo para o snippet de conteúdo.
const GROQ_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0]{
  title,
  excerpt,
  "bodyText": pt::text(body),
  publishedAt,
  author,
  category,
  tags,
  "mainImageUrl": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    canonical,
    ogTitle,
    ogDescription,
    "ogImageUrl": ogImage.asset->url
  }
}`;

function buildSanityUrl(slug) {
  const query = encodeURIComponent(GROQ_QUERY);
  return `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}&$slug=${encodeURIComponent(
    JSON.stringify(slug),
  )}`;
}

function escapeAttr(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html, replacements) {
  let out = html;
  const { title, description, ogTitle, ogDescription, image, canonical } =
    replacements;
  const safeTitle = escapeAttr(title);
  const safeDesc = escapeAttr(description);
  const safeOgTitle = escapeAttr(ogTitle ?? title);
  const safeOgDesc = escapeAttr(ogDescription ?? description);
  const safeImage = escapeAttr(image);
  const safeCanonical = escapeAttr(canonical);

  if (title) {
    out = out.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${safeTitle}</title>`,
    );
    out = out.replace(
      /<meta\s+name="title"\s+content="[^"]*"/i,
      `<meta name="title" content="${safeTitle}"`,
    );
    out = out.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"/i,
      `<meta property="og:title" content="${safeOgTitle}"`,
    );
    out = out.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"/i,
      `<meta name="twitter:title" content="${safeOgTitle}"`,
    );
  }
  if (description) {
    out = out.replace(
      /<meta\s+name="description"\s+content="[^"]*"/i,
      `<meta name="description" content="${safeDesc}"`,
    );
    out = out.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"/i,
      `<meta property="og:description" content="${safeOgDesc}"`,
    );
    out = out.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"/i,
      `<meta name="twitter:description" content="${safeOgDesc}"`,
    );
  }
  if (image) {
    out = out.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"/i,
      `<meta property="og:image" content="${safeImage}"`,
    );
    out = out.replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"/i,
      `<meta name="twitter:image" content="${safeImage}"`,
    );
  }
  if (canonical) {
    if (out.match(/<meta\s+property="og:url"/i)) {
      out = out.replace(
        /<meta\s+property="og:url"\s+content="[^"]*"/i,
        `<meta property="og:url" content="${safeCanonical}"`,
      );
    } else {
      out = out.replace(
        '</head>',
        `<meta property="og:url" content="${safeCanonical}"/>\n</head>`,
      );
    }
    if (out.match(/<meta\s+name="twitter:url"/i)) {
      out = out.replace(
        /<meta\s+name="twitter:url"\s+content="[^"]*"/i,
        `<meta name="twitter:url" content="${safeCanonical}"`,
      );
    } else {
      out = out.replace(
        '</head>',
        `<meta name="twitter:url" content="${safeCanonical}"/>\n</head>`,
      );
    }
    if (out.includes('rel="canonical"')) {
      out = out.replace(
        /<link\s+rel="canonical"\s+href="[^"]*"/i,
        `<link rel="canonical" href="${safeCanonical}"`,
      );
    } else {
      const inject = `<link rel="canonical" href="${safeCanonical}"/>\n</head>`;
      out = out.replace('</head>', inject);
    }
  }
  const ogType = replacements.ogType;
  if (ogType) {
    out = out.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"/i,
      `<meta property="og:type" content="${escapeAttr(replacements.ogType)}"`,
    );
  }
  return out;
}

async function fetchIndexHtml() {
  const indexPath =
    process.env.INDEX_HTML_PATH ||
    path.join(process.cwd(), 'dist', 'index.html');
  return await fs.readFile(indexPath, 'utf8');
}

function injectArticleSnippet(html, text) {
  const safe = escapeHtml(text);
  if (!safe) return html;
  const snippet = `<div id="seo-content" style="display:none;" aria-hidden="true">${safe}</div>`;
  if (html.includes('<body>')) {
    return html.replace('<body>', `<body>\n${snippet}`);
  }
  return html.replace('</body>', `${snippet}</body>`);
}

async function serveListPage(baseUrl) {
  let indexHtml;
  try {
    indexHtml = await fetchIndexHtml();
  } catch (e) {
    console.error('Index fetch error:', e);
    return {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title></head><body>Erro ao carregar.</body></html>',
    };
  }
  const canonical = `${baseUrl}/conteudo`;
  const title = 'Conteúdo | Artigos e Materiais | Simplí';
  const description =
    'Artigos e materiais sobre transformação digital, desenvolvimento web, IA, tráfego pago e consultoria. Simplí.';
  const html = replaceMeta(indexHtml, {
    title,
    description,
    canonical,
    ogType: 'website',
  });
  return {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body: html,
  };
}

async function serveSolutionPage(baseUrl, solutionSlug) {
  const config = SOLUTIONS_SEO[solutionSlug];
  if (!config) {
    return {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: 'Not found',
    };
  }

  let indexHtml;
  try {
    indexHtml = await fetchIndexHtml();
  } catch (e) {
    console.error('Index fetch error:', e);
    return {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title></head><body>Erro ao carregar.</body></html>',
    };
  }

  const canonical = `${baseUrl}${config.canonicalPath}`;
  let html = replaceMeta(indexHtml, {
    title: config.title,
    ogTitle: config.ogTitle,
    description: config.description,
    ogDescription: config.description,
    canonical,
    ogType: 'website',
  });
  html = injectArticleSnippet(html, config.snippet);

  return {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body: html,
  };
}

export default async function handler(req, res) {
  const query = req.query || {};
  const isList = query.list === '1';
  const slug = query.slug || query.splat || '';
  const route = query.route || '';

  const proto =
    req.headers['x-forwarded-proto'] ||
    (Array.isArray(req.headers['x-forwarded-proto'])
      ? req.headers['x-forwarded-proto'][0]
      : 'https');
  const host =
    req.headers['x-forwarded-host'] ||
    req.headers.host ||
    'www.simpli.ia.br';
  const baseUrl = `${proto}://${host}`;

  if (isList) {
    const result = await serveListPage(baseUrl);
    res
      .status(result.status)
      .setHeader('Content-Type', result.headers['Content-Type'])
      .send(result.body);
    return;
  }

  if (route) {
    const result = await serveSolutionPage(baseUrl, route);
    res
      .status(result.status)
      .setHeader('Content-Type', result.headers['Content-Type'])
      .send(result.body);
    return;
  }

  if (!slug) {
    res.status(404).send('Not found');
    return;
  }

  const canonical = `${baseUrl}/conteudo/${slug}`;

  let post = null;
  try {
    const sanityUrl = buildSanityUrl(slug);
    const sanityRes = await fetch(sanityUrl);
    const data = await sanityRes.json();
    post = data?.result || null;
  } catch (e) {
    console.error('Sanity fetch error:', e);
  }

  let indexHtml;
  try {
    indexHtml = await fetchIndexHtml();
  } catch (e) {
    console.error('Index fetch error:', e);
    res
      .status(500)
      .setHeader('Content-Type', 'text/html; charset=utf-8')
      .send(
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title></head><body>Erro ao carregar.</body></html>',
      );
    return;
  }

  if (!post) {
    res
      .status(200)
      .setHeader('Content-Type', 'text/html; charset=utf-8')
      .send(indexHtml);
    return;
  }

  const title = post.seo?.metaTitle || post.title;
  const ogTitle = post.seo?.ogTitle || title;
  const description = (post.seo?.metaDescription || post.excerpt || '').slice(
    0,
    160,
  );
  const ogDescription = post.seo?.ogDescription || description;
  let image =
    post.seo?.ogImageUrl || post.mainImageUrl || `${baseUrl}/og-image.jpg`;
  if (image && !image.startsWith('http')) {
    image = `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`;
  }
  const fullTitle = title ? `${title} | Simplí` : 'Simplí';
  const ogTitleFinal = ogTitle ? `${ogTitle} | Simplí` : fullTitle;
  const canonicalFinal =
    post.seo?.canonical && post.seo.canonical.startsWith('http')
      ? post.seo.canonical
      : canonical;

  let html = replaceMeta(indexHtml, {
    title: fullTitle,
    description,
    ogTitle: ogTitleFinal,
    ogDescription: ogDescription.slice(0, 160),
    image,
    canonical: canonicalFinal,
    ogType: 'article',
  });

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fullTitle,
    description: description,
    image: image,
    author: post.author
      ? { '@type': 'Person', name: post.author, url: baseUrl }
      : { '@type': 'Organization', name: 'Simplí', url: baseUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Simplí',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logonome-branca-cortada.webp`,
      },
    },
    datePublished: post.publishedAt || undefined,
    dateModified: post.publishedAt || undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalFinal },
    keywords: post.tags?.length ? post.tags.join(', ') : undefined,
    articleSection: post.category,
    inLanguage: 'pt-BR',
  };
  const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(
    articleJsonLd,
  )}</script>`;
  html = html.replace('</head>', `${jsonLdScript}</head>`);

  const contentText = post.bodyText || post.excerpt || '';
  html = injectArticleSnippet(html, contentText);

  res
    .status(200)
    .setHeader('Content-Type', 'text/html; charset=utf-8')
    .send(html);
}

