"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, viewportOnce } from "@/lib/animations";
import { useInitial } from "@/lib/use-in-view-animation";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  const initial = useInitial();
  return (
    <motion.div
      variants={fadeUpSubtle}
      initial={initial}
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[15px] sm:text-base max-w-2xl leading-relaxed text-white/35 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
