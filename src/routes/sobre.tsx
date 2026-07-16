import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — WEZZEN SPORTS™" },
      { name: "description", content: "Muito além do design. Construímos arquitetura de marca para atletas de alta performance." },
      { property: "og:title", content: "Sobre — WEZZEN SPORTS™" },
      { property: "og:description", content: "Manifesto, história, missão, visão e valores da WEZZEN SPORTS." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const VALUES = [
  { t: "Precisão", d: "Cada decisão é tomada com propósito e método." },
  { t: "Autoria",  d: "Trabalhamos em profundidade, nunca em série." },
  { t: "Discrição",d: "Excelência silenciosa. O trabalho fala por nós." },
  { t: "Legado",   d: "Construímos marcas que sobrevivem à carreira esportiva." },
];

function SobrePage() {
  return (
    <div>
      <section className="py-40 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Sobre</div>
            <h1 className="mt-6 text-[clamp(40px,6.8vw,104px)] font-light leading-[0.98] tracking-[-0.04em] text-balance max-w-5xl">
              Muito além do design.
              <br />
              <span className="text-muted-foreground">Construímos arquitetura de marca.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Manifesto</div>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-2xl md:text-3xl font-light leading-[1.35] tracking-[-0.02em] text-balance">
                Acreditamos que a carreira do atleta é finita, mas a marca — quando bem construída — é eterna. A WEZZEN SPORTS™ nasce para preencher essa lacuna: transformar performance esportiva em patrimônio institucional.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-3 gap-16">
          {[
            { h: "História", p: "Nascemos da intersecção entre esporte de alto rendimento e design institucional. Uma resposta ao vácuo entre talento e marca no universo esportivo brasileiro." },
            { h: "Missão",   p: "Transformar atletas em marcas institucionais preparadas para atrair patrocínios globais, construir autoridade e escalar valor de mercado." },
            { h: "Visão",    p: "Ser referência mundial em arquitetura de marca para atletas — o padrão silencioso que separa profissionais de ícones." },
          ].map((b, i) => (
            <Reveal key={b.h} delay={i * 100}>
              <div>
                <div className="eyebrow">{b.h}</div>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed">{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Valores</div>
            <h2 className="mt-4 text-[clamp(28px,4vw,52px)] font-light tracking-[-0.03em] max-w-2xl">
              Quatro princípios inegociáveis.
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="glass-panel p-8 h-full hover:-translate-y-1 transition-transform duration-500">
                  <div className="text-xl font-medium">{v.t}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Metodologia</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em]">Um método autoral.</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Nossa metodologia é o resultado de anos investigando o cruzamento entre esporte, cultura, mídia e branding institucional. Ela combina rigor estratégico, direção editorial e execução artesanal — o oposto de agências de marketing convencionais.
            </p>
            <div className="mt-10">
              <Link to="/servicos" className="btn-ghost">Ver nosso método <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <div className="eyebrow">Fundador</div>
          <h2 className="mt-6 text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Conheça quem idealizou a WEZZEN SPORTS™.
          </h2>
          <div className="mt-10 flex justify-center">
            <Link to="/fundador" className="btn-primary">Conheça o fundador <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
