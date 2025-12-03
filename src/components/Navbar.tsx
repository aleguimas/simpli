import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#carreiras" },
];

const serviceItems = [
  {
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernas",
  },
  {
    title: "Agentes de IA",
    description: "Automação inteligente e chatbots",
  },
  {
    title: "Tráfego Pago",
    description: "Campanhas de marketing digital",
  },
  {
    title: "Consultoria Digital",
    description: "Estratégia e transformação digital",
  },
];

const trainingItems = [
  {
    title: "Treinamentos In Company",
    description: "Capacite sua equipe com nossos treinamentos especializados",
  },
  {
    title: "Imersão de IA para Negócios",
    description: "Workshop intensivo de 10 horas",
  },
  {
    title: "Atendimento ao Cliente",
    description: "Físico e online com excelência",
  },
  {
    title: "Técnicas de Vendas",
    description: "Físico e online para conversões",
  },
  {
    title: "Visual Merchandising",
    description: "Transforme seu ponto de venda",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 w-full border-b border-white/10 transition-colors",
        scrolled ? "bg-[#0C140F]/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#hero" className="flex items-center">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA"
            alt="Tela.com logo"
            className="h-8 w-auto"
            loading="lazy"
          />
        </a>

        <nav className="hidden items-center gap-4 text-sm text-white/80 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:text-white focus:outline-none">
              Serviços
              <ChevronDown size={16} className="text-white/70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-72 border border-white/10 bg-[#0b1711]/95 backdrop-blur"
            >
              {serviceItems.map((item) => (
                <DropdownMenuItem
                  key={item.title}
                  asChild
                  className="flex flex-col items-start gap-1 rounded-lg px-3 py-2 text-white focus:bg-white/5 focus:text-white"
                >
                  <a href="#servicos">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <span className="text-xs text-white/70">
                      {item.description}
                    </span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:text-white focus:outline-none">
              Treinamento
              <ChevronDown size={16} className="text-white/70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-80 border border-white/10 bg-[#0b1711]/95 backdrop-blur"
            >
              {trainingItems.map((item) => (
                <DropdownMenuItem
                  key={item.title}
                  className="flex flex-col items-start gap-1 rounded-lg px-3 py-2 text-white focus:bg-white/5 focus:text-white"
                >
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="text-xs text-white/70">
                    {item.description}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden items-center md:flex">
          <Button className="bg-white text-black transition-colors hover:border hover:border-white/70 hover:bg-transparent hover:text-white">
            Fale conosco
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 p-0 text-white transition hover:border-white/30 hover:bg-white/10"
                aria-label="Abrir menu"
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
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="px-3 text-xs uppercase tracking-[0.12em] text-white/50">
                    Serviços
                  </p>
                  <div className="flex flex-col gap-2">
                    {serviceItems.map((item) => (
                      <a
                        key={item.title}
                        href="#servicos"
                        className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5"
                      >
                        <div className="font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/60">
                          {item.description}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="px-3 text-xs uppercase tracking-[0.12em] text-white/50">
                    Treinamento
                  </p>
                  <div className="flex flex-col gap-2">
                    {trainingItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5"
                      >
                        <div className="font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/60">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="mt-2 h-11 rounded-xl border border-white/0 bg-white text-black transition hover:border-white/70 hover:bg-transparent hover:text-white">
                  Fale conosco
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