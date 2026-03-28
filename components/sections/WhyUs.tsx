"use client";

import { motion } from "motion/react";
import { useInitial } from "@/lib/use-in-view-animation";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, React.ReactNode> = {
  target: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  "trending-up": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
    </svg>
  ),
};

export default function WhyUs() {
  const initial = useInitial();
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Why SaaS Teams Choose AchX"
          subtitle="We're not a generic video agency — we're built for software companies"
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial={initial}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {siteConfig.whyUs.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/[0.08] text-accent flex items-center justify-center mb-5 ring-1 ring-accent/[0.12]">
                {icons[item.icon]}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-white/40 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
