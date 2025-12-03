const team = [
  {
    name: "Alexandre Guimarães",
    title: "O Estrategista",
    bio: "Transformação Digital e Inteligência Artificial com 20+ anos de gestão corporativa.",
  },
  {
    name: "Luciano Fernandes",
    title: "O Professor",
    bio: "Visual Merchandising e Trade Marketing com 35+ anos de experiência no mercado.",
  },
  {
    name: "Rodrigo Lemos",
    title: "O Tráfego",
    bio: "Tráfego Pago e Marketing Digital, focado em estratégias para aumentar o faturamento.",
  },
  {
    name: "Caio Souza",
    title: "O Agente",
    bio: "Arquitetura de Automação com Inteligência Artificial.",
    image:
      "https://5d8szluqid.ufs.sh/f/7g9uOybJbNsEbdNkH1VKFxBWctPSJI0ik5y678jHYdwnRfNe",
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
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
          Conheça os especialistas que transformam ideias em soluções inovadoras.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-[#0F1D15]/90 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#102419]"
            >
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1C3324] via-[#0F1D15] to-[#0C140F] text-3xl font-semibold text-white/80">
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