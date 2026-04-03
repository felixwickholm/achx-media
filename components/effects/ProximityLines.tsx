"use client";

import { useEffect, useRef } from "react";

interface ProximityLinesProps {
  spacing?: number;
  radius?: number;
  color?: string;
  baseLength?: number;
  maxLength?: number;
}

export default function ProximityLines({
  spacing = 40,
  radius = 150,
  color = "rgba(255, 255, 255, 0.12)",
  baseLength = 12,
  maxLength = 28,
}: ProximityLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const dprRef = useRef(1);
  const activeRef = useRef(false);

  // Store props in refs to avoid recreating draw callback
  const configRef = useRef({ spacing, radius, color, baseLength, maxLength });
  configRef.current = { spacing, radius, color, baseLength, maxLength };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const { spacing: sp, radius: r, color: c, baseLength: bl, maxLength: ml } = configRef.current;
      const dpr = dprRef.current;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";

      const cols = Math.ceil(w / sp) + 1;
      const rows = Math.ceil(h / sp) + 1;
      const offsetX = (w - (cols - 1) * sp) / 2;
      const offsetY = (h - (rows - 1) * sp) / 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const px = offsetX + col * sp;
          const py = offsetY + row * sp;

          const dx = mx - px;
          const dy = my - py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const proximity = Math.max(0, 1 - dist / r);
          const eased = proximity * proximity;

          const len = bl + eased * (ml - bl);
          const angle = dist > 1 ? Math.atan2(dy, dx) : 0;
          const alpha = 0.04 + eased * 0.25;

          const halfLen = len / 2;
          const cosA = Math.cos(angle);
          const sinA = Math.sin(angle);

          ctx.beginPath();
          ctx.moveTo((px - cosA * halfLen) * dpr, (py - sinA * halfLen) * dpr);
          ctx.lineTo((px + cosA * halfLen) * dpr, (py + sinA * halfLen) * dpr);

          // Extract RGB from rgba string and apply dynamic alpha
          const rgbMatch = c.match(/(\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            ctx.strokeStyle = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
          } else {
            ctx.strokeStyle = c;
          }
          ctx.lineWidth = (1 + eased * 1.5) * dpr;
          ctx.stroke();
        }
      }

      if (activeRef.current) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const startLoop = () => {
      if (!activeRef.current) {
        activeRef.current = true;
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const stopLoop = () => {
      activeRef.current = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
      // Draw one final idle frame
      mouseRef.current = { x: -9999, y: -9999 };
      draw();
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      // Redraw after resize
      draw();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only track if cursor is within canvas bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
        startLoop();
      } else if (activeRef.current) {
        stopLoop();
      }
    };

    resize();
    // Draw initial idle state
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      activeRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}
