import { Activity, Bone, Dumbbell, HeartPulse, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import exerciseImage from "@/assets/exercise-therapy.jpg";

const services = [
  {
    icon: HeartPulse,
    title: "Fyzioterapia",
    description:
      "Komplexná fyzioterapeutická starostlivosť zameraná na obnovenie správnej funkcie pohybového aparátu.",
  },
  {
    icon: Bone,
    title: "Rehabilitácia pohybového aparátu",
    description:
      "Odborná rehabilitácia po úrazoch, operáciách a pri chronických problémoch.",
  },
  {
    icon: Activity,
    title: "Terapia chrbtice",
    description:
      "Špecializovaná liečba bolestí chrbta, výhrezov platničiek a porúch držania tela.",
  },
  {
    icon: Dumbbell,
    title: "Individuálne cvičenia",
    description:
      "Cvičebné programy na mieru pre posilnenie, stabilizáciu a prevenciu opakovaných problémov.",
  },
  {
    icon: Shield,
    title: "Prevencia bolesti a preťaženia",
    description:
      "Preventívne programy a poradenstvo pre aktívny život bez bolesti.",
  },
];

const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="sluzby" ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      />

      {/* Decorative circles */}
      <svg className="absolute top-10 left-10 w-20 h-20 text-primary/10 hidden md:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg className="absolute bottom-10 right-10 w-28 h-28 text-accent/10 hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4,4" />
      </svg>

      {/* Floating decorative image */}
      <motion.div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-96 rounded-2xl overflow-hidden opacity-20 hidden xl:block"
        style={{ x: imageX }}
      >
        <img src={exerciseImage} alt="" className="w-full h-full object-cover" />
      </motion.div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Naše služby
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Komplexná starostlivosť o váš pohyb
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ponúkame široké spektrum fyzioterapeutických služieb
            prispôsobených vašim individuálnym potrebám.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-medical group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#objednat" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            Objednať sa na vyšetrenie
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
