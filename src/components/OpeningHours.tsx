import { Clock, CalendarDays } from "lucide-react";

const OpeningHours = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-primary-foreground">
          {/* Opening hours */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
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
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Weekend */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
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
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Note */}
          <div className="flex items-center gap-3 px-5 py-3 bg-primary-foreground/10 rounded-xl">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="font-medium">Na objednávku</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
