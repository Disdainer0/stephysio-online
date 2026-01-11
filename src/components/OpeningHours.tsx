import { Clock, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const OpeningHours = () => {
  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      {/* Decorative wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-8" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0 20 Q150 0 300 20 Q450 40 600 20 Q750 0 900 20 Q1050 40 1200 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-8" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0 20 Q150 40 300 20 Q450 0 600 20 Q750 40 900 20 Q1050 0 1200 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
        </svg>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-4 left-1/4 w-2 h-2 bg-primary-foreground/20 rounded-full"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 right-1/4 w-3 h-3 bg-primary-foreground/15 rounded-full"
        animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-accent/40 rounded-full hidden md:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="container-narrow mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Opening hours */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-primary-foreground/70 text-sm block">
                Pondelok – Piatok
              </span>
              <span className="font-serif font-semibold text-xl">
                8:00 – 18:00
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Weekend */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <span className="text-primary-foreground/70 text-sm block">
                Sobota – Nedeľa
              </span>
              <span className="font-serif font-semibold text-xl">
                Zatvorené
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Note */}
          <motion.div
            className="flex items-center gap-3 px-5 py-3 bg-primary-foreground/10 rounded-xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium">Na objednávku</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpeningHours;
