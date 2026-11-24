import { Calendar, Check, ChevronDown, Info, Phone, Search, Store, User, X } from "lucide-react";

/**
 * Recriação da tela "Orçamentos" do Simplí CRM com dados fictícios.
 * Mantém a estrutura real (indicadores, filtros e Kanban por estágio de
 * follow-up) sem expor clientes, telefones, vendedores ou valores reais.
 */
type Card = {
  name: string;
  code: string;
  phone: string;
  value: string;
  seller: string;
  date: string;
  store: string;
  channel: "fisico" | "digital";
};

type Column = {
  title: string;
  pct: string;
  summary: string;
  head: string;
  bar: string;
  status?: "lost" | "won";
  cards: Card[];
};

const columns: Column[] = [
  {
    title: "Orçamento Enviado",
    pct: "6%",
    summary: "Orçamentos: 24 | R$ 61.480,00",
    head: "bg-sky-100 text-sky-900",
    bar: "border-sky-400",
    cards: [
      { name: "Ana Paula Ribeiro", code: "#71204", phone: "+55 85 9••••-3401", value: "R$ 1.248,00", seller: "Rafael S.", date: "24/11/2026", store: "1000", channel: "fisico" },
      { name: "Marcos Vinícius Leal", code: "#71188", phone: "+55 85 9••••-7720", value: "R$ 386,50", seller: "Camila R.", date: "24/11/2026", store: "1004", channel: "digital" },
    ],
  },
  {
    title: "Follow-up 1",
    pct: "9%",
    summary: "Orçamentos: 96 | R$ 248.900,00",
    head: "bg-violet-100 text-violet-900",
    bar: "border-violet-400",
    cards: [
      { name: "Construtora Horizonte", code: "#70955", phone: "+55 85 9••••-1188", value: "R$ 12.740,00", seller: "Bruno M.", date: "22/11/2026", store: "1007", channel: "fisico" },
      { name: "Juliana Martins", code: "#70931", phone: "+55 85 9••••-5602", value: "R$ 2.315,90", seller: "Rafael S.", date: "21/11/2026", store: "1000", channel: "fisico" },
    ],
  },
  {
    title: "Follow-up 2",
    pct: "5%",
    summary: "Orçamentos: 51 | R$ 132.410,00",
    head: "bg-indigo-100 text-indigo-900",
    bar: "border-indigo-400",
    cards: [
      { name: "Pedro Henrique Sales", code: "#70712", phone: "+55 85 9••••-9043", value: "R$ 4.880,00", seller: "Camila R.", date: "18/11/2026", store: "1004", channel: "digital" },
    ],
  },
  {
    title: "Follow-up 3",
    pct: "2%",
    summary: "Orçamentos: 12 | R$ 38.760,00",
    head: "bg-fuchsia-100 text-fuchsia-900",
    bar: "border-fuchsia-400",
    cards: [
      { name: "Studio Arq Nordeste", code: "#70488", phone: "+55 85 9••••-2276", value: "R$ 7.199,00", seller: "Bruno M.", date: "12/11/2026", store: "1002", channel: "fisico" },
    ],
  },
  {
    title: "Follow-up 4",
    pct: "1%",
    summary: "Orçamentos: 4 | R$ 9.320,00",
    head: "bg-amber-100 text-amber-900",
    bar: "border-amber-400",
    cards: [
      { name: "Luciana Ferreira", code: "#70120", phone: "+55 85 9••••-6614", value: "R$ 642,30", seller: "Rafael S.", date: "02/11/2026", store: "1000", channel: "digital" },
    ],
  },
  {
    title: "Orçamento Perdido",
    pct: "41%",
    summary: "Orçamentos: 402 | R$ 1.093.200,00",
    head: "bg-red-100 text-red-900",
    bar: "border-red-400",
    status: "lost",
    cards: [
      { name: "Ricardo Gomes", code: "#69804", phone: "+55 85 9••••-4417", value: "R$ 958,00", seller: "Camila R.", date: "28/10/2026", store: "1004", channel: "fisico" },
    ],
  },
  {
    title: "Venda Realizada",
    pct: "36%",
    summary: "Orçamentos: 355 | R$ 1.021.640,00",
    head: "bg-emerald-100 text-emerald-900",
    bar: "border-emerald-400",
    status: "won",
    cards: [
      { name: "Tereza Cavalcante", code: "#70301", phone: "+55 85 9••••-8835", value: "R$ 3.420,00", seller: "Bruno M.", date: "20/11/2026", store: "1002", channel: "fisico" },
    ],
  },
];

const kpis = [
  { label: "Total Orçamentos", value: "R$ 2.605.710,00" },
  { label: "Total Vendido", value: "R$ 1.021.640,00", tone: "text-emerald-600", badge: "39% do total", badgeTone: "bg-emerald-50 text-emerald-700" },
  { label: "Total Perdido", value: "R$ 1.093.200,00", tone: "text-red-600", badge: "42% do total", badgeTone: "bg-red-50 text-red-600" },
  { label: "Ticket Médio", value: "R$ 2.877,90" },
];

