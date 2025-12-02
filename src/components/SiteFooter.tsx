import { Globe, Linkedin, Twitter, Youtube } from "lucide-react";

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

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B1117] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="text-xl font-semibold text-white">Tela.com</div>
          <p className="mt-3 text-sm text-white/70">
            Automação inteligente para equipes que querem eficiência com
            segurança e visibilidade.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {[Twitter, Linkedin, Youtube].map((Icon) => (
              <a
                key={Icon.displayName}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10"
              >
                <Icon size={18} />
              </a>
            ))}
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

        <div className="flex flex-col gap-3 text-sm text-white/70">
          <h4 className="text-base font-semibold text-white">Idioma</h4>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
            <Globe size={18} className="text-white/80" />
            <select className="bg-transparent text-white/80 outline-none">
              <option className="bg-[#0B1117] text-white">Português BR</option>
              <option className="bg-[#0B1117] text-white">English</option>
              <option className="bg-[#0B1117] text-white">Español</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Tela. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default SiteFooter;