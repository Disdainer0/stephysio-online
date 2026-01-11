import { User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "PhDr. Simona Nosáľová",
    title: "Fyzioterapeutka",
    description:
      "Špecializuje sa na terapiu chrbtice a rehabilitáciu pohybového aparátu. Individuálny prístup ku každému pacientovi.",
  },
  {
    name: "Mgr. Michal Sopiak",
    title: "Fyzioterapeut",
    description:
      "Zameriava sa na športovú rehabilitáciu a prevenciu zranení. Pomáha pacientom vrátiť sa k aktívnemu životnému štýlu.",
  },
];

const Team = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="tim" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      />

      {/* DNA helix decoration */}
      <svg className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-64 text-primary/10 hidden lg:block" viewBox="0 0 20 200">
        <path d="M10 0 Q0 25 10 50 Q20 75 10 100 Q0 125 10 150 Q20 175 10 200" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M10 0 Q20 25 10 50 Q0 75 10 100 Q20 125 10 150 Q0 175 10 200" fill="none" stroke="currentColor" strokeWidth="1" />
        {[0, 50, 100, 150].map((y, i) => (
          <line key={i} x1="5" y1={y + 25} x2="15" y2={y + 25} stroke="currentColor" strokeWidth="0.5" />
        ))}
      </svg>

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
            Náš tím
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Odborníci, ktorým môžete dôverovať
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Náš tím tvorí skúsených fyzioterapeutov s dlhoročnou praxou
            a osobným prístupom ku každému pacientovi.
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="card-medical text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Photo placeholder with pulse animation */}
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-teal-light flex items-center justify-center border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <User className="w-12 h-12 text-primary/50" />
                  
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="font-serif font-semibold text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <span className="text-primary font-medium text-sm uppercase tracking-wide block mb-4">
                  {member.title}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
