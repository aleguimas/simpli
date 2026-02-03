import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";
import { sanityClient, urlFor } from "@/lib/sanity";

interface PostListItem {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { _type: string; asset?: { _ref: string } };
  publishedAt?: string;
}

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt
}`;

const Conteudo = () => {
  const { data: posts = [], isLoading, error } = useQuery<PostListItem[]>({
    queryKey: ["conteudo-posts"],
    queryFn: () => sanityClient.fetch(postsQuery),
  });

  const heroGradient = useMemo(
    () =>
      "linear-gradient(120deg, rgba(12,20,15,0.9), rgba(28,51,36,0.9)), url('/fundo-consultoria.webp')",
    [],
  );

  return (
    <div className="min-h-screen bg-[#0C140F] text-white">
      <SEO
        title="Conteúdo | Artigos e Materiais"
        description="Artigos, materiais e conteúdos sobre transformação digital, desenvolvimento web, IA, tráfego pago e consultoria. Simplí."
        canonical="/conteudo"
      />
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
          style={{
            backgroundImage: heroGradient,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">Conteúdo</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80 md:text-xl">
              Artigos e materiais sobre transformação digital, desenvolvimento, IA e marketing.
            </p>
          </div>
        </section>

        <section className="bg-[#0f1d15] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            {isLoading && (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-80 animate-pulse rounded-xl bg-white/5"
                  />
                ))}
              </div>
            )}
            {error && (
              <p className="text-center text-white/70">
                Não foi possível carregar os conteúdos. Tente novamente mais tarde.
              </p>
            )}
            {!isLoading && !error && posts.length === 0 && (
              <p className="text-center text-white/70">
                Nenhum conteúdo publicado ainda.
              </p>
            )}
            {!isLoading && !error && posts.length > 0 && (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                  const imgUrl = urlFor(post.mainImage)?.width(600).url();
                  return (
                    <Link
                      key={post._id}
                      to={`/conteudo/${post.slug.current}`}
                      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-white/5">
                        {imgUrl ? (
                          <img
                            src={imgUrl}
                            alt=""
                            className="h-full w-full object-cover transition group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-white/30">
                            Sem imagem
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h2 className="text-lg font-semibold text-white group-hover:text-white/90">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="mt-2 line-clamp-3 text-sm text-white/70">
                            {post.excerpt}
                          </p>
                        )}
                        {post.publishedAt && (
                          <div className="mt-auto flex items-center gap-2 pt-4 text-xs text-white/50">
                            <Calendar size={14} />
                            {new Date(post.publishedAt).toLocaleDateString(
                              "pt-BR",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Conteudo;
