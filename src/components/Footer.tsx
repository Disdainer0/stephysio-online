import logo from "@/assets/stephysio-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and company */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={logo}
              alt="Stephysio"
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="text-primary-foreground/60 text-sm">
              Stephysio s. r. o.
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#o-nas" className="hover:text-primary-foreground transition-colors">
              O nás
            </a>
            <a href="#sluzby" className="hover:text-primary-foreground transition-colors">
              Služby
            </a>
            <a href="#kontakt" className="hover:text-primary-foreground transition-colors">
              Kontakt
            </a>
            <a href="#objednat" className="hover:text-primary-foreground transition-colors">
              Objednávka
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} Stephysio s. r. o. Všetky práva vyhradené.</p>
          <p>Odborná fyzioterapia v Košiciach</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
