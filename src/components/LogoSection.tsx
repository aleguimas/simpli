const logos = [
  { name: "Jusbrasil", size: "w-28" },
  { name: "Vórtx", size: "w-20" },
  { name: "Ultra", size: "w-20" },
  { name: "Unimed", size: "w-24" },
  { name: "Loft", size: "w-16" },
  { name: "Ernesto Borges", size: "w-32" },
  { name: "Machado Meyer", size: "w-28" },
];

const LogoSection = () => {
  return (
    <section
      id="logos"
      className="bg-[#0B1117] px-6 py-16 text-center md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xl font-medium text-white/80 md:text-2xl">
          Empresas líderes do Brasil confiam no Tela para automatizar seu
          trabalho
        </p>
      </div>
      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-6 sm:gap-10">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 ${logo.size}`}
          >
            <span className="text-sm font-semibold text-white/80">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;