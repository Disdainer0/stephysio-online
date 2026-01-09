import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light/50 via-background to-secondary/30" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Abstract medical shapes */}
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-primary/30 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-accent rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-primary/20 rounded-full hidden lg:block" />

      <div className="container-narrow mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Fyzioterapia v centre Košíc
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Odborná fyzioterapia pre{" "}
            <span className="text-primary">zdravý pohyb</span> a život bez bolesti
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Individuálny prístup, odborná diagnostika a cielená terapia. 
            Pomôžeme vám vrátiť sa k aktívnemu životu bez obmedzení.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#objednat"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Objednať sa
            </a>
            <a
              href="#kontakt"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Kontaktovať nás
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">10+</span>
              </div>
              <span className="text-sm text-muted-foreground">rokov<br />skúseností</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">2</span>
              </div>
              <span className="text-sm text-muted-foreground">odborní<br />terapeuti</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">★</span>
              </div>
              <span className="text-sm text-muted-foreground">individuálny<br />prístup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
