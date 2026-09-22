import { useState, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { trackGenerateLead, pushToDataLayer } from "@/components/GoogleTagManager";
import { ACADEMY_GRUPO_PRELANCAMENTO } from "@/data/aiAcademy";

/**
 * Captura do lead antes de mandar a pessoa para o grupo de pré-lançamento
 * da primeira turma do Treinamento Claude.
 *
 * O envio é "fire and forget": se o webhook falhar ou demorar, a pessoa
 * entra no grupo do mesmo jeito. Perder um lead é menos grave do que
 * travar a porta de entrada que a página inteira promete.
 */

/* Mesmo endpoint que o Diagnóstico já usa. O campo `formulario` existe
   para o fluxo do n8n conseguir separar as duas origens. */
const WEBHOOK_URL = "https://webhook.n8n.simplidigital.dev/webhook/forms1";

const ORIGENS = [
  "Instagram",
  "Google",
  "TikTok",
  "Indicação",
  "Outros",
] as const;

/** (81) 99194-2628 — formata enquanto digita, guarda só os dígitos. */
const formatWhatsapp = (raw: string) => {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const fieldClass =
  "h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-base text-white placeholder:text-white/40 transition-colors focus:border-[#12CC1E] focus:outline-none focus:ring-2 focus:ring-[#12CC1E]/40";

const labelClass = "block text-sm font-medium text-white/80";

const PreLaunchDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [origem, setOrigem] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const digits = whatsapp.replace(/\D/g, "");
    if (nome.trim().length < 2) {
      setErro("Escreva seu nome para continuar.");
      return;
    }
    if (digits.length < 10) {
      setErro("Digite um WhatsApp com DDD, como (81) 99194-2628.");
      return;
    }
    if (!origem) {
      setErro("Conte como você descobriu o lançamento.");
      return;
    }

    setErro(null);
    setEnviando(true);

    trackGenerateLead({ dedupeKey: "ai-academy-prelancamento" });
    pushToDataLayer({
      event: "ai_academy_prelancamento",
      como_descobriu: origem,
    });

    /* Sem await: o `window.open` abaixo precisa continuar dentro do gesto
       do clique, senão o navegador bloqueia a aba. */
    void fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formulario: "ai-academy-prelancamento",
        nome: nome.trim(),
        whatsapp: digits,
        comoDescobriu: origem,
        pagina: typeof window !== "undefined" ? window.location.href : "",
        enviadoEm: new Date().toISOString(),
      }),
      keepalive: true,
    }).catch(() => {
      /* Silencioso de propósito: a entrada no grupo não depende disso. */
    });

    window.open(ACADEMY_GRUPO_PRELANCAMENTO, "_blank", "noopener,noreferrer");

    setEnviando(false);
    setOpen(false);
    setNome("");
    setWhatsapp("");
    setOrigem("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md gap-0 rounded-3xl border-white/10 bg-[#0F1A13] p-6 text-white sm:p-7 [&>button]:text-white/60 [&>button]:opacity-100 [&>button:hover]:text-white">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-bold leading-tight text-white">
            Entrar na lista de pré-lançamento
          </DialogTitle>
          <DialogDescription className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">
            A data da primeira turma é anunciada no grupo. Os 10 primeiros
            garantem o valor de R$ 297.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="prelancamento-nome" className={labelClass}>
              Nome
            </label>
            <input
              id="prelancamento-nome"
              name="nome"
              type="text"
              autoComplete="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como podemos te chamar"
              className={`mt-2 ${fieldClass}`}
            />
          </div>

          <div>
            <label htmlFor="prelancamento-whatsapp" className={labelClass}>
              WhatsApp
            </label>
            <input
              id="prelancamento-whatsapp"
              name="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))}
              placeholder="(81) 99194-2628"
              className={`mt-2 ${fieldClass}`}
            />
          </div>

          <div>
            <label htmlFor="prelancamento-origem" className={labelClass}>
              Como você descobriu o lançamento?
            </label>
            <select
              id="prelancamento-origem"
              name="origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              /* colorScheme dark faz o dropdown nativo abrir escuro
                 em vez de branco no meio da página escura. */
              style={{ colorScheme: "dark" }}
              className={`mt-2 ${fieldClass} ${origem ? "" : "text-white/40"}`}
            >
              <option value="">Selecione uma opção</option>
              {ORIGENS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {erro && (
            <p role="alert" className="text-sm font-medium text-[#F87171]">
              {erro}
            </p>
          )}

          <Button
            type="submit"
            disabled={enviando}
            className="mt-2 h-12 w-full rounded-xl border border-transparent px-6 text-base font-semibold text-[#06170A] transition-colors hover:brightness-110 disabled:opacity-70"
            style={{ backgroundColor: "#12CC1E" }}
          >
            {enviando ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Abrindo o grupo…
              </>
            ) : (
              "Entrar no grupo"
            )}
          </Button>

          <p className="text-center text-[0.8125rem] leading-relaxed text-white/50">
            Usamos seu contato só para avisar sobre a turma.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PreLaunchDialog;
