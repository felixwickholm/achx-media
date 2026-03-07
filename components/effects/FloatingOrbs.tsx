"use client";

interface FloatingOrbsProps {
  variant?: "light" | "dark";
}

export default function FloatingOrbs({ variant = "light" }: FloatingOrbsProps) {
  const colors = {
    orb1: "rgba(99, 102, 241, 0.12)",
    orb2: "rgba(139, 92, 246, 0.08)",
    orb3: "rgba(79, 70, 229, 0.06)",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] opacity-60"
        style={{
          background: `radial-gradient(circle, ${colors.orb1} 0%, transparent 70%)`,
          top: "10%",
          left: "15%",
          animation: "float-orb-1 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full blur-[100px] opacity-50"
        style={{
          background: `radial-gradient(circle, ${colors.orb2} 0%, transparent 70%)`,
          top: "50%",
          right: "10%",
          animation: "float-orb-2 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[175px] sm:w-[275px] md:w-[350px] h-[175px] sm:h-[275px] md:h-[350px] rounded-full blur-[80px] opacity-40"
        style={{
          background: `radial-gradient(circle, ${colors.orb3} 0%, transparent 70%)`,
          bottom: "20%",
          left: "50%",
          animation: "float-orb-3 28s ease-in-out infinite",
        }}
      />
    </div>
  );
}
