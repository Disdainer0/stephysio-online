import { User } from "lucide-react";

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
  return (
    <section id="tim" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Náš tím
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Odborníci, ktorým môžete dôverovať
          </h2>
          <p className="text-muted-foreground text-lg">
            Náš tím tvorí skúsených fyzioterapeutov s dlhoročnou praxou 
            a osobným prístupom ku každému pacientovi.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-medical text-center group"
            >
              {/* Photo placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-teal-light flex items-center justify-center border-4 border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                <User className="w-12 h-12 text-primary/50" />
              </div>

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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
