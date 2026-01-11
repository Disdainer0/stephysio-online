import { ArrowRight, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SpineDecor from "./SpineDecor";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 z-10" />
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light/50 via-background/80 to-secondary/30 z-[1]" />

      {/* Spine decoration */}
      <SpineDecor side="right" className="hidden lg:block z-[2]" />

      {/* Decorative shapes with parallax */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-[1]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl z-[1]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
      />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl z-[1]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary/40 rounded-full z-[2]"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/60 rounded-full z-[2]"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary/30 rounded-full z-[2]"
        animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-20 z-[1]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Decorative SVG circles */}
      <svg className="absolute top-32 left-10 w-24 h-24 text-primary/15 hidden md:block z-[2]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8,4" />
      </svg>
      <svg className="absolute bottom-32 right-1/4 w-32 h-32 text-accent/25 hidden lg:block z-[2]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <motion.div
        className="container-narrow mx-auto px-4 md:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Fyzioterapia v centre Košíc
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Odborná fyzioterapia pre{" "}
            <span className="text-primary relative">
              zdravý pohyb
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 7 Q50 0 100 4 Q150 8 200 2" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary/30" />
              </svg>
            </span>{" "}
            a život bez bolesti
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Individuálny prístup, odborná diagnostika a cielená terapia.
            Pomôžeme vám vrátiť sa k aktívnemu životu bez obmedzení.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#objednat"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Objednať sa
            </a>
            <a
              href="#kontakt"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 group"
            >
              Kontaktovať nás
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: "10+", label: "rokov\nskúseností" },
              { value: "2", label: "odborní\nterapeuti" },
              { value: "★", label: "individuálny\nprístup" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                {index > 0 && <div className="w-px h-10 bg-border hidden sm:block mr-6" />}
                <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-xl">{stat.value}</span>
                </div>
                <span className="text-sm text-muted-foreground whitespace-pre-line">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-primary/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
