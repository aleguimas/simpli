/**
 * Catálogo de funcionalidades do Simplí CRM exibido em /solucoes/simpli-crm.
 *
 * Fonte: documentos de marketing "funcionalidades-parte-1.md" e
 * "funcionalidades-parte-2.md" (jul/2026). Cada objeto de `crmFeatureSections`
 * vira uma seção da página; cada item de `features` vira um card.
 *
 * Convenções:
 * - `title` + `titleHighlight`: o highlight é renderizado em verde (#86efac)
 *   ao final do título, seguindo o padrão das outras páginas do site.
 * - `audience`: "varejo" (atendimento/vendas em volume), "servicos" (agências,
 *   consultorias e contratos recorrentes) ou "todos" (plataforma).
 * - Os NOMES das funcionalidades vêm do documento e não devem ser alterados;
 *   as descrições podem ser encurtadas para caber nos cards.
 */
import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  BadgeCheck,
  Ban,
  BarChart2,
  BarChart3,
  BellRing,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CalendarClock,
  CalendarHeart,
  CalendarRange,
  Contact,
  Database,
  DollarSign,
  Eye,
  FileSpreadsheet,
  FileText,
  FlaskConical,
  FolderKanban,
  Gauge,
  HardHat,
  History,
  Inbox,
  Instagram,
  Kanban,
  LayoutDashboard,
  LayoutTemplate,
  Library,
  Link2,
  ListTodo,
  MessageCircle,
  MessageSquareText,
  PackageSearch,
  PenLine,
  Plane,
  Power,
  Recycle,
  RefreshCcw,
  Rocket,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Smile,
  StickyNote,
  Store,
  Tags,
  Target,
  Timer,
  TrendingUp,
  Tv,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

export interface CrmFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CrmFeatureSection {
  /** Usado como âncora (#id) na navegação da página. */
  id: string;
  /** Rótulo curto exibido na navegação por âncoras. */
  navLabel: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  audience: "varejo" | "servicos" | "todos";
  features: CrmFeature[];
}

