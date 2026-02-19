# Correção: "Página alternativa com tag canônica adequada" em /conteudo

## Problema

O Google Search Console marcava as URLs do blog como **"Página alternativa com tag canônica adequada"** (não indexadas), por exemplo:

- https://www.simpli.ia.br/conteudo  
- https://www.simpli.ia.br/conteudo/o-fim-do-copia-e-cola-...  
- https://www.simpli.ia.br/conteudo/por-que-o-gpt-5-3-codex-...

**Causa:** Em um SPA, o servidor entrega o **mesmo** `index.html` para todas as rotas. O HTML estático tinha `canonical` e meta sempre apontando para a **home** (`https://www.simpli.ia.br/`). O Google via o primeiro HTML (antes do JavaScript) e entendia que /conteudo e /conteudo/:slug eram páginas alternativas da home, por isso não as indexava.

Além disso, a rota exata `/conteudo` (listagem) não era atendida pela function, só `/conteudo/*` (com slug), então a listagem também recebia o index.html genérico.

## O que foi feito

1. **Listagem `/conteudo`**  
   - Redirect em Netlify: `/conteudo` → function com `?list=1`.  
   - A function passa a tratar `list=1`, devolvendo HTML com:
     - `canonical`: `https://www.simpli.ia.br/conteudo`
     - title/description da página de listagem
     - `og:type`: `website`

2. **Posts `/conteudo/:slug`**  
   - Já eram atendidos pela function; o HTML devolvido já tinha canonical e meta corretos para cada post.  
   - Garantido que o **canonical** no HTML inicial seja sempre a URL do próprio post (ou a customizada no Sanity).

3. **Trailing slash**  
   - 301 de `/conteudo/` → `/conteudo`  
   - 301 de `/conteudo/:slug/` → `/conteudo/:slug`  
   Assim o canonical fica estável (sempre sem barra final).

4. **Ordem dos redirects**  
   - Regras para `/conteudo` e `/conteudo/*` ficam **antes** do catch-all `/*` → `index.html`, para que a function responda e injete o canonical/meta corretos no primeiro HTML.

## Depois do deploy

1. **Novo deploy**  
   Fazer deploy (push) para a Netlify para que as novas redirects e a function atualizada entrem no ar.

2. **Google Search Console**  
   - Em **Inspeção de URL**, testar de novo as URLs (ex.: `/conteudo` e um post).  
   - Usar **Solicitar indexação** para as páginas que devem ser indexadas.  
   - O relatório "Página alternativa com tag canônica adequada" pode levar alguns dias para sumir; o importante é que o HTML servido **já** traga o canonical correto para cada URL.

3. **Conferir o HTML**  
   - Abrir a URL (ou usar “Visualizar como o Google”) e ver o código-fonte (Ctrl+U / Cmd+U).  
   - Verificar que `<link rel="canonical" href="...">` é **a própria URL** da página (ex.: `https://www.simpli.ia.br/conteudo` para a listagem e `https://www.simpli.ia.br/conteudo/slug-do-post` para cada artigo).
