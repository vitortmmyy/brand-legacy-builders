import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import founderImg from "../assets/founder.jpg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a WEZZEN — WEZZEN SPORTS™" },
      { name: "description", content: "Muito além do design. Construímos arquitetura de marca para atletas — transformando talento esportivo em patrimônio institucional." },
      { property: "og:title", content: "Sobre a WEZZEN — WEZZEN SPORTS™" },
      { property: "og:description", content: "Manifesto, história, metodologia proprietária e fundador da WEZZEN SPORTS™." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const VALUES = [
  { t: "Precisão",  d: "Cada decisão de marca é tomada com método, propósito e rigor estratégico." },
  { t: "Autoria",   d: "Trabalhamos em profundidade — projetos únicos, nunca em série." },
  { t: "Discrição", d: "Excelência silenciosa. A marca do atleta é sempre a protagonista." },
  { t: "Legado",    d: "Construímos ativos institucionais preparados para durar além da carreira." },
];

const TIMELINE = [
  { y: "2021", d: "Primeiros estudos em branding institucional e design editorial." },
  { y: "2023", d: "Consolidação da atuação em identidade institucional." },
  { y: "2024", d: "Especialização em branding aplicado ao esporte." },
  { y: "2025", d: "Nascimento da metodologia WEZZEN™." },
  { y: "2026", d: "Estruturação completa do ecossistema WEZZEN SPORTS™." },
];

function scrollToFounder(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById("fundador");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SobrePage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-40 pb-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">SOBRE A WEZZEN SPORTS™</div>
            <h1 className="mt-6 text-[clamp(40px,6.8vw,104px)] font-light leading-[0.98] tracking-[-0.04em] text-balance max-w-5xl">
              Muito além do design.
              <br />
              <span className="text-muted-foreground">Construímos arquitetura de marca para atletas.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Enquanto muitos enxergam identidade visual como o ponto de chegada, nós a tratamos como apenas uma das peças de um sistema muito maior.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A WEZZEN SPORTS™ nasceu para transformar atletas em marcas institucionais capazes de construir autoridade, atrair oportunidades e permanecer relevantes muito depois do último campeonato.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link to="/servicos" className="btn-primary btn-shine">
                Conhecer nossa metodologia <ArrowRight size={14} />
              </Link>
              <a href="#fundador" onClick={scrollToFounder} className="btn-ghost">
                Conhecer o fundador
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Manifesto</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.05]">
              Performance constrói resultados.
              <br />
              <span className="text-muted-foreground">Marcas constroem legado.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-2xl md:text-3xl font-light leading-[1.35] tracking-[-0.02em] text-balance">
                A carreira de um atleta é limitada pelo tempo. Sua marca não precisa ser.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Acreditamos que todo atleta de alto nível merece uma estrutura de posicionamento equivalente à qualidade da sua performance. Por isso desenvolvemos uma metodologia própria capaz de transformar talento esportivo em patrimônio institucional.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Nosso trabalho não é produzir campanhas. É construir ativos de marca preparados para acompanhar toda a trajetória profissional do atleta.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Nossa história</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
              Uma resposta para uma lacuna do esporte.
            </h2>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A WEZZEN SPORTS™ surgiu ao observar uma realidade recorrente no esporte profissional. Atletas extraordinários conquistavam títulos, reconhecimento e visibilidade, mas permaneciam sem uma estrutura de marca capaz de transformar essas conquistas em oportunidades duradouras.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Enquanto grandes instituições investem continuamente em posicionamento, identidade e percepção, muitos atletas ainda dependem exclusivamente da performance esportiva para permanecer relevantes.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Foi dessa diferença que nasceu a WEZZEN. Uma empresa construída para desenvolver arquitetura de marca voltada exclusivamente ao universo esportivo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSÃO • VISÃO • VALORES */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-3 gap-16">
          {[
            { h: "Missão", p: "Transformar atletas em marcas institucionais preparadas para gerar autoridade, atrair patrocinadores e construir valor de mercado." },
            { h: "Visão",  p: "Ser referência internacional em arquitetura de marca para atletas, elevando o padrão do branding esportivo ao nível das grandes instituições globais." },
            { h: "Valores", p: "Quatro princípios inegociáveis que orientam cada decisão da WEZZEN SPORTS™." },
          ].map((b, i) => (
            <Reveal key={b.h} delay={i * 100}>
              <div>
                <div className="eyebrow">{b.h}</div>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed">{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-editorial mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="glass-panel p-8 h-full hover:-translate-y-1 transition-transform duration-500">
                <div className="text-xl font-medium">{v.t}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Metodologia Proprietária</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
              Antes da execução, existe estratégia.
            </h2>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A metodologia WEZZEN™ nasceu da convergência entre branding institucional, cultura editorial, design estratégico e esporte de alto rendimento.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Cada projeto percorre um processo estruturado de investigação, posicionamento e construção de ativos de marca.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Não começamos pelo logotipo. Começamos entendendo quem o atleta é, como deseja ser percebido e qual patrimônio pretende construir ao longo da carreira.
              </p>
            </Reveal>
            <div className="mt-10">
              <Link to="/servicos" className="btn-ghost">Conhecer nossas soluções <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO */}
      <section className="py-24">
        <div className="container-editorial">
          <Reveal>
            <div className="hairline" />
          </Reveal>
        </div>
      </section>

      {/* FUNDADOR */}
      <section id="fundador" className="pt-8 pb-24 border-b border-white/[0.06] scroll-mt-24">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 order-2 md:order-1">
            <Reveal>
              <div className="eyebrow">Fundador</div>
              <h2 className="mt-6 text-[clamp(32px,5.2vw,72px)] font-light leading-[1.02] tracking-[-0.035em] text-balance">
                Conheça quem idealizou a <span className="text-muted-foreground">WEZZEN SPORTS™</span>.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                A WEZZEN SPORTS™ nasceu da inquietação de transformar branding em infraestrutura para atletas.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Seu fundador reúne experiência em design estratégico, construção de identidades institucionais e pesquisa contínua sobre posicionamento esportivo.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Ao longo dessa trajetória percebeu que atletas precisavam de muito mais do que materiais gráficos. Precisavam de um sistema capaz de transformar reputação em patrimônio.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Essa visão deu origem à metodologia WEZZEN™.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface">
                <img
                  src={founderImg}
                  alt="Fundador da WEZZEN SPORTS"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <div className="eyebrow">Experiência</div>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { h: "Branding Institucional", p: "Construção de sistemas de identidade com rigor estratégico e consistência de longo prazo." },
              { h: "Design Editorial",       p: "Direção visual apoiada em cultura editorial, tipografia e narrativa institucional." },
              { h: "Estratégia para Atletas", p: "Posicionamento aplicado ao esporte de alto rendimento, orientado a autoridade e legado." },
            ].map((b, i) => (
              <Reveal key={b.h} delay={i * 100}>
                <div className="glass-panel p-8 h-full hover:-translate-y-1 transition-transform duration-500">
                  <div className="text-xl font-medium">{b.h}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="py-32">
        <div className="container-editorial">
          <div className="eyebrow">Linha do tempo</div>
          <div className="mt-12 border-t border-white/[0.06]">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.y} delay={i * 60}>
                <div className="grid grid-cols-12 gap-6 py-8 border-b border-white/[0.06] items-baseline">
                  <div className="col-span-3 md:col-span-2 text-sm text-subtle font-mono">{t.y}</div>
                  <div className="col-span-9 md:col-span-10 text-lg md:text-xl font-light tracking-tight text-muted-foreground">{t.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA + VISÃO DE FUTURO */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="glass-panel p-10 h-full">
              <div className="eyebrow">Nossa filosofia</div>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                "Resultados conquistam reconhecimento. Marcas conquistam permanência. Nosso trabalho é desenvolver estruturas capazes de transformar conquistas esportivas em patrimônio institucional."
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel p-10 h-full">
              <div className="eyebrow">Visão de futuro</div>
              <h3 className="mt-6 text-2xl md:text-3xl font-light leading-[1.15] tracking-[-0.02em]">
                Construindo o próximo padrão do branding esportivo.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Nosso objetivo não é apenas desenvolver marcas. É elevar o padrão do branding para atletas, aproximando sua comunicação institucional da qualidade encontrada nas maiores organizações do mundo. Cada projeto representa um passo nessa direção.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <div className="eyebrow">FOUNDERS EDITION</div>
          <h2 className="mt-6 text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Sua história já começou.
            <br />
            <span className="text-muted-foreground">Agora é hora de construir a marca que irá representá-la.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Toda grande carreira merece uma estrutura capaz de acompanhar sua evolução. Se você acredita que sua marca deve crescer na mesma velocidade da sua performance, queremos conhecer sua história.
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary btn-shine">
              Aplicar para Founders Edition <ArrowRight size={14} />
            </Link>
            <Link to="/servicos" className="btn-ghost">Conhecer nossas soluções</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
