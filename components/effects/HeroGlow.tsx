"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function HeroGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>(0);
  const targetPos = useRef({ x: 0.5, y: 0.5 });

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = useCallback(() => {
    setMousePos((prev) => ({
      x: lerp(prev.x, targetPos.current.x, 0.08),
      y: lerp(prev.y, targetPos.current.y, 0.08),
    }));
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetPos.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        targetPos.current = { x: 0.5, y: 0.5 };
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid" />

      {/* Primary glow orb - follows mouse */}
      <div
        className="absolute h-[600px] w-[600px] rounded-full transition-opacity duration-700"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
          opacity: isHovering ? 1 : 0.3,
        }}
      />

      {/* Secondary glow orb - offset from mouse */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full transition-opacity duration-1000"
        style={{
          left: `${mousePos.x * 80 + 10}%`,
          top: `${mousePos.y * 60 + 20}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
          opacity: isHovering ? 0.8 : 0.2,
        }}
      />

      {/* Tertiary accent glow */}
      <div
        className="absolute h-[400px] w-[400px] rounded-full transition-opacity duration-700"
        style={{
          left: `${100 - mousePos.x * 60}%`,
          top: `${mousePos.y * 40 + 10}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 60%)",
          opacity: isHovering ? 0.6 : 0.15,
        }}
      />

      {/* Gradient fade to background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090a] to-transparent" />

      {/* Top edge glow line */}
      <div
        className="absolute top-0 h-[1px] w-full transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at ${mousePos.x * 100}% 50%, rgba(139, 92, 246, ${isHovering ? 0.4 : 0.1}) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
