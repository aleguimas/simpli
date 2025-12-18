# Ações Necessárias no Google Search Console

## 🔍 Problema: "Página alternativa com tag canônica adequada"

O Google Search Console está mostrando que algumas páginas estão sendo tratadas como "alternativas" mesmo tendo canonical tags corretas.

---

## ✅ Correções Implementadas no Código

### 1. Redirect 301 para URL Antiga
- ✅ Adicionado redirect de `/servicos/agentes-ia` → `/servicos/agentes-de-ia`
- ✅ Configurado no `netlify.toml`

### 2. Melhorias no Componente SEO
- ✅ Canonical URLs normalizadas (sem trailing slash)
- ✅ Sempre absolutas (com https://www.simpli.ia.br)
- ✅ Função de normalização implementada

---

## 🚀 Ações Necessárias no Google Search Console

### 1. Solicitar Nova Indexação

Após o deploy, você precisa solicitar nova indexação das páginas afetadas:

1. Acesse: https://search.google.com/search-console
2. Selecione a propriedade `simpli.ia.br`
3. Vá em **Inspecionar URL** (barra de pesquisa no topo)
4. Para cada URL afetada, inspecione e clique em **Solicitar indexação**:
   - `https://www.simpli.ia.br/servicos/desenvolvimento-web`
   - `https://www.simpli.ia.br/servicos/agentes-de-ia`
   - `https://www.simpli.ia.br/servicos/trafego-pago`
   - `https://www.simpli.ia.br/servicos/consultoria-digital`

### 2. Verificar Redirects

1. Use a ferramenta **Inspecionar URL** para verificar:
   - `https://www.simpli.ia.br/servicos/agentes-ia`
   - Deve mostrar redirect 301 para `/servicos/agentes-de-ia`

### 3. Reenviar Sitemap

1. Vá em **Sitemaps** no menu lateral
2. Se o sitemap já estiver enviado, clique em **Testar** novamente
3. Se necessário, remova e reenvie o sitemap:
   - URL: `https://www.simpli.ia.br/sitemap.xml`

### 4. Monitorar Status

Após solicitar indexação, monitore:

1. **Cobertura** → **Páginas válidas**: Verifique se as páginas aparecem como indexadas
2. **Cobertura** → **Páginas alternativas com tag canônica adequada**: Deve diminuir/desaparecer
3. **Inspecionar URL**: Verifique se o Google está vendo as canonical tags corretas

---

## ⏱️ Tempo Esperado

- **Redirects**: Imediato (após deploy)
- **Nova indexação**: 1-7 dias
- **Resolução completa**: 2-4 semanas

---

## 🔍 Como Verificar se Está Funcionando

### 1. Verificar Canonical Tags

Abra cada página e inspecione o HTML:

```html
<link rel="canonical" href="https://www.simpli.ia.br/servicos/desenvolvimento-web" />
```

### 2. Verificar Redirects

Teste no navegador:
- Acesse: `https://www.simpli.ia.br/servicos/agentes-ia`
- Deve redirecionar para: `https://www.simpli.ia.br/servicos/agentes-de-ia`
- Status code deve ser 301

### 3. Usar Google Search Console

1. **Inspecionar URL** → Cole a URL
2. Clique em **Testar URL publicada**
3. Verifique:
   - ✅ Canonical tag está presente
   - ✅ Canonical aponta para a URL correta
   - ✅ Status: "URL está no Google"

---

## 📊 URLs Afetadas

| URL | Status Atual | Ação Necessária |
|-----|--------------|-----------------|
| `/servicos/desenvolvimento-web` | Alternativa | Solicitar indexação |
| `/servicos/agentes-de-ia` | Alternativa | Solicitar indexação |
| `/servicos/trafego-pago` | Alternativa | Solicitar indexação |
| `/servicos/agentes-ia` | Duplicada | Redirect 301 (já implementado) |

---

## ⚠️ Importante

1. **Aguarde o deploy** antes de solicitar indexação
2. **Não solicite indexação múltiplas vezes** - aguarde alguns dias entre solicitações
3. **Monitore o Search Console** regularmente para verificar progresso
4. **O problema pode levar algumas semanas** para ser completamente resolvido

---

**Data:** 6 de dezembro de 2025  
**Status:** ✅ Correções Implementadas - Aguardando Deploy e Ações no GSC

