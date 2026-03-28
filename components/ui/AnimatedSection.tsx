"use client";

import { motion, type Variants } from "motion/react";
import { useInitial } from "@/lib/use-in-view-animation";
import { viewportOnce } from "@/lib/animations";

interface AnimatedSectionProps {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section";
  id?: string;
}

/**
 * Motion wrapper that renders content visible during SSR,
 * then animates in on scroll after hydration.
 */
export default function AnimatedSection({
  variants,
  className,
  children,
  as = "div",
  id,
}: AnimatedSectionProps) {
  const initial = useInitial();
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      id={id}
      variants={variants}
      initial={initial}
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </Component>
  );
}
