import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/servicos/legacy")({
  head: () => ({
    meta: [
      { title: "WEZZEN LEGACY™ | Arquitetura de Marca para Construção de Legado" },
      { name: "description", content: "Conheça o WEZZEN LEGACY™, a etapa mais avançada da metodologia WEZZEN™, desenvolvida para transformar reconhecimento esportivo em patrimônio institucional e legado de longo prazo." },
      { property: "og:title", content: "WEZZEN LEGACY™ | Arquitetura de Marca para Construção de Legado" },
      { property: "og:description", content: "A terceira etapa da metodologia WEZZEN™: transformar reconhecimento em patrimônio institucional." },
      { property: "og:url", content: "/servicos/legacy" },
    ],
    links: [{ rel: "canonical", href: "/servicos/legacy" }],
  }),
  component: LegacyPage,
});

const JOURNEY = [
  { t: "WEZZEN FOUNDATION™", d: "Fundamentos da marca institucional.", to: "/servicos/foundation" as const },
  { t: "WEZZEN ASCENT™", d: "Da construção à autoridade percebida.", to: "/servicos/ascent" as const },
  { t: "WEZZEN LEGACY™", d: "De autoridade a patrimônio de longo prazo.", to: "/servicos/legacy" as const, active: true },
];

const BUILD = [
  { t: "Arquitetura Institucional", d: "Estrutura completa de posicionamento para longo prazo." },
  { t: "Ecossistema Editorial", d: "Construção contínua da narrativa institucional do atleta." },
  { t: "Patrimônio de Marca", d: "Ativos preparados para continuar gerando valor além das competições." },
  { t: "Relacionamento Estratégico", d: "Estrutura para fortalecer conexões com patrocinadores, organizações e parceiros." },
  { t: "Visão de Longo Prazo", d: "Cada decisão considera não apenas a próxima temporada, mas os próximos anos da carreira." },
];

const FOR = [
  "desejam construir patrimônio de marca;",
  "buscam posicionamento internacional;",
  "querem fortalecer relacionamento com patrocinadores;",
  "enxergam sua carreira como um projeto de longo prazo;",
  "desejam permanecer relevantes após a vida competitiva.",
];

function LegacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">WEZZEN LEGACY™</div>
            <h1 className="mt-6 text-[clamp(36px,6vw,88px)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl">
              Sua carreira pode terminar. Sua marca não precisa terminar junto com ela.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Todo atleta constrói resultados. Poucos constroem uma estrutura capaz de permanecer relevante quando a competição termina.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              O WEZZEN LEGACY™ foi criado para transformar reconhecimento esportivo em patrimônio institucional.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-primary btn-shine">Aplicar para WEZZEN LEGACY™ <ArrowRight size={14} /></Link>
              <Link to="/servicos" className="btn-ghost">Conhecer a metodologia</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Transição ASCENT → LEGACY */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">Última etapa</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Autoridade é importante. Legado é permanente.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal><p>Depois que sua marca conquista posicionamento e reconhecimento, surge um novo desafio: transformar essa reputação em um patrimônio capaz de continuar gerando valor durante muitos anos.</p></Reveal>
            <Reveal delay={120}><p>É exatamente isso que o WEZZEN LEGACY™ constrói.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Jornada */}
      <section className="py-24">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Jornada da metodologia</div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {JOURNEY.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <Link
                  to={s.to}
                  className="glass-panel p-8 h-full flex flex-col hover:-translate-y-1 transition-all duration-500 block"
                  style={s.active ? { background: "#fff", color: "#121212", borderColor: "transparent" } : undefined}
                >
                  <div className={`eyebrow ${s.active ? "text-background/60" : ""}`}>Etapa 0{i + 1}</div>
                  <div className="mt-4 text-lg font-medium tracking-[0.06em]">{s.t}</div>
                  <p className={`mt-3 text-sm leading-relaxed ${s.active ? "text-background/70" : "text-muted-foreground"}`}>{s.d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maior risco */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="eyebrow">O problema começa quando a carreira termina.</div>
              <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Resultados extraordinários nem sempre geram reconhecimento duradouro.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal><p>A história do esporte está repleta de atletas que conquistaram títulos importantes, mas desapareceram da percepção do mercado poucos anos depois.</p></Reveal>
            <Reveal delay={120}><p>Sem uma estrutura institucional, o reconhecimento tende a acompanhar apenas o ciclo competitivo.</p></Reveal>
            <Reveal delay={220}><p>O WEZZEN LEGACY™ existe para romper esse padrão.</p></Reveal>
          </div>
        </div>
      </section>

      {/* O que construímos */}
      <section className="py-24">
        <div className="container-editorial">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] max-w-3xl leading-[1.1]">
              Uma marca preparada para permanecer relevante.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUILD.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="glass-panel p-8 h-full">
                  <div className="text-lg font-medium">{c.t}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quando o legado começa */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Legado não começa na aposentadoria. Começa nas decisões tomadas hoje.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal><p>Esperar o encerramento da carreira para pensar em posicionamento significa perder anos de construção.</p></Reveal>
            <Reveal delay={120}><p>Os maiores patrimônios institucionais do esporte começaram muito antes do último campeonato.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Impacto de uma marca bem construída */}
      <section className="py-24">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="glass-panel p-10 h-full">
                <div className="eyebrow">Reconhecimento imediato</div>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Uma identidade sólida facilita conexões, fortalece credibilidade e amplia percepção de valor.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="glass-panel p-10 h-full">
                <div className="eyebrow">Permanência</div>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Uma marca institucional continua gerando oportunidades mesmo quando os resultados esportivos deixam de ser o centro da carreira.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="mt-12 max-w-3xl text-xl md:text-2xl font-light tracking-[-0.02em] text-foreground/90 leading-[1.3]">
              "O objetivo não é apenas ser lembrado pelo que você conquistou. É continuar sendo relevante pelo que sua marca representa."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Para quem</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em]">Indicada para atletas que:</h2>
          </Reveal>
          <ul className="mt-10 max-w-3xl space-y-4 text-lg text-muted-foreground">
            {FOR.map((r) => (
              <li key={r} className="flex gap-4"><span className="mt-4 h-px w-6 bg-white/30 shrink-0" /><span>{r}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visão de futuro */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">Muito além da próxima competição</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Sua carreira pode ter capítulos. Sua marca deve ter continuidade.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal><p>A metodologia WEZZEN™ foi construída para acompanhar todas as fases da jornada de um atleta.</p></Reveal>
            <Reveal delay={120}><p>Do início da construção da identidade até o desenvolvimento de um legado institucional capaz de atravessar gerações.</p></Reveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <div className="eyebrow">FOUNDERS EDITION</div>
          <h2 className="mt-6 text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Toda grande carreira merece um legado à sua altura.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Conquistas esportivas escrevem capítulos importantes. Uma marca institucional garante que essa história continue sendo lembrada muito depois do último resultado. Se você acredita que seu legado merece uma estrutura construída com a mesma dedicação da sua carreira, queremos conhecer sua trajetória.
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary btn-shine">Aplicar para Founders Edition <ArrowRight size={14} /></Link>
            <Link to="/servicos" className="btn-ghost">Conhecer toda a metodologia WEZZEN™</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
