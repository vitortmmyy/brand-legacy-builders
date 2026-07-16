import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import founderImg from "../assets/founder.jpg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/fundador")({
  head: () => ({
    meta: [
      { title: "Fundador — WEZZEN SPORTS™" },
      { name: "description", content: "Conheça quem idealizou a WEZZEN SPORTS™ — história, experiência, filosofia e visão para o futuro da marca dos atletas." },
      { property: "og:title", content: "Fundador — WEZZEN SPORTS™" },
      { property: "og:description", content: "Conheça quem idealizou a WEZZEN SPORTS™." },
      { property: "og:url", content: "/fundador" },
    ],
    links: [{ rel: "canonical", href: "/fundador" }],
  }),
  component: FundadorPage,
});

const TIMELINE = [
  { y: "2010", t: "Início",     d: "Primeiras incursões em design editorial e branding de autor." },
  { y: "2015", t: "Consolidação", d: "Direção de arte para marcas premium e produtos culturais." },
  { y: "2020", t: "Esporte",    d: "Primeiros projetos com atletas profissionais de alto rendimento." },
  { y: "2025", t: "WEZZEN",     d: "Nasce a WEZZEN SPORTS™ como metodologia proprietária." },
];

function FundadorPage() {
  return (
    <div>
      <section className="pt-24 pb-24 border-b border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 order-2 md:order-1">
            <Reveal>
              <div className="eyebrow">Fundador</div>
              <h1 className="mt-6 text-[clamp(36px,6vw,84px)] font-light leading-[1.02] tracking-[-0.035em] text-balance">
                Conheça quem idealizou a <span className="text-muted-foreground">WEZZEN SPORTS™</span>.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Uma trajetória construída na intersecção entre design institucional, cultura editorial e esporte de alta performance.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface">
                <img
                  src={founderImg}
                  alt="Fundador da WEZZEN SPORTS"
                  loading="eager"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">História</div>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-light leading-[1.35] tracking-[-0.02em] text-balance">
              Formado no rigor do design editorial e forjado no universo do esporte de alto rendimento, o fundador da WEZZEN SPORTS™ transformou uma inquietação em metodologia — a de que atletas mereciam marcas do mesmo calibre que as instituições que os patrocinam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <div className="eyebrow">Experiência</div>
          <div className="mt-12 grid md:grid-cols-3 gap-16">
            {[
              { h: "Design editorial", p: "Direção de arte para publicações, revistas e livros de referência." },
              { h: "Branding institucional", p: "Sistemas de identidade para marcas premium e culturais." },
              { h: "Esporte de alto rendimento", p: "Projetos autorais com atletas profissionais no Brasil e no exterior." },
            ].map((b) => (
              <Reveal key={b.h}>
                <div>
                  <div className="text-xl font-medium">{b.h}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-editorial">
          <div className="eyebrow">Linha do tempo</div>
          <div className="mt-12 border-t border-white/[0.06]">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.y} delay={i * 60}>
                <div className="grid grid-cols-12 gap-6 py-8 border-b border-white/[0.06] items-baseline">
                  <div className="col-span-3 md:col-span-2 text-sm text-subtle font-mono">{t.y}</div>
                  <div className="col-span-9 md:col-span-4 text-2xl font-light tracking-tight">{t.t}</div>
                  <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground">{t.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="glass-panel p-10 h-full">
              <div className="eyebrow">Filosofia</div>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                "Marca não é decoração — é infraestrutura. Nosso trabalho é dar ao atleta o mesmo padrão de arquitetura visual que grandes instituições mundiais possuem."
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-panel p-10 h-full">
              <div className="eyebrow">Visão de futuro</div>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Elevar o padrão global de branding para atletas — construir uma nova geração de marcas esportivas com nível institucional, longevidade e valor de mercado real.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <h2 className="text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Vamos construir sua marca?
          </h2>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary">Iniciar conversa <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
