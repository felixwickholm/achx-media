"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, staggerContainer, viewportOnce } from "@/lib/animations";
import { useInitial } from "@/lib/use-in-view-animation";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const initial = useInitial();
  if (
    siteConfig.testimonials.length === 0 ||
    (siteConfig.testimonials.length === 1 &&
      siteConfig.testimonials[0].name === "Client Name")
  ) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background section-glow-top">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't take our word for it"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial={initial}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {siteConfig.testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUpSubtle}
              className="rounded-2xl border border-black/[0.06] bg-white/50 p-6 sm:p-8 relative shadow-card"
            >
              <span className="absolute top-5 right-6 text-5xl leading-none text-orange-500/[0.1] font-serif select-none" aria-hidden="true">&ldquo;</span>

              <p className="text-[15px] sm:text-base text-black/60 leading-relaxed mb-6 relative">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/[0.1] ring-1 ring-orange-500/[0.15] flex items-center justify-center text-sm font-semibold text-orange-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-black/80">{t.name}</p>
                  <p className="text-[13px] text-black/40">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
