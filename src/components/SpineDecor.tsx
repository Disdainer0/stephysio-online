interface SpineDecorProps {
  className?: string;
  side?: "left" | "right";
}

const SpineDecor = ({ className = "", side = "left" }: SpineDecorProps) => {
  const vertebrae = [
    { width: 20, offset: 0 },
    { width: 24, offset: 2 },
    { width: 28, offset: 3 },
    { width: 30, offset: 4 },
    { width: 32, offset: 4 },
    { width: 34, offset: 3 },
    { width: 32, offset: 2 },
    { width: 30, offset: 1 },
    { width: 28, offset: 0 },
    { width: 26, offset: -1 },
    { width: 24, offset: -2 },
    { width: 22, offset: -2 },
  ];

  return (
    <div
      className={`absolute ${side === "left" ? "left-4 md:left-8" : "right-4 md:right-8"} top-1/2 -translate-y-1/2 opacity-10 ${className}`}
    >
      <svg width="40" height="300" viewBox="0 0 40 300" className="text-primary">
        {vertebrae.map((v, i) => (
          <g key={i} transform={`translate(${20 - v.width / 2 + v.offset}, ${i * 24})`}>
            {/* Vertebra body */}
            <rect
              x="0"
              y="0"
              width={v.width}
              height="18"
              rx="4"
              fill="currentColor"
              opacity={0.6 + i * 0.03}
            />
            {/* Spinous process */}
            <rect
              x={v.width / 2 - 2}
              y="-6"
              width="4"
              height="8"
              rx="2"
              fill="currentColor"
              opacity={0.4}
            />
            {/* Disc */}
            <ellipse
              cx={v.width / 2}
              cy="21"
              rx={v.width / 3}
              ry="3"
              fill="currentColor"
              opacity={0.3}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SpineDecor;
