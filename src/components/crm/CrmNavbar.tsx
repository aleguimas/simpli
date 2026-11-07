import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Início", href: "/#hero" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Cases", href: "/#cases" },
  { label: "AI Academy", href: "/#treinamento" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Sobre", href: "/#carreiras" },
];
const solutions = [
  { label: "Simplí Agent", href: "/solucoes/simpli-agent" },
  { label: "Simplí CRM", href: "/solucoes/simpli-crm" },
  { label: "Simplí Estoque", href: "/solucoes/simpli-estoque" },
  { label: "Agentic Office", href: "/agenticoffice", external: true },
];
const contact = "https://wa.link/cpk8xf";

/** Navegação própria da landing do CRM; a navegação da home permanece intacta. */
export default function CrmNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex items-center justify-between gap-3">
        <Link to="/#hero" aria-label="Simplí — página inicial">
          <img
            src="/logonome-branca-cortada.webp"
            alt="Simplí"
            width={112}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center text-white/80 lg:flex"
        >
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-lg px-3 py-3 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex min-h-11 items-center gap-1 rounded-lg px-3 py-3 hover:text-white">
              Soluções
              <ChevronDown size={13} aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 border-white/15 bg-[#102018] p-2 text-white"
            >
              {solutions.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="cursor-pointer rounded-lg focus:bg-white/10 focus:text-white"
                >
                  {item.external ? (
                    <a href={item.href} className="px-3 py-3">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className="px-3 py-3">
                      {item.label}
                    </Link>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-lg px-3 py-3 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Button
            asChild
            className="rounded-full bg-white px-5 text-xs font-semibold text-[#0c1710] hover:bg-[#d9fbe5]"
          >
            <a href={contact} target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </Button>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu de navegação"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              >
                <Menu size={19} aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[min(320px,90vw)] overflow-y-auto border-white/10 bg-[#0c1710] text-white motion-reduce:animate-none">
              <SheetTitle className="sr-only">Navegação Simplí</SheetTitle>
              <SheetDescription className="sr-only">
                Links para o site, soluções e contato com a Simplí.
              </SheetDescription>
              <nav
                aria-label="Navegação móvel"
                className="mt-8 flex flex-col gap-1"
              >
                {links.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="px-3 pb-1 pt-4 text-[10px] uppercase tracking-widest text-[#86efac]">
                  Soluções
                </p>
                {solutions.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-5 py-3 text-sm text-white/70 hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-5 py-3 text-sm text-white/70 hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                {links.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-5 min-h-12 rounded-full bg-[#86efac] text-[#0c1710] hover:bg-[#b2f7cd]"
                >
                  <a
                    href={contact}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Fale conosco
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
