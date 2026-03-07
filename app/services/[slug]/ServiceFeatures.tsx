"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, staggerContainer, viewportOnce } from "@/lib/animations";
import type { Service } from "@/data/site-config";

interface ServiceFeaturesProps {
  service: Service;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUpSubtle}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What&apos;s Included
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {service.features.map((feature) => (
            <motion.div
              key={feature}
              variants={fadeUpSubtle}
              className="flex items-start gap-3 p-4 rounded-xl bg-warm/30"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                className="mt-0.5 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-foreground/80">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
