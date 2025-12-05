import { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globe, Instagram, Linkedin } from "lucide-react";

const companyLinks = [
  { label: "Início", target: "hero" },
  { label: "Serviços", target: "servicos" },
  { label: "IA", target: "nichos" },
  { label: "Treinamentos", target: "treinamento" },
  { label: "Sobre", target: "carreiras" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/simpli.inovacao/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/simpli-inovacao-digital/",
    Icon: Linkedin,
  },
];

const contactInfo = [
  { label: "contato@simpli.ia.br", href: "mailto:contato@simpli.ia.br" },
  { label: "+55 (81) 99194-2628", href: "tel:+5581991942628" },
  { label: "Recife, PE - Brasil" },
];

const SiteFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = useCallback(
    (event: React.MouseEvent, target: string) => {
      event.preventDefault();
      if (location.pathname !== "/") {
        navigate(`/#${target}`);
        return;
      }
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [location.pathname, navigate],
  );

  return (
    <footer className="border-t border-white/10 bg-[#0b1711] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsESG9QwVRNPlEoRcVxpjTndZFs8IqQ6NKb4Xhi"
            alt="Tela.com logo"
            className="h-10 w-auto"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-white/70">
            Consultoria e tecnologia de ponta para transformação digital.
          </p>
          <div className="mt-4 flex items-center gap-1.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Globe size={18} className="text-white/80" />
            <select className="bg-transparent text-white/80 outline-none">
              <option className="bg-[#0b1711] text-white">Português BR</option>
              <option className="bg-[#0b1711] text-white">English</option>
              <option className="bg-[#0b1711] text-white">Español</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-white/70 md:grid-cols-2">
          <div>
            <h4 className="text-base font-semibold text-white">Empresa</h4>
            <div className="mt-3 flex flex-col gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  to={`/#${link.target}`}
                  onClick={(e) => handleSectionClick(e, link.target)}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Contato</h4>
            <div className="mt-3 flex flex-col gap-2">
              {contactInfo.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label}>{item.label}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Simplí. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default SiteFooter;