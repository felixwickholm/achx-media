"use client";

import FlowingLines from "./FlowingLines";

export default function HeroGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FlowingLines variant="cream" className="absolute top-1/4 left-0 right-0 opacity-80" />
      <FlowingLines variant="cream" className="absolute bottom-0 left-0 right-0 opacity-50 scale-y-[-1]" />
    </div>
  );
}
