import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, Plus, Minus, Compass, Layers, Sparkles, Radio, Camera, Handshake } from "lucide-react";
import heroVideo from "../assets/hero.mp4.asset.json";
import mackenzieImg from "../assets/mackenzie.png.asset.json";
import case2 from "../assets/case-2.jpg";
import case3 from "../assets/case-3.jpg";
import { LogoMarquee } from "../components/Marquee";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WEZZEN SPORTS™ — Construímos ativos de marca para atletas" },
      { name: "description", content: "A WEZZEN SPORTS™ transforma atletas em marcas institucionais capazes de atrair patrocinadores, gerar autoridade e construir legado." },
      { property: "og:title", content: "WEZZEN SPORTS™" },
      { property: "og:description", content: "Arquitetura de marca para atletas de alta performance." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "WEZZEN SPORTS",
        description: "Arquitetura de marca para atletas de alta performance.",
        url: "/",
      }),
    }],
  }),
  component: HomePage,
});

const METHOD = [
  { icon: Compass,  title: "Brand Strategy",      desc: "Fundamentos, arquétipos e território de marca do atleta." },
  { icon: Layers,   title: "Brand Positioning",   desc: "Posicionamento único em relação ao mercado e à modalidade." },
  { icon: Sparkles, title: "Visual Identity",     desc: "Sistema visual completo — do símbolo ao ambiente gráfico." },
  { icon: Radio,    title: "Digital Presence",    desc: "Ecossistema digital coerente, editorial e escalável." },
  { icon: Camera,   title: "Media Assets",        desc: "Fotografia, vídeo e conteúdo institucional de alto nível." },
  { icon: Handshake,title: "Sponsor Readiness",   desc: "Materiais e narrativa prontos para captar patrocínios globais." },
];

const PROCESS = [
  { n: "01", title: "Diagnóstico",  desc: "Imersão profunda no atleta, mercado e potencial de marca." },
  { n: "02", title: "Estratégia",   desc: "Definição de posicionamento, narrativa e território de valor." },
  { n: "03", title: "Arquitetura",  desc: "Sistema de identidade e ecossistema visual construído do zero." },
  { n: "04", title: "Implementação",desc: "Ativação em todos os pontos de contato — do digital ao físico." },
  { n: "05", title: "Evolução",     desc: "Acompanhamento contínuo, refinamento e escala institucional." },
];

const FAQ = [
  { q: "Por que branding para atletas?", a: "Talento gera performance. Marca gera longevidade, patrocínio e patrimônio. Uma carreira esportiva é finita; uma marca bem construída dura décadas." },
  { q: "Quanto tempo leva o processo?", a: "Projetos completos variam entre 8 e 16 semanas, dependendo da complexidade do ativo e do nível de implementação desejado." },
  { q: "Posso contratar apenas identidade visual?", a: "Sim. Trabalhamos em módulos, mas recomendamos sempre partir do diagnóstico estratégico para garantir coerência." },
  { q: "Vocês atendem internacionalmente?", a: "Sim. Atendemos atletas no Brasil, Europa e Estados Unidos, em português, inglês e espanhol." },
  { q: "Como funciona o processo comercial?", a: "Após uma aplicação, realizamos uma sessão de diagnóstico. Se houver fit, elaboramos uma proposta sob medida com escopo, cronograma e investimento." },
];

