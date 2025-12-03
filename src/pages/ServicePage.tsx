import { Link, useParams } from "react-router-dom";
import { Bot, Laptop, Lightbulb, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";

const services = {
  "desenvolvimento-web": {
    title: "Desenvolvimento Web",
    description:
      "Criamos sites institucionais, landing pages e aplicações completas com foco em SEO, performance e experiência do usuário.",
    Icon: Laptop,
  },
  "agentes-de-ia": {
    title: "Agentes de IA",
    description:
      "Automatize fluxos de trabalho com agentes de IA treinados para entender processos, responder clientes e executar tarefas.",
    Icon: Bot,
  },
  "trafego-pago": {
    title: "Tráfego Pago",
    description:
      "Estratégia, gestão e otimização de campanhas em Google Ads, Facebook Ads e LinkedIn Ads para maximizar ROI.",
    Icon: Megaphone,
  },
  "consultoria-digital": {
    title: "Consultoria Digital",
    description:
      "Acompanhamos sua transformação digital do planejamento à execução, integrando tecnologia e processos.",
    Icon: Lightbulb,
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: keyof typeof services }>();
  const service = slug ? services[slug] : undefined;

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col bg-[#0C140F] px-6 text-white">
        <div className="flex flex-1 items-center justify-center">
          <div className="max-w-xl text-center">
            <p className="text-2xl font-semibold">Serviço não encontrado</p>
            <p className="mt-3 text-white/70">
              O serviço que você tentou acessar não existe ou foi movido.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/">
                <Button className="bg-white text-black hover:bg-white/90">
                  Voltar para o início
                </Button>
              </Link>
              <Link to="/#servicos">
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Ver serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const Icon = service.Icon;

  return (
    <div className="flex min-h-screen flex-col bg-[#0C140F] px-6 py-16 text-white md:px-10">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8">
        <Link
          to="/#servicos"
          className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
        >
          ← Voltar para serviços
        </Link>
        <div className="rounded-2xl border border-white/10 bg-[#0F1D15]/90 p-8 shadow-xl shadow-black/30">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10">
              <Icon size={26} className="text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Serviço
              </p>
              <h1 className="text-3xl font-semibold text-white">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            {service.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-11 rounded-xl bg-white px-5 text-black hover:bg-white/90" asChild>
              <a href="https://wa.link/cpk8xf" target="_blank" rel="noreferrer">
                Fale conosco
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Agendar conversa
            </Button>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default ServicePage;