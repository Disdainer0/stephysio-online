import { Activity, Brain, PersonStanding } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problemCards = [
  {
    icon: PersonStanding,
    title: "Chrbtica a držanie tela",
    items: [
      "krčná chrbtica",
      "hrudná chrbtica",
      "drieková chrbtica",
      "zlé držanie tela",
      "skolióza (deti aj dospelí)",
    ],
  },
  {
    icon: Activity,
    title: "Kĺby a svaly",
    items: [
      "rameno, koleno",
      "svalové preťaženie",
      "blokády",
      "športové zranenia",
    ],
  },
  {
    icon: Brain,
    title: "Rovnováha a nervový systém",
    items: ["závraty", "vertigo", "BPPV"],
  },
];

const Problems = () => {
  return (
    <section id="problemy" className="section-padding py-14 md:py-20 lg:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-5">
            Problémy, s ktorými vám vieme pomôcť
          </h2>
          <p className="text-muted-foreground text-lg">
            V našom zariadení sa zameriavame najmä na liečbu bolestí pohybového aparátu a funkčných porúch tela.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {problemCards.map((card, index) => (
            <AnimatedSection key={card.title} animation="fade-up" delay={index * 100}>
              <article className="card-medical h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={`${card.title}-${item}`} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 bg-primary/70" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="card-medical border border-border/60 bg-background/80 backdrop-blur-[1px] text-center max-w-4xl mx-auto">
            <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-5">
              Špecializované prístupy
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Využívame aj viscerálnu manipuláciu na uvoľnenie napätia medzi orgánmi a zlepšenie ich pohyblivosti.
              Pomáha pri trávení (zápcha, reflux, nafukovanie), po operáciách, gynekologických bolestiach a bolestiach chrbtice či kĺbov.
            </p>
            <p className="text-foreground/90 font-medium mb-8">
              Cieľom terapie je nájsť príčinu problému a vrátiť vás k životu bez bolesti.
            </p>
            <a href="#objednat" className="btn-primary inline-flex items-center justify-center">
              Objednať sa na terapiu
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Problems;