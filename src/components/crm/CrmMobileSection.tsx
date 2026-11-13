import { BellRing, LayoutDashboard, Maximize2, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const features = [
  {
    Icon: LayoutDashboard,
    title: "Os mesmos módulos do computador",
    text: "Acesse o dashboard, responda conversas, mova oportunidades no Kanban e acompanhe campanhas com as permissões do seu perfil.",
  },
  {
    Icon: BellRing,
    title: "Notificações e alertas no celular",
    text: "Ative os avisos que quer receber para novas mensagens, menções, lembretes e follow-ups.",
  },
  {
    Icon: Smartphone,
    title: "Acesso pela tela inicial",
    text: "Instale o Simplí CRM pelo navegador no Android ou no iPhone. No iPhone, use o app instalado para receber notificações.",
  },
];

const dashboard = {
  src: "/crm/dashboard-mobile.png",
  alt: "Dashboard do Simplí CRM no celular, com gráfico de atendimentos por canal, indicadores de atendimento e barra de navegação na parte inferior",
  width: 1179,
  height: 2577,
};

export default function CrmMobileSection() {
  return (
    <section
      id="crm-mobile"
      aria-labelledby="crm-mobile-title"
      className="crm-section border-y border-white/[0.08] bg-[#101e16]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
        <div className="max-w-xl">
          <p className="crm-eyebrow">// SIMPLÍ CRM MOBILE</p>
          <h2 id="crm-mobile-title" className="crm-heading mt-4">
            Sua operação
            <br />
            <span className="text-[#86efac]">também no celular.</span>
          </h2>
          <ul className="mt-8 space-y-5">
            {features.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4 border-t border-white/10 pt-5">
                <Icon className="mt-0.5 shrink-0 text-[#86efac]" size={20} aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative isolate mx-auto flex w-full max-w-sm flex-col items-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(134,239,172,0.17),transparent_70%)]"
          />
          <div className="w-full max-w-[310px] rounded-[2rem] border border-white/20 bg-[#080f0b] p-2 shadow-2xl shadow-black/35">
            <img {...dashboard} loading="lazy" className="block h-auto w-full rounded-[1.45rem]" />
          </div>
          <figcaption className="mt-3 text-center text-xs text-white/65">
            Dashboard do app · dados de demonstração
          </figcaption>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label="Ampliar dashboard mobile"
                className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-xs text-white/80 transition-colors hover:bg-white/10"
              >
                <Maximize2 size={14} aria-hidden="true" />
                Ampliar tela
              </button>
            </DialogTrigger>
            <DialogContent className="crm-capture-dialog max-h-[94dvh] w-[94vw] overflow-y-auto rounded-xl border-white/15 bg-[#0c1710] p-4 text-white sm:max-w-md sm:p-6">
              <DialogTitle className="pr-8">Dashboard mobile · Simplí CRM</DialogTitle>
              <DialogDescription className="sr-only">Captura do aplicativo com dados de demonstração.</DialogDescription>
              <img {...dashboard} className="block h-auto w-full rounded-lg" />
            </DialogContent>
          </Dialog>
        </figure>
      </div>
    </section>
  );
}
