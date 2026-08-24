import {
  Boxes,
  BrainCircuit,
  Building2,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Catálogo da Simplí AI Academy.
 *
 * Fonte única de verdade: o brief "Simplí AI Academy — Brief de produtos".
 * Nada aqui deve ser inventado — preço, duração, formato e entregável saem
 * do brief. O que o brief marca como pendente (data da primeira turma, link
 * de checkout, política de reembolso, parcelamento) NÃO aparece na página:
 * o CTA leva para o WhatsApp em vez de exibir um dado que ainda não existe.
 */

/** WhatsApp comercial da Academy: consultoria 1v1, in-company e mentoria. */
export const ACADEMY_WHATSAPP = "https://wa.link/jwsthm";

/** Inscrição da turma aberta do Treinamento Claude em Grupo. */
export const ACADEMY_TURMA_CHECKOUT =
  "https://crm.simpli.ia.br/g/lancamento-simpli-ai-aca-1ltn87";

export type AcademyProduct = {
  id: string;
  icon: LucideIcon;
  name: string;
  /** Nome curto, para o teaser da home. */
  shortName: string;
  /** Frase curta que resume a promessa. Vai abaixo do nome. */
  promise: string;
  price: string;
  /** Contexto do preço. Ex.: política da primeira turma. */
  priceNote?: string;
  /** Marca o produto de entrada — recebe destaque verde. */
  featured?: boolean;
  facts: { label: string; value: string }[];
  /** "O que é" — dois a três períodos, voz direta. */
  what: string;
  /** Título da lista de entregáveis. */
  includesTitle: string;
  includes: { title: string; detail: string }[];
  /** Para quem é. */
  who: string;
  /** Argumento de venda central. */
  argument: string;
  /** Objeção esperada + resposta. Nem todo produto tem. */
  objection?: { question: string; answer: string };
  cta: { label: string; href: string; note?: string };
};

export const academyProducts: AcademyProduct[] = [
  {
    id: "configuracao",
    icon: Boxes,
    name: "Consultoria de Configuração de Ambiente",
    shortName: "Configuração de Ambiente",
    promise:
      "Duas horas de trabalho conjunto. Você termina com o Claude montado em cima do seu negócio.",
    price: "R$ 500",
    facts: [
      { label: "Duração", value: "2 horas" },
      { label: "Formato", value: "Individual, ao vivo, remoto" },
      { label: "Quem conduz", value: "Um consultor Simplí" },
      { label: "Entregável", value: "Ambiente Claude configurado e funcionando" },
    ],
    what: "Uma sessão de trabalho, não uma aula. O consultor entra junto e configura o ambiente Claude do zero, adaptado ao seu negócio. Você sai da sessão com uma ferramenta montada — não com anotações sobre como montar depois.",
    includesTitle: "O que é configurado durante as 2 horas",
    includes: [
      {
        title: "Projeto no Claude",
        detail:
          "Espaço de trabalho dedicado ao seu negócio, com instruções permanentes que fazem o Claude entender o contexto da empresa sem precisar ser lembrado a cada conversa.",
      },
      {
        title: "Skills customizadas",
        detail:
          "Rotinas reutilizáveis criadas sob medida para as tarefas recorrentes: gerar proposta no padrão da casa, responder atendimento no tom da marca, estruturar o relatório mensal. Escritas uma vez, usadas indefinidamente.",
      },
      {
        title: "Conexões MCP",
        detail:
          "Integração do Claude com as ferramentas que a empresa já usa — Google Drive, Gmail, Google Calendar, entre outras — para que ele acesse documentos e dados reais em vez de trabalhar no vácuo.",
      },
      {
        title: "Biblioteca de prompts",
        detail:
          "Conjunto de comandos prontos e testados para as demandas mais frequentes, entregue em documento consultável.",
      },
      {
        title: "Persona e tom de voz",
        detail:
          "Como o Claude deve escrever em nome da empresa: vocabulário, nível de formalidade, o que evitar, referências de estilo.",
      },
    ],
    who: "Quem já usa Claude ou ChatGPT de forma solta e percebe que repete as mesmas instruções toda vez, não confia no resultado, ou não consegue extrair nada além de texto genérico.",
    argument:
      "A diferença entre usar IA e ter IA configurada é a diferença entre pedir favor e ter funcionário. Em duas horas, o ambiente sai montado.",
    objection: {
      question: "Eu não consigo fazer isso sozinho vendo um tutorial?",
      answer:
        "Consegue, com tempo. A questão é que configuração de ambiente é um trabalho de decisão, não de execução: o que vira skill, o que vira instrução de projeto, o que conectar. Errar essas decisões gera um ambiente que atrapalha mais do que ajuda. As duas horas compram as decisões certas, não os cliques.",
    },
    cta: { label: "Agendar a configuração", href: ACADEMY_WHATSAPP },
  },
  {
    id: "turma",
    icon: Users,
    name: "Treinamento Claude em Grupo",
    shortName: "Treinamento em Grupo",
    promise:
      "Quatro horas com método, turma de dez. Cada participante aplica no próprio contexto durante a aula.",
    price: "R$ 297",
    priceNote: "valor exclusivo da primeira turma · R$ 497 nas turmas seguintes",
    featured: true,
    facts: [
      { label: "Duração", value: "4 horas" },
      { label: "Formato", value: "Turma de até 10 pessoas, ao vivo" },
      { label: "Vagas", value: "10" },
    ],
    what: "Treinamento prático de uso do Claude aplicado ao trabalho. Turma pequena, com espaço reservado para cada participante aplicar no próprio contexto durante a aula.",
    includesTitle: "O que é ensinado",
    includes: [
      {
        title: "Fundamentos aplicados",
        detail:
          "O que o Claude faz melhor que outras ferramentas e onde não usar. Comparação honesta com o ChatGPT, sem torcida.",
      },
      {
        title: "Prompt que funciona",
        detail:
          "Estrutura de comando que produz resultado consistente, e os erros que fazem a IA entregar texto genérico.",
      },
      {
        title: "Projetos e contexto permanente",
        detail: "Como parar de repetir a mesma explicação toda vez.",
      },
      {
        title: "Casos de uso por área",
        detail:
          "Comercial, atendimento, financeiro, operações. Cada participante trabalha o próprio cenário.",
      },
      {
        title: "Ferramentas complementares",
        detail: "O que vale a pena somar ao Claude no dia a dia.",
      },
      {
        title: "Prática guiada",
        detail: "Tempo reservado para aplicar ao vivo, com acompanhamento.",
      },
    ],
    who: "Quem quer sair do improviso e ter um método. Serve tanto para quem nunca usou quanto para quem usa há meses sem consistência.",
    argument:
      "Quatro horas com método valem mais que seis meses tentando por conta própria. E a turma de dez garante que ninguém fica para trás.",
    objection: {
      question: "Vale a pena se eu já uso ChatGPT?",
      answer:
        "Sim, e provavelmente mais. Quem já usa costuma ter vícios que limitam o resultado — prompts longos demais, contexto perdido, falta de estrutura. O treinamento corrige isso mais rápido do que ensina do zero.",
    },
    cta: {
      label: "Garantir vaga na primeira turma",
      href: ACADEMY_TURMA_CHECKOUT,
      note: "Inscrição pela página da turma.",
    },
  },
  {
    id: "in-company",
    icon: Building2,
    name: "Treinamento In-Company",
    shortName: "Treinamento In-Company",
    promise:
      "Turma fechada, montada depois de entender o que a sua equipe realmente faz.",
    price: "Sob consulta",
    facts: [
      { label: "Duração", value: "A definir conforme escopo" },
      { label: "Formato", value: "Turma fechada, presencial ou remoto" },
      { label: "Público", value: "Equipes de uma mesma empresa" },
    ],
    what: "Treinamento desenhado sob medida para uma equipe específica, construído a partir dos processos reais daquela empresa. Não é o treinamento em grupo com a logo trocada — o conteúdo é montado depois de entender o que a equipe faz.",
    includesTitle: "Como funciona",
    includes: [
      {
        title: "Conversa de escopo",
        detail:
          "Entendimento do setor, do tamanho da equipe, das tarefas que consomem mais tempo e do nível atual de familiaridade com IA.",
      },
      {
        title: "Desenho do programa",
        detail:
          "Definição de carga horária, formato e casos de uso específicos.",
      },
      {
        title: "Proposta formal",
        detail: "Com preço, cronograma e entregáveis.",
      },
      {
        title: "Execução",
        detail: "Presencial ou remoto, conforme a necessidade.",
      },
    ],
    who: "Empresas com equipe a partir de 8 pessoas que querem elevar o time inteiro ao mesmo tempo, com exemplos construídos sobre os próprios processos.",
    argument:
      "Treinamento genérico ensina a ferramenta. Treinamento in-company ensina a ferramenta dentro do processo que a equipe já executa — e por isso é aplicado no dia seguinte.",
    cta: {
      label: "Falar sobre a minha equipe",
      href: ACADEMY_WHATSAPP,
      note: "Mande nome, empresa, tamanho da equipe e o que motivou o interesse.",
    },
  },
  {
    id: "mentoria",
    icon: BrainCircuit,
    name: "Mentoria Individual de Diagnóstico e Inovação",
    shortName: "Mentoria de Diagnóstico",
    promise:
      "Treinamento, diagnóstico de processo e plataforma de agentes no mesmo trabalho.",
    price: "R$ 2.997",
    priceNote: "inclui 2 meses de Agentic Office sem custo",
    facts: [
      { label: "Duração", value: "8 horas" },
      { label: "Formato", value: "Individual, ao vivo" },
      { label: "Incluso", value: "2 meses de Agentic Office sem custo" },
    ],
    what: "O produto mais profundo da Academy. Combina três coisas normalmente vendidas separadamente: treinamento, diagnóstico de processo e plataforma de agentes de IA. Não é aula — é um trabalho de consultoria com entregáveis.",
    includesTitle: "O que está incluso",
    includes: [
      {
        title: "Treinamento aplicado ao negócio",
        detail:
          "Uso de Claude e ChatGPT direcionado às tarefas específicas da sua empresa, não a exemplos genéricos.",
      },
      {
        title: "Diagnóstico completo de processo",
        detail:
          "Mapeamento da operação com a matriz de processos da Simplí: onde o tempo é consumido em tarefas repetitivas, quantas trocas de mão cada processo tem e onde trava, o tempo real de execução contra o tempo total decorrido, e quais etapas são candidatas a automação — e em que ordem.",
      },
      {
        title: "Relatório de diagnóstico",
        detail:
          "Documento com os indicadores calculados e a leitura do que fazer com eles. Um entregável tangível, que fica com a empresa.",
      },
      {
        title: "Recomendação de plano",
        detail:
          "A partir do diagnóstico, o sistema indica qual configuração do Agentic Office atende ao volume e à complexidade daquela operação — com justificativa, não por chute.",
      },
      {
        title: "Agentic Office configurado",
        detail:
          "A plataforma de agentes de IA da Simplí entregue com os agentes já montados para os processos identificados. Você não recebe uma ferramenta vazia para configurar sozinho.",
      },
      {
        title: "2 meses de uso sem custo",
        detail:
          "Contados a partir da ativação, não da assinatura do contrato. Tempo real de uso antes de decidir se continua.",
      },
      {
        title: "Acompanhamento",
        detail:
          "Check-ins durante o período gratuito, para garantir que a plataforma está sendo usada e ajustada.",
      },
    ],
    who: "Donos de empresa com operação estruturada que já perceberam que o gargalo não é falta de ferramenta — é processo. Perfil típico: equipe de 5 a 50 pessoas, processos que existem mas não estão documentados, e alguém no comando disposto a mudar como as coisas são feitas.",
    argument:
      "Curso ensina. Consultoria diagnostica. Software executa. A mentoria entrega os três — e por isso é o único produto que sai com a operação já mudando, não com um plano de mudar.",
    objection: {
      question: "R$ 2.997 é caro para um treinamento.",
      answer:
        "É caro para um treinamento e barato para uma consultoria de processo com software incluso. A comparação correta não é com um curso — é com o custo de manter a operação como está por mais um ano.",
    },
    cta: { label: "Conversar sobre a mentoria", href: ACADEMY_WHATSAPP },
  },
];

/** A escada: em que estágio o visitante está e para onde ele deve ir. */
export const academyLadder = [
  {
    stage: "Quero aprender a usar direito",
    product: "Treinamento em Grupo",
    price: "R$ 297",
    href: "#turma",
  },
  {
    stage: "Já sei usar, quero meu ambiente montado",
    product: "Consultoria de Configuração",
    price: "R$ 500",
    href: "#configuracao",
  },
  {
    stage: "Quero minha equipe inteira no mesmo nível",
    product: "Treinamento In-Company",
    price: "Sob consulta",
    href: "#in-company",
  },
  {
    stage: "Quero mudar como minha empresa opera",
    product: "Mentoria de Diagnóstico",
    price: "R$ 2.997",
    href: "#mentoria",
  },
];

/** Quem conduz os treinamentos. Bios alinhadas com a seção de equipe do site. */
export const academyInstructors = [
  {
    name: "Alexandre Guimarães",
    role: "Transformação digital e diagnóstico de processo",
    bio: "Vinte anos de gestão corporativa antes de trabalhar com IA aplicada. Conduz a leitura de processo: onde a operação trava, o que é candidato a automação e em que ordem.",
    image: "/guimas.webp",
  },
  {
    name: "Caio Souza",
    role: "Arquitetura de automação e ambientes de IA",
    bio: "Desenvolvimento e arquitetura de automação com IA. Conduz a parte de configuração: projetos, skills, conexões MCP e os agentes que executam o processo depois de mapeado.",
    image: "/caio-academy.webp",
  },
];
