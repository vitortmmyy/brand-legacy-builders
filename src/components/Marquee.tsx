const BRANDS = [
  "NIKE", "ADIDAS", "UFC", "GYMSHARK", "ONE FC", "PUMA", "NEW BALANCE",
  "UNDER ARMOUR", "REEBOK", "RED BULL", "MONSTER", "OAKLEY",
];

export function LogoMarquee() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div
      className="relative overflow-hidden py-10 group"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
      aria-label="Marcas e referências"
    >
      <div className="flex gap-16 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max">
        {items.map((b, i) => (
          <span
            key={i}
            className="text-[13px] tracking-[0.32em] font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
