import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.06]">
      <div className="container-editorial pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-4">
            <div className="text-[15px] font-semibold tracking-[0.14em]">
              WEZZEN<span className="text-muted-foreground font-light"> SPORTS</span>
              <sup className="text-[9px] ml-0.5 text-subtle">™</sup>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Arquitetura de marca para atletas que desejam construir legado, autoridade e valor de mercado.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4">Navegação</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/servicos" className="hover:text-foreground transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-foreground transition-colors">Sobre</Link></li>
              <li><Link to="/fundador" className="hover:text-foreground transition-colors">Fundador</Link></li>
              <li><Link to="/contato" className="hover:text-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Serviços</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Brand Strategy</li>
              <li>Visual Identity</li>
              <li>Digital Presence</li>
              <li>Sponsor Readiness</li>
              <li>Media Assets</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Contato</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="mailto:hello@wezzensports.com" className="hover:text-foreground transition-colors">hello@wezzensports.com</a></li>
              <li><a href="https://wa.me/5500000000000" className="hover:text-foreground transition-colors">WhatsApp</a></li>
              <li><a href="https://instagram.com" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li>São Paulo · Global</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-subtle">
          <p className="max-w-xl leading-relaxed">
            © {new Date().getFullYear()} WEZZEN SPORTS™. Todos os direitos reservados. Arquitetura, branding e experiência digital desenvolvidos para atletas de alta performance.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
