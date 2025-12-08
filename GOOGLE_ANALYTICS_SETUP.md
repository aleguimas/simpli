# Configuração do Google Analytics

## ✅ Status: Configurado

O Google Analytics 4 (GA4) foi configurado com sucesso no projeto.

**ID de Medição:** `G-J4VGVQG24C`

---

## 📊 O que foi implementado

### 1. Script Base no HTML
- Script do Google Analytics adicionado no `index.html`
- Carregamento assíncrono para não bloquear a renderização
- Configuração inicial com o ID de medição

### 2. Componente React
- Componente `GoogleAnalytics.tsx` criado
- Rastreamento automático de mudanças de página (importante para SPAs)
- Funções helper para eventos customizados

### 3. Rastreamento de Eventos
- Cliques em botões de WhatsApp
- Cliques em cards de serviços
- Navegação entre páginas
- Conversões

---

## 🎯 Eventos Rastreados

### Automáticos
- **Page Views**: Rastreado automaticamente em todas as mudanças de rota
- **Page Titles**: Título da página incluído nos eventos

### Customizados
- **WhatsApp Clicks**: Rastreado com localização (ex: "hero_section")
- **Service Card Clicks**: Rastreamento de cliques nos cards de serviços
- **Button Clicks**: Rastreamento de cliques em botões importantes

---

## 🔧 Funções Disponíveis

### `trackWhatsAppClick(location?: string)`
Rastreia cliques em botões do WhatsApp e marca como conversão.

```typescript
import { trackWhatsAppClick } from "@/components/GoogleAnalytics";

// Uso
<a onClick={() => trackWhatsAppClick("hero_section")}>
  Fale conosco
</a>
```

### `trackEvent(action, category, label?, value?)`
Rastreia eventos customizados.

```typescript
import { trackEvent } from "@/components/GoogleAnalytics";

// Uso
trackEvent("click", "button", "cta_principal", 1);
```

### `trackButtonClick(buttonName, location?)`
Rastreia cliques em botões.

```typescript
import { trackButtonClick } from "@/components/GoogleAnalytics";

// Uso
trackButtonClick("Solicitar Orçamento", "servicos_page");
```

### `trackFormSubmit(formName)`
Rastreia submissões de formulários.

```typescript
import { trackFormSubmit } from "@/components/GoogleAnalytics";

// Uso
trackFormSubmit("diagnostico_ia");
```

### `trackConversion(conversionType, value?)`
Rastreia conversões.

```typescript
import { trackConversion } from "@/components/GoogleAnalytics";

// Uso
trackConversion("whatsapp_contact", 1);
```

---

## 📍 Locais com Rastreamento Implementado

### ✅ Hero Section
- Botão "Fale conosco" (WhatsApp) - rastreado

### ✅ Serviços Section
- Cards de serviços - rastreados

### ⚠️ Outros Locais
Os seguintes locais têm botões de WhatsApp que podem ser atualizados:
- Páginas de serviços individuais
- Footer
- Outras seções

---

## 🚀 Próximos Passos (Opcional)

### 1. Adicionar Rastreamento em Mais Locais
Você pode adicionar rastreamento nos seguintes locais:

```typescript
// Em qualquer componente
import { trackWhatsAppClick, trackButtonClick } from "@/components/GoogleAnalytics";

// Exemplo em um botão
<Button onClick={() => {
  trackWhatsAppClick("footer");
  // ... resto do código
}}>
  Fale conosco
</Button>
```

### 2. Configurar Eventos no Google Analytics
1. Acesse o Google Analytics
2. Vá em **Configuração** > **Eventos**
3. Configure eventos personalizados se necessário

### 3. Configurar Conversões
1. Acesse o Google Analytics
2. Vá em **Configuração** > **Eventos**
3. Marque eventos como "Conversão" (ex: `whatsapp_contact`)

### 4. Configurar Objetivos
1. Acesse o Google Analytics
2. Vá em **Configuração** > **Objetivos**
3. Crie objetivos baseados nos eventos rastreados

---

## 📊 Métricas que Serão Rastreadas

### Automáticas
- **Usuários**: Total de usuários únicos
- **Sessões**: Total de sessões
- **Taxa de rejeição**: Porcentagem de sessões de uma página
- **Duração média da sessão**: Tempo médio na sessão
- **Páginas por sessão**: Média de páginas visitadas

### Eventos Customizados
- **whatsapp_click**: Cliques em botões do WhatsApp
- **service_card_click**: Cliques em cards de serviços
- **button_click**: Cliques em botões importantes
- **form_submit**: Submissões de formulários
- **conversion**: Conversões (WhatsApp, formulários, etc.)

---

## 🔍 Verificando se Está Funcionando

### 1. Google Analytics DebugView
1. Instale a extensão [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Ative a extensão
3. Navegue pelo site
4. Veja os eventos em tempo real no Google Analytics

### 2. Google Tag Assistant
1. Instale a extensão [Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Ative a extensão
3. Navegue pelo site
4. Veja se o Google Analytics está sendo carregado corretamente

### 3. Console do Navegador
Abra o console do navegador (F12) e verifique:
```javascript
// Deve retornar uma função
typeof window.gtag
// Deve retornar um array
window.dataLayer
```

---

## 📝 Notas Importantes

1. **Privacidade**: O Google Analytics coleta dados anonimizados. Certifique-se de ter uma política de privacidade atualizada.

2. **GDPR/LGPD**: Se necessário, implemente consentimento do usuário antes de carregar o Google Analytics.

3. **Performance**: O script é carregado de forma assíncrona para não impactar a performance.

4. **SPA**: O rastreamento de mudanças de página é automático graças ao componente `GoogleAnalytics` que monitora o React Router.

---

## 🆘 Troubleshooting

### Eventos não aparecem no Google Analytics
- Aguarde até 24-48 horas para aparecerem nos relatórios padrão
- Use o DebugView para ver eventos em tempo real
- Verifique se o ID está correto: `G-J4VGVQG24C`

### Page views não estão sendo rastreados
- Verifique se o componente `GoogleAnalytics` está no `App.tsx`
- Verifique o console do navegador por erros
- Certifique-se de que o React Router está funcionando

### Eventos customizados não funcionam
- Verifique se a função `trackEvent` está sendo chamada
- Verifique o console do navegador por erros
- Certifique-se de que `window.gtag` está disponível

---

**Última atualização:** 6 de dezembro de 2025
**ID de Medição:** G-J4VGVQG24C

