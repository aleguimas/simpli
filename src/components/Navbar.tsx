import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#beneficios" },
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
        scrolled ? "bg-[#0B1117]/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          Tela<span className="text-white/60">.com</span>
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
              className="w-72 border border-white/10 bg-[#0F1620]/95 backdrop-blur"
            >
              {serviceItems.map((item) => (
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

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:text-white focus:outline-none">
              Treinamento
              <ChevronDown size={16} className="text-white/70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-80 border border-white/10 bg-[#0F1620]/95 backdrop-blur"
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

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            Entrar
          </Button>
          <Button className="bg-white text-black hover:bg-white/90">
            Fale conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;