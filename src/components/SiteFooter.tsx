import { Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const companyLinks = [
  { label: "Carreiras", href: "#carreiras" },
  { label: "Changelog", href: "#changelog" },
  { label: "Status", href: "#" },
];

const productLinks = [
  { label: "Documentação", href: "#" },
  { label: "Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

const socialLinks = [
  { label: "X", href: "#", Icon: Twitter },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "YouTube", href: "#", Icon: Youtube },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B1117] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <img
            src="https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEbdyYejjVKFxBWctPSJI0ik5y678jHYdwnRfN"
            alt="Tela.com logo"
            className="h-9 w-auto"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-white/70">
            Automação inteligente para equipes que querem eficiência com
            segurança e visibilidade.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <Globe size={18} className="text-white/80" />
            <select className="bg-transparent text-white/80 outline-none">
              <option className="bg-[#0B1117] text-white">Português BR</option>
              <option className="bg-[#0B1117] text-white">English</option>
              <option className="bg-[#0B1117] text-white">Español</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-white/70 md:grid-cols-2">
          <div>
            <h4 className="text-base font-semibold text-white">Empresa</h4>
            <div className="mt-3 flex flex-col gap-2">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Produto</h4>
            <div className="mt-3 flex flex-col gap-2">
              {productLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
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