function QuoteCard({ card, status }: { card: Card; status?: Column["status"] }) {
  const valueTone =
    status === "lost"
      ? "bg-red-50 text-red-600"
      : status === "won"
        ? "bg-emerald-50 text-emerald-700"
        : "bg-slate-100 text-slate-800";
  return (
    <div
      className={`rounded-lg border bg-white p-2.5 shadow-sm ${status === "lost" ? "border-red-300" : status === "won" ? "border-emerald-300" : "border-slate-200"}`}
    >
      <div className="flex items-center gap-1.5 text-slate-400">
        {status !== "lost" && <Check size={11} aria-hidden="true" />}
        {status !== "won" && <X size={11} className={status === "lost" ? "text-red-500" : ""} aria-hidden="true" />}
        <span className="inline-flex items-center gap-0.5 rounded border border-slate-200 px-1 text-[8px] text-slate-500">
          <Store size={8} aria-hidden="true" />
          {card.store}
        </span>
        <span className="ml-auto rounded bg-blue-50 px-1.5 text-[8px] font-medium text-blue-600">
          {card.channel}
        </span>
      </div>
      <p className="mt-2 text-[10px] font-semibold uppercase leading-tight text-slate-900">
        {card.name} <span className="font-normal text-slate-400">{card.code}</span>
      </p>
      <p className="mt-1 flex items-center gap-1 text-[8px] text-slate-500">
        <Phone size={8} aria-hidden="true" />
        {card.phone}
      </p>
      <p className="mt-1.5 rounded bg-slate-50 px-1.5 py-1 text-[8px] italic text-slate-500">
        "Orçamento ERP {card.code.slice(1)}"
      </p>
      <p className={`mt-1.5 inline-block rounded px-1.5 py-0.5 font-mono text-[9px] font-semibold ${valueTone}`}>
        {card.value}
      </p>
      <p className="mt-1.5 flex items-center gap-1 text-[8px] uppercase text-slate-500">
        <User size={8} aria-hidden="true" />
        {card.seller}
      </p>
      <p className="mt-0.5 flex items-center gap-1 text-[8px] text-slate-400">
        <Calendar size={8} aria-hidden="true" />
        {card.date}
      </p>
    </div>
  );
}

export default function CrmOrcamentosMockup() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/15 bg-[#101c14] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
        <span className="flex items-center gap-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <i className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </span>
          <span className="text-[11px] text-white/60">Orçamentos</span>
        </span>
        <span className="font-mono text-[10px] text-white/40">dados fictícios</span>
      </div>

      <div
        className="bg-[#f7f8f7] p-4 text-slate-800 sm:p-6"
        role="img"
        aria-label="Tela de Orçamentos do Simplí CRM com dados fictícios: totais de orçamentos, vendido, perdido e ticket médio, filtros por equipe, loja e vendedor, e Kanban com as etapas Orçamento Enviado, Follow-up 1 a 4, Orçamento Perdido e Venda Realizada"
      >
        <p className="text-[10px] text-slate-500">Acompanhe seus orçamentos do envio até o fechamento</p>
        <p className="mt-0.5 text-lg font-semibold text-slate-900 sm:text-xl">Orçamentos</p>
        <p className="mt-1 text-[11px] text-slate-500">
          Gerencie o ciclo de vida dos seus orçamentos com acompanhamento por estágios.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[9px] text-slate-500">{k.label}</p>
                {!k.badge && <Info size={11} className="text-slate-400" aria-hidden="true" />}
              </div>
              <p className={`mt-1 text-sm font-semibold sm:text-base ${k.tone ?? "text-slate-900"}`}>{k.value}</p>
              {k.badge && (
                <span className={`mt-1 inline-block rounded-full px-1.5 py-0.5 text-[8px] ${k.badgeTone}`}>
                  {k.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-3 hidden gap-2 rounded-lg border border-slate-200 bg-white p-2 text-[10px] text-slate-500 md:flex">
          <span className="flex flex-1 items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5">
            <Search size={11} aria-hidden="true" /> Pesquisar cliente, vendedor…
          </span>
          {["Todos os Dias", "Todas Equipes", "Todas as Lojas", "Todos vendedores"].map((f) => (
            <span key={f} className="flex items-center gap-3 rounded-md bg-slate-50 px-2.5 py-1.5">
              {f} <ChevronDown size={11} aria-hidden="true" />
            </span>
          ))}
        </div>

        <div className="mt-3 overflow-x-auto pb-1 [scrollbar-width:thin]">
          <div className="grid min-w-[1050px] grid-cols-7 gap-2">
            {columns.map((col) => (
              <div key={col.title} className={`rounded-lg border-t-2 bg-white/60 p-1.5 ${col.bar}`}>
                <div className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[10px] font-semibold ${col.head}`}>
                  <span className="truncate">{col.title}</span>
                  <span className="font-normal opacity-70">{col.pct}</span>
                </div>
                <p className="mt-1.5 px-1 text-[8px] text-slate-500">{col.summary}</p>
                <div className="mt-1.5 space-y-1.5">
                  {col.cards.map((card) => (
                    <QuoteCard key={card.code} card={card} status={col.status} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
