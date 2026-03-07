"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  // Don't render if no real testimonials
  if (
    siteConfig.testimonials.length === 0 ||
    (siteConfig.testimonials.length === 1 &&
      siteConfig.testimonials[0].name === "Client Name")
  ) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#0c0d0f]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't take our word for it"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {siteConfig.testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUpSubtle}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-8"
            >
              <p className="text-[15px] sm:text-base text-white/60 italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white/80">{t.name}</p>
                <p className="text-[13px] text-white/30">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
