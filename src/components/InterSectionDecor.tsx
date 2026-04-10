import { useEffect, useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface InterSectionDecorProps {
  align?: "left" | "right";
  hue?: "primary" | "accent";
}

const InterSectionDecor = ({ align = "left", hue = "primary" }: InterSectionDecorProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slowOffset = (scrollY * 0.03) % 26;
  const slowOffsetSecondary = (scrollY * 0.02) % 20;
  const sideClass = align === "left" ? "left-[6%] md:left-[10%]" : "right-[6%] md:right-[10%]";

  const glowClass =
    hue === "primary"
      ? "bg-primary/10 border-primary/20"
      : "bg-accent/12 border-accent/25";

  return (
    <div ref={ref} aria-hidden="true" className="relative h-0 pointer-events-none">
      <div
        className={`absolute ${sideClass} -top-8 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateY(${slowOffset}px)` }}
      >
        <div
          className={`h-16 w-16 md:h-20 md:w-20 rounded-[1.25rem] border backdrop-blur-md shadow-soft ${glowClass}`}
        />
      </div>

      <div
        className={`absolute ${align === "left" ? "left-[18%] md:left-[22%]" : "right-[18%] md:right-[22%]"} -top-2 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateY(${-slowOffsetSecondary}px)` }}
      >
        <div className="h-6 w-6 md:h-7 md:w-7 rounded-full border border-border/50 bg-background/35 backdrop-blur-sm shadow-soft" />
      </div>
    </div>
  );
};

export default InterSectionDecor;