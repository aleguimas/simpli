export interface CrmCapture {
  src: string;
  title: string;
  alt: string;
  position?: string;
}
export const crmCaptures: Record<string, CrmCapture> = {
  kanban: {
    src: "/crm/kanban-01.jpg",
    title: "Funil de vendas",
    alt: "Kanban real do Simplí CRM em ambiente de demonstração, com oportunidades nas etapas Novo lead, Primeiro contato, Proposta enviada, Follow-up e Finalizado",
    position: "left top",
  },
  chat: {
    src: "/crm/atendimento.jpg",
    title: "Central de atendimento",
    alt: "Componentes reais de atendimento do Simplí CRM com lista de conversas, histórico de mensagens e nota privada; dados fictícios",
    position: "right center",
  },
  campanhas: {
    src: "/crm/campanhas.jpg",
    title: "Editor de campanhas",
    alt: "Editor real de campanhas do Simplí CRM mostrando um fluxo com envio de template, espera e condição de leitura; dados de demonstração",
    position: "center",
  },
  insights: {
    src: "/crm/insights.jpg",
    title: "Insights da equipe",
    alt: "Aba Insights original do Simplí CRM com perfil de atendimento, métricas, radar de tom de voz e frases recorrentes; dados fictícios",
  },
  historico: {
    src: "/crm/historico-disparos.jpg",
    title: "Histórico de disparos",
    alt: "Histórico original de campanhas do Simplí CRM com disparos, datas, totais e métricas de entrega, leitura, cliques e falhas; dados fictícios",
  },
  resultados: {
    src: "/crm/resultados-campanhas.jpg",
    title: "Resultados de campanhas",
    alt: "Resultados originais por template e flow no Simplí CRM com contatos ativados, conversões, valor gerado e ROAS estimado; dados fictícios",
  },
  eventos: {
    src: "/crm/eventos.jpg",
    title: "Eventos de vendas",
    alt: "Painel original de evento de vendas do Simplí CRM com período, progresso de metas e indicadores de vendas e clientes; dados fictícios",
  },
};
