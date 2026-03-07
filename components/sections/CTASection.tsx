"use client";

import { motion } from "motion/react";
import {
  fadeUpBlur,
  fadeUpSubtle,
  buttonReveal,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import BookCallButton from "@/components/ui/BookCallButton";
import FloatingOrbs from "@/components/effects/FloatingOrbs";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#08090a] overflow-hidden">
      <FloatingOrbs variant="dark" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.h2
          variants={fadeUpBlur}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-[-0.02em]"
        >
          Ready to Make Your Product{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
            Look Incredible?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUpSubtle}
          className="mt-5 text-[15px] sm:text-base text-white/35 max-w-xl mx-auto leading-relaxed"
        >
          {siteConfig.cta.subtext}
        </motion.p>

        <motion.div variants={buttonReveal} className="mt-10">
          <BookCallButton variant="primary" size="lg" />
        </motion.div>

        <motion.p
          variants={fadeUpSubtle}
          className="mt-5 text-[13px] text-white/20"
        >
          {siteConfig.cta.finePrint}
        </motion.p>
      </motion.div>
    </section>
  );
}
