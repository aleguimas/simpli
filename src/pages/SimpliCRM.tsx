import {
  LineChart,
  MessageSquareText,
  Megaphone,
  ShoppingBag,
  Handshake,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import CrmNavbar from "@/components/crm/CrmNavbar";
import { SEO } from "@/components/SEO";
import CrmLandingContent from "@/components/crm/CrmLandingContent";

/* Os 3 pilares do hero apontam para as âncoras das seções de funcionalidades. */
const pillars = [
  {
    icon: MessageSquareText,
    title: "Atendimento com IA",
    description:
      "WhatsApp oficial, Instagram e um agente de IA 24/7 na mesma central — com passagem para humano no momento certo.",
    href: "#simplichat",
  },
  {
    icon: Megaphone,
    title: "Campanhas e Disparos",
    description:
      "Disparos em massa pela API oficial da Meta, flows estilo ManyChat e grupos de WhatsApp como canal de vendas.",
    href: "#campanhas",
  },
  {
    icon: LineChart,
    title: "Gestão e Inteligência de Clientes",
    description:
      "Dashboards em tempo real, funil Kanban e o ERP virando inteligência de relacionamento — classificação automática de clientes.",
    href: "#gestao",
  },
];

/* Perfis atendidos pelo produto — Varejo e Serviços. */
const profiles = [
  {
    icon: ShoppingBag,
    badge: "Plano Varejo",
    title: "Atendimento e vendas em volume",
    description:
      "Para o varejo que atende muita gente todo dia: central omnichannel, IA no WhatsApp, campanhas em massa, grupos, funil de vendas e inteligência de clientes conectada ao ERP.",
    items: [
      "Central SimpliChat + agente de IA",
      "Campanhas e grupos de WhatsApp",
      "Inteligência de clientes com ERP",
    ],
  },
  {
    icon: Handshake,
    badge: "Plano Serviços",
    title: "Agências, consultorias e contratos recorrentes",
    description:
      "O mesmo CRM no modo empresa de serviços: carteiras e contratos, projetos com kanban de execução, financeiro e painel de gestão consolidado — na mesma plataforma do atendimento.",
    items: [
      "Contratos e carteira recorrente",
      "Projetos com kanban por cliente",
      "Financeiro e painel do dono",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Assinatura",
    description:
      "Formalização simplificada do contrato digital. Sem burocracia excessiva para agilizar o início.",
  },
  {
    number: "02",
    title: "Briefing & Setup",
    description:
      "Nossa equipe conecta o WhatsApp oficial, o Instagram e o ERP, configura os funis, a IA e as automações conforme seu processo.",
  },
  {
    number: "03",
    title: "GoLive",
    description:
      "Sua operação começa a atender, disparar campanhas e gerenciar vendas na mesma plataforma — com IA desde o primeiro dia.",
    highlight: true,
  },
];

const SimpliCRM = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.simpli.ia.br/solucoes/simpli-crm#service",
    name: "Simplí CRM — o CRM que atende, vende e gerencia",
    serviceType: "CRM com Inteligência Artificial",
    description:
      "CRM completo com WhatsApp oficial da Meta, Instagram e agente de IA no mesmo lugar: central de atendimento omnichannel, campanhas e disparos em massa, grupos de WhatsApp, funil Kanban, dashboards em tempo real e inteligência de clientes integrada ao ERP.",
    url: "https://www.simpli.ia.br/solucoes/simpli-crm",
    provider: {
      "@type": "Organization",
      name: "Simplí",
      url: "https://www.simpli.ia.br",
      logo: "https://www.simpli.ia.br/logonome-branca-cortada.webp",
      telephone: "+55-81-99194-2628",
      email: "contato@simpli.ia.br",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.instagram.com/simpli.inovacao/",
        "https://www.linkedin.com/company/simpli-inovacao-digital/",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planos Simplí CRM",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Simplí CRM — Plano Varejo",
          description:
            "Central de atendimento omnichannel (WhatsApp oficial + Instagram), agente de IA 24/7, campanhas e disparos em massa, grupos de WhatsApp, funil Kanban e inteligência de clientes integrada ao ERP.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Simplí CRM — Plano Serviços",
          description:
            "CRM para agências, consultorias e contratos recorrentes: gestão de carteiras e contratos, projetos com kanban de execução, financeiro e painel de gestão consolidado.",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    serviceOutput:
      "Atendimento, campanhas e gestão de vendas centralizados em uma plataforma com IA, aumentando conversão e produtividade do time comercial",
    additionalType: "https://schema.org/SoftwareApplication",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.simpli.ia.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soluções",
        item: "https://www.simpli.ia.br/#solucoes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Simplí CRM",
        item: "https://www.simpli.ia.br/solucoes/simpli-crm",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Simplí CRM é uma plataforma completa que atende, vende e gerencia: central de atendimento omnichannel com WhatsApp oficial da Meta e Instagram, agente de IA 24/7, campanhas e disparos em massa, funil de vendas Kanban, dashboards em tempo real e inteligência de clientes integrada ao ERP.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM usa a API oficial do WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O Simplí CRM conecta o WhatsApp da empresa direto na infraestrutura oficial da Meta (WhatsApp Cloud API), com templates aprovados e suporte à janela de 24 horas, conforme as políticas da Meta.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM se integra com o Instagram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. As mensagens do Direct do perfil profissional caem na mesma central de atendimento, e é possível automatizar respostas a comentários por palavra-chave e acompanhar métricas de perfil e publicações com dados reais da API da Meta.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o agente de IA do Simplí CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O agente de IA responde clientes 24/7 no WhatsApp, entende texto, áudio, imagem e PDF, e é treinado com a base de conhecimento da sua empresa. Quando não consegue resolver, transfere para o time humano — e o atendente pode ligar ou desligar a IA em qualquer conversa com um clique.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM faz disparos em massa e campanhas de WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Campanhas para milhares de contatos pela API oficial da Meta com templates aprovados, flows visuais de disparo estilo ManyChat, campanhas de datas comemorativas e métricas reais de entrega (enviado, entregue, lido e respondido) por mensagem.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM se integra com ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A sincronização automática com o ERP traz pedidos, produtos e clientes para o CRM: classificação automática de clientes (novo, ativo, VIP, em risco), histórico de compras na tela de atendimento e validação de quantos leads de campanha realmente compraram.",
        },
      },
      {
        "@type": "Question",
        name: "O Simplí CRM atende empresas de serviços?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O plano Serviços é voltado para agências, consultorias e empresas de contrato recorrente: gestão de carteiras e contratos, projetos com kanban de execução, financeiro, despesas de viagem e painel de gestão consolidado.",
        },
      },
    ],
  };

  return (
    <div className="crm-landing bg-[#0C140F] text-white antialiased">
      <SEO
        title="CRM com IA — atende, vende e gerencia no WhatsApp"
        description="O CRM com IA que atende, vende e gerencia: WhatsApp oficial da Meta, Instagram e agente de IA no mesmo lugar. Campanhas em massa, funil Kanban e dashboards."
        keywords="CRM com inteligência artificial, WhatsApp API oficial Meta, atendimento omnichannel, disparo em massa WhatsApp, agente de IA WhatsApp, CRM integrado Instagram, funil de vendas Kanban, campanhas WhatsApp, grupos de WhatsApp vendas, CRM integrado ERP, Simplí CRM, CRM para varejo, CRM para agências"
        canonical="/solucoes/simpli-crm"
        ogTitle="Simplí CRM — o CRM com IA que atende, vende e gerencia"
        ogDescription="WhatsApp oficial, Instagram e IA no mesmo lugar: atendimento, campanhas e gestão de vendas em uma plataforma só."
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <CrmNavbar />

      <main id="crm-conteudo">
        <CrmLandingContent
          pillars={pillars}
          profiles={profiles}
          steps={steps}
          faqs={faqSchema.mainEntity}
        />
      </main>

      <SiteFooter />
    </div>
  );
};

export default SimpliCRM;
