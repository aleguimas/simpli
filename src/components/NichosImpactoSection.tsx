import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Boxes,
  CalendarClock,
  LifeBuoy,
  MessageCircle,
  ReceiptText,
  Send,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

// Opaque card fill (glass gradient over a solid dark base) so the cards cover
// each other cleanly when they stack like a deck.
const CARD_BG = `${GLASS_BG}, #0C140F`;

// Strong Simplí logo green (sampled from the favicon).
const LOGO_GREEN = "#20E000";

type Funcionalidade = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const funcionalidades: Funcionalidade[] = [
  {
    title: "Atendimento",
    description:
      "Atendimento automático 24/7 no WhatsApp, Instagram e chat do site, com respostas em segundos.",
    Icon: MessageCircle,
  },
  {
    title: "Agendamento",
    description:
      "Marcação e confirmação de consultas, horários, reservas e retornos direto na conversa.",
    Icon: CalendarClock,
  },
  {
    title: "Qualificação de Leads",
    description:
      "Identifica interesse, perfil e orçamento para entregar leads prontos para a venda.",
    Icon: UserCheck,
  },
  {
    title: "Leitura de Estoque",
    description:
      "Consulta de disponibilidade de produtos em tempo real, integrada ao seu sistema.",
    Icon: Boxes,
  },
  {
    title: "Suporte e Dúvidas",
    description:
      "Resolve dúvidas frequentes e oferece suporte inicial sem fila de espera.",
    Icon: LifeBuoy,
  },
  {
    title: "Disparo de Emails / WhatsApp",
    description:
      "Campanhas, lembretes e follow-ups automáticos para reativar e engajar clientes.",
    Icon: Send,
  },
  {
    title: "Automação de Cobranças",
    description:
      "Lembretes e cobranças automáticas de mensalidades, parcelas e pagamentos recorrentes.",
    Icon: ReceiptText,
  },
  {
    title: "Projetos personalizados",
    description:
      "Soluções sob medida: CRMs, apps, automações e análises de dados com IA.",
    Icon: Sparkles,
  },
];

const FuncionalidadeCard = ({
  item,
  row,
  active,
}: {
  item: Funcionalidade;
  row: number;
  active: number;
}) => {
  const { title, description, Icon } = item;
  const revealed = row < active;
  const depth = active - 1 - row; // 0 = front (newest)

  const ty = revealed ? -depth * 16 : 150;
  const scale = revealed ? Math.max(0.8, 1 - depth * 0.05) : 0.9;
  const opacity = revealed ? Math.max(0, 1 - depth * 0.16) : 0;
  const z = revealed ? 50 - depth : 0;

  return (
    <a
      href="https://wa.link/cpk8xf"
      target="_blank"
      rel="noreferrer"
      aria-hidden={!revealed}
      tabIndex={revealed ? 0 : -1}
      style={{
        background: CARD_BG,
        transform: `translate(-50%, -50%) translateY(${ty}px) scale(${scale})`,
        opacity,
        zIndex: z,
      }}
      className="card-gradient-border group absolute left-1/2 top-1/2 flex h-[210px] w-full flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-2xl shadow-black/60 transition-all duration-500 ease-out will-change-transform"
    >
      <span className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] p-3 text-white">
        <Icon size={22} />
      </span>

      <div className="mt-3 flex-1">
        <h3
          className="bg-gradient-to-r from-white bg-clip-text pb-1 text-xl font-semibold leading-tight text-transparent"
          style={{ backgroundImage: `linear-gradient(to right, #fff, ${LOGO_GREEN})` }}
        >
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>

      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3">
        Solicitar orçamento
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
};

const NichosImpactoSection = () => {
  const [cols, setCols] = useState(1);
  const [active, setActive] = useState(1);
  const trackRef = useRef<HTMLElement | null>(null);

  const rows = Math.ceil(funcionalidades.length / cols);
  const pinVh = cols === 2 ? 50 : 34;

  // Columns: row r of column c is funcionalidades[r * cols + c].
  const columns = Array.from({ length: cols }, (_, c) =>
    funcionalidades.filter((_, i) => i % cols === c),
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setCols(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Pinned-scroll progress -> number of dealt rows (cards rise and stack).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(
        1,
        Math.max(0, -track.getBoundingClientRect().top / scrollable),
      );
      const next = 1 + Math.round(progress * (rows - 1));
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [rows]);

  const scrollToRow = (row: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(rows - 1, row));
    const scrollable = track.offsetHeight - window.innerHeight;
    const top =
      track.offsetTop + (rows <= 1 ? 0 : clamped / (rows - 1)) * scrollable;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="nichos"
      ref={trackRef}
      className="relative bg-[#0C140F]"
      style={{ height: `${rows * pinVh}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden px-6 py-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.18em] text-white/50">
            Aplicabilidade dos Agentes de IA
          </p>
          <h2 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-3xl font-semibold text-transparent md:text-4xl">
            Conheça as funcionalidades dos Agentes de IA
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-6xl justify-center gap-5">
          {columns.map((colItems, colIdx) => (
            <div
              key={colIdx}
              className="relative h-[230px] w-full max-w-[440px]"
            >
              {colItems.map((item, r) => (
                <FuncionalidadeCard
                  key={item.title}
                  item={item}
                  row={r}
                  active={active}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto flex items-center justify-center gap-2.5">
          {Array.from({ length: rows }, (_, r) => (
            <button
              key={r}
              type="button"
              aria-label={`Ir para a linha ${r + 1}`}
              aria-current={r === active - 1}
              onClick={() => scrollToRow(r)}
              className={`h-2 rounded-full transition-all duration-300 ${
                r === active - 1 ? "w-7 bg-white" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichosImpactoSection;
