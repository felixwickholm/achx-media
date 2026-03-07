"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/site-config";

export default function StatsBar() {
  return (
    <section className="py-16 md:py-20 bg-[#08090a] border-y border-white/[0.04]">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
      >
        {siteConfig.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUpSubtle}
            className="text-center"
          >
            <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white tracking-[-0.02em]">
              {stat.value}
            </p>
            <p className="mt-2 text-[13px] text-white/30">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
