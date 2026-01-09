import { Activity, Bone, Dumbbell, HeartPulse, Shield } from "lucide-react";

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
  return (
    <section id="sluzby" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Naše služby
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Komplexná starostlivosť o váš pohyb
          </h2>
          <p className="text-muted-foreground text-lg">
            Ponúkame široké spektrum fyzioterapeutických služieb 
            prispôsobených vašim individuálnym potrebám.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-medical group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#objednat" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            Objednať sa na vyšetrenie
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
