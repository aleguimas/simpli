import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Calendar, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";
import { sanityClient, urlFor } from "@/lib/sanity";

interface PostSeo {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogImage?: { _type: string; asset?: { _ref: string } };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { _type: string; asset?: { _ref: string } };
  publishedAt?: string;
  body?: PortableTextBlock[];
  seo?: PostSeo;
}

const postBySlugQuery = `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body,
  seo {
    metaTitle,
    metaDescription,
    metaKeywords,
    ogImage
  }
}`;

const ConteudoPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useQuery<Post | null>({
    queryKey: ["conteudo-post", slug],
    queryFn: () => sanityClient.fetch(postBySlugQuery, { slug: slug ?? "" }),
    enabled: !!slug,
  });

  const heroGradient = useMemo(
    () =>
      "linear-gradient(120deg, rgba(12,20,15,0.85), rgba(28,51,36,0.9))",
    [],
  );

  if (!slug) {
    return (
      <div className="min-h-screen bg-[#0C140F] text-white">
        <Navbar />
        <main className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-white/70">Post não encontrado.</p>
            <Link
              to="/conteudo"
              className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} /> Voltar ao conteúdo
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0C140F] text-white">
        <Navbar />
        <main className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="h-10 w-3/4 animate-pulse rounded bg-white/10" />
            <div className="mt-6 h-4 w-full animate-pulse rounded bg-white/5" />
            <div className="mt-12 h-64 animate-pulse rounded bg-white/5" />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#0C140F] text-white">
        <Navbar />
        <main className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-white/70">Post não encontrado.</p>
            <Link
              to="/conteudo"
              className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} /> Voltar ao conteúdo
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const mainImageUrl = urlFor(post.mainImage)?.width(1200).url();
  const ogImageUrl =
    urlFor(post.seo?.ogImage)?.width(1200).url() ?? mainImageUrl ?? undefined;

  const portableTextComponents = {
    block: {
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="mb-4 text-base leading-relaxed text-white/85">{children}</p>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="mb-4 mt-8 text-2xl font-semibold text-white">
          {children}
        </h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="mb-3 mt-6 text-xl font-semibold text-white">{children}</h3>
      ),
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="my-6 border-l-4 border-white/30 pl-6 text-white/80 italic">
          {children}
        </blockquote>
      ),
    },
    types: {
      image: ({ value }: { value?: { asset?: { _ref: string }; _type: string } }) => {
        const src = value ? urlFor(value)?.width(900).url() : null;
        if (!src) return null;
        return (
          <figure className="my-8">
            <img
              src={src}
              alt=""
              className="w-full rounded-lg border border-white/10"
            />
          </figure>
        );
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0C140F] text-white">
      <SEO
        title={post.seo?.metaTitle ?? post.title}
        description={post.seo?.metaDescription ?? post.excerpt ?? undefined}
        keywords={post.seo?.metaKeywords ?? undefined}
        canonical={`/conteudo/${post.slug.current}`}
        ogImage={ogImageUrl}
        ogType="article"
      />
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20"
          style={{
            backgroundImage: heroGradient,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative mx-auto max-w-3xl">
            <Link
              to="/conteudo"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} /> Voltar ao conteúdo
            </Link>
            <h1 className="mt-6 text-3xl font-semibold md:text-4xl">
              {post.title}
            </h1>
            {post.publishedAt && (
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <Calendar size={16} />
                {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#0f1d15] px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            {mainImageUrl && (
              <figure className="mb-10 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={mainImageUrl}
                  alt=""
                  className="w-full object-cover"
                />
              </figure>
            )}
            {post.body && post.body.length > 0 ? (
              <div className="prose prose-invert max-w-none">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            ) : (
              <p className="text-white/60">Sem conteúdo publicado.</p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ConteudoPost;
