import { Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { CrmCapture } from "./crmCaptures";

export function CrmScreen({
  capture,
  priority = false,
  children,
  onExpand,
}: {
  capture: CrmCapture;
  priority?: boolean;
  children?: React.ReactNode;
  onExpand?: () => void;
}) {
  return (
    <figure className="crm-screen overflow-hidden rounded-2xl border border-white/15 bg-[#101c14] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
        <span className="flex items-center gap-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <i className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </span>
          <span className="text-[10px] text-white/65">Simplí CRM</span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#86efac]">
          {capture.title}
        </span>
      </div>
      <div className="relative overflow-hidden bg-[#f8faf9]">
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet={capture.src.replace(/\.jpg$/, "-detail.jpg")}
          />
          <img
            key={capture.src}
            src={capture.src}
            alt={capture.alt}
            width={1280}
            height={800}
            loading={priority ? "eager" : "lazy"}
            className="crm-capture crm-frame-enter block aspect-[4/3] w-full object-cover sm:aspect-[8/5]"
            style={{ objectPosition: capture.position || "center" }}
          />
        </picture>
        {children}
        <Dialog
          onOpenChange={(open) => {
            if (open) onExpand?.();
          }}
        >
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label={`Ampliar ${capture.title}`}
              className="absolute bottom-3 right-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-[#0b1711]/95 px-4 text-[10px] font-medium text-white shadow-lg transition-colors hover:bg-[#183c27]"
            >
              <Maximize2 size={13} aria-hidden="true" />
              Ampliar tela
            </button>
          </DialogTrigger>
          <DialogContent className="crm-capture-dialog max-h-[94dvh] w-[96vw] max-w-[1500px] overflow-auto border-white/15 bg-[#0c1710] p-4 text-white motion-reduce:animate-none sm:max-w-[1500px] sm:p-6">
            <DialogHeader>
              <DialogTitle>{capture.title} · Simplí CRM</DialogTitle>
              <DialogDescription className="text-white/65">
                Interface do aplicativo com dados de demonstração. Role dentro
                da imagem para explorar os detalhes.
              </DialogDescription>
            </DialogHeader>
            <div
              className="max-h-[72dvh] overflow-auto rounded-lg"
              role="region"
              aria-label={`Tela ampliada de ${capture.title}; role para explorar`}
              tabIndex={0}
            >
              <img
                src={capture.src}
                alt={capture.alt}
                width={1280}
                height={800}
                className="h-auto w-full min-w-[1200px]"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-[10px] text-white/60 sm:px-5">
        <span>Interface do CRM · dados de demonstração</span>
        <span className="font-mono text-[9px] text-white/50">
          {capture.title}
        </span>
      </figcaption>
    </figure>
  );
}
