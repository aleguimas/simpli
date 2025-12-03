const newLogoSrc =
  "https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEsCzKr2uURvumjDTaW8whPIYnNpgbMFyHqVOA";

const logos = [
  { name: "Jusbrasil", src: newLogoSrc },
  { name: "Vórtx", src: newLogoSrc },
  { name: "Ultra", src: newLogoSrc },
  { name: "Unimed", src: newLogoSrc },
  { name: "Loft", src: newLogoSrc },
  { name: "Ernesto Borges", src: newLogoSrc },
  { name: "Machado Meyer", src: newLogoSrc },
  { name: "Cliente 8", src: newLogoSrc },
  { name: "Cliente 9", src: newLogoSrc },
  { name: "Cliente 10", src: newLogoSrc },
  { name: "Cliente 11", src: newLogoSrc },
];

const LogoSection = () => {
  return (
    <section
      id="logos"
      className="bg-[#0B1117] px-6 pt-16 pb-10 text-center md:px-10 md:pt-24 md:pb-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xl font-medium text-white/80 md:text-2xl">
          Empresas que confiam no trabalho da Simplí
        </p>
      </div>

      <div className="relative -mx-6 mt-12 overflow-hidden md:-mx-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0B1117] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0B1117] to-transparent" />

        <div className="h-16 w-full overflow-hidden border-y border-white/10 bg-black md:h-20">
          <div className="flex w-max animate-[logo-marquee_26s_linear_infinite] items-center gap-3 px-4 md:gap-6 md:px-6">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex h-full flex-shrink-0 items-center justify-center px-5"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="block h-14 w-auto object-contain opacity-95 md:h-16"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LogoSection;