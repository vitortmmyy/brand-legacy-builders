import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre a WEZZEN" },
  { to: "/contato", label: "Contato" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{item.label}</span>
                <span
                  className="absolute left-4 right-4 -bottom-0.5 h-px bg-white/60 transition-transform duration-500 origin-left"
                  style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
                />
              </Link>
            );
          })}
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
          maxHeight: open ? 480 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <div className="container-editorial pt-4 pb-8 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-3 text-lg border-b border-white/[0.06] text-foreground/90"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contato" className="btn-primary btn-shine mt-6 justify-center">
            Inicie agora
          </Link>
        </div>
      </div>
    </header>
  );
}
