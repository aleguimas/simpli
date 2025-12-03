import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CaseItem = {
  company: string;
  title: string;
  subtitle: string;
  category: string;
};

const categories = [
  "Atendimento",
  "Agendamento",
  "Qualificação de Leads",
  "Leitura de Estoque",
  "Suporte e Dúvidas",
  "Disparo de Emails / WhatsApp",
  "Automação de Cobranças",
  "Projetos personalizados",
];

const caseItems: CaseItem[] = [
  // Atendimento
  {
    company: "Atendimento",
    title: "Varejo (lojas físicas e e-commerce)",
    subtitle: "Atendimento 24/7 para dúvidas sobre produtos, trocas e devoluções",
    category: "Atendimento",
  },
  {
    company: "Atendimento",
    title: "Clínicas e consultórios médicos",
    subtitle:
      "Informações sobre especialidades, convênios aceitos e preparos para exames",
    category: "Atendimento",
  },
  {
    company: "Atendimento",
    title: "Escritórios de advocacia",
    subtitle: "Triagem inicial de casos e informações sobre áreas de atuação",
    category: "Atendimento",
  },
  {
    company: "Atendimento",
    title: "Imobiliárias",
    subtitle: "Informações sobre imóveis disponíveis, características e valores",
    category: "Atendimento",
  },
  {
    company: "Atendimento",
    title: "Restaurantes e delivery",
    subtitle: "Cardápio, horários de funcionamento e acompanhamento de pedidos",
    category: "Atendimento",
  },
  {
    company: "Atendimento",
    title: "Hotéis e pousadas",
    subtitle: "Detalhes sobre acomodações, serviços oferecidos e reservas",
    category: "Atendimento",
  },
  // Agendamento
  {
    company: "Agendamento",
    title: "Clínicas e consultórios",
    subtitle: "Agendamento de consultas, exames e retornos",
    category: "Agendamento",
  },
  {
    company: "Agendamento",
    title: "Salões de beleza e barbearias",
    subtitle: "Marcação de horários para cortes e procedimentos estéticos",
    category: "Agendamento",
  },
  {
    company: "Agendamento",
    title: "Escritórios de advocacia",
    subtitle: "Agendamento de reuniões com clientes",
    category: "Agendamento",
  },
  {
    company: "Agendamento",
    title: "Clínicas veterinárias",
    subtitle: "Consultas e procedimentos para pets",
    category: "Agendamento",
  },
  {
    company: "Agendamento",
    title: "Academias e personal trainers",
    subtitle: "Agendamento de aulas e treinos",
    category: "Agendamento",
  },
  {
    company: "Agendamento",
    title: "Oficinas mecânicas",
    subtitle: "Agendamento de manutenções e reparos",
    category: "Agendamento",
  },
  {
    company: "Agendamento",
    title: "Restaurantes",
    subtitle: "Reserva de mesa",
    category: "Agendamento",
  },
  // Qualificação de Leads
  {
    company: "Qualificação de Leads",
    title: "Imobiliárias",
    subtitle: "Identificar interesse real, faixa de preço e localização desejada",
    category: "Qualificação de Leads",
  },
  {
    company: "Qualificação de Leads",
    title: "Escolas e cursos",
    subtitle:
      "Identificar perfil do aluno, curso de interesse e capacidade de investimento",
    category: "Qualificação de Leads",
  },
  {
    company: "Qualificação de Leads",
    title: "Consultorias e serviços B2B",
    subtitle: "Entender porte da empresa e necessidades específicas",
    category: "Qualificação de Leads",
  },
  {
    company: "Qualificação de Leads",
    title: "Escritórios de advocacia",
    subtitle: "Avaliar complexidade do caso e viabilidade",
    category: "Qualificação de Leads",
  },
  {
    company: "Qualificação de Leads",
    title: "Corretoras de seguros",
    subtitle: "Identificar perfil de risco e necessidades de cobertura",
    category: "Qualificação de Leads",
  },
  {
    company: "Qualificação de Leads",
    title: "Concessionárias de veículos",
    subtitle: "Preferências, orçamento e urgência de compra",
    category: "Qualificação de Leads",
  },
  // Leitura de Estoque
  {
    company: "Leitura de Estoque",
    title: "Varejo físico e e-commerce",
    subtitle: "Consulta de disponibilidade em tempo real",
    category: "Leitura de Estoque",
  },
  {
    company: "Leitura de Estoque",
    title: "Farmácias",
    subtitle: "Verificação de medicamentos disponíveis",
    category: "Leitura de Estoque",
  },
  {
    company: "Leitura de Estoque",
    title: "Distribuidoras",
    subtitle: "Consulta de produtos para revendedores",
    category: "Leitura de Estoque",
  },
  {
    company: "Leitura de Estoque",
    title: "Restaurantes",
    subtitle: "Verificação de ingredientes para delivery",
    category: "Leitura de Estoque",
  },
  {
    company: "Leitura de Estoque",
    title: "Lojas de materiais de construção",
    subtitle: "Consulta de disponibilidade de materiais",
    category: "Leitura de Estoque",
  },
  {
    company: "Leitura de Estoque",
    title: "Pet shops",
    subtitle: "Verificação de produtos e rações",
    category: "Leitura de Estoque",
  },
  // Suporte e Dúvidas
  {
    company: "Suporte e Dúvidas",
    title: "E-commerce",
    subtitle: "Dúvidas sobre produtos, prazos de entrega e políticas de troca",
    category: "Suporte e Dúvidas",
  },
  {
    company: "Suporte e Dúvidas",
    title: "SaaS e empresas de tecnologia",
    subtitle: "Suporte técnico inicial e troubleshooting",
    category: "Suporte e Dúvidas",
  },
  {
    company: "Suporte e Dúvidas",
    title: "Bancos e fintechs",
    subtitle: "Dúvidas sobre produtos financeiros e transações",
    category: "Suporte e Dúvidas",
  },
  {
    company: "Suporte e Dúvidas",
    title: "Escolas e universidades",
    subtitle: "Informações sobre cursos, matrículas e documentação",
    category: "Suporte e Dúvidas",
  },
  {
    company: "Suporte e Dúvidas",
    title: "Planos de saúde",
    subtitle: "Dúvidas sobre cobertura e rede credenciada",
    category: "Suporte e Dúvidas",
  },
  {
    company: "Suporte e Dúvidas",
    title: "Telecomunicações",
    subtitle: "Suporte para problemas técnicos e planos disponíveis",
    category: "Suporte e Dúvidas",
  },
  // Disparo de Emails / WhatsApp
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Varejo",
    subtitle: "Campanhas promocionais, avisos de estoque e carrinho abandonado",
    category: "Disparo de Emails / WhatsApp",
  },
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Clínicas",
    subtitle: "Lembretes de consultas e campanhas de prevenção",
    category: "Disparo de Emails / WhatsApp",
  },
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Escolas",
    subtitle: "Comunicados aos pais e lembretes de pagamento",
    category: "Disparo de Emails / WhatsApp",
  },
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Imobiliárias",
    subtitle: "Envio de novos imóveis conforme o perfil do cliente",
    category: "Disparo de Emails / WhatsApp",
  },
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Restaurantes",
    subtitle: "Promoções e cardápios especiais",
    category: "Disparo de Emails / WhatsApp",
  },
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Academias",
    subtitle: "Lembretes de treino e novos horários de aulas",
    category: "Disparo de Emails / WhatsApp",
  },
  {
    company: "Disparo de Emails / WhatsApp",
    title: "Qualquer nicho",
    subtitle: "Newsletters e conteúdo educativo",
    category: "Disparo de Emails / WhatsApp",
  },
  // Automação de Cobranças
  {
    company: "Automação de Cobranças",
    title: "Clínicas e consultórios",
    subtitle: "Cobrança de consultas e procedimentos",
    category: "Automação de Cobranças",
  },
  {
    company: "Automação de Cobranças",
    title: "Escolas e cursos",
    subtitle: "Mensalidades atrasadas",
    category: "Automação de Cobranças",
  },
  {
    company: "Automação de Cobranças",
    title: "Escritórios de advocacia",
    subtitle: "Honorários e parcelas",
    category: "Automação de Cobranças",
  },
  {
    company: "Automação de Cobranças",
    title: "Academias",
    subtitle: "Mensalidades em atraso",
    category: "Automação de Cobranças",
  },
  {
    company: "Automação de Cobranças",
    title: "Condomínios",
    subtitle: "Taxas condominiais",
    category: "Automação de Cobranças",
  },
  {
    company: "Automação de Cobranças",
    title: "Assinaturas e serviços recorrentes",
    subtitle: "Qualquer modelo com pagamentos recorrentes",
    category: "Automação de Cobranças",
  },
  {
    company: "Automação de Cobranças",
    title: "Lojas com crediário próprio",
    subtitle: "Parcelas atrasadas",
    category: "Automação de Cobranças",
  },
  // Projetos personalizados
  {
    company: "Projetos personalizados",
    title: "Projetos sob medida",
    subtitle:
      "Os projetos são planejados de acordo com a demanda do cliente; valores baseados na complexidade.",
    category: "Projetos personalizados",
  },
  {
    company: "Projetos personalizados",
    title: "CRM próprio",
    subtitle:
      "Criação e desenvolvimento de software de CRM customizado para as necessidades da empresa.",
    category: "Projetos personalizados",
  },
  {
    company: "Projetos personalizados",
    title: "App sob medida",
    subtitle: "Desenvolvimento de app específico para seu negócio.",
    category: "Projetos personalizados",
  },
  {
    company: "Projetos personalizados",
    title: "Automações com IA",
    subtitle: "Fluxos de automação com IA personalizados.",
    category: "Projetos personalizados",
  },
  {
    company: "Projetos personalizados",
    title: "Análise de dados com IA",
    subtitle:
      "Algoritmo de predição construído de acordo com os dados do seu negócio.",
    category: "Projetos personalizados",
  },
  {
    company: "Projetos personalizados",
    title: "Página de vendas / Sites",
    subtitle: "Desenvolvemos sites com modernidade e clareza.",
    category: "Projetos personalizados",
  },
];

