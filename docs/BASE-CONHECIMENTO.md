# Base de Conhecimento — Projeto Simpli (novo-site-simpli)

> Documento vivo. Atualize sempre que descobrir algo que evite erros futuros.
> Última atualização: 2026-06-02

---

## 1. Repositórios e Deploy ⚠️ (LEIA ANTES DE QUALQUER PUSH)

Este projeto tem **dois remotes Git** que compartilham a base `b10b41e` mas
**divergiram**. Confundi-los já causou "o deploy não chegou na Vercel".

| Remote   | URL                                          | Papel                                  |
|----------|----------------------------------------------|----------------------------------------|
| `origin` | `github.com/CaioSouzaIA/novo-site-simpli.git`| ✅ **REPO OFICIAL — sempre usar este** |
| `simpli` | `github.com/aleguimas/simpli.git`            | ⚠️ Repo antigo. **É o que a Vercel faz deploy hoje** |

### Regra de ouro
- **Desenvolvimento e fonte da verdade:** `origin` (novo-site-simpli).
- **Antes de cada push:** rode `git remote -v` e confirme o destino.

### ⚠️ Ação pendente (resolver para parar de sofrer)
A Vercel está conectada ao repo **`simpli` (aleguimas)**, não ao oficial.
Enquanto isso não for resolvido, **um push só no `origin` NÃO faz deploy**.

Duas saídas (escolher uma):
1. **(Recomendado)** Reconectar o projeto na Vercel ao repo `CaioSouzaIA/novo-site-simpli`
   (Vercel → Project Settings → Git → trocar o repositório). Depois disso,
   basta `git push origin main`.
2. **Paliativo:** continuar empurrando para os dois remotes manualmente
   (ver "Como fazer deploy hoje" abaixo).

### Como fazer deploy hoje (enquanto a Vercel = `simpli`)
Como os históricos divergem, **não dá force-push**. Aplique o commit em cima
do `simpli/main` e empurre sem perder os commits que só existem lá:

```bash
git fetch simpli
git checkout -b deploy-tmp simpli/main
git cherry-pick <hash-do-commit>     # ex.: nosso commit feito no origin/main
git push simpli deploy-tmp:main      # dispara o deploy na Vercel
git checkout main && git branch -D deploy-tmp
```

---

## 2. Stack do projeto

- **Vite + React + TypeScript** (SPA — **não é Next.js**)
- **shadcn/ui** + Radix + **Tailwind**
- **Sanity CMS** para conteúdo (artigos em `/conteudo/:slug` via `ConteudoPost.tsx`)
- `package.json` tem `"type": "module"` → scripts `.js` soltos com `require`
  precisam rodar como **`.cjs`** (ex.: o `update-meta-tags.js` do kit).
- Sitemap gerado no build: `scripts/generate-sitemap.js`.

---

## 3. SEO — como funciona neste projeto

Toda meta tag é setada por **um único componente**: `src/components/SEO.tsx`
(escreve no DOM via `useEffect`; é client-side). Pontos que importam:

- **Sufixo automático no título:** o componente faz `` `${title} | Simplí` ``.
  - ➡️ O prop `title` **não deve incluir a marca no fim**.
  - ➡️ O título final precisa caber em **≤ 60 chars** já contando
    o sufixo `" | Simplí"` (**9 chars**). Logo o `title` prop deve ter **≤ 51**.
- `ogTitle` / `ogDescription` são usados **sem** sufixo (valores literais).
- `twitter:title` / `twitter:description` **derivam automaticamente** do OG —
  não há props separados para Twitter.
- Limites validados: **title ≤ 60**, **description 145–160**, OG desc até ~200.
- Props disponíveis: `title, description, keywords, canonical, ogImage,
  ogTitle, ogDescription, ogType, twitterCard, structuredData, noindex, nofollow`.

### ⚠️ Inconsistência de marca (decidir e padronizar)
- O site usa **"Simplí"** (com acento) no sufixo e em `og:site_name`.
- O material de marketing/kit usa **"Simpli"** (sem acento).
- Hoje convivem os dois. Definir o correto e padronizar em `SEO.tsx` + páginas.

### Páginas com SEO editável diretamente (arquivos)
`Index.tsx`, `SimpliAgent.tsx`, `SimpliCRM.tsx`, `AgentesIA.tsx`, `SimpliEstoque.tsx`
(e demais `src/pages/*.tsx`).

### O que NÃO é editável por arquivo
- **Studio Pro** (`studiopro.simpli.ia.br`) → **outro projeto/repo**.
- **Artigos** (`/conteudo/:slug`) → meta vem do **Sanity CMS**, não de arquivo.

---

## 4. Kit de SEO (`simpli-seo-kit/`)

Kit para atualizar title/description em lote.

```bash
# rodar como .cjs por causa do "type: module"
cd simpli-seo-kit
cp update-meta-tags.js update-meta-tags.cjs
node update-meta-tags.cjs            # dry run (mostra diff + valida tamanhos)
node update-meta-tags.cjs --json     # exporta JSON p/ Sanity
node update-meta-tags.cjs --next     # exporta metadata Next (NÃO se aplica aqui)
node update-meta-tags.cjs --html     # exporta snippets HTML
rm update-meta-tags.cjs
```

- Os valores `old` do kit batem com os **defaults** do componente, **não** com os
  props reais já customizados nas páginas. Sempre **substituir o prop atual**,
  não fazer find/replace cego do `old`.
- Ao aplicar um `title` do kit que já inclui a marca, **remover a marca** para
  não duplicar com o sufixo `" | Simplí"` e estourar 60 chars.

---

## 5. Checklist antes de commitar / deployar

1. [ ] `git remote -v` — sei para onde estou empurrando?
2. [ ] Estou na branch certa? (`git status -sb`)
3. [ ] Título final ≤ 60 (lembrar do sufixo `" | Simplí"`).
4. [ ] Description entre 145–160 chars.
5. [ ] Push para o destino correto (ver Seção 1).
6. [ ] **Conferir o deploy aparecendo na Vercel** (projeto `simpli`).
7. [ ] Autor do commit conferido (`git log -1 --format='%an <%ae>'`).

---

## 6. Arquivos não versionados (deixados de fora de propósito)

- `src/pages/SimpliAgent_old.tsx` — backup manual, não versionar.
- `simpli-seo-kit/` — ferramentas do kit (decidir se versiona ou `.gitignore`).
