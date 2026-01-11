interface DecorativeShapesProps {
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

const DecorativeShapes = ({ variant = "primary", className = "" }: DecorativeShapesProps) => {
  const colorClasses = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/30",
    accent: "bg-accent/20",
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top right blob */}
      <div
        className={`absolute -top-20 -right-20 w-64 h-64 ${colorClasses[variant]} rounded-full blur-3xl`}
      />
      
      {/* Bottom left blob */}
      <div
        className={`absolute -bottom-32 -left-32 w-80 h-80 ${colorClasses[variant]} rounded-full blur-3xl`}
      />
      
      {/* Floating circles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-primary/15 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Decorative lines */}
      <svg className="absolute top-10 left-10 w-32 h-32 text-primary/10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
      </svg>
      
      <svg className="absolute bottom-20 right-20 w-48 h-48 text-primary/5" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    </div>
  );
};

export default DecorativeShapes;
