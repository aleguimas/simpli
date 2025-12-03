import { Bot, Laptop, Lightbulb, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "desenvolvimento-web",
    title: "Desenvolvimento Web",
    description:
      "Criamos sites e landing pages modernos e responsivos utilizando as melhores tecnologias, otimizados para SEO e performance.",
    Icon: Laptop,
  },
  {
    slug: "agentes-de-ia",
    title: "Agentes de IA",
    description:
      "Desenvolvemos agentes de Inteligência Artificial personalizados para automatizar processos e aumentar a eficiência do seu negócio.",
    Icon: Bot,
  },
  {
    slug: "trafego-pago",
    title: "Tráfego Pago",
    description:
      "Gerenciamos campanhas em Google Ads, Facebook Ads e LinkedIn Ads, maximizando ROI e atraindo leads qualificados.",
    Icon: Megaphone,
  },
  {
    slug: "consultoria-digital",
    title: "Consultoria Digital",
    description:
      "Assessoramos empresas na transformação digital, desde a estratégia até a implementação de soluções.",
    Icon: Lightbulb,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicos"
      className="bg-[#0B1117] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Nossos Serviços
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Oferecemos soluções completas para transformação digital
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, title, description, Icon }) => (
            <Link
              key={slug}
              to={`/servicos/${slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f241c]/90 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#123026] hover:shadow-xl hover:shadow-black/30"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition group-hover:translate-x-1">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;