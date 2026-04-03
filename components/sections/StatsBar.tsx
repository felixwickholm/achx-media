"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, staggerContainer, viewportOnce } from "@/lib/animations";
import { useInitial } from "@/lib/use-in-view-animation";
import { siteConfig } from "@/data/site-config";

export default function StatsBar() {
  const initial = useInitial();
  return (
    <section className="py-16 md:py-20 bg-background border-y border-black/[0.06]">
      <motion.div
        variants={staggerContainer(0.1)}
        initial={initial}
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-black/[0.08]"
      >
        {siteConfig.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUpSubtle}
            className="text-center"
          >
            <p className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-black to-black/50 bg-clip-text text-transparent tracking-[-0.03em]">
              {stat.value}
            </p>
            <p className="mt-2 text-[13px] text-black/40 uppercase tracking-[0.1em]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
