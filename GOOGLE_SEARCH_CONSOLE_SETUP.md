# Guia de Configuração do Google Search Console

Este documento contém instruções completas para configurar o Google Search Console para o site **simpli.ia.br**.

## 📋 Pré-requisitos

- Acesso à conta Google (Gmail)
- Acesso ao domínio simpli.ia.br ou à plataforma de hospedagem (Vercel)

## 🚀 Passo a Passo

### 1. Acessar o Google Search Console

1. Acesse: https://search.google.com/search-console
2. Faça login com sua conta Google
3. Clique em "Adicionar propriedade"

### 2. Adicionar Propriedade

Escolha uma das opções abaixo:

#### Opção A: Propriedade de Domínio (Recomendado)
- Selecione "Domínio"
- Digite: `simpli.ia.br`
- Clique em "Continuar"
- Siga as instruções para verificar o domínio via DNS

#### Opção B: Propriedade de Prefixo de URL
- Selecione "Prefixo de URL"
- Digite: `https://www.simpli.ia.br`
- Clique em "Continuar"
- Escolha um método de verificação (veja abaixo)

### 3. Métodos de Verificação

#### Método 1: Arquivo HTML (Mais Simples)
1. No Google Search Console, escolha "Arquivo HTML"
2. Baixe o arquivo de verificação fornecido
3. Faça upload do arquivo na pasta `/public/` do projeto
4. Faça deploy do site
5. Clique em "Verificar" no Google Search Console

#### Método 2: Tag HTML (Recomendado)
1. No Google Search Console, escolha "Tag HTML"
2. Copie a meta tag fornecida (exemplo: `<meta name="google-site-verification" content="CODIGO_AQUI" />`)
3. Adicione a tag no arquivo `index.html` dentro da tag `<head>`
4. Faça deploy do site
5. Clique em "Verificar" no Google Search Console

#### Método 3: DNS (Para propriedade de domínio)
1. No Google Search Console, escolha "Registro DNS"
2. Adicione o registro TXT fornecido no seu provedor de DNS
3. Aguarde a propagação (pode levar até 48 horas)
4. Clique em "Verificar" no Google Search Console

### 4. Enviar Sitemap

Após a verificação:

1. No menu lateral, clique em "Sitemaps"
2. No campo "Adicionar um novo sitemap", digite: `sitemap.xml`
3. Clique em "Enviar"
4. Aguarde alguns minutos para o Google processar

**URL do Sitemap:** `https://www.simpli.ia.br/sitemap.xml`

### 5. Configurações Importantes

#### Solicitar Indexação de Páginas Principais

1. Vá em "Inspeção de URL"
2. Digite a URL completa (ex: `https://www.simpli.ia.br/`)
3. Clique em "Solicitar indexação"
4. Repita para as principais páginas:
   - `https://www.simpli.ia.br/`
   - `https://www.simpli.ia.br/servicos/desenvolvimento-web`
   - `https://www.simpli.ia.br/servicos/agentes-de-ia`
   - `https://www.simpli.ia.br/servicos/trafego-pago`
   - `https://www.simpli.ia.br/servicos/consultoria-digital`

### 6. Configurar Preferências

1. Vá em "Configurações" > "Preferências"
2. Configure:
   - **País de destino:** Brasil
   - **Versão preferida:** www (https://www.simpli.ia.br)
   - **Frequência de rastreamento:** Padrão

### 7. Monitoramento

Após a configuração, monitore regularmente:

- **Performance:** Veja quais palavras-chave estão gerando tráfego
- **Cobertura:** Verifique se há erros de indexação
- **Melhorias:** Acompanhe sugestões do Google
- **Links:** Veja quais sites estão linkando para o seu

## 📝 Checklist de Configuração

- [ ] Propriedade adicionada no Google Search Console
- [ ] Verificação concluída com sucesso
- [ ] Sitemap.xml enviado e processado
- [ ] Páginas principais solicitadas para indexação
- [ ] Preferências configuradas (país, versão preferida)
- [ ] Monitoramento ativo configurado

## 🔍 URLs Importantes

- **Site:** https://www.simpli.ia.br
- **Sitemap:** https://www.simpli.ia.br/sitemap.xml
- **Robots.txt:** https://www.simpli.ia.br/robots.txt

## ⚠️ Observações Importantes

1. **Tempo de Indexação:** O Google pode levar de alguns dias a semanas para indexar completamente o site
2. **Atualizações:** Após fazer alterações no site, o sitemap será atualizado automaticamente no próximo deploy
3. **Robots.txt:** O arquivo robots.txt já está configurado para permitir o rastreamento do Google
4. **Structured Data:** Todas as páginas já possuem dados estruturados (JSON-LD) para melhor indexação

## 🆘 Problemas Comuns

### Verificação Falha
- Verifique se o arquivo/tag foi adicionado corretamente
- Aguarde alguns minutos após o deploy
- Limpe o cache do navegador

### Sitemap Não Processado
- Verifique se o sitemap.xml está acessível publicamente
- Confirme que a URL está correta
- Aguarde até 24 horas para processamento

### Páginas Não Indexadas
- Use a ferramenta "Inspeção de URL" para solicitar indexação
- Verifique se a página não está bloqueada no robots.txt
- Confirme que a página tem conteúdo relevante

## 📞 Suporte

Para mais informações, consulte:
- [Documentação do Google Search Console](https://support.google.com/webmasters)
- [Central de Ajuda do Search Console](https://support.google.com/webmasters/answer/4559176)

---

**Última atualização:** 6 de dezembro de 2025

