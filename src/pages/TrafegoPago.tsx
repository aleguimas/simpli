import {
  ArrowUpRight,
  BarChart3,
  Check,
  Megaphone,
  Radar,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const WHATSAPP_URL = "https://wa.link/cpk8xf";

const benefits = [
  {
    icon: Target,
    title: "Segmentação Precisa",
    description: "Atinga exatamente quem tem interesse no seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Resultados Mensuráveis",
    description: "Métricas detalhadas e ROI calculável.",
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    description: "Aumente investimentos conforme necessidade.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Rápidos",
    description: "Ganhe tração em dias, não em meses.",
  },
];

const process = [
  {
    step: "01",
    title: "Pesquisa de Mercado",
    description: "Análise de concorrência e público-alvo.",
  },
  {
    step: "02",
    title: "Estratégia de Campanha",
    description: "Definição de objetivos, ofertas e táticas.",
  },
  {
    step: "03",
    title: "Execução",
    description: "Criação e lançamento das campanhas.",
  },
  {
    step: "04",
    title: "Otimização",
    description: "Monitoração contínua e ajustes semanais.",
  },
];

const TrafegoPago = () => {
  return (
    <div className="bg-[#0C140F] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, #7afa00 0%, #00e686 40%, #00d8ff 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_45%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Performance Digital
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">Tráfego Pago</h1>
            <p className="max-w-2xl text-lg text-white/90 md:text-xl">
              Gerenciamos campanhas de marketing digital para maximizar seu ROI.
            </p>
            <Button
              asChild
              className="h-12 rounded-xl border border-transparent bg-white px-7 text-base font-semibold text-[#0C140F] transition hover:border-white hover:bg-transparent hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-[#0C140F] md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                O que é Tráfego Pago?
              </h2>
              <p className="text-base leading-relaxed text-[#0C140F]/80">
                Tráfego pago é uma estratégia de marketing digital que envolve
                investir em anúncios em plataformas como Google Ads, Facebook Ads
                e LinkedIn Ads para gerar resultados rápidos e mensuráveis.
              </p>
              <p className="text-base leading-relaxed text-[#0C140F]/80">
                Nossas campanhas são planejadas para atingir o público certo, no
                momento certo, maximizando o retorno sobre investimento.
              </p>
              <p className="text-base leading-relaxed text-[#0C140F]/80">
                Utilizamos ferramentas avançadas de segmentação, remarketing e
                otimização contínua para garantir que cada real investido gere
                resultado concreto.
              </p>
            </div>
            <Card className="border-0 bg-gradient-to-br from-[#7afa00] via-[#00e686] to-[#00d8ff] text-[#0C140F] shadow-xl">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#0C140F]">
                  <ArrowUpRight size={22} />
                </div>
                <h3 className="text-lg font-semibold">Plataformas Avançadas</h3>
                <p className="text-sm text-[#0C140F]/80">
                  Google Ads, Meta Ads, LinkedIn Ads e analytics para decisões
                  baseadas em dados.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#f7f9fb] px-6 py-16 text-[#0C140F] md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Benefícios do Tráfego Pago
            </h2>
            <p className="mt-2 text-base text-[#0C140F]/70">
              Por que investir em campanhas de tráfego pago?
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <Card
                  key={item.title}
                  className="border border-white/0 bg-white shadow-sm shadow-[#0C140F]/10"
                >
                  <CardContent className="flex flex-col gap-3 p-5 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7afa00] via-[#00e686] to-[#00d8ff] text-[#0C140F]">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#0C140F]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#0C140F]/70">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-[#0C140F] md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Como Gerenciamos</h2>
            <p className="mt-2 text-base text-[#0C140F]/70">
              Nosso processo para gestão de campanhas
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item, idx) => (
                <Card
                  key={item.step}
                  className="border border-white/0 bg-[#f7f9fb] shadow-sm shadow-[#0C140F]/10"
                >
                  <CardContent className="flex flex-col items-center gap-3 p-5 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7afa00] via-[#00e686] to-[#00d8ff] text-base font-semibold text-[#0C140F]">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="text-base font-semibold text-[#0C140F]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#0C140F]/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fb] px-6 py-16 text-[#0C140F] md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Case de Sucesso</h2>
            <p className="mt-2 text-base text-[#0C140F]/70">
              Veja como otimizamos campanhas de um e-commerce
            </p>
            <Card className="mt-10 overflow-hidden border border-white/0 bg-white shadow-lg shadow-[#0C140F]/10">
              <CardContent className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-semibold text-[#0C140F]">
                    E-commerce Plus - Campanhas Google Ads
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0C140F]/75">
                    Implementamos uma estratégia completa de tráfego pago com:
                  </p>
                  <ul className="space-y-2 text-sm text-[#0C140F]/80">
                    {[
                      "Campanhas de pesquisa e display no Google Ads",
                      "Remarketing no Facebook e Instagram",
                      "Otimização contínua baseada em dados",
                      "KPIs de ROI e CPA monitorados semanalmente",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check size={16} className="text-[#00c853]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="rounded-xl border border-[#0C140F]/10 bg-[#f7f9fb] p-4 text-sm text-[#0C140F]/80">
                    “A Simplí transformou nossas campanhas, aumentando vendas em
                    200% e reduzindo o CPA em 40%.”
                    <span className="mt-2 block text-xs text-[#0C140F]/60">
                      — Ana Costa, Marketing Manager
                    </span>
                  </blockquote>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#0C140F]/10 bg-gradient-to-br from-[#7afa00] via-[#00e686] to-[#00d8ff] p-6 text-center text-[#0C140F] shadow-inner shadow-[#0C140F]/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#0C140F]">
                    <Radar size={22} />
                  </div>
                  <h4 className="text-lg font-semibold">Resultados</h4>
                  <div className="flex flex-col gap-1 text-sm text-[#0C140F]/80">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-[#0C140F]">
                        200%
                      </span>
                      <span className="text-xs">Aumento em vendas</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-[#0C140F]">
                        40%
                      </span>
                      <span className="text-xs">Redução de CPA</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="secondary"
                    className="mt-2 h-11 w-full rounded-xl border border-white/30 bg-white/90 text-[#0C140F] hover:bg-white"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      Quero resultados assim
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TrafegoPago;