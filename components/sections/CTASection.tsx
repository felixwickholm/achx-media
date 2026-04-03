"use client";

import { motion } from "motion/react";
import { useInitial } from "@/lib/use-in-view-animation";
import {
  fadeUpBlur,
  fadeUpSubtle,
  buttonReveal,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import BookCallButton from "@/components/ui/BookCallButton";
import ProximityLines from "@/components/effects/ProximityLines";

export default function CTASection() {
  const initial = useInitial();
  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-[#000000] overflow-hidden">
      <ProximityLines spacing={50} radius={120} baseLength={10} maxLength={22} />
      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-orange-500/[0.04] blur-[120px] pointer-events-none" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial={initial}
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.h2
          variants={fadeUpBlur}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-[-0.03em]"
        >
          Ready to Make Your Product{" "}
          <span className="text-gradient-animated-light">
            Look Incredible?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUpSubtle}
          className="mt-5 text-[15px] sm:text-base text-white/45 max-w-xl mx-auto leading-relaxed"
        >
          {siteConfig.cta.subtext}
        </motion.p>

        <motion.div variants={buttonReveal} className="mt-10">
          <BookCallButton variant="primary" size="lg" />
        </motion.div>

        <motion.p
          variants={fadeUpSubtle}
          className="mt-5 text-[13px] text-white/25"
        >
          {siteConfig.cta.finePrint}
        </motion.p>
      </motion.div>
    </section>
  );
}