export const crmFeatureSections: CrmFeatureSection[] = [
  {
    id: "simplichat",
    navLabel: "SimpliChat",
    eyebrow: "Central de Atendimento",
    title: "SimpliChat: todas as conversas em ",
    titleHighlight: "uma tela só",
    subtitle:
      "WhatsApp, Instagram e IA no mesmo painel, em tempo real — cada atendente vê suas conversas; o gestor vê tudo.",
    audience: "varejo",
    features: [
      {
        icon: Inbox,
        title: "Atendimento omnichannel em tempo real",
        description:
          "Todas as conversas de WhatsApp e Instagram em um painel único, com filas por status: aguardando, em atendimento e resolvidas.",
      },
      {
        icon: BadgeCheck,
        title: "WhatsApp com API Oficial da Meta",
        description:
          "Número verificado na WhatsApp Cloud API, sem risco de banimento, com templates aprovados e suporte à janela de 24 horas.",
      },
      {
        icon: Instagram,
        title: "Direct do Instagram integrado",
        description:
          "As mensagens do Direct caem na mesma plataforma: caixa dedicada, histórico, resposta em tempo real e contagem de não lidas.",
      },
      {
        icon: UserCheck,
        title: "Atribuição automática de conversas",
        description:
          "Conversa nova vai para quem respondeu primeiro, com regras finas: gestores e admins nunca “roubam” conversa e o fluxo de resolvida/reaberta é padronizado.",
      },
      {
        icon: Wallet,
        title: "Carteirização de clientes",
        description:
          "Cliente fixo com seu atendente, em modo permanente ou temporário (7 dias). Atendente saiu? A carteira é redistribuída automaticamente.",
      },
      {
        icon: Kanban,
        title: "Funil de vendas dentro do chat",
        description:
          "O atendente move o cliente de etapa sem sair da conversa — etiquetas, atribuição e status sincronizados com o Kanban em tempo real.",
      },
      {
        icon: StickyNote,
        title: "Notas privadas e menções ao time",
        description:
          "Observações internas que o cliente nunca vê, com menção por @ — quem foi mencionado recebe a conversa fixada no topo até dar o visto.",
      },
      {
        icon: Eye,
        title: "Observações do contato sempre à vista",
        description:
          "A observação do contato aparece como alerta ao abrir a conversa e reaparece quando ela troca de mãos — ninguém atende no escuro.",
      },
      {
        icon: Zap,
        title: "Frases rápidas",
        description:
          "O atendente digita um atalho e a resposta completa é inserida — comunicação padronizada e tempo de resposta menor.",
      },
      {
        icon: PenLine,
        title: "Assinatura do atendente configurável",
        description:
          "Escolha se o nome do atendente aparece na mensagem ou fica só no controle interno — uma configuração por empresa, em todos os canais.",
      },
      {
        icon: Ban,
        title: "Bloqueio de contatos",
        description:
          "Spam, concorrente ou abuso? Admins e gestores bloqueiam o contato e as mensagens são descartadas na entrada.",
      },
      {
        icon: Search,
        title: "Busca completa no histórico",
        description:
          "Encontre qualquer conversa por texto, contato ou status — histórico completo preservado, mesmo de meses atrás.",
      },
    ],
  },
  {
    id: "ia-atendimento",
    navLabel: "IA no Atendimento",
    eyebrow: "Inteligência Artificial",
    title: "Um agente de IA que atende seus clientes ",
    titleHighlight: "24/7",
    subtitle:
      "Treinado com o conhecimento da SUA empresa, com passagem para humano no momento certo.",
    audience: "varejo",
    features: [
      {
        icon: Bot,
        title: "Agente de IA no WhatsApp",
        description:
          "Entende texto, áudio, imagem e PDF, responde com naturalidade e trabalha 24h — ou só dentro/fora do horário comercial, por caixa de entrada.",
      },
      {
        icon: BookOpen,
        title: "Treinado com a base de conhecimento da sua empresa",
        description:
          "A IA responde com base no FAQ e em PDFs transcritos automaticamente. Sem alucinação: ela responde o que a sua empresa definiu.",
      },
      {
        icon: PackageSearch,
        title: "Busca inteligente de produtos (RAG)",
        description:
          "O cliente descreve o que precisa em linguagem natural e a IA localiza os itens no seu catálogo, com preços e unidades reais do ERP.",
      },
      {
        icon: ArrowRightLeft,
        title: "Transferência para humano no momento certo",
        description:
          "Quando não consegue resolver, a IA transfere a conversa com aviso — e o robô não “toma de volta” a conversa após o handoff.",
      },
      {
        icon: Power,
        title: "Liga/desliga com um clique",
        description:
          "Botão no próprio chat, desativação automática quando o humano responde e kill-switch geral para o gestor pausar toda a IA da empresa.",
      },
      {
        icon: FlaskConical,
        title: "Ambiente de teste da IA (BOT Piloto)",
        description:
          "Converse você mesmo com o robô num chat de teste — texto, áudio e imagem — exercitando o fluxo real antes de colocar no ar.",
      },
      {
        icon: RefreshCcw,
        title: "Follow-up automático com IA",
        description:
          "A IA entende o contexto da conversa e gera follow-ups com a mensagem pronta — e pode dispará-los sozinha no horário comercial.",
      },
    ],
  },
  {
    id: "campanhas",
    navLabel: "Campanhas",
    eyebrow: "Campanhas e Disparos em Massa",
    title: "Do disparo único ao fluxo automatizado, com ",
    titleHighlight: "métricas reais",
    subtitle:
      "Campanhas de WhatsApp pela API oficial da Meta — com flows estilo ManyChat e resultado medido por mensagem.",
    audience: "varejo",
    features: [
      {
        icon: Send,
        title: "Disparos em massa pelo WhatsApp oficial",
        description:
          "Campanhas para milhares de contatos com templates aprovados, sem risco para o número. Agende, acompanhe e veja o resultado em tempo real.",
      },
      {
        icon: LayoutTemplate,
        title: "Templates oficiais + modo Mensagens",
        description:
          "Templates aprovados pela Meta para alcançar qualquer contato, ou texto livre para quem está com a janela de 24h aberta — revalidada no envio.",
      },
      {
        icon: Workflow,
        title: "Flows de campanha (estilo ManyChat)",
        description:
          "Fluxos visuais de arrastar-e-soltar: sequências, esperas, condições e gatilhos executados sozinhos, com relatório de cada disparo.",
      },
      {
        icon: Recycle,
        title: "Reaproveite bases já disparadas",
        description:
          "Use contatos de campanhas anteriores como público, filtrando por status (entregue, lido, respondido...) — e exporte em CSV com um clique.",
      },
      {
        icon: BarChart2,
        title: "Métricas de entrega reais",
        description:
          "Enviado, entregue, lido e respondido — métrica por mensagem, direto da Meta, para medir o retorno real de cada campanha.",
      },
      {
        icon: CalendarHeart,
        title: "Campanhas de datas comemorativas",
        description:
          "Calendário de feriados e datas do varejo integrado: programe uma vez e a plataforma dispara na data certa.",
      },
      {
        icon: FileSpreadsheet,
        title: "Importação de bases e validação de compra",
        description:
          "Suba planilhas de leads, higienize e etiquete automaticamente — e cruze com o ERP para saber quantos leads impactados compraram de verdade.",
      },
    ],
  },
  {
    id: "grupos",
    navLabel: "Grupos de WhatsApp",
    eyebrow: "Grupos como canal de vendas",
    title: "Comunidades de WhatsApp em escala, com ",
    titleHighlight: "IA de olho no grupo",
    subtitle:
      "Crie, povoe e modere grupos em lote — e transforme cada membro em contato do CRM.",
    audience: "varejo",
    features: [
      {
        icon: Users,
        title: "Criação e importação em massa",
        description:
          "Dezenas de grupos padronizados de uma vez, ou importação dos que já existem — nome, foto e configurações aplicados em lote.",
      },
      {
        icon: Link2,
        title: "Link de entrada inteligente com overflow",
        description:
          "Um único link de convite: quando um grupo enche, os novos entrantes vão automaticamente para o próximo. Você divulga um link só.",
      },
      {
        icon: CalendarClock,
        title: "Disparos agendados para grupos",
        description:
          "Lançamentos, ofertas e avisos programados para todos os grupos (ou uma seleção), no horário marcado.",
      },
      {
        icon: UserPlus,
        title: "Captura de membros para o CRM",
        description:
          "Quem entra no grupo vira contato no CRM automaticamente — pronto para campanhas, funil e atendimento individual.",
      },
      {
        icon: ShieldCheck,
        title: "Moderação por IA",
        description:
          "A IA monitora as mensagens e sinaliza (ou age sobre) conteúdo indesejado — comunidade saudável sem moderador humano o dia todo.",
      },
      {
        icon: Timer,
        title: "Mensagens temporárias como padrão",
        description:
          "Apagamento automático de mensagens como configuração de grupo — aplicada e mantida em todos os grupos da empresa.",
      },
    ],
  },
  {
    id: "instagram",
    navLabel: "Instagram",
    eyebrow: "Instagram além do Direct",
    title: "Comentários que viram conversas e métricas que viram ",
    titleHighlight: "decisão",
    subtitle:
      "Automação de engajamento e dados reais da API da Meta, dentro do CRM.",
    audience: "varejo",
    features: [
      {
        icon: MessageCircle,
        title: "Automação de comentários",
        description:
          "Gatilhos por publicação: comentou a palavra-chave, recebe resposta automática — no comentário ou no Direct. Engajamento vira conversa de venda.",
      },
      {
        icon: TrendingUp,
        title: "Métricas de perfil e publicações",
        description:
          "Desempenho do perfil profissional e de cada post com dados reais da API da Meta — sem depender de print de Insights.",
      },
    ],
  },
  {
    id: "automacoes",
    navLabel: "Automações",
    eyebrow: "Automações de Atendimento",
    title: "O operacional repetitivo, resolvido por ",
    titleHighlight: "regras",
    subtitle:
      "Condições e ações que rodam sozinhas a cada evento da conversa — configuradas pelo gestor, sem ninguém técnico.",
    audience: "varejo",
    features: [
      {
        icon: Settings2,
        title: "Regras de automação visuais",
        description:
          "Condições e ações combináveis (etiquetas, atribuição, mensagens) gerenciadas direto no CRM, executadas a cada evento da conversa.",
      },
      {
        icon: MessageSquareText,
        title: "Saudação, despedida e pesquisa",
        description:
          "Mensagem automática na atribuição, despedida na resolução e disparos de pesquisa — com proteção anti-duplicata.",
      },
      {
        icon: Library,
        title: "Templates de automação",
        description:
          "Biblioteca de mensagens automáticas da empresa, organizada e editável pelo gestor.",
      },
    ],
  },
  {
    id: "gestao",
    navLabel: "Gestão e Indicadores",
    eyebrow: "Gestão e Indicadores",
    title: "O gestor enxerga tudo, em ",
    titleHighlight: "tempo real",
    subtitle:
      "No computador, no celular e na TV da loja — indicadores vivos da operação inteira.",
    audience: "varejo",
    features: [
      {
        icon: LayoutDashboard,
        title: "Dashboard de atendimentos",
        description:
          "Atendimentos por canal e atendente, tempos de resposta, filas — com a linha de novos leads por canal, dia a dia.",
      },
      {
        icon: BarChart3,
        title: "Relatórios de agentes, times e canais",
        description:
          "Produtividade por atendente, desempenho por time e canal, volumes e tempos — prontos para a reunião de resultados.",
      },
      {
        icon: Tv,
        title: "Gestão a Vista — painel de TV",
        description:
          "A operação na TV da loja: filas ordenadas por tempo sem resposta, atendentes online e KPIs do dia, atualizando sozinho com acesso pareado.",
      },
      {
        icon: Smile,
        title: "Análise de Sentimentos com IA",
        description:
          "A IA classifica o sentimento de leads e da equipe: descubra clientes insatisfeitos antes de perder a venda.",
      },
      {
        icon: Target,
        title: "Metas com acompanhamento visual",
        description:
          "Metas financeiras, de prospecção e pessoais com barra de progresso — cada um sabe onde está e quanto falta.",
      },
    ],
  },
  {
    id: "crm-funil",
    navLabel: "CRM e Funil",
    eyebrow: "CRM e Funil de Vendas",
    title: "Do primeiro contato ao pós-venda, cada lead no ",
    titleHighlight: "lugar certo",
    subtitle:
      "Funis visuais integrados ao atendimento: a conversa vira card, e o card carrega o histórico.",
    audience: "varejo",
    features: [
      {
        icon: Kanban,
        title: "Kanban de vendas",
        description:
          "Funis de arrastar-e-soltar integrados ao chat: a conversa do WhatsApp vira card e mover de etapa é um gesto. Vários funis por empresa.",
      },
      {
        icon: Contact,
        title: "Cadastro completo de contatos",
        description:
          "Clientes, fornecedores e transportadoras num cadastro único, com etiquetas e histórico — alimentado automaticamente pelos canais.",
      },
      {
        icon: ListTodo,
        title: "Tarefas com prioridades e rotinas",
        description:
          "Prioridades, rotinas recorrentes e integração com a IA de follow-up: a tarefa já chega com a mensagem pronta para aprovar e enviar.",
      },
      {
        icon: BellRing,
        title: "Lembretes com notificação diária",
        description:
          "Lembretes pessoais ou vinculados a um card do funil, com popup diário — o vendedor não esquece o retorno prometido.",
      },
      {
        icon: Building2,
        title: "Empresas e contatos vinculados",
        description:
          "Empresas clientes com seus contatos (e a função de cada um) e contratos vinculados — a visão B2B organizada.",
      },
    ],
  },
  {
    id: "inteligencia-clientes",
    navLabel: "Inteligência de Clientes",
    eyebrow: "Inteligência de Clientes",
    title: "Seu ERP vira inteligência de ",
    titleHighlight: "relacionamento",
    subtitle:
      "Classificação automática e a vida inteira do cliente numa tela — direto dos dados reais de faturamento.",
    audience: "varejo",
    features: [
      {
        icon: Tags,
        title: "Classificação automática de clientes",
        description:
          "Novo, ativo, recorrente, VIP, em risco ou inativo — com critérios configuráveis. Sua régua de relacionamento passa a rodar sozinha.",
      },
      {
        icon: History,
        title: "Linha do tempo do cliente",
        description:
          "Cadastro, primeira compra, mudanças de classificação e eventos numa timeline — o vendedor entende o cliente em 10 segundos.",
      },
      {
        icon: ShoppingCart,
        title: "Histórico de compras e pesquisa de pedidos",
        description:
          "Pedidos e histórico de compras direto no CRM, sem abrir o ERP — na mesma tela onde o cliente é atendido.",
      },
      {
        icon: Rocket,
        title: "Explosão de Vendas",
        description:
          "Visão executiva de pedidos pendentes e faturados, metas por filial, follow-up e ranking — o painel de guerra do time comercial.",
      },
      {
        icon: CalendarRange,
        title: "Eventos de Vendas",
        description:
          "Feirões e campanhas com metas: vendas reais do ERP em tempo real, ranking de vendedores, produtos mais vendidos e tag de comprador para remarketing.",
      },
      {
        icon: HardHat,
        title: "Ciclo de Vida da Obra",
        description:
          "Exclusivo para material de construção: a plataforma detecta a fase da obra pelos produtos comprados e mostra a janela ideal para ofertar a próxima etapa.",
      },
      {
        icon: Store,
        title: "Catálogo digital",
        description:
          "Catálogo de produtos em página web com link compartilhável — pronto para mandar no WhatsApp.",
      },
      {
        icon: FileText,
        title: "Orçamentos com follow-up",
        description:
          "Orçamento parado gera follow-up automático para o vendedor não deixar dinheiro na mesa.",
      },
    ],
  },
  {
    id: "plano-servicos",
    navLabel: "Plano Serviços",
    eyebrow: "Plano Serviços",
    title: "O mesmo CRM, no modo ",
    titleHighlight: "empresa de serviços",
    subtitle:
      "Para agências, consultorias e contratos recorrentes: contratos, projetos e financeiro na mesma plataforma do atendimento.",
    audience: "servicos",
    features: [
      {
        icon: Briefcase,
        title: "Gestão de Clientes (carteiras e contratos)",
        description:
          "Carteira de clientes com contratos, valores mensais, status e data da próxima call — a saúde da base recorrente numa tela.",
      },
      {
        icon: FolderKanban,
        title: "Projetos com kanban de execução",
        description:
          "Pastas de projeto por empresa cliente, cada uma com seu kanban — o time sabe o que está em andamento em cada conta.",
      },
      {
        icon: DollarSign,
        title: "Financeiro",
        description:
          "Receita de contratos, custos operacionais e lucro líquido num dashboard — sem planilha paralela.",
      },
      {
        icon: Gauge,
        title: "Painel de Gestão consolidado",
        description:
          "A visão do dono: contatos, empresas, contratos, faturamento, custos e metas num único painel executivo.",
      },
      {
        icon: Plane,
        title: "Despesas de Viagem",
        description:
          "Prestação de contas com foto do comprovante, reembolso e relatório em PDF. Cada colaborador vê as suas; o gestor vê todas.",
      },
      {
        icon: Target,
        title: "Metas da equipe",
        description:
          "Metas financeiras, de prospecção e pessoais com progresso visual — também no plano Serviços.",
      },
    ],
  },
  {
    id: "plataforma",
    navLabel: "Plataforma",
    eyebrow: "Plataforma",
    title: "Feito para o dia a dia ",
    titleHighlight: "real",
    subtitle: "No balcão, na rua e na sala do gestor.",
    audience: "todos",
    features: [
      {
        icon: Smartphone,
        title: "Aplicativo no celular",
        description:
          "Instale o Simplí no celular como aplicativo e receba notificações de novas mensagens — o vendedor não perde nenhum atendimento.",
      },
      {
        icon: Database,
        title: "Integração com ERP",
        description:
          "Sincronização automática de pedidos, produtos e clientes: o CRM sempre reflete a realidade do faturamento, sem digitação dupla.",
      },
    ],
  },
];
