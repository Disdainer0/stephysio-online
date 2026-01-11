import { CheckCircle, Heart, Stethoscope, Users } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Odborná diagnostika",
    description: "Presná analýza vášho stavu pomocou overených diagnostických metód.",
  },
  {
    icon: Users,
    title: "Individuálny prístup",
    description: "Každý pacient je jedinečný. Terapiu prispôsobujeme vašim potrebám.",
  },
  {
    icon: Heart,
    title: "Ľudský prístup",
    description: "Pokojné a rešpektujúce prostredie pre vašu regeneráciu.",
  },
];

const About = () => {
  return (
    <section id="o-nas" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Plus pattern */}
      <svg className="absolute top-20 right-20 w-16 h-16 text-primary/10 hidden lg:block" viewBox="0 0 40 40">
        <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-20 left-20 w-12 h-12 text-accent/15 hidden lg:block" viewBox="0 0 40 40">
        <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="2" />
      </svg>
      
      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              O našej klinike
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
              Zdravie pohybového aparátu je naša špecializácia
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              V Stephysio veríme, že kvalitná fyzioterapia začína porozumením. 
              Náš tím kombinuje odbornú diagnostiku s individuálnym prístupom, 
              aby sme vám pomohli dosiahnuť optimálny pohyb a život bez bolesti.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Využívame overené, na dôkazoch založené metódy a moderné terapeutické postupy. 
              Každá liečba je prispôsobená vašim špecifickým potrebám a cieľom.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3">
              {[
                "Evidence-based terapeutické metódy",
                "Pokojné a profesionálne prostredie",
                "Flexibilné termíny na objednávku",
                "Komplexná starostlivosť o pohybový aparát",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-medical flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
