import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Casos de Uso", href: "#cases" },
  { label: "Carreiras", href: "#carreiras" },
  { label: "Changelog", href: "#changelog" },
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

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            Entrar
          </Button>
          <Button className="bg-white text-black hover:bg-white/90">
            Agendar Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;