const logos = [
  { name: "Cliente 1", src: "/1.webp" },
  { name: "Cliente 2", src: "/2.webp" },
  { name: "Cliente 3", src: "/3.webp" },
  { name: "Cliente 4", src: "/4.webp" },
  { name: "Cliente 5", src: "/5.webp" },
  { name: "Cliente 6", src: "/6.webp" },
  { name: "Cliente 7", src: "/7.webp" },
  { name: "Cliente 8", src: "/8.webp" },
  { name: "Cliente 9", src: "/9.webp" },
  { name: "Cliente 10", src: "/10.webp" },
];

const ClientesSection = () => {
  return (
    <section
      id="logos"
      className="bg-[#0C140F] px-6 pt-16 pb-10 text-center md:px-10 md:pt-24 md:pb-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xl font-medium text-white/80 md:text-2xl">
          Empresas que confiam na Simplí
        </p>
      </div>

      <div className="relative -mx-6 mt-12 overflow-hidden md:-mx-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0C140F] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0C140F] to-transparent" />

        <div className="flex h-[88px] w-full items-center overflow-hidden border-y border-white/10 bg-black md:h-[112px]">
          <div className="flex w-max animate-[logo-marquee_26s_linear_infinite] items-center gap-5 px-4 md:gap-8 md:px-6">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex h-full flex-shrink-0 items-center justify-center px-6"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="block h-[72px] w-auto object-contain opacity-95 md:h-[88px]"
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

export default ClientesSection;
