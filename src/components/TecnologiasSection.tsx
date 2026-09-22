const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

const team = [
  {
    name: "Alexandre Guimarães",
    title: "O Estrategista",
    bio: "Transformação Digital e Inteligência Artificial com 20+ anos de gestão corporativa.",
    image: "/guimas.webp",
  },
  {
    name: "Rodrigo Lemos",
    title: "O Tráfego",
    bio: "Tráfego Pago e Marketing Digital, focado em estratégias para aumentar o faturamento.",
    image: "/rodrigo.webp",
  },
  {
    name: "Caio Souza",
    title: "O Agente",
    bio: "Desenvolvimento web e arquitetura de automação com Inteligência Artificial.",
    image: "https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEpw9ht5rB2eHrQEupzvT8LaN4mntWUVOky7IR",
  },
];

const TecnologiasSection = () => {
  return (
    <section
      id="carreiras"
      className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">
          Nossa Equipe
        </p>
        <h2 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-3xl font-semibold text-transparent md:text-4xl">
          Conheça os especialistas que transformam ideias em soluções inovadoras.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              style={{ background: GLASS_BG }}
              className="card-gradient-border group flex h-full flex-col gap-4 rounded-3xl p-6 backdrop-blur-md transition sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-black/40"
            >
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0F1D15] text-3xl font-semibold text-white/80">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                )}
              </div>
              <div className="flex flex-col items-start gap-2 text-left">
                <div className="text-xs uppercase tracking-[0.16em] text-white/60">
                  {person.title}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {person.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecnologiasSection;