import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — WEZZEN SPORTS™" },
      { name: "description", content: "Planos Starter, Professional e Enterprise para atletas em diferentes momentos da jornada de posicionamento." },
      { property: "og:title", content: "Serviços — WEZZEN SPORTS™" },
      { property: "og:description", content: "Soluções estratégicas para atletas que desejam construir valor de mercado." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const PLANS = [
  {
    name: "Starter",
    price: "Sob consulta",
    tagline: "Para atletas em ascensão que precisam construir os fundamentos da marca pessoal.",
    features: [
      "Diagnóstico estratégico",
      "Territórios e arquétipo de marca",
      "Identidade visual essencial",
      "Kit digital básico",
      "Guidelines de aplicação",
    ],
  },
  {
    name: "Professional",
    price: "Sob consulta",
    tagline: "Para atletas em consolidação que buscam autoridade e patrocínios consistentes.",
    features: [
      "Tudo do Starter",
      "Sistema visual completo",
      "Website institucional",
      "Ecossistema de conteúdo",
      "Media assets premium",
      "Sponsor deck editorial",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    tagline: "Para atletas de elite global que operam como marcas institucionais.",
    features: [
      "Tudo do Professional",
      "Arquitetura de marca corporativa",
      "Produção fotográfica e audiovisual",
      "Sponsor readiness internacional",
      "Consultoria estratégica contínua",
      "Direção criativa dedicada",
    ],
  },
];

const COMPARE = [
  { row: "Diagnóstico estratégico",     s: true,  p: true,  e: true },
  { row: "Identidade visual completa",  s: false, p: true,  e: true },
  { row: "Website institucional",       s: false, p: true,  e: true },
  { row: "Media assets premium",        s: false, p: true,  e: true },
  { row: "Sponsor deck editorial",      s: false, p: true,  e: true },
  { row: "Produção audiovisual",        s: false, p: false, e: true },
  { row: "Direção criativa contínua",   s: false, p: false, e: true },
];

const FAQ = [
  { q: "Posso trocar de plano depois?", a: "Sim. Todos os planos são modulares e evoluem junto com a sua carreira." },
  { q: "Existe garantia?", a: "Trabalhamos com etapas de aprovação claras e ciclos de refinamento incluídos em todos os planos." },
  { q: "Como funciona o investimento?", a: "Após o diagnóstico apresentamos uma proposta sob medida, com opções de pagamento parcelado." },
];

function ServicosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Serviços</div>
            <h1 className="mt-6 text-[clamp(36px,6vw,88px)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl">
              Soluções estratégicas para atletas que desejam construir valor de mercado.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Cada plano foi desenvolvido para diferentes momentos da jornada de posicionamento. Escolha o ponto de partida — evolua no seu tempo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24">
        <div className="container-editorial grid md:grid-cols-3 gap-4">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`glass-panel p-10 h-full flex flex-col hover:-translate-y-1 transition-all duration-500 ${p.highlight ? "" : ""}`}
                style={p.highlight ? { background: "#fff", color: "#121212", borderColor: "transparent" } : undefined}
              >
                <div className={`eyebrow ${p.highlight ? "text-background/60" : ""}`}>{p.name}</div>
                <div className="mt-6 text-3xl font-medium">{p.price}</div>
                <p className={`mt-4 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"} leading-relaxed`}>
                  {p.tagline}
                </p>
                <ul className={`mt-10 space-y-4 text-sm ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <Link
                    to="/contato"
                    className={p.highlight
                      ? "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-background text-white text-sm font-medium w-full"
                      : "btn-ghost w-full justify-center"}
                  >
                    Solicitar diagnóstico <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparative */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Comparativo</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] max-w-xl">
              O que está incluso em cada plano.
            </h2>
          </Reveal>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-white/10 text-muted-foreground">
                  <th className="py-4 font-normal">Recurso</th>
                  <th className="py-4 font-normal text-center">Starter</th>
                  <th className="py-4 font-normal text-center">Professional</th>
                  <th className="py-4 font-normal text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.row} className="border-b border-white/[0.06]">
                    <td className="py-4">{r.row}</td>
                    <td className="py-4 text-center">{r.s ? <Check size={14} className="inline" /> : <span className="text-subtle">—</span>}</td>
                    <td className="py-4 text-center">{r.p ? <Check size={14} className="inline" /> : <span className="text-subtle">—</span>}</td>
                    <td className="py-4 text-center">{r.e ? <Check size={14} className="inline" /> : <span className="text-subtle">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em]">Perguntas frequentes.</h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            {FAQ.map((f) => (
              <Reveal key={f.q}>
                <div className="glass-panel p-6">
                  <div className="text-lg font-medium">{f.q}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <h2 className="text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Vamos agendar uma conversa e desenhar o próximo passo da sua marca?
          </h2>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary">Agendar conversa <ArrowRight size={14} /></Link>
            <Link to="/fundador" className="btn-ghost">Conheça o fundador</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
