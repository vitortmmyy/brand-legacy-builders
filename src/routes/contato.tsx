import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MessageCircle, Instagram, MapPin } from "lucide-react";
import { z } from "zod";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — WEZZEN SPORTS™" },
      { name: "description", content: "Vamos conversar sobre o próximo passo da sua carreira. Aplique para uma sessão de diagnóstico." },
      { property: "og:title", content: "Contato — WEZZEN SPORTS™" },
      { property: "og:description", content: "Aplique para uma sessão de diagnóstico com a WEZZEN SPORTS." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(200),
  whatsapp: z.string().trim().min(8, "Informe seu WhatsApp").max(40),
  esporte: z.string().trim().min(2, "Informe seu esporte").max(100),
  objetivo: z.string().trim().min(2, "Informe seu objetivo").max(200),
  mensagem: z.string().trim().min(10, "Escreva uma mensagem").max(2000),
});

const FAQ = [
  { q: "Qual o tempo de resposta?", a: "Respondemos aplicações em até 24h úteis." },
  { q: "Vocês têm agenda aberta?", a: "Trabalhamos com número limitado de projetos simultâneos por trimestre." },
  { q: "Aceitam atletas internacionais?", a: "Sim, atendemos globalmente em português, inglês, espanhol e francês." },
];

function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <div>
      <section className="py-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">{"\n"}</div>
            <h1 className="mt-6 text-[clamp(36px,6vw,84px)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-4xl">
              Vamos conversar sobre o próximo passo da sua carreira.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Aplicações analisadas individualmente. Se houver fit, agendamos uma sessão de diagnóstico confidencial.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-8">
            <Reveal>
              <div className="glass-panel p-8">
                <div className="eyebrow">CONTATO</div>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-center gap-4">
                    <Mail size={16} className="text-muted-foreground" />
                    <a href="mailto:wezzendesign@gmail.com" className="hover:text-foreground text-muted-foreground">wezzendesign@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <MessageCircle size={16} className="text-muted-foreground" />
                    <a href="https://wa.me/5500000000000" className="hover:text-foreground text-muted-foreground">WhatsApp{"\u00a0"} -{"\u00a0"} Fale Conosco</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Instagram size={16} className="text-muted-foreground" />
                    <a href="https://instagram.com" className="hover:text-foreground text-muted-foreground">@wezzen.sports</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <MapPin size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">São Paulo · Atendimento global</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass-panel overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 grid place-items-center text-subtle text-xs tracking-[0.3em] uppercase">
                  Mapa · São Paulo
                </div>
                <div className="absolute inset-0" style={{
                  backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.04), transparent 40%)",
                }} />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="glass-panel p-8 md:p-10 space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field name="nome" label="Nome" error={errors.nome} />
                  <Field name="email" label="E-mail" type="email" error={errors.email} />
                  <Field name="whatsapp" label="WhatsApp" error={errors.whatsapp} />
                  <Field name="esporte" label="Esporte / Modalidade" error={errors.esporte} />
                </div>
                <Field name="objetivo" label="Objetivo principal" error={errors.objetivo} />
                <Field name="mensagem" label="Mensagem" textarea error={errors.mensagem} />

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-subtle max-w-xs">Ao enviar você concorda com nossa Política de Privacidade.</p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary disabled:opacity-60"
                  >
                    {status === "loading" ? "Enviando..." : status === "success" ? "Aplicação enviada" : "Enviar aplicação"}
                    <ArrowRight size={14} />
                  </button>
                </div>
                {status === "success" && (
                  <p className="text-sm text-muted-foreground">
                    Obrigado. Recebemos sua aplicação e retornaremos em até 48h úteis.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em]">Antes de enviar.</h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="glass-panel p-6">
                <div className="text-lg font-medium">{f.q}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  name, label, type = "text", textarea = false, error,
}: {
  name: string; label: string; type?: string; textarea?: boolean; error?: string;
}) {
  const base =
    "w-full bg-transparent border-b border-white/10 focus:border-white/50 outline-none py-3 text-base placeholder:text-subtle transition-colors";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <div className="mt-2">
        {textarea ? (
          <textarea name={name} rows={4} className={base + " resize-none"} />
        ) : (
          <input name={name} type={type} className={base} />
        )}
      </div>
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
