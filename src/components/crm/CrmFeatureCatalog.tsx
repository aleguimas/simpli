import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { crmFeatureSections } from "@/data/crmFeatures";

const demoIds = new Set(["simplichat", "crm-funil", "campanhas"]);
export default function CrmFeatureCatalog() {
  const [open, setOpen] = useState<string[]>([]);
  useEffect(() => {
    const revealAnchor = () => {
      const id = window.location.hash.slice(1).replace(/^detalhes-/, "");
      if (crmFeatureSections.some((section) => section.id === id))
        setOpen((current) =>
          current.includes(id) ? current : [...current, id],
        );
    };
    revealAnchor();
    window.addEventListener("hashchange", revealAnchor);
    return () => window.removeEventListener("hashchange", revealAnchor);
  }, []);
  return (
    <section
      id="recursos"
      className="crm-section border-y border-white/[0.08] bg-white/[0.015]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="crm-eyebrow">// EXPLORE A PLATAFORMA</p>
            <h2 className="crm-heading mt-4">
              Cada parte da operação.
              <br />
              <span className="text-[#86efac]">No mesmo CRM.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Abra cada área para conhecer os recursos. A configuração e as
            integrações são definidas conforme o plano e a operação da sua
            empresa.
          </p>
        </div>
        <Accordion
          type="multiple"
          value={open}
          onValueChange={setOpen}
          className="mt-10"
        >
          {crmFeatureSections.map(
            (
              {
                id,
                navLabel,
                eyebrow,
                title,
                titleHighlight,
                subtitle,
                audience,
                features,
              },
              index,
            ) => (
              <AccordionItem
                key={id}
                value={id}
                id={demoIds.has(id) ? `detalhes-${id}` : id}
                className="scroll-mt-44 border-white/10"
              >
                <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline">
                  <span className="flex flex-1 items-center gap-4 sm:gap-6">
                    <span className="font-mono text-[10px] text-[#86efac]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium sm:text-lg">
                      {navLabel}
                    </span>
                    {audience === "servicos" && (
                      <span className="ml-auto hidden rounded-full border border-white/10 px-3 py-1 text-[9px] text-white/60 sm:block">
                        PLANO SERVIÇOS
                      </span>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="crm-eyebrow mb-3">{eyebrow}</p>
                  <p className="text-xl font-medium tracking-tight">
                    {title}
                    <span className="text-[#86efac]">{titleHighlight}</span>
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                    {subtitle}
                  </p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(
                      ({ icon: Icon, title: featureTitle, description }) => (
                        <div
                          key={featureTitle}
                          className="border-t border-white/10 pt-5"
                        >
                          <Icon
                            size={19}
                            strokeWidth={1.5}
                            className="text-[#86efac]"
                            aria-hidden="true"
                          />
                          <h4 className="mt-3 text-sm font-medium">
                            {featureTitle}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-white/60">
                            {description}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </section>
  );
}
