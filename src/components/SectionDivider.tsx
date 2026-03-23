import useScrollAnimation from "@/hooks/useScrollAnimation";

const SectionDivider = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.35, triggerOnce: true });

  return (
    <div className="py-8 md:py-10" aria-hidden="true">
      <div className="container-narrow mx-auto flex justify-center">
        <div ref={ref} className="w-full flex justify-center">
          <div className="relative w-[70%] md:w-[56%] h-px bg-border/70 overflow-visible">
            <span
              className={`absolute inset-y-0 left-0 bg-border origin-left transition-transform duration-700 ease-out ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ right: 0 }}
            />
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#3D9988] transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
