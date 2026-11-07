import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CrmScreen } from "./CrmScreen";
import { crmCaptures } from "./crmCaptures";

const tracking = [
  {
    id: "historico",
    label: "Histórico de disparos",
    text: "Consulte os disparos por template e data. Entregas, leituras, cliques e falhas mostram o percurso das mensagens, conforme os dados disponíveis no canal.",
  },
  {
    id: "resultados",
    label: "Resultados das campanhas",
    text: "Cruze os contatos impactados com as compras registradas: ativados, conversões, valor gerado e ROAS estimado por template ou flow, dentro da janela de atribuição.",
  },
];

function CaptureTabs({
  items,
  label,
}: {
  items: { id: string; label: string; text: string }[];
  label: string;
}) {
  return (
    <Tabs defaultValue={items[0].id} className="mt-9">
      <TabsList
        aria-label={label}
        className="h-auto w-full justify-start gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 sm:w-auto"
      >
        {items.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className="min-h-12 min-w-0 flex-1 whitespace-normal rounded-lg px-3 text-xs leading-relaxed text-white/65 data-[state=active]:bg-[#86efac] data-[state=active]:text-[#0c140f] sm:flex-none sm:px-6 sm:text-sm"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.id} value={item.id} className="mt-6">
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-white/65">
            {item.text}
          </p>
          <CrmScreen capture={crmCaptures[item.id]} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default function CrmInsightsAndResults() {
  return (
    <>
      <section id="insights-crm" className="crm-section">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-[1.15fr_1fr] md:items-end">
            <div>
              <p className="crm-eyebrow">// SENTIMENTOS E INSIGHTS</p>
              <h2 className="crm-heading mt-4">
                Entenda o que os números
                <br />
                <span className="text-[#86efac]">sozinhos não contam.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              A análise com IA transforma conversas em sinais para a gestão.
              Na aba Insights da análise de sentimentos, explore como sua
              equipe conduz o atendimento e encontre oportunidades de melhoria.
            </p>
          </div>
          <div className="mt-9">
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-white/65">
              Explore o estilo de cada atendente: tom de voz, frases recorrentes,
              roteiro e oportunidades de melhoria, com métricas e evidências das
              conversas analisadas.
            </p>
            <CrmScreen capture={crmCaptures.insights} />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/55">
            A leitura da IA apoia a revisão da equipe. Os Insights de conduta
            usam seu próprio período de análise e indicam quando a amostra é
            insuficiente.
          </p>
        </div>
      </section>
      <section
        id="historico-disparos"
        className="crm-section border-y border-white/[0.08] bg-[#101e16]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-[1.15fr_1fr] md:items-end">
            <div>
              <p className="crm-eyebrow">// HISTÓRICO E RASTREAMENTO</p>
              <h2 className="crm-heading mt-4">
                Da mensagem enviada
                <br />
                <span className="text-[#86efac]">ao resultado da campanha.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              O histórico reúne o que foi disparado. As métricas mostram o que
              chegou, o que foi lido e o que virou compra, conectando a execução
              da campanha ao acompanhamento comercial.
            </p>
          </div>
          <CaptureTabs items={tracking} label="Explorar rastreamento de campanhas" />
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {[
              ["Disparo registrado", "Template, data, volume e status para consultar cada envio."],
              ["Mensagem acompanhada", "Entregas, leituras, cliques em botões e falhas disponíveis por canal."],
              ["Resultado contextualizado", "Conversões e receita com regras de atribuição e integração de vendas."],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-white/10 pt-5">
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="eventos-crm" className="crm-section">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-[1.15fr_1fr] md:items-end">
            <div>
              <p className="crm-eyebrow">// EVENTOS DE VENDAS</p>
              <h2 className="crm-heading mt-4">
                Uma ação comercial.
                <br />
                <span className="text-[#86efac]">Metas para acompanhar.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              Organize feirões, lançamentos e outras ações por período. Defina
              metas de faturamento e clientes, vincule campanhas ao evento e
              acompanhe as vendas registradas na integração com o ERP.
            </p>
          </div>
          <div className="mt-9">
            <CrmScreen capture={crmCaptures.eventos} />
          </div>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[#86efac]">
            <span>Período e lojas definidos</span>
            <span>Progresso das metas</span>
            <span>Campanhas vinculadas</span>
            <span>Público comprador para novas ações</span>
          </div>
        </div>
      </section>
    </>
  );
}
