import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(p);
      setShowTop(h.scrollTop > 800);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-white/70 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-background transition-all duration-500"
        style={{
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(20px)",
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <ArrowUp size={16} />
      </button>
    </>
  );
}
