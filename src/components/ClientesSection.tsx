const logos = [
  { name: "Cliente 1", src: "/1.webp" },
  { name: "Cliente 2", src: "/2.webp" },
  { name: "Cliente 3", src: "/3.webp" },
  { name: "Cliente 4", src: "/4.webp" },
  { name: "Cliente 6", src: "/6.webp" },
  { name: "Cliente 7", src: "/7.webp" },
  { name: "Cliente 8", src: "/8.webp" },
  { name: "Cliente 9", src: "/9.webp" },
  { name: "Cliente 10", src: "/10.webp" },
  { name: "Cliente 11", src: "/11.webp" },
  { name: "Cliente 12", src: "/12.webp" },
  { name: "Revestir Homocenter", src: "/15.png" },
  { name: "Editora Futura", src: "/16.png" },
];

const firstHalf = logos.slice(0, Math.ceil(logos.length / 2));
const secondHalf = logos.slice(Math.ceil(logos.length / 2));

type Logo = { name: string; src: string };

const MarqueeRow = ({
  items,
  className = "",
  duration,
}: {
  items: Logo[];
  className?: string;
  duration: string;
}) => (
  <div className={`relative flex w-full items-center overflow-hidden bg-black ${className}`}>
    {/* Top & bottom gradient borders (white -> green, 2px) */}
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0.5 bg-gradient-to-r from-white to-[#20E000]" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-0.5 bg-gradient-to-r from-white to-[#20E000]" />
    <div
      className="flex w-max items-center gap-5 px-4 md:gap-8 md:px-6"
      style={{ animation: `logo-marquee ${duration} linear infinite` }}
    >
      {[...items, ...items].map((logo, idx) => (
        <div
          key={`${logo.name}-${idx}`}
          className="flex h-full flex-shrink-0 items-center justify-center px-6"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="block w-auto object-contain opacity-95"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

const ClientesSection = () => {
  return (
    <section
      id="logos"
      className="bg-[#0C140F] px-6 pt-16 pb-10 text-center md:px-10 md:pt-24 md:pb-16"
    >
      <div className="mx-auto max-w-4xl">
        <p className="inline-block bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-xl font-medium text-transparent md:text-2xl">
          Empresas que confiam na Simplí
        </p>
      </div>

      <div className="relative -mx-6 mt-12 overflow-hidden md:-mx-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0C140F] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0C140F] to-transparent" />

        {/* Desktop: single row */}
        <MarqueeRow
          items={logos}
          duration="26s"
          className="hidden h-[112px] md:flex [&_img]:h-[101px]"
        />

        {/* Mobile: two stacked rows scrolling continuously, 5px apart */}
        <div className="flex flex-col gap-[5px] md:hidden">
          <MarqueeRow
            items={firstHalf}
            duration="28s"
            className="h-[80px] [&_img]:h-[64px]"
          />
          <MarqueeRow
            items={secondHalf}
            duration="34s"
            className="h-[80px] [&_img]:h-[64px]"
          />
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
