import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Calendar } from "lucide-react";
import { sanityFetch, urlFor } from "@/lib/sanity";

const GLASS_BG =
  "linear-gradient(to top left, rgba(255,255,255,0.14), rgba(255,255,255,0.03))";

interface PostListItem {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { _type: string; asset?: { _ref: string } };
  publishedAt?: string;
}

const latestPostsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt
}`;

const ConteudoSection = () => {
  const { data: posts = [], isLoading, error } = useQuery<PostListItem[]>({
    queryKey: ["home-latest-posts"],
    queryFn: () => sanityFetch<PostListItem[]>(latestPostsQuery),
  });

  // Don't render an empty section on the homepage.
  if (!isLoading && (error || posts.length === 0)) return null;

  return (
    <section id="conteudo" className="bg-[#0C140F] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Conteúdo
            </p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-[#20E000] bg-clip-text pb-1 text-3xl font-semibold leading-tight text-transparent md:text-4xl">
              Aprenda com nossos conteúdos
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Artigos e materiais sobre transformação digital, IA, desenvolvimento
              e marketing.
            </p>
          </div>
          <Link
            to="/conteudo"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Ver todos os conteúdos
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? [0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-[380px] animate-pulse rounded-3xl bg-white/5"
                />
              ))
            : posts.map((post) => {
                const imgUrl = urlFor(post.mainImage)
                  ?.width(800)
                  .height(500)
                  .url();
                return (
                  <Link
                    key={post._id}
                    to={`/conteudo/${post.slug.current}`}
                    style={{ background: GLASS_BG }}
                    className="card-gradient-border group flex h-full flex-col overflow-hidden rounded-3xl backdrop-blur-md transition sm:hover:-translate-y-1 sm:hover:shadow-xl sm:hover:shadow-black/40"
                  >
                    <div className="aspect-[8/5] w-full overflow-hidden bg-white/5">
                      {imgUrl ? (
                        <img
                          src={imgUrl}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-white/30">
                          Sem imagem
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      {post.publishedAt && (
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <Calendar size={14} />
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      )}
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="mt-4 inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white transition group-hover:gap-3">
                        Ler artigo
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default ConteudoSection;
