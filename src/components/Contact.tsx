import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Navštívte nás v centre Košíc
          </h2>
          <p className="text-muted-foreground text-lg">
            Sme vám k dispozícii pre akékoľvek otázky alebo objednávky.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="card-medical flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                  Adresa
                </h3>
                <p className="text-muted-foreground">
                  Moyzesova 1026/46<br />
                  040 01 Košice – Staré Mesto
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="card-medical flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
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
            </div>

            {/* Email Card */}
            <div className="card-medical flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-primary" />
              </div>
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
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+421904682722"
                className="btn-primary flex-1 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Zavolať
              </a>
              <a
                href="mailto:stephysio@gmail.com"
                className="btn-secondary flex-1 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Napísať email
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="card-medical p-0 overflow-hidden h-[400px] lg:h-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
