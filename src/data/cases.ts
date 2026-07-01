export type CaseItem = {
  id: string;
  title: string;
  description: string;
  /** Full YouTube URL used as the card preview. Empty = "em breve". */
  youtubeUrl: string;
  tag?: string;
};

// Cases (título, descrição e link do YouTube para a prévia do card).
export const cases: CaseItem[] = [
  {
    id: "revestir-home-center",
    tag: "Depoimento · Simplí CRM",
    title: "Depoimento Breno Vasconcelos — Revestir Home Center",
    description:
      "Breno Vasconcelos, Diretor Geral da Revestir Home Center, um dos maiores nomes de construção e reforma no Ceará. Gravado em 20/06/26, com o Simplí CRM completando cerca de 20 dias em operação.",
    youtubeUrl: "https://www.youtube.com/shorts/9pUYs8TbKSY",
  },
  {
    id: "premocil-explosao-de-vendas",
    tag: "Depoimento · Simplí CRM",
    title: "Depoimento Diretor Premocil — Explosão de Vendas",
    description:
      "César, Diretor do Grupo Premocil, ao final do Explosão de Vendas. A Simplí acompanhou o evento presencialmente com o Simplí CRM, criou um módulo específico, migrou a base em pleno evento e assumiu 100% da operação. Resultado: meta superada e mais de R$ 500 mil captados em faturamento.",
    youtubeUrl: "https://www.youtube.com/shorts/nvYyDbM-ZKw",
  },
  {
    id: "kiosk-brands-workshop-ia",
    tag: "Workshop de IA",
    title: "Depoimentos Time Kiosk Brands — Workshop de IA",
    description:
      "Depoimentos do time da Kiosk Brands após um Workshop de IA voltado para o negócio, realizado em 08/11/25.",
    youtubeUrl: "https://www.youtube.com/shorts/1QV5v4gOTyU",
  },
];

/** Extracts the 11-char video id from common YouTube URL formats. */
export function youtubeId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/watch\?v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}
