import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/servicos/ascent")({
  head: () => ({
    meta: [
      { title: "WEZZEN ASCENT™ | Posicionamento Estratégico para Atletas" },
      { name: "description", content: "Transforme crescimento esportivo em autoridade, percepção de valor e posicionamento institucional com o WEZZEN ASCENT™, a segunda etapa da metodologia proprietária WEZZEN™." },
      { property: "og:title", content: "WEZZEN ASCENT™ | Posicionamento Estratégico para Atletas" },
      { property: "og:description", content: "A segunda etapa da metodologia WEZZEN™: da construção interna à percepção de mercado." },
      { property: "og:url", content: "/servicos/ascent" },
    ],
    links: [{ rel: "canonical", href: "/servicos/ascent" }],
  }),
  component: AscentPage,
});

const CHANGES = [
  { t: "Percepção", d: "Sua comunicação passa a transmitir profissionalismo em todos os pontos de contato." },
  { t: "Consistência", d: "Todos os ativos começam a trabalhar na mesma direção estratégica." },
  { t: "Autoridade", d: "Sua marca passa a gerar confiança antes mesmo da primeira conversa." },
  { t: "Valor percebido", d: "Você deixa de competir apenas por resultados e passa a competir também por posicionamento." },
];

const CHALLENGES = [
  "Resultados relevantes, mas pouca percepção de valor.",
  "Comunicação inconsistente entre redes sociais, identidade e materiais.",
  "Dificuldade para atrair patrocinadores alinhados ao seu momento.",
  "Falta de posicionamento claro diante do mercado.",
  "Crescimento esportivo maior do que o crescimento da própria marca.",
];

const BUILD = [
  { t: "Sistema completo de Identidade", d: "Expansão da identidade institucional para todos os ativos da marca." },
  { t: "Ecossistema Digital", d: "Website, presença digital e arquitetura editorial integrados." },
  { t: "Media Assets", d: "Conteúdo institucional preparado para fortalecer autoridade." },
  { t: "Sponsor Readiness", d: "Materiais desenvolvidos para relacionamento com patrocinadores." },
  { t: "Estratégia Contínua", d: "Acompanhamento da evolução da comunicação da marca." },
];

const PERFORMANCE = ["gera medalhas;", "conquista títulos;", "melhora rankings;", "impulsiona resultados."];
const PERCEPCAO = ["fortalece autoridade;", "aproxima patrocinadores;", "amplia reconhecimento;", "aumenta valor de mercado."];

const FOR = [
  "já possuem resultados relevantes;",
  "desejam fortalecer autoridade;",
  "buscam patrocinadores de maior nível;",
  "pretendem consolidar posicionamento profissional;",
  "entendem que crescimento exige estrutura.",
];

function AscentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 border-b border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">WEZZEN ASCENT™</div>
            <h1 className="mt-6 text-[clamp(36px,6vw,88px)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl">
              Quando sua performance evolui, sua marca também precisa evoluir.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Existe um momento em que talento deixa de ser suficiente.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              À medida que a carreira cresce, patrocinadores, organizações, imprensa e público passam a avaliar muito mais do que resultados esportivos.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              O WEZZEN ASCENT™ transforma crescimento esportivo em posicionamento institucional.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-primary btn-shine">Aplicar para WEZZEN ASCENT™ <ArrowRight size={14} /></Link>
              <Link to="/servicos" className="btn-ghost">Conhecer a metodologia</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Transição FOUNDATION → ASCENT */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">Próxima etapa</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Os fundamentos foram construídos. Agora começa a evolução.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal>
              <p>O FOUNDATION™ estabelece as bases da marca.</p>
            </Reveal>
            <Reveal delay={120}>
              <p>O ASCENT™ amplia essa estrutura para que o mercado passe a enxergar o atleta com o mesmo nível de profissionalismo que ele demonstra dentro das competições.</p>
            </Reveal>
            <Reveal delay={220}>
              <p>Nesta etapa, percepção passa a ser tão importante quanto performance.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O que muda nesta etapa */}
      <section className="py-24">
        <div className="container-editorial">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] max-w-3xl leading-[1.1]">
              Você deixa de apenas construir uma marca. Agora começa a construir autoridade.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {CHANGES.map((c, i) => (
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

      {/* Principais desafios */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <div className="eyebrow">Talvez você esteja vivendo exatamente este momento.</div>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Muitos atletas alcançam um excelente nível esportivo, mas continuam enfrentando dificuldades para transformar esse desempenho em oportunidades concretas.
            </p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c} delay={i * 60}>
                <div className="glass-panel p-8 h-full text-muted-foreground leading-relaxed">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por que muitos atletas ficam estagnados */}
      <section className="py-24">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                O problema raramente é talento.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal>
              <p>A maioria dos atletas acredita que o próximo resultado resolverá todos os desafios da carreira.</p>
            </Reveal>
            <Reveal delay={120}>
              <p>Na prática, muitos continuam invisíveis para oportunidades porque sua comunicação permanece no mesmo estágio em que estavam anos atrás.</p>
            </Reveal>
            <Reveal delay={220}>
              <p>O mercado não avalia apenas desempenho. Ele avalia percepção, consistência e profissionalismo.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Performance × Percepção */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] max-w-3xl leading-[1.1]">
              Performance conquista resultados. Percepção conquista oportunidades.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="glass-panel p-10 h-full">
                <div className="eyebrow">Performance</div>
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  {PERFORMANCE.map((r) => (
                    <li key={r} className="flex gap-3"><span className="mt-3 h-px w-4 bg-white/30 shrink-0" /><span>{r}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="glass-panel p-10 h-full">
                <div className="eyebrow">Percepção</div>
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  {PERCEPCAO.map((r) => (
                    <li key={r} className="flex gap-3"><span className="mt-3 h-px w-4 bg-white/30 shrink-0" /><span>{r}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="mt-12 max-w-3xl text-xl md:text-2xl font-light tracking-[-0.02em] text-foreground/90 leading-[1.3]">
              "As maiores marcas esportivas unem performance e percepção. Nunca apenas uma delas."
            </p>
          </Reveal>
        </div>
      </section>

      {/* O que construímos */}
      <section className="py-24">
        <div className="container-editorial">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] max-w-3xl leading-[1.1]">
              Uma estrutura preparada para acompanhar o crescimento da sua carreira.
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

      {/* Por que patrocinadores escolhem */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Patrocínio começa muito antes da negociação.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal><p>Empresas procuram atletas capazes de representar seus valores com consistência.</p></Reveal>
            <Reveal delay={100}><p>Uma marca organizada transmite segurança. Uma comunicação estratégica facilita conexões. Uma identidade institucional reduz riscos de percepção.</p></Reveal>
            <Reveal delay={200}><p>Por isso, patrocinadores avaliam muito mais do que resultados esportivos.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-24">
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

      {/* Transição para LEGACY */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">Próxima etapa</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-[-0.03em] leading-[1.1]">
                Quando autoridade já foi construída... o próximo passo é transformá-la em patrimônio.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <Reveal><p>O WEZZEN ASCENT™ prepara sua marca para crescer.</p></Reveal>
            <Reveal delay={120}><p>O WEZZEN LEGACY™ prepara sua marca para permanecer relevante durante toda a sua trajetória profissional e muito além dela.</p></Reveal>
            <Reveal delay={220}>
              <Link to="/servicos/legacy" className="btn-ghost mt-4">Conhecer o WEZZEN LEGACY™ <ArrowRight size={14} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <div className="container-editorial glass-panel px-8 md:px-16 py-20 text-center">
          <div className="eyebrow">WEZZEN ASCENT™</div>
          <h2 className="mt-6 text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.03em] max-w-3xl mx-auto text-balance">
            Sua carreira está crescendo. Sua marca precisa acompanhar esse ritmo.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Grandes oportunidades surgem para atletas preparados. Mais do que performance, o mercado procura profissionalismo, consistência e autoridade. Se este é o momento da sua carreira, queremos conhecer sua trajetória.
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contato" className="btn-primary btn-shine">Aplicar para WEZZEN ASCENT™ <ArrowRight size={14} /></Link>
            <Link to="/servicos/legacy" className="btn-ghost">Conhecer o WEZZEN LEGACY™</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
