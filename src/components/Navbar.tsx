import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const SOLUTIONS = [
  { to: "/servicos/foundation" as const, label: "WEZZEN FOUNDATION™", desc: "Fundamentos da marca institucional." },
  { to: "/servicos/ascent" as const,     label: "WEZZEN ASCENT™",     desc: "Da construção à autoridade percebida." },
  { to: "/servicos/legacy" as const,     label: "WEZZEN LEGACY™",     desc: "De autoridade a patrimônio de marca." },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const servicesActive = pathname.startsWith("/servicos");

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        paddingBlock: scrolled ? 10 : 18,
        background: scrolled ? "rgba(18,18,18,0.72)" : "rgba(18,18,18,0.28)",
        backdropFilter: "blur(22px) saturate(160%)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px -20px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <nav className="container-editorial flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="WEZZEN SPORTS home">
          <span className="text-[15px] font-semibold tracking-[0.14em]">
            WEZZEN<span className="text-muted-foreground font-light"> SPORTS</span>
            <sup className="text-[9px] ml-0.5 text-subtle">™</sup>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="relative px-4 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Home</span>
            <span
              className="absolute left-4 right-4 -bottom-0.5 h-px bg-white/60 transition-transform duration-500 origin-left"
              style={{ transform: pathname === "/" ? "scaleX(1)" : "scaleX(0)" }}
            />
          </Link>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              className="relative px-4 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <span>Serviços</span>
              <ChevronDown size={13} style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform .3s" }} />
              <span
                className="absolute left-4 right-8 -bottom-0.5 h-px bg-white/60 transition-transform duration-500 origin-left"
                style={{ transform: servicesActive ? "scaleX(1)" : "scaleX(0)" }}
              />
            </button>

            <div
              role="menu"
              className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
              style={{
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? "auto" : "none",
                transform: `translateX(-50%) translateY(${servicesOpen ? 0 : -6}px)`,
                transition: "opacity .28s ease, transform .28s ease",
              }}
            >
              <div
                className="min-w-[340px] rounded-2xl p-3"
                style={{
                  background: "rgba(18,18,18,0.92)",
                  backdropFilter: "blur(22px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
                }}
              >
                {SOLUTIONS.map((s) => {
                  const active = pathname === s.to;
                  return (
                    <Link
                      key={s.to}
                      to={s.to}
                      role="menuitem"
                      className="block px-4 py-3 rounded-xl transition-colors"
                      style={{ background: active ? "rgba(255,255,255,0.05)" : "transparent" }}
                    >
                      <div className="text-[13px] font-medium tracking-[0.06em] text-foreground">{s.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                    </Link>
                  );
                })}
                <Link
                  to="/servicos"
                  role="menuitem"
                  className="block px-4 py-3 mt-1 rounded-xl text-xs text-muted-foreground hover:text-foreground border-t border-white/[0.06]"
                >
                  Ver toda a metodologia →
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/sobre"
            className="relative px-4 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Sobre a WEZZEN</span>
            <span
              className="absolute left-4 right-4 -bottom-0.5 h-px bg-white/60 transition-transform duration-500 origin-left"
              style={{ transform: pathname.startsWith("/sobre") ? "scaleX(1)" : "scaleX(0)" }}
            />
          </Link>

          <Link
            to="/contato"
            className="relative px-4 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Contato</span>
            <span
              className="absolute left-4 right-4 -bottom-0.5 h-px bg-white/60 transition-transform duration-500 origin-left"
              style={{ transform: pathname.startsWith("/contato") ? "scaleX(1)" : "scaleX(0)" }}
            />
          </Link>
        </div>

        <div className="hidden md:block">
          <Link to="/contato" className="btn-primary btn-shine text-[13px] py-2.5 px-5">
            Inicie agora
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-[max-height,opacity] duration-500"
        style={{
          maxHeight: open ? 720 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <div className="container-editorial pt-4 pb-8 flex flex-col gap-1">
          <Link to="/" className="py-3 text-lg border-b border-white/[0.06] text-foreground/90">Home</Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
            className="py-3 text-lg border-b border-white/[0.06] text-foreground/90 flex items-center justify-between"
          >
            <span>Serviços</span>
            <ChevronDown size={16} style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform .3s" }} />
          </button>
          <div
            className="overflow-hidden transition-[max-height,opacity] duration-500"
            style={{ maxHeight: mobileServicesOpen ? 360 : 0, opacity: mobileServicesOpen ? 1 : 0 }}
          >
            <div className="pl-4 flex flex-col">
              {SOLUTIONS.map((s) => (
                <Link key={s.to} to={s.to} className="py-3 text-sm text-muted-foreground border-b border-white/[0.04]">
                  {s.label}
                </Link>
              ))}
              <Link to="/servicos" className="py-3 text-xs text-subtle">
                Ver toda a metodologia →
              </Link>
            </div>
          </div>

          <Link to="/sobre" className="py-3 text-lg border-b border-white/[0.06] text-foreground/90">Sobre a WEZZEN</Link>
          <Link to="/contato" className="py-3 text-lg border-b border-white/[0.06] text-foreground/90">Contato</Link>

          <Link to="/contato" className="btn-primary btn-shine mt-6 justify-center">
            Inicie agora
          </Link>
        </div>
      </div>
    </header>
  );
}
