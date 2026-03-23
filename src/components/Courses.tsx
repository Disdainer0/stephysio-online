import AnimatedSection from "./AnimatedSection";

type YearCourses = {
  year: string;
  courses: string[];
};

type TherapistCourses = {
  name: string;
  years: YearCourses[];
};

const therapistCourses: TherapistCourses[] = [
  {
    name: "PhDr. Simona Nosáľová",
    years: [
      {
        year: "2026",
        courses: [
          "DNS A",
          "McKenzie A, B",
          "Kurz športovej fyzioterapie Michala Novotného",
        ],
      },
      {
        year: "2025",
        courses: [
          "Viscerálna manipulácia",
          "Kompenzačné cvičenia v športe",
          "Kurz manuálnej terapie hrudníka, rebier a šije",
          "Diagnostické a mobilizačné techniky funkčných patológií pohybového aparátu v globálnom kontexte",
          "Rehabilitácia pacientov s vertebrálnymi poruchami",
        ],
      },
      {
        year: "2023",
        courses: ["Neurologické vyšetrenie v praxi fyzioterapeuta"],
      },
      {
        year: "2022",
        courses: [
          "Komplexná terapia trigger pointov a globálna recipročná svalová inhibícia",
          "Manuálna terapia bolestivých lokálnych stavov",
          "Zväčša kombinované techniky",
        ],
      },
      {
        year: "2018",
        courses: ["Senzomotorická stimulácia a stabilizácia hybného systému"],
      },
      {
        year: "2017",
        courses: ["Diagnostika a kinezioterapia u idiopatickej skoliózy u detí a dospelých"],
      },
      {
        year: "2016",
        courses: ["Kineziologický taping I."],
      },
    ],
  },
  {
    name: "Mgr. Michal Sopiak",
    years: [
      {
        year: "2026",
        courses: ["Komplexná neuromuskulárna resiliancia (KNR)"],
      },
      {
        year: "2025",
        courses: ["Manuálne techniky - terapia mäkkých tkanív"],
      },
      {
        year: "2023",
        courses: [
          "PainCoaching",
          "Rehabilitácia bolestí zad a návrat do výkonnostného tréningu",
        ],
      },
      {
        year: "2021",
        courses: [
          "SM systém A + B",
          "Integrované bankovanie a medicínsky flossing",
          "IASTM terapia",
        ],
      },
      {
        year: "2020",
        courses: ["RockTape"],
      },
    ],
  },
];

const Courses = () => {
  return (
    <section id="kurzy" className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Vzdelávanie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
            Kurzy našich fyzioterapeutov
          </h2>
          <p className="text-muted-foreground text-lg">
            Priebežne rozširujeme odborné znalosti, aby ste dostali terapiu postavenú na
            aktuálnych poznatkoch a osvedčenej praxi.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {therapistCourses.map((therapist, therapistIndex) => (
            <AnimatedSection
              key={therapist.name}
              animation="fade-up"
              delay={therapistIndex * 150}
            >
              <div className="card-medical h-full">
                <h3 className="font-serif font-semibold text-2xl text-foreground mb-6">
                  {therapist.name}
                </h3>

                <div className="space-y-6">
                  {therapist.years.map((yearGroup) => (
                    <div key={`${therapist.name}-${yearGroup.year}`}>
                      <h4 className="text-primary font-semibold text-base mb-3">
                        {yearGroup.year}
                      </h4>
                      <ul className="space-y-2">
                        {yearGroup.courses.map((course) => (
                          <li
                            key={`${therapist.name}-${yearGroup.year}-${course}`}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
