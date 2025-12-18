# Correção de Tags Canônicas - Google Search Console

## 🔍 Problema Identificado

O Google Search Console está mostrando **"Página alternativa com tag canônica adequada"** para as seguintes URLs:

- `https://www.simpli.ia.br/servicos/desenvolvimento-web`
- `https://www.simpli.ia.br/servicos/trafego-pago`
- `https://www.simpli.ia.br/servicos/agentes-de-ia`
- `https://www.simpli.ia.br/servicos/agentes-ia` (URL antiga/duplicada)

### O que isso significa:

**"Página alternativa com tag canônica adequada"** significa que:
- ✅ O Google encontrou a página
- ✅ A tag canônica está configurada corretamente
- ⚠️ Mas a página está sendo tratada como "alternativa" (não canônica)
- ⚠️ A página pode não estar sendo indexada como principal

### Possíveis Causas:

1. **URLs Duplicadas**: Existe uma URL antiga `/servicos/agentes-ia` que pode estar apontando para `/servicos/agentes-de-ia`
2. **Canonical apontando para si mesma**: A página pode estar com canonical apontando para si mesma, mas o Google está vendo como alternativa
3. **Conteúdo similar**: Múltiplas URLs com conteúdo similar
4. **Problema de SPA**: O React Router pode estar gerando múltiplas URLs para o mesmo conteúdo

---

## ✅ Solução Implementada

### 1. Verificação das Canonical URLs

Todas as páginas de serviços têm canonical URLs corretas:
- ✅ `/servicos/desenvolvimento-web` → `https://www.simpli.ia.br/servicos/desenvolvimento-web`
- ✅ `/servicos/agentes-de-ia` → `https://www.simpli.ia.br/servicos/agentes-de-ia`
- ✅ `/servicos/trafego-pago` → `https://www.simpli.ia.br/servicos/trafego-pago`
- ✅ `/servicos/consultoria-digital` → `https://www.simpli.ia.br/servicos/consultoria-digital`

### 2. Problema: URL Duplicada `/servicos/agentes-ia`

**Problema identificado:**
- Existe uma URL antiga: `/servicos/agentes-ia` (sem "de")
- URL atual: `/servicos/agentes-de-ia` (com "de")
- O Google está rastreando ambas

**Solução:**
- Adicionar redirect 301 de `/servicos/agentes-ia` → `/servicos/agentes-de-ia`
- Garantir que apenas a URL correta esteja no sitemap

### 3. Melhorias no Componente SEO ✅

**Implementado:**
- ✅ Função `getCanonicalUrl()` que normaliza canonical URLs
- ✅ Remove trailing slashes desnecessários
- ✅ Garante que canonical sempre comece com `/`
- ✅ Sempre retorna URL absoluta com `https://www.simpli.ia.br`
- ✅ Previne problemas com URLs duplicadas ou malformadas

---

## 🔧 Correções Necessárias

### 1. Adicionar Redirects para URLs Antigas

Criar redirects 301 no `netlify.toml` ou `_redirects`:

```toml
[[redirects]]
  from = "/servicos/agentes-ia"
  to = "/servicos/agentes-de-ia"
  status = 301
```

### 2. Verificar e Corrigir Canonical URLs

Garantir que:
- ✅ Canonical sempre aponte para a URL completa
- ✅ Canonical seja absoluta (não relativa)
- ✅ Canonical use https://www.simpli.ia.br

### 3. Remover URLs Duplicadas do Sitemap

- ✅ Verificar se há URLs duplicadas no sitemap
- ✅ Remover URLs antigas
- ✅ Manter apenas URLs canônicas

---

## 📋 Checklist de Correção

- [x] Adicionar redirect 301 para `/servicos/agentes-ia` → `/servicos/agentes-de-ia`
- [x] Garantir que canonical URLs sejam absolutas e limpas (sem trailing slash)
- [x] Melhorar componente SEO para normalizar canonical URLs
- [x] Verificar sitemap.xml (sem duplicatas)
- [ ] Testar redirects em produção
- [ ] Solicitar nova indexação no Google Search Console

---

## 🚀 Próximos Passos

1. **Adicionar redirects** para URLs antigas
2. **Verificar canonical URLs** em todas as páginas
3. **Atualizar sitemap.xml** se necessário
4. **Solicitar nova indexação** no Google Search Console
5. **Monitorar** no Search Console nas próximas semanas

---

**Data da Análise:** 6 de dezembro de 2025  
**Status:** ⚠️ Problema Identificado - Correções Necessárias

