import { ShieldCheck, KeyRound, BarChart3, Link2 } from "lucide-react";

const items = [
  {
    title: "SOC 2 Type II",
    description: "Segurança e compliance para dados sensíveis.",
    Icon: ShieldCheck,
  },
  {
    title: "Controle de Acesso",
    description: "Permissões granulares para times e parceiros.",
    Icon: KeyRound,
  },
  {
    title: "Relatórios",
    description: "Métricas em tempo real sobre performance dos agentes.",
    Icon: BarChart3,
  },
  {
    title: "Integração Perfeita",
    description: "Conecte APIs, bases internas e ferramentas do time.",
    Icon: Link2,
  },
];

const EnterpriseSection = () => {
  return (
    <section
      id="carreiras"
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">
          Feito para Empresas
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
          Tecnologias de ponta para automação perfeita
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-4">
          {items.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-white/65">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;