function HomePage() {
  return (
    <div>
      <Hero />
      <MarqueeSection />
      <MethodSection />
      <CasesSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <ResultsSection />
      <FinalCta />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} className="relative -mt-[72px] min-h-dvh flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover hero-in"
          style={{ transform: `translate3d(0, ${y * 0.25}px, 0) scale(1.05)`, filter: "grayscale(1) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Centered wordmark removido a pedido */}

      {/* Content bottom */}
      <div className="relative container-editorial pb-24 md:pb-28 z-10">
        <div className="max-w-4xl">
          <Reveal delay={400}>
            <h1 className="text-balance text-[clamp(28px,4.4vw,58px)] leading-[1.05] font-light tracking-[-0.03em]">
              Não criamos campanhas.<br />
              <span className="text-muted-foreground">Construímos ativos de marca</span> para atletas que desejam ser lembrados.
            </h1>
          </Reveal>
          <Reveal delay={600}>
            <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] text-muted-foreground leading-relaxed">
              A WEZZEN SPORTS™ transforma atletas em marcas institucionais capazes de atrair patrocinadores, gerar autoridade e construir legado.
            </p>
          </Reveal>
          <Reveal delay={800}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contato" className="btn-primary btn-shine">
                Inicie agora <ArrowRight size={16} />
              </Link>
              <Link to="/servicos" className="btn-ghost">Conhecer o Método</Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-subtle">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

function MarqueeSection() {
  return (
    <section className="py-24 border-y border-white/[0.06]">
      <div className="container-editorial text-center">
        <Reveal>
          <div className="eyebrow">Referências</div>
          <h2 className="mt-4 text-2xl md:text-3xl font-light tracking-tight max-w-2xl mx-auto">
            Marcas e referências do universo esportivo.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            Construímos marcas preparadas para competir dentro e fora do esporte.
          </p>
        </Reveal>
      </div>
      <div className="mt-10">
        <LogoMarquee />
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="py-32">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow">O Método</div>
              <h2 className="mt-4 text-[clamp(32px,4.6vw,60px)] leading-[1.05] font-light tracking-[-0.03em] text-balance">
                O atleta já possui talento.
                <br />
                <span className="text-muted-foreground">Nós construímos o ativo.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={150}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Uma metodologia proprietária desenhada para transformar performance esportiva em patrimônio de marca duradouro.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {METHOD.map((m, i) => (
            <Reveal key={m.title} delay={i * 60}>
              <div className="glass-panel p-8 h-full transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] group">
                <m.icon size={22} className="text-foreground/80" strokeWidth={1.4} />
                <h3 className="mt-8 text-lg font-medium">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs text-muted-foreground flex items-center gap-2">
                  Saiba mais <ArrowRight size={12} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/servicos" className="btn-ghost">
            Conhecer o Método Completo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  const cases = [
    { name: "Mackenzie Dern", role: "MMA · Strawweight", img: case1 },
    { name: "Bia Mesquita",   role: "Jiu-Jitsu · Multi-Campeã Mundial", img: case3 },
    { name: "Diogo Reis",     role: "Jiu-Jitsu · ADCC Champion", img: case2 },
  ];
  return (
    <section className="py-32 border-t border-white/[0.06]">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow">Cases</div>
              <h2 className="mt-4 text-[clamp(32px,4vw,52px)] font-light tracking-[-0.03em] leading-[1.05] text-balance">
                Resultados que validam a metodologia.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="eyebrow text-white/60">{c.role}</div>
                    <div className="mt-2 text-xl font-medium">{c.name}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const plans = [
    { name: "Starter",      price: "Sob consulta", desc: "Fundamentos essenciais para atletas em ascensão.", features: ["Diagnóstico de marca", "Identidade visual base", "Presença digital inicial"] },
    { name: "Professional", price: "Sob consulta", desc: "Sistema completo para atletas em consolidação.", features: ["Estratégia integral", "Identidade visual completa", "Ecossistema digital", "Media assets"] , highlight: true },
    { name: "Enterprise",   price: "Sob consulta", desc: "Arquitetura institucional para atletas de elite global.", features: ["Metodologia completa", "Sponsor readiness", "Produção editorial", "Acompanhamento contínuo"] },
  ];
  return (
    <section className="py-32">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow">Serviços</div>
              <h2 className="mt-4 text-[clamp(32px,4vw,52px)] font-light tracking-[-0.03em] leading-[1.05] text-balance">
                Soluções para atletas que desejam construir patrimônio de marca.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`glass-panel p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-1 ${p.highlight ? "bg-white text-background" : ""}`}
                style={p.highlight ? { background: "#fff", color: "#121212", borderColor: "transparent" } : undefined}
              >
                <div className={`eyebrow ${p.highlight ? "text-background/60" : ""}`}>{p.name}</div>
                <div className="mt-4 text-2xl font-medium">{p.price}</div>
                <p className={`mt-3 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"} leading-relaxed`}>{p.desc}</p>
                <ul className={`mt-8 space-y-3 text-sm ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-2 h-px w-4 ${p.highlight ? "bg-background/40" : "bg-white/30"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    to="/servicos"
                    className={p.highlight ? "inline-flex items-center gap-2 text-sm font-medium" : "inline-flex items-center gap-2 text-sm text-foreground"}
                  >
                    Ver detalhes <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-32 border-t border-white/[0.06]">
      <div className="container-editorial">
        <Reveal>
          <div className="eyebrow">Processo</div>
          <h2 className="mt-4 text-[clamp(32px,4vw,52px)] font-light tracking-[-0.03em] leading-[1.05] max-w-2xl text-balance">
            Cinco etapas. Uma construção definitiva.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <div className="grid grid-cols-12 gap-6 py-8 md:py-10 items-baseline group hover:bg-white/[0.02] transition-colors px-2 md:px-6 -mx-2 md:-mx-6">
                <div className="col-span-2 md:col-span-1 text-sm text-subtle font-mono">{p.n}</div>
                <div className="col-span-10 md:col-span-4 text-2xl md:text-3xl font-light tracking-tight">{p.title}</div>
                <div className="col-span-12 md:col-span-6 md:col-start-7 text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32">
      <div className="container-editorial grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] font-light tracking-[-0.03em] leading-[1.05] text-balance">
              Perguntas frequentes.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Se você não encontrou o que procurava, escreva para nós.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-8 space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div className="glass-panel overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-medium">{f.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
                    style={{ maxHeight: isOpen ? 240 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="py-32 border-t border-white/[0.06]">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow">Resultados</div>
              <h2 className="mt-4 text-[clamp(32px,4vw,52px)] font-light tracking-[-0.03em] leading-[1.05] text-balance">
                Construindo uma metodologia baseada em profundidade.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={150}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A WEZZEN SPORTS™ ainda está em sua Founders Edition, mas nasce apoiada em anos de estudo, prática em branding e especialização no universo esportivo.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: "3+", label: "Anos de experiência em Design e Branding." },
            { number: "100+", label: "Projetos criativos desenvolvidos." },
            { number: "3", label: "Atletas referência profundamente estudados." },
            { number: "1", label: "Metodologia proprietária." },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="pt-6">
                <div className="text-[clamp(44px,5vw,72px)] font-light tracking-[-0.04em] leading-none">
                  {s.number}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-32">
      <div className="container-editorial">
        <Reveal>
          <div className="glass-panel px-8 md:px-16 py-20 md:py-28 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, #fff, transparent 60%)" }} />
            <div className="eyebrow">Founders Edition · Vagas limitadas</div>
            <h2 className="mt-6 text-[clamp(32px,5vw,68px)] font-light tracking-[-0.03em] leading-[1.02] max-w-3xl mx-auto text-balance">
              Pronto para construir um legado além das competições?
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
              Aplicações abertas para atletas selecionados. Processo confidencial, sob análise.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/contato" className="btn-primary btn-shine">
                Aplicar para Founders Edition <ArrowRight size={16} />
              </Link>
              <Link to="/sobre" className="btn-ghost">Sobre a WEZZEN</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
