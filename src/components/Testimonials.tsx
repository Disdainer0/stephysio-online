import { ExternalLink, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type Testimonial = {
  name: string;
  rating: number;
  date: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'V “Niky”',
    rating: 5,
    date: "Pred 4 mesiacmi",
    text: "Počas viac ako dvadsiatich rokov som navštívila desiatky fyzioterapeutov, no skutočnú úľavu som pocítila až vďaka PhDr. Simone Nosáľovej. Jej prístup je vysoko profesionálny a zároveň ľudský.",
  },
  {
    name: "Monika Sadlakova",
    rating: 5,
    date: "Pred 4 mesiacmi",
    text: "Som pravidelnou klientkou pani Simony. Profesionálny prístup, vzdelanosť, super komunikácia, čisté a príjemné prostredie. Nedávno som mala akútny problém – jedným sedením ma zbavila mojich ťažkostí. Odporúčam na 1000%.",
  },
  {
    name: "Františka O.",
    rating: 5,
    date: "Pred 6 mesiacmi",
    text: "Najlepšia fyzio pod slnkom! Profesionálny a individuálny prístup najšikovnejšej fyzioterapeutky, ktorá všetko vidí a rieši komplexne. Skvelá lokalita a krásne priestory. Môžem len odporúčiť.",
  },
  {
    name: "Ivana Jurcova",
    rating: 5,
    date: "Pred 1 rokom",
    text: "Výnimočná fyzioterapia. Pani doktorka s ľudským prístupom, ktorá neprestane, kým nenájde príčinu Vašich ťažkostí.",
  },
  {
    name: "xy xy",
    rating: 5,
    date: "Pred 7 mesiacmi",
    text: "Pani doktorku určite odporúčam. Profesionálny prístup, odborné rady, pomohla mi vyriešiť môj problém.",
  },
  {
    name: "Beáta Majorská",
    rating: 5,
    date: "Pred 7 mesiacmi",
    text: "Perfektný prístup, odbornosť a čistý priestor. Vrelo odporúčam.",
  },
];

const GOOGLE_MAPS_URL = "https://share.google/UlNQ8GHJ8cgSCHNjc";

const Testimonials = () => {
  return (
    <section id="recenzie" className="section-padding py-14 md:py-20 lg:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Google recenzie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-5">
            Recenzie našich klientov
          </h2>
          <p className="text-muted-foreground text-lg">
            Skúsenosti našich klientov, ktorí nám dôverovali pri riešení bolestí a návrate k plnohodnotnému pohybu.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <AnimatedSection key={`${review.name}-${index}`} animation="fade-up" delay={index * 80}>
              <article className="card-medical h-full bg-white/95 border border-border/70">
                <header className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-foreground text-lg leading-tight">{review.name}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{review.date}</span>
                  </div>

                  <div className="flex items-center gap-1" aria-label={`Hodnotenie ${review.rating} z 5`}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${review.name}-star-${starIndex}`}
                        className="w-4 h-4 text-[#f6b73c]"
                        fill={starIndex < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">{review.rating}/5</span>
                  </div>
                </header>

                <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">{review.text}</p>

                <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span
                    className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center"
                    aria-hidden="true"
                  >
                    G
                  </span>
                  <span>Google recenzia</span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={350}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Zobraziť viac na Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;