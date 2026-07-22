import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/servicos/foundation")({
  head: () => ({
    meta: [
      { title: "WEZZEN FOUNDATION™ | Arquitetura de Marca para Atletas" },
      { name: "description", content: "Construa os fundamentos da sua marca antes que oportunidades importantes passem. Conheça o WEZZEN FOUNDATION™, a primeira etapa da metodologia proprietária da WEZZEN SPORTS™." },
      { property: "og:title", content: "WEZZEN FOUNDATION™ | Arquitetura de Marca para Atletas" },
      { property: "og:description", content: "A primeira etapa da metodologia WEZZEN™: fundamentos institucionais para atletas em construção." },
      { property: "og:url", content: "/servicos/foundation" },
    ],
    links: [{ rel: "canonical", href: "/servicos/foundation" }],
  }),
  component: FoundationPage,
});

const BUILD = [
  { t: "Diagnóstico Estratégico", d: "Análise aprofundada da percepção atual do atleta, seus objetivos e oportunidades de posicionamento." },
  { t: "Estratégia de Marca", d: "Definição dos pilares que orientarão toda a comunicação institucional." },
  { t: "Identidade Visual", d: "Construção de um sistema visual coerente, preparado para acompanhar o crescimento da carreira." },
  { t: "Presença Digital", d: "Estruturação inicial dos principais pontos de contato entre atleta, público e mercado." },
];

const FOR = [
  "estão iniciando sua construção institucional;",
  "desejam profissionalizar sua imagem;",
  "buscam maior organização da comunicação;",
  "pretendem criar uma marca preparada para crescer junto com sua carreira.",
];

const RESULTS = [
  "posicionamento claramente definido;",
  "identidade institucional consistente;",
  "linguagem visual profissional;",
  "fundamentos estratégicos documentados;",
  "base preparada para evolução futura.",
];

function FoundationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">WEZZEN FOUNDATION™</div>
            <h1 className="mt-6 text-[clamp(36px,6vw,88px)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl">
              Sua carreira já começou. Sua marca ainda não.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Resultados esportivos abrem portas. Uma marca estruturada faz com que elas permaneçam abertas.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              O WEZZEN FOUNDATION™ foi desenvolvido para atletas que desejam construir os fundamentos da sua presença institucional antes que oportunidades importantes sejam perdidas.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-primary btn-shine">Iniciar diagnóstico <ArrowRight size={14} /></Link>
              <Link to="/servicos" className="btn-ghost">Conhecer a metodologia</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problema */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">Por que começar agora?</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Esperar pelo momento certo costuma custar oportunidades.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal>
              <p>Muitos atletas acreditam que a construção da marca deve acontecer apenas quando alcançarem grande visibilidade. Na prática, é exatamente o contrário.</p>
            </Reveal>
            <Reveal delay={120}>
              <p>Quando patrocinadores, clubes, empresários ou a imprensa passam a observar um atleta, a percepção já começou a ser formada.</p>
            </Reveal>
            <Reveal delay={220}>
              <p>Quem inicia essa construção cedo desenvolve autoridade de maneira consistente e reduz a dependência exclusiva dos resultados esportivos.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O que construímos */}
      <section className="py-24">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">O que construímos</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] max-w-2xl">
              Os fundamentos da sua marca.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
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

      {/* Diferencial */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Não criamos uma identidade. Construímos uma base para toda a sua trajetória.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal>
              <p>Toda decisão desenvolvida nesta etapa servirá como referência para futuras evoluções da marca.</p>
            </Reveal>
            <Reveal delay={120}>
              <p>O objetivo não é produzir materiais isolados. É estabelecer uma estrutura consistente capaz de acompanhar o atleta por muitos anos.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-24">
        <div className="container-editorial grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="glass-panel p-10 h-full">
              <div className="eyebrow">Para quem</div>
              <h3 className="mt-4 text-2xl font-light tracking-[-0.02em]">Indicada para atletas que:</h3>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                {FOR.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-3 h-px w-4 bg-white/30 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel p-10 h-full">
              <div className="eyebrow">Resultados esperados</div>
              <h3 className="mt-4 text-2xl font-light tracking-[-0.02em]">Ao concluir esta etapa, o atleta deverá possuir:</h3>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                {RESULTS.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-3 h-px w-4 bg-white/30 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <div className="eyebrow">WEZZEN FOUNDATION™</div>
          <h2 className="mt-6 text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Toda grande marca começa pela estrutura.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            O reconhecimento conquistado dentro da competição merece uma marca preparada para sustentá-lo fora dela. Comece construindo os fundamentos certos.
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary btn-shine">Iniciar diagnóstico <ArrowRight size={14} /></Link>
            <Link to="/servicos/ascent" className="btn-ghost">Conhecer o WEZZEN ASCENT™</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
