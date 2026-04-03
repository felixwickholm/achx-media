"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeUpBlur,
  fadeUpSubtle,
  buttonReveal,
  staggerContainer,
} from "@/lib/animations";
import type { Service } from "@/data/site-config";
import BookCallButton from "@/components/ui/BookCallButton";
import ProximityLines from "@/components/effects/ProximityLines";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#000000] pt-20 pb-12 sm:pt-24 sm:pb-16">
      <ProximityLines spacing={45} radius={140} />

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="visible"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Back link */}
        <motion.div variants={fadeUpSubtle}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors mb-8"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        <motion.h1
          variants={fadeUpBlur}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          {service.title}
        </motion.h1>

        <motion.p
          variants={fadeUpSubtle}
          className="mt-6 text-base sm:text-lg text-white/60 max-w-xl mx-auto"
        >
          {service.description}
        </motion.p>

        <motion.div variants={buttonReveal} className="mt-10">
          <BookCallButton variant="primary" size="lg">
            {service.ctaText}
          </BookCallButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
