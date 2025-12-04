import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", target: "hero" },
  { label: "Serviços", target: "servicos" },
  { label: "IA", target: "nichos" },
  { label: "Treinamentos", target: "treinamento" },
  { label: "Sobre", target: "carreiras" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to="/#hero"
          className="flex items-center"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsESG9QwVRNPlEoRcVxpjTndZFs8IqQ6NKb4Xhi"
            alt="Tela.com logo"
            className="h-8 w-auto"
            loading="lazy"
          />
        </Link>

        <nav className="hidden items-center gap-2 text-sm text-white/80 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.target}
              to={`/#${item.target}`}
              onClick={(e) => handleNavClick(e, item.target)}
              className="rounded-lg px-3 py-2 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
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
                    <Link
                      key={item.target}
                      to={`/#${item.target}`}
                      onClick={(e) => handleMobileNavClick(e, item.target)}
                      className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Button
                  className="mt-2 h-11 rounded-xl border border-white/0 bg-white text-black transition hover:border-white/70 hover:bg-transparent hover:text-white"
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