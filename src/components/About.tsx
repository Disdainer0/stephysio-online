import { CheckCircle, Heart, Stethoscope, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clinicImage from "@/assets/clinic-interior.jpg";

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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="o-nas" ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
      />

      {/* Plus pattern */}
      <svg className="absolute top-20 right-20 w-16 h-16 text-primary/10 hidden lg:block" viewBox="0 0 40 40">
        <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-20 left-20 w-12 h-12 text-accent/15 hidden lg:block" viewBox="0 0 40 40">
        <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".3"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div style={{ y: contentY }}>
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              O našej klinike
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Zdravie pohybového aparátu je naša špecializácia
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              V Stephysio veríme, že kvalitná fyzioterapia začína porozumením.
              Náš tím kombinuje odbornú diagnostiku s individuálnym prístupom,
              aby sme vám pomohli dosiahnuť optimálny pohyb a život bez bolesti.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Využívame overené, na dôkazoch založené metódy a moderné terapeutické postupy.
              Každá liečba je prispôsobená vašim špecifickým potrebám a cieľom.
            </motion.p>

            {/* Benefits list */}
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                "Evidence-based terapeutické metódy",
                "Pokojné a profesionálne prostredie",
                "Flexibilné termíny na objednávku",
                "Komplexná starostlivosť o pohybový aparát",
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right - Image + Feature Cards */}
          <div className="space-y-6">
            {/* Clinic Image with parallax */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-medium"
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={clinicImage}
                alt="Interiér kliniky Stephysio"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-sm font-medium text-foreground">Moderné vybavenie</span>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-medical flex items-start gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
