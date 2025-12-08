# Configuração do Google Tag Manager

## ✅ Status: Configurado

O Google Tag Manager (GTM) foi configurado com sucesso no projeto.

**Container ID:** `GTM-NCF67L6B`

---

## 📊 O que foi implementado

### 1. Script GTM no HTML
- Script do Google Tag Manager adicionado no `<head>` do `index.html`
- Noscript fallback adicionado no `<body>` para usuários sem JavaScript
- Container ID: `GTM-NCF67L6B`

### 2. Componente React
- Componente `GoogleTagManager.tsx` criado
- Rastreamento automático de mudanças de página via `dataLayer`
- Funções helper para eventos customizados via GTM

### 3. Integração com Google Analytics
- GTM e GA funcionando em conjunto
- Eventos podem ser gerenciados via GTM sem alterar código
- DataLayer compartilhado entre GTM e GA

### 4. Rastreamento de Eventos
- Page views automáticos via dataLayer
- Cliques em WhatsApp (GTM + GA)
- Cliques em cards de serviços (GTM + GA)
- Funções prontas para outros eventos

---

## 🎯 Eventos Rastreados

### Automáticos
- **Page Views**: Rastreado automaticamente via `dataLayer.push()` em todas as mudanças de rota
- **Page Path**: Caminho da página incluído
- **Page Title**: Título da página incluído
- **Page Location**: URL completa incluída

### Customizados (via dataLayer)
- **whatsapp_click**: Cliques em botões do WhatsApp
- **button_click**: Cliques em botões importantes
- **service_click**: Cliques em cards de serviços
- **form_submit**: Submissões de formulários
- **conversion**: Conversões

---

## 🔧 Funções Disponíveis

### `pushToDataLayer(data)`
Envia dados diretamente para o dataLayer do GTM.

```typescript
import { pushToDataLayer } from "@/components/GoogleTagManager";

// Uso
pushToDataLayer({
  event: "custom_event",
  custom_parameter: "value",
});
```

### `trackGTMEvent(eventName, eventData?)`
Rastreia eventos customizados via GTM.

```typescript
import { trackGTMEvent } from "@/components/GoogleTagManager";

// Uso
trackGTMEvent("button_click", {
  button_name: "cta_principal",
  location: "hero_section",
});
```

### `trackGTMPageView(pagePath, pageTitle?)`
Rastreia visualizações de página via GTM.

```typescript
import { trackGTMPageView } from "@/components/GoogleTagManager";

// Uso
trackGTMPageView("/servicos/desenvolvimento-web", "Desenvolvimento Web");
```

### `trackGTMWhatsAppClick(location?)`
Rastreia cliques em botões do WhatsApp via GTM.

```typescript
import { trackGTMWhatsAppClick } from "@/components/GoogleTagManager";

// Uso
trackGTMWhatsAppClick("hero_section");
```

### `trackGTMButtonClick(buttonName, location?)`
Rastreia cliques em botões via GTM.

```typescript
import { trackGTMButtonClick } from "@/components/GoogleTagManager";

// Uso
trackGTMButtonClick("Solicitar Orçamento", "servicos_page");
```

### `trackGTMServiceClick(serviceName)`
Rastreia cliques em cards de serviços via GTM.

```typescript
import { trackGTMServiceClick } from "@/components/GoogleTagManager";

// Uso
trackGTMServiceClick("Desenvolvimento Web");
```

### `trackGTMFormSubmit(formName, formData?)`
Rastreia submissões de formulários via GTM.

```typescript
import { trackGTMFormSubmit } from "@/components/GoogleTagManager";

// Uso
trackGTMFormSubmit("diagnostico_ia", {
  form_step: 5,
  completion_rate: 100,
});
```

### `trackGTMConversion(conversionType, value?, currency?)`
Rastreia conversões via GTM.

```typescript
import { trackGTMConversion } from "@/components/GoogleTagManager";

// Uso
trackGTMConversion("whatsapp_contact", 1, "BRL");
```

---

## 🚀 Configuração no Google Tag Manager

### 1. Configurar Google Analytics via GTM

