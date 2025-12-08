# Configuração de Deploy no Netlify

## ✅ Configuração Criada

O arquivo `netlify.toml` foi criado para configurar corretamente o deploy do projeto Vite no Netlify.

---

## 📋 Configuração do Netlify

### Arquivo: `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Explicação:

1. **Build Command**: `npm run build`
   - Executa o build do Vite
   - Gera os arquivos em `dist/`

2. **Publish Directory**: `dist`
   - Diretório onde o Vite gera os arquivos de produção
   - **IMPORTANTE**: O Netlify estava procurando `.next` (Next.js), mas o projeto usa Vite que gera `dist`

3. **Redirects**: `/*` → `/index.html`
   - Necessário para SPAs (Single Page Applications)
   - Todas as rotas redirecionam para `index.html` para o React Router funcionar

4. **Node Version**: `18`
   - Versão do Node.js para o build

---

## 🔧 Configuração no Painel do Netlify

### Opção 1: Usar netlify.toml (Recomendado)
O arquivo `netlify.toml` já está configurado. O Netlify detectará automaticamente.

### Opção 2: Configurar Manualmente
Se preferir configurar manualmente no painel:

1. Acesse **Site settings** > **Build & deploy**
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (ou superior)

---

## ⚠️ Problema Identificado

### Erro Original:
```
Deploy directory '.next' does not exist
```

### Causa:
- O Netlify estava configurado para Next.js (`.next`)
- O projeto usa **Vite** que gera os arquivos em `dist/`

### Solução:
- Criado `netlify.toml` com configuração correta
- Diretório de publicação: `dist` (não `.next`)

---

## ✅ Validação do Build

### Build Local:
```bash
npm run build
```

**Resultado esperado:**
- ✅ Build concluído com sucesso
- ✅ Arquivos gerados em `dist/`
- ✅ `dist/index.html` criado
- ✅ Assets em `dist/assets/`

### Estrutura do Build:
```
dist/
├── index.html
├── assets/
│   ├── index-*.js
│   └── index-*.css
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

---

## 🚀 Próximos Passos

### 1. Fazer Deploy no Netlify

#### Via Git (Recomendado):
1. Conecte o repositório no Netlify
2. O Netlify detectará automaticamente o `netlify.toml`
3. Faça o deploy

#### Via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### 2. Verificar Configuração

Após o deploy, verifique:
- ✅ Site funcionando
- ✅ Rotas funcionando (React Router)
- ✅ Assets carregando corretamente
- ✅ SEO funcionando (meta tags)

### 3. Configurar Domínio

1. Acesse **Site settings** > **Domain management**
2. Adicione o domínio: `www.simpli.ia.br`
3. Configure DNS conforme instruções

---

## 🔍 Troubleshooting

### Build Falha no Netlify

#### Erro: "Command not found"
**Solução**: Verifique se o Node.js está instalado
```toml
[build.environment]
  NODE_VERSION = "18"
```

#### Erro: "Module not found"
**Solução**: Certifique-se de que `package-lock.json` está commitado
```bash
git add package-lock.json
git commit -m "Add package-lock.json"
```

#### Erro: "Build script returned non-zero exit code"
**Solução**: 
1. Teste o build local: `npm run build`
2. Verifique se há erros no console
3. Verifique se todas as dependências estão no `package.json`

### Rotas Não Funcionam

#### Problema: 404 em rotas
**Solução**: O arquivo `_redirects` já está configurado. Verifique se está em `public/_redirects`

### Assets Não Carregam

#### Problema: CSS/JS não carregam
**Solução**: 
1. Verifique se o `publish` está como `dist`
2. Verifique se os assets estão em `dist/assets/`

---

## 📝 Checklist de Deploy

- [x] `netlify.toml` criado
- [x] `public/_redirects` criado
- [x] Build local testado e funcionando
- [x] `dist/` gerado corretamente
- [ ] Repositório conectado no Netlify
- [ ] Deploy realizado com sucesso
- [ ] Site funcionando corretamente
- [ ] Rotas testadas
- [ ] Domínio configurado

---

## 🔗 Links Úteis

- [Documentação Netlify](https://docs.netlify.com/)
- [Netlify CLI](https://cli.netlify.com/)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html#netlify)

---

**Última atualização:** 6 de dezembro de 2025  
**Status:** ✅ Configuração Pronta

