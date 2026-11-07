import { useState } from "react";
import { CrmScreen } from "./CrmScreen";
import { crmCaptures } from "./crmCaptures";

const stages = [
  {
    title: "Envie um template",
    text: "Selecione a conta conectada e a mensagem aprovada para iniciar o contato.",
    src: "/crm/campanhas.jpg",
  },
  {
    title: "Defina a espera",
    text: "Configure o intervalo antes de continuar a jornada do contato.",
    src: "/crm/campanhas-espera.jpg",
  },
  {
    title: "Aplique uma condição",
    text: "Escolha a métrica que orienta o próximo passo, como a leitura da mensagem.",
    src: "/crm/campanhas-condicao.jpg",
  },
];
export default function CrmCampaignTour() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="mt-9">
      <CrmScreen
        capture={{ ...crmCaptures.campanhas, src: stages[selected].src }}
      />
      <div
        role="group"
        aria-label="Explorar configurações reais do editor de campanhas"
        className="mt-6 grid gap-3 sm:grid-cols-3"
      >
        {stages.map((stage, index) => (
          <button
            key={stage.title}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
            className={`rounded-xl border p-5 text-left transition-colors ${selected === index ? "border-[#86efac]/40 bg-[#86efac]/[0.06]" : "border-white/10 hover:border-white/30"}`}
          >
            <span className="font-mono text-[10px] text-[#86efac]">
              0{index + 1} / {selected === index ? "NA TELA" : "EXPLORAR"}
            </span>
            <span className="mt-3 block text-sm font-medium">
              {stage.title}
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-white/65">
              {stage.text}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Captura selecionada: {stages[selected].title}
      </p>
    </div>
  );
}