1. Acesse o [Google Tag Manager](https://tagmanager.google.com)
2. Selecione o container `GTM-NCF67L6B`
3. Vá em **Tags** > **Nova**
4. Escolha **Google Analytics: GA4 Configuration**
5. Configure:
   - **ID de Medição**: `G-J4VGVQG24C`
   - **Nome da Tag**: "GA4 - Configuração"
6. Em **Acionadores**, selecione "All Pages"
7. Salve e publique

### 2. Configurar Eventos Personalizados

#### Evento: WhatsApp Click
1. Vá em **Tags** > **Nova**
2. Escolha **Google Analytics: GA4 Event**
3. Configure:
   - **Nome da Tag**: "GA4 - WhatsApp Click"
   - **ID de Medição**: `G-J4VGVQG24C`
   - **Nome do Evento**: `whatsapp_click`
4. Em **Acionadores**, crie um novo:
   - Tipo: **Evento Personalizado**
   - Nome do Evento: `whatsapp_click`
5. Salve e publique

#### Evento: Service Click
1. Vá em **Tags** > **Nova**
2. Escolha **Google Analytics: GA4 Event**
3. Configure:
   - **Nome da Tag**: "GA4 - Service Click"
   - **ID de Medição**: `G-J4VGVQG24C`
   - **Nome do Evento**: `service_click`
4. Em **Acionadores**, crie um novo:
   - Tipo: **Evento Personalizado**
   - Nome do Evento: `service_click`
5. Salve e publique

### 3. Configurar Variáveis

1. Vá em **Variáveis** > **Nova**
2. Configure variáveis úteis:
   - **page_path**: `{{Page Path}}`
   - **page_title**: `{{Page Title}}`
   - **click_location**: Variável de Data Layer personalizada

### 4. Configurar Conversões

1. No Google Analytics, vá em **Configuração** > **Eventos**
2. Marque os seguintes eventos como "Conversão":
   - `whatsapp_click`
   - `form_submit`
   - `conversion`

---

## 📍 Locais com Rastreamento Implementado

### ✅ Hero Section
- Botão "Fale conosco" (WhatsApp) - rastreado via GTM e GA

### ✅ Serviços Section
- Cards de serviços - rastreados via GTM e GA

### ⚠️ Outros Locais
Os seguintes locais têm botões que podem ser atualizados:
- Páginas de serviços individuais
- Footer
- Formulários
- Outras seções

---

## 🔄 Diferença entre GTM e GA Direto

### Google Tag Manager (GTM)
- ✅ Gerencia tags sem alterar código
- ✅ Interface visual para configurar eventos
- ✅ Fácil de adicionar novas tags (Facebook Pixel, LinkedIn, etc.)
- ✅ Versionamento e preview de mudanças
- ✅ Testes antes de publicar

### Google Analytics Direto
- ✅ Implementação simples
- ✅ Rastreamento direto
- ⚠️ Requer alteração de código para novos eventos

### Recomendação
**Use o GTM como principal** e mantenha o GA direto como backup ou para eventos críticos que precisam funcionar mesmo se o GTM falhar.

---

## 🚀 Próximos Passos

### 1. Configurar Tags no GTM
- Configure o Google Analytics via GTM
- Configure eventos personalizados
- Configure conversões

### 2. Adicionar Outras Tags (Opcional)
Você pode adicionar facilmente:
- Facebook Pixel
- LinkedIn Insight Tag
- Hotjar
- Outras ferramentas de analytics

### 3. Testar no GTM
1. Use o **Preview Mode** no GTM
2. Navegue pelo site
3. Verifique se os eventos estão sendo disparados
4. Publique quando estiver tudo certo

### 4. Configurar Variáveis e Acionadores
- Configure variáveis úteis no GTM
- Configure acionadores para eventos específicos
- Organize tags por categoria

---

## 🔍 Verificando se Está Funcionando

### 1. GTM Preview Mode
1. Acesse o [Google Tag Manager](https://tagmanager.google.com)
2. Clique em **Preview**
3. Digite a URL do site
4. Navegue pelo site
5. Veja os eventos sendo disparados em tempo real

### 2. Console do Navegador
Abra o console do navegador (F12) e verifique:
```javascript
// Deve retornar um array
window.dataLayer

// Veja os eventos sendo enviados
console.log(window.dataLayer)
```

### 3. Google Tag Assistant
1. Instale a extensão [Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Ative a extensão
3. Navegue pelo site
4. Veja se o GTM está sendo carregado corretamente

### 4. Google Analytics Real-Time
1. Acesse o Google Analytics
2. Vá em **Relatórios** > **Tempo Real**
3. Navegue pelo site
4. Veja os eventos aparecendo em tempo real

---

## 📊 Estrutura do DataLayer

O dataLayer é populado automaticamente com:

```javascript
// Page View
{
  event: "page_view",
  page_path: "/servicos/desenvolvimento-web",
  page_title: "Desenvolvimento Web | Simplí",
  page_location: "https://www.simpli.ia.br/servicos/desenvolvimento-web"
}

// WhatsApp Click
{
  event: "whatsapp_click",
  click_location: "hero_section",
  event_category: "engagement",
  event_label: "whatsapp_contact"
}

// Service Click
{
  event: "service_click",
  service_name: "Desenvolvimento Web",
  event_category: "engagement",
  event_label: "Desenvolvimento Web"
}
```

---

## 📝 Notas Importantes

1. **Ordem de Carregamento**: O GTM é carregado antes do conteúdo, garantindo que todas as tags sejam inicializadas corretamente.

2. **SPA (Single Page Application)**: O componente `GoogleTagManager` monitora mudanças de rota do React Router e envia eventos de page_view automaticamente.

3. **DataLayer**: Todos os eventos são enviados via `dataLayer.push()`, que é o método recomendado pelo Google.

4. **Performance**: O GTM é carregado de forma assíncrona para não impactar a performance do site.

5. **Privacidade**: Certifique-se de ter uma política de privacidade atualizada e, se necessário, implemente consentimento do usuário.

---

## 🆘 Troubleshooting

### GTM não está carregando
- Verifique se o Container ID está correto: `GTM-NCF67L6B`
- Verifique o console do navegador por erros
- Certifique-se de que não há bloqueadores de anúncios ativos

### Eventos não aparecem no GTM Preview
- Verifique se o Preview Mode está ativo
- Verifique se os eventos estão sendo enviados via `dataLayer.push()`
- Verifique o console do navegador

### Eventos não aparecem no Google Analytics
- Verifique se a tag do GA4 está configurada no GTM
- Verifique se os acionadores estão configurados corretamente
- Aguarde alguns minutos (pode haver delay)

### Page views não estão sendo rastreados
- Verifique se o componente `GoogleTagManager` está no `App.tsx`
- Verifique se o React Router está funcionando
- Verifique o console do navegador por erros

---

## 🔗 Links Úteis

- [Google Tag Manager](https://tagmanager.google.com)
- [Documentação do GTM](https://support.google.com/tagmanager)
- [Guia de Implementação do GTM](https://developers.google.com/tag-manager/quickstart)
- [Data Layer Guide](https://developers.google.com/tag-manager/devguide)

---

**Última atualização:** 6 de dezembro de 2025  
**Container ID:** GTM-NCF67L6B  
**Google Analytics ID:** G-J4VGVQG24C

