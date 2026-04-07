import { Brain, Hand, Move3d, ActivitySquare, Waves } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const methods = [
  {
    icon: Hand,
    title: "Manuálna terapia",
    description:
      "Mäkké techniky, mobilizácie, trakcie a ošetrenie trigger pointov pre uvoľnenie napätia a zlepšenie funkcie pohybového aparátu.",
  },
  {
    icon: Move3d,
    title: "Viscerálna manipulácia",
    description:
      "Jemné manuálne techniky zamerané na obnovenie pohyblivosti vnútorných štruktúr a ich prepojenia s pohybovým systémom.",
  },
  {
    icon: Waves,
    title: "Vestibulárna rehabilitácia",
    description:
      "Cielená terapia pri závratoch, poruchách rovnováhy a neistote v pohybe s dôrazom na bezpečný návrat do bežného života.",
  },
  {
    icon: ActivitySquare,
    title: "McKenzie (MDT)",
    description:
      "Mechanická diagnostika a terapia u pacientov s problémami chrbtice, krku a končatín, postavená na overených klinických postupoch.",
  },
  {
    icon: Brain,
    title: "DNS podľa Kolářa",
    description:
      "Dynamická neuromuskulárna stabilizácia slúžiaca na diagnostiku a terapiu funkčných porúch pohybového systému prostredníctvom obnovy vývojových pohybových vzorov.",
  },
];

const Methods = () => {
  return (
    <section id="metody" className="section-padding py-14 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Metódy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Metódy, ktoré používame
          </h2>
          <p className="text-muted-foreground text-lg">
            Pracujeme s overenými fyzioterapeutickými postupmi, ktoré kombinujeme podľa vašich potrieb a aktuálneho zdravotného stavu.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {methods.map((method, index) => (
            <AnimatedSection
              key={method.title}
              animation="fade-up"
              delay={index * 90}
              className={index === methods.length - 1 ? "md:col-span-2 lg:col-span-6" : "md:col-span-1 lg:col-span-3"}
            >
              <article className="card-medical h-full bg-white/95 border border-border/70">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;