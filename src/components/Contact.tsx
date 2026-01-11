import { MapPin, Phone, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="kontakt" ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      />

      {/* Location pin decoration */}
      <svg className="absolute top-10 right-10 w-16 h-16 text-primary/10 hidden lg:block" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
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
            Kontakt
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Navštívte nás v centre Košíc
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sme vám k dispozícii pre akékoľvek otázky alebo objednávky.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <motion.div
              className="card-medical flex items-start gap-5 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <MapPin className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                  Adresa
                </h3>
                <p className="text-muted-foreground">
                  Moyzesova 1026/46<br />
                  040 01 Košice – Staré Mesto
                </p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="card-medical flex items-start gap-5 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Phone className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                  Telefón
                </h3>
                <p className="text-muted-foreground space-y-1">
                  <a
                    href="tel:+421904682722"
                    className="block hover:text-primary transition-colors"
                  >
                    +421 904 682 722
                  </a>
                  <a
                    href="tel:+421903057062"
                    className="block hover:text-primary transition-colors"
                  >
                    +421 903 057 062
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              className="card-medical flex items-start gap-5 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Mail className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:stephysio@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  stephysio@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="tel:+421904682722"
                className="btn-primary flex-1 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Zavolať
              </motion.a>
              <motion.a
                href="mailto:stephysio@gmail.com"
                className="btn-secondary flex-1 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Napísať email
              </motion.a>
            </motion.div>
          </div>

          {/* Map with parallax */}
          <motion.div
            className="card-medical p-0 overflow-hidden h-[400px] lg:h-auto relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ y: mapY }}
          >
            {/* Map glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-xl opacity-50 -z-10" />
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.0771453842494!2d21.25159!3d48.72222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee01b1f3e3d5d%3A0x7a4f2a7c6b8f9c0e!2sMoyzesova%2046%2C%20040%2001%20Ko%C5%A1ice!5e0!3m2!1ssk!2ssk!4v1704900000000!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stephysio lokácia"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
