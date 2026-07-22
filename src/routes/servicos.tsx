import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Metodologia WEZZEN™ | Soluções para Atletas" },
      { name: "description", content: "Conheça as três etapas da metodologia proprietária WEZZEN™: FOUNDATION™, ASCENT™ e LEGACY™. Soluções desenvolvidas para diferentes momentos da carreira do atleta." },
      { property: "og:title", content: "Metodologia WEZZEN™ | Soluções para Atletas" },
      { property: "og:description", content: "Três etapas para construir uma marca institucional preparada para acompanhar toda a jornada do atleta." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosLayout,
});

const SOLUTIONS = [
  {
    to: "/servicos/foundation" as const,
    label: "WEZZEN FOUNDATION™",
    stage: "Etapa 01",
    headline: "Os fundamentos da marca do atleta.",
    desc: "Para atletas que ainda não desenvolveram uma marca profissional e desejam iniciar a construção institucional antes que oportunidades importantes sejam perdidas.",
  },
  {
    to: "/servicos/ascent" as const,
    label: "WEZZEN ASCENT™",
    stage: "Etapa 02",
    headline: "Do reconhecimento à autoridade percebida.",
    desc: "Para atletas em consolidação que desejam transformar crescimento esportivo em posicionamento institucional, atraindo patrocinadores alinhados ao seu momento.",
    highlight: true,
  },
  {
    to: "/servicos/legacy" as const,
    label: "WEZZEN LEGACY™",
    stage: "Etapa 03",
    headline: "De autoridade a patrimônio institucional.",
    desc: "Para atletas de elite que enxergam a carreira como um projeto de longo prazo e desejam construir uma marca preparada para permanecer relevante muito além das competições.",
  },
];

function ServicosLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/servicos" || pathname === "/servicos/";
  return isIndex ? <ServicosIndex /> : <Outlet />;
}

function ServicosIndex() {
  return (
    <div>
      <section className="py-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Metodologia WEZZEN™</div>
            <h1 className="mt-6 text-[clamp(36px,6vw,88px)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl">
              Três etapas para construir uma marca preparada para toda a sua carreira.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Cada solução foi desenvolvida para um momento específico da trajetória do atleta. Da construção dos fundamentos até a formação de um patrimônio institucional capaz de atravessar gerações.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial grid md:grid-cols-3 gap-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.to} delay={i * 80}>
              <div
                className="glass-panel p-10 h-full flex flex-col hover:-translate-y-1 transition-all duration-500"
                style={s.highlight ? { background: "#fff", color: "#121212", borderColor: "transparent" } : undefined}
              >
                <div className={`eyebrow ${s.highlight ? "text-background/60" : ""}`}>{s.stage}</div>
                <div className="mt-6 text-lg font-medium tracking-[0.06em]">{s.label}</div>
                <h2 className={`mt-6 text-2xl font-light leading-[1.15] tracking-[-0.02em] ${s.highlight ? "" : ""}`}>
                  {s.headline}
                </h2>
                <p className={`mt-4 text-sm leading-relaxed ${s.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  {s.desc}
                </p>
                <div className="mt-12">
                  <Link
                    to={s.to}
                    className={s.highlight
                      ? "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-background text-white text-sm font-medium w-full"
                      : "btn-ghost w-full justify-center"}
                  >
                    Conhecer a solução <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <h2 className="text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Não sabe qual etapa representa o seu momento?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Iniciamos toda trajetória com um diagnóstico estratégico para identificar em qual estágio da metodologia sua marca se encontra.
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary btn-shine">Iniciar diagnóstico <ArrowRight size={14} /></Link>
            <Link to="/sobre" className="btn-ghost">Conhecer a WEZZEN</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