const NichosSection = () => {
  const [selected, setSelected] = useState(categories[0]);

  const filteredCases = useMemo(
    () => caseItems.filter((item) => item.category === selected),
    [selected],
  );

  return (
    <section
      id="nichos"
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/50">
              Aplicabilidade dos Agentes de IA
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Conheça os nichos de impacto dos Agentes de IA
            </h2>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0B1117] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#0B1117] to-transparent" />
          <div className="cases-scroll flex overflow-x-auto scroll-smooth px-4 py-3 text-sm text-white/80">
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`whitespace-nowrap rounded-xl border px-4 py-2 transition ${
                    selected === cat
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="nichos-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredCases.map((item) => (
            <a
              key={`${item.category}-${item.title}`}
              href="#"
              className="nichos-card relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141A21] to-[#0B1117] p-6 opacity-100 transition duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.16),_transparent_58%)]" />
              </div>
              <Badge className="border border-white/20 bg-white/10 text-white">
                {item.category}
              </Badge>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.subtitle}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:translate-x-1">
                Solicitar orçamento
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .cases-scroll {
          scrollbar-color: rgba(255,255,255,0.18) #0B1117;
          scrollbar-width: thin;
        }
        .cases-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .cases-scroll::-webkit-scrollbar-track {
          background: #0B1117;
        }
        .cases-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.18);
          border-radius: 9999px;
          border: 2px solid #0B1117;
        }
        .nichos-grid:hover .nichos-card {
          opacity: 0.6;
        }
        .nichos-card:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default NichosSection;