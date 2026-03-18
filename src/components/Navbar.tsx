import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, MessageCircle, Kanban, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const solucoes = [
  {
    href: "/solucoes/simpli-agent",
    label: "Simplí Agent",
    description: "Atendimento com IA 24h",
    Icon: MessageCircle,
  },
  {
    href: "/solucoes/simpli-crm",
    label: "Simplí CRM",
    description: "Gestão de vendas com IA",
    Icon: Kanban,
  },
  {
    href: "/solucoes/simpli-estoque",
    label: "Simplí Estoque",
    description: "Gestão de estoque preditiva",
    Icon: Package,
  },
];

const navLinks = [
  { label: "Início", target: "hero" },
  { label: "Serviços", target: "servicos" },
  { label: "IA", target: "nichos" },
  { label: "Treinamentos", target: "treinamento" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Sobre", target: "carreiras" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const [mobileSolucoesOpen, setMobileSolucoesOpen] = useState(false);
  const solucoesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solucoesRef.current && !solucoesRef.current.contains(e.target as Node)) {
        setSolucoesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (event: React.MouseEvent, target: string) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${target}`);
      return;
    }
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMobileNavClick = (event: React.MouseEvent, target: string) => {
    handleNavClick(event, target);
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 w-full border-b border-white/10 transition-colors",
        scrolled ? "bg-[#0C140F]/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 md:px-10">
        <Link
          to="/#hero"
          className="flex items-center"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <img
            src="/logonome-branca-cortada.webp"
            alt="Simpli logo"
            className="h-8 w-auto"
            loading="lazy"
          />
        </Link>

        <nav className="hidden items-center gap-2 text-sm text-white/80 md:flex">
          {navLinks.slice(0, 2).map((item) =>
            "href" in item ? (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-lg px-3 py-2 transition hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.target}
                to={`/#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className="rounded-lg px-3 py-2 transition hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Dropdown Soluções */}
          <div ref={solucoesRef} className="relative">
            <button
              onClick={() => setSolucoesOpen((v) => !v)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 transition hover:text-white"
            >
              Soluções
              <ChevronDown
                size={14}
                className={cn("transition-transform", solucoesOpen && "rotate-180")}
              />
            </button>

            {solucoesOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#0f1d15] shadow-xl shadow-black/40">
                {solucoes.map(({ href, label, description, Icon }) => (
                  <Link
                    key={href}
                    to={href}
                    onClick={() => setSolucoesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#86efac]/15 text-[#86efac]">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="text-xs text-white/50">{description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((item) =>
            "href" in item ? (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-lg px-3 py-2 transition hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.target}
                to={`/#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className="rounded-lg px-3 py-2 transition hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center md:flex">
          <Button className="bg-white text-black transition-colors hover:border hover:border-white/70 hover:bg-transparent hover:text-white" asChild>
            <a href="https://wa.link/cpk8xf" target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="min-h-[44px] min-w-[44px] h-10 w-10 rounded-xl border border-white/10 bg-white/5 p-0 text-white transition active:scale-95 hover:border-white/30 hover:bg-white/10 touch-manipulation"
                aria-label="Abrir menu de navegação"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] border-white/10 bg-[#0b1711] text-white"
            >
              <div className="mt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2 text-sm">
                  {navLinks.slice(0, 2).map((item) =>
                    "href" in item ? (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.target}
                        to={`/#${item.target}`}
                        onClick={(e) => handleMobileNavClick(e, item.target)}
                        className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    )
                  )}

                  {/* Soluções mobile */}
                  <div>
                    <button
                      onClick={() => setMobileSolucoesOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 transition hover:bg-white/5"
                    >
                      <span>Soluções</span>
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform", mobileSolucoesOpen && "rotate-180")}
                      />
                    </button>
                    {mobileSolucoesOpen && (
                      <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                        {solucoes.map(({ href, label, Icon }) => (
                          <Link
                            key={href}
                            to={href}
                            onClick={() => { setMenuOpen(false); setMobileSolucoesOpen(false); }}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/70 transition hover:bg-white/5 hover:text-white"
                          >
                            <Icon size={14} className="text-[#86efac]" />
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {navLinks.slice(2).map((item) =>
                    "href" in item ? (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.target}
                        to={`/#${item.target}`}
                        onClick={(e) => handleMobileNavClick(e, item.target)}
                        className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>

                <Button
                  className="mt-2 min-h-[48px] h-12 rounded-xl border border-white/0 bg-white text-base font-semibold text-black transition active:scale-95 hover:border-white/70 hover:bg-transparent hover:text-white touch-manipulation"
                  asChild
                >
                  <a
                    href="https://wa.link/cpk8xf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Fale conosco
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
