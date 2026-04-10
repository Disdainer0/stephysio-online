import { useState } from "react";
import { User } from "lucide-react";
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
          "Rehabilitace pacientů s vestibulárními poruchami",
        ],
      },
      {
        year: "2023",
        courses: ["Neurologické vyšetrenie v praxi fyzioterapeuta"],
      },
      {
        year: "2022",
        courses: [
          "Komplexní terapie trigger pointů a globální reciproční svalová inhibice",
          "Manuálna terapia bolestivých lokálnych stavov",
          "Ruské kombinované techniky",
        ],
      },
      {
        year: "2018",
        courses: ["Senzomotorická stimulace a stabilizace hybného systému"],
      },
      {
        year: "2017",
        courses: ["Diagnostika a kinezioterapie u idiopatickej skoliózy u detí a dospelých"],
      },
      {
        year: "2016",
        courses: ["Kineziology Taping I."],
      },
    ],
  },
  {
    name: "Mgr. Michal Sopiak",
    years: [
      {
        year: "2026",
        courses: ["Komplexní neuromuskulární resilience (KNR)"],
      },
      {
        year: "2025",
        courses: ["Manuálne techniky – terapia mäkkých tkanív"],
      },
      {
        year: "2023",
        courses: [
          "PainCoaching",
          "(P)Rehabilitáce bolestí zad a návrat do výkonu/tréningu",
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

const VISIBLE_YEARS_COUNT = 3;

const Courses = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (name: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <section id="kurzy" className="section-padding pt-8 md:pt-10 lg:pt-12 bg-secondary/20">
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
              className="h-full"
            >
              <div className="card-medical h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-teal-light border border-primary/15 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary/60" />
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-foreground leading-tight">
                    {therapist.name}
                  </h3>
                </div>

                <div className="space-y-6 flex-1 flex flex-col">
                  {therapist.years
                    .slice(0, VISIBLE_YEARS_COUNT)
                    .map((yearGroup) => (
                    <div key={`${therapist.name}-${yearGroup.year}`}>
                      <h4 className="text-[#3D9988] font-bold text-xl leading-none mb-3">
                        {yearGroup.year}
                      </h4>
                      <ul className="space-y-2">
                        {yearGroup.courses.map((course) => (
                          <li
                            key={`${therapist.name}-${yearGroup.year}-${course}`}
                            className="text-muted-foreground leading-relaxed flex items-start gap-3"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#3D9988]"
                              aria-hidden="true"
                            />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedCards[therapist.name]
                        ? "max-h-[120rem] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-6 pt-6">
                      {therapist.years
                        .slice(VISIBLE_YEARS_COUNT)
                        .map((yearGroup) => (
                        <div key={`${therapist.name}-${yearGroup.year}`}>
                          <h4 className="text-[#3D9988] font-bold text-xl leading-none mb-3">
                            {yearGroup.year}
                          </h4>
                          <ul className="space-y-2">
                            {yearGroup.courses.map((course) => (
                              <li
                                key={`${therapist.name}-${yearGroup.year}-${course}`}
                                className="text-muted-foreground leading-relaxed flex items-start gap-3"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#3D9988]"
                                  aria-hidden="true"
                                />
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {therapist.years.length > VISIBLE_YEARS_COUNT && (
                    <button
                      type="button"
                      onClick={() => toggleCard(therapist.name)}
                      className="inline-flex items-center gap-2 text-[#3D9988] font-semibold hover:text-primary transition-colors duration-200 mt-auto"
                      aria-expanded={!!expandedCards[therapist.name]}
                    >
                      {expandedCards[therapist.name] ? "Menej" : "Viac"}
                      <span
                        className={`text-sm transition-transform duration-300 ${
                          expandedCards[therapist.name] ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </button>
                  )}
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
