import { Activity, Bone, Dumbbell, HeartPulse, Shield, Hand } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: HeartPulse,
    title: "Fyzioterapeutické vyšetrenie",
    description:
      "Komplexné vyšetrenie pohybového aparátu, analýza držania tela a pohybových stereotypov. Na základe vyšetrenia nastavíme individuálny rehabilitačný plán.",
  },
  {
    icon: Bone,
    title: "Rehabilitácia po úrazoch a operáciách",
    description:
      "Rehabilitácia po športových úrazoch, operáciách kolena, ramena alebo chrbtice. Cieľom je bezpečný návrat k bežným aktivitám a športu.",
  },
  {
    icon: Activity,
    title: "Fyzioterapia bolestí chrbta",
    description:
      "Terapia pri bolestiach krčnej, hrudnej a driekovej chrbtice, blokádach chrbtice, výhřezoch platničiek a poruchách držania tela.",
  },
  {
    icon: Dumbbell,
    title: "Individuálne cvičenia",
    description:
      "Individuálne cvičenia zamerané na stabilitu, mobilitu a správnu funkciu svalov. Program je prispôsobený potrebám každého pacienta.",
  },
  {
    icon: Shield,
    title: "Športová fyzioterapia",
    description:
      "Prevencia zranení, liečba preťaženia svalov a kĺbov a optimalizácia pohybových stereotypov u športovcov.",
  },
  
];

const Services = () => {
  return (
    <section id="sluzby" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
      
      {/* Decorative circles */}
      <svg className="absolute top-10 left-10 w-20 h-20 text-primary/10 hidden md:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg className="absolute bottom-10 right-10 w-28 h-28 text-accent/10 hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4,4" />
      </svg>
      
      {/* Additional decorative elements */}
      <svg className="absolute bottom-1/4 right-1/3 w-12 h-12 text-accent/10 hidden md:block" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
      </svg>
      
      {/* Floating dots pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Naše služby
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Komplexná starostlivosť o váš pohyb
          </h2>
          <p className="text-muted-foreground text-lg">
            Ponúkame široké spektrum fyzioterapeutických služieb 
            prispôsobených vašim individuálnym potrebám.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale" 
              delay={index * 100}
            >
              <div className="card-medical group cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={500}>
          <a href="#objednat" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            Objednať sa na vyšetrenie
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
