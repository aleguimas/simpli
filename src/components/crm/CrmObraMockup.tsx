import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  ClipboardList,
  Clock,
  FileDown,
  HardHat,
  HelpCircle,
  Layers,
  Package,
  RefreshCw,
  Search,
  Store,
  TrendingUp,
  User,
  Users,
  Wrench,
} from "lucide-react";

/**
 * Recriação da tela "Ciclo da Obra" do Simplí CRM com dados fictícios.
 * Mantém a estrutura real do módulo (status, abas, filtros, lista e funil)
 * sem expor clientes, vendedores ou números de lojas reais.
 */
const statusCards = [
  { label: "Em obra", value: "1.284", Icon: HardHat, tone: "text-slate-900", bg: "bg-slate-200", active: true },
  { label: "Confirmada", value: "612", Icon: BadgeCheck, tone: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Provável", value: "672", Icon: TrendingUp, tone: "text-sky-600", bg: "bg-sky-50" },
  { label: "Suspeita", value: "3.940", Icon: HelpCircle, tone: "text-amber-600", bg: "bg-amber-50" },
  { label: "Manutenção", value: "18.305", Icon: Wrench, tone: "text-slate-500", bg: "bg-slate-100" },
  { label: "Obra parada", value: "187", Icon: AlertTriangle, tone: "text-red-600", bg: "bg-red-50" },
];

const rows = [
  {
    name: "Mariana Costa Lima",
    code: "#2041",
    phase: "Instalações",
    window: "No prazo",
    next: "12/01",
    seller: "Rafael S.",
  },
  {
    name: "Construtora Horizonte",
    code: "#0877",
    phase: "Revestimentos",
    window: "Abrindo",
    next: "28/12",
    seller: "Camila R.",
  },
  {
    name: "João Pedro Almeida",
    code: "#3312",
    phase: "Cobertura e Impermeabilização",
    window: "No prazo",
    next: "05/01",
    seller: "Rafael S.",
  },
  {
    name: "Fernanda Rocha",
    code: "#1590",
    phase: "Acabamento",
    window: "Atrasada",
    next: "—",
    seller: "Bruno M.",
  },
];

const funnel = [
  { label: "Estrutura e Vedação", value: 132 },
  { label: "Cobertura e Impermeabilização", value: 88 },
  { label: "Instalações", value: 297 },
  { label: "Revestimentos", value: 3810 },
  { label: "Acabamento", value: 421 },
  { label: "Pintura e Decoração", value: 336 },
];
const funnelMax = Math.max(...funnel.map((f) => f.value));

const windowStyle: Record<string, string> = {
  "No prazo": "bg-slate-100 text-slate-600",
  Abrindo: "bg-emerald-50 text-emerald-700",
  Atrasada: "bg-red-50 text-red-600",
};

export default function CrmObraMockup() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/15 bg-[#101c14] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
        <span className="flex items-center gap-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <i className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </span>
          <span className="text-[11px] text-white/60">Ciclo da Obra</span>
        </span>
        <span className="font-mono text-[10px] text-white/40">dados fictícios</span>
      </div>

      <div
        className="bg-[#f7f8f7] p-4 text-slate-800 sm:p-6"
        role="img"
        aria-label="Tela do módulo Ciclo da Obra do Simplí CRM com dados fictícios: status das obras, lista de clientes com fase atual, janela e próxima transição, e funil de obra por fase"
      >
        {/* Cabeçalho */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <p className="text-[10px] text-slate-500">Inteligência de jornada de obra</p>
            <p className="mt-0.5 text-lg font-semibold text-slate-900 sm:text-xl">Ciclo da Obra</p>
            <p className="mt-1 max-w-md text-[11px] leading-relaxed text-slate-500">
              Detecta em que fase da obra cada cliente está pelos produtos que
              compra, para antecipar o retorno e recuperar obra parada.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px]">
              <FileDown size={12} aria-hidden="true" /> Baixar PDF
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px]">
              <RefreshCw size={12} aria-hidden="true" /> Recalcular base
            </span>
          </div>
        </div>

        {/* Cobertura do catálogo */}
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] text-slate-600">
          <Package size={12} aria-hidden="true" />
          Cobertura do catálogo: <strong className="text-slate-900">82%</strong>
          <span className="text-slate-400">9.840 de 12.000 SKUs classificados</span>
        </div>

        {/* Status */}
        <div className="mt-3 grid grid-cols-3 gap-2 lg:grid-cols-6">
          {statusCards.map(({ label, value, Icon, tone, bg, active }) => (
            <div
              key={label}
              className={`rounded-lg border bg-white p-2.5 ${active ? "border-slate-900 bg-slate-100" : "border-slate-200"}`}
            >
              <span className={`inline-flex h-5 w-5 items-center justify-center rounded ${bg}`}>
                <Icon size={11} className={tone} aria-hidden="true" />
              </span>
              <p className={`mt-1.5 text-sm font-semibold sm:text-base ${tone}`}>{value}</p>
              <p className="text-[9px] text-slate-500 sm:text-[10px]">{label}</p>
            </div>
          ))}
        </div>

        {/* Abas */}
        <div className="mt-4 flex gap-1 overflow-x-auto border-b border-slate-200 pb-2 text-[10px] text-slate-500 [scrollbar-width:none]">
          {[
            { label: "Clientes em obra", Icon: Users, active: true },
            { label: "Construtores", Icon: Building2 },
            { label: "Revendedores", Icon: Store },
            { label: "Tarefas de obra", Icon: ClipboardList },
          ].map(({ label, Icon, active }) => (
            <span
              key={label}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 ${active ? "bg-slate-200 text-slate-900" : ""}`}
            >
              <Icon size={11} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        {/* Filtros */}
        <div className="mt-3 hidden gap-2 text-[10px] text-slate-500 md:flex">
          <span className="flex flex-1 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5">
            <Search size={11} aria-hidden="true" /> Buscar por nome ou código do cliente…
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5">
            <User size={11} aria-hidden="true" /> Todos os vendedores
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5">
            <Layers size={11} aria-hidden="true" /> Todas as fases
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5">
            <Clock size={11} aria-hidden="true" /> Qualquer janela
          </span>
        </div>

        {/* Lista + funil */}
        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_250px]">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.4fr_1fr_0.8fr] gap-2 border-b border-slate-100 px-3 py-2 text-[9px] font-medium uppercase tracking-wide text-slate-400 sm:grid-cols-[1.4fr_1.2fr_0.8fr_0.7fr_0.8fr]">
              <span>Cliente</span>
              <span>Fase atual</span>
              <span>Janela</span>
              <span className="hidden sm:block">Próx. transição</span>
              <span className="hidden sm:block">Vendedor</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.code}
                className="grid grid-cols-[1.4fr_1fr_0.8fr] items-center gap-2 border-b border-slate-100 px-3 py-2.5 text-[10px] last:border-0 sm:grid-cols-[1.4fr_1.2fr_0.8fr_0.7fr_0.8fr] sm:text-[11px]"
              >
                <span>
                  <span className="block font-semibold uppercase text-slate-900">{row.name}</span>
                  <span className="text-[9px] text-slate-400">{row.code}</span>
                </span>
                <span className="text-slate-600">{row.phase}</span>
                <span>
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] ${windowStyle[row.window]}`}>
                    {row.window}
                  </span>
                </span>
                <span className="hidden text-slate-600 sm:block">{row.next}</span>
                <span className="hidden text-slate-600 sm:block">{row.seller}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-[11px] font-semibold text-slate-900">Funil de obra</p>
            <ul className="mt-2.5 space-y-2">
              {funnel.map((f, i) => (
                <li key={f.label} className="grid grid-cols-[1fr_70px_36px] items-center gap-2 text-[9px] text-slate-600">
                  <span className="truncate">
                    {i + 1}. {f.label}
                  </span>
                  <span className="h-2.5 rounded-sm bg-slate-100">
                    <span
                      className="block h-full rounded-sm bg-slate-500"
                      style={{ width: `${Math.max(4, (f.value / funnelMax) * 100)}%` }}
                    />
                  </span>
                  <span className="text-right font-semibold text-slate-900">
                    {f.value.toLocaleString("pt-BR")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </figure>
  );
}
