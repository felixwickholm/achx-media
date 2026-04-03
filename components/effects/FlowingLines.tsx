"use client";

interface FlowingLinesProps {
  variant?: "cream" | "dark";
  className?: string;
}

export default function FlowingLines({ variant = "cream", className = "" }: FlowingLinesProps) {
  const color = variant === "dark" ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.06)";
  const colorBright = variant === "dark" ? "rgba(249, 115, 22, 0.15)" : "rgba(249, 115, 22, 0.1)";

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Line 1 - wide gentle curve */}
        <path
          d="M-100 120 C200 60, 400 160, 720 100 S1100 40, 1540 120"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="12 8"
          style={{
            animation: "line-draw 12s linear infinite",
            strokeDashoffset: 0,
          }}
        />
        {/* Line 2 - tighter wave, brighter */}
        <path
          d="M-100 80 C150 140, 350 20, 600 80 S900 140, 1200 60 S1400 100, 1540 80"
          stroke={colorBright}
          strokeWidth="0.75"
          strokeDasharray="20 12"
          style={{
            animation: "line-draw-reverse 16s linear infinite",
            strokeDashoffset: 0,
          }}
        />
        {/* Line 3 - subtle low arc */}
        <path
          d="M-100 160 C300 120, 500 180, 800 140 S1200 100, 1540 160"
          stroke={color}
          strokeWidth="0.5"
          strokeDasharray="8 16"
          style={{
            animation: "line-draw 20s linear infinite",
            animationDelay: "2s",
            strokeDashoffset: 0,
          }}
        />
        {/* Line 4 - fine top accent */}
        <path
          d="M-100 40 C250 80, 500 10, 750 50 S1100 90, 1540 30"
          stroke={colorBright}
          strokeWidth="0.5"
          strokeDasharray="6 20"
          style={{
            animation: "line-draw-reverse 14s linear infinite",
            animationDelay: "4s",
            strokeDashoffset: 0,
          }}
        />
      </svg>
    </div>
  );
}
