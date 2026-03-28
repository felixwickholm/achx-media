"use client";

import { motion } from "motion/react";
import { useInitial } from "@/lib/use-in-view-animation";
import {
  fadeUpSubtle,
  lineGrow,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import type { ProcessStep } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

interface ProcessProps {
  steps?: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export default function Process({
  steps,
  title = "How It Works",
  subtitle = "From idea to finished video in 2–4 weeks",
}: ProcessProps) {
  const defaultSteps = [
    { step: 1, title: "Book a Call", description: "Tell us about your project, timeline, and goals." },
    { step: 2, title: "We Strategize", description: "We create a plan tailored to your brand and audience." },
    { step: 3, title: "We Produce", description: "Our team handles editing, animation, and polish." },
    { step: 4, title: "You Launch", description: "Get your finished video, ready to convert." },
  ];

  const items = steps ?? defaultSteps;
  const initial = useInitial();

  return (
    <section id="process" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading title={title} subtitle={subtitle} />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <motion.div
            variants={staggerContainer(0.12)}
            initial={initial}
            whileInView="visible"
            viewport={viewportOnce}
            className="relative grid grid-cols-4 gap-8"
          >
            {/* Connector line */}
            <motion.div
              variants={lineGrow}
              className="process-connector absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/[0.06]"
            />

            {items.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUpSubtle}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center text-xl font-semibold mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-white/35">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <motion.div
            variants={staggerContainer(0.12)}
            initial={initial}
            whileInView="visible"
            viewport={viewportOnce}
            className="relative space-y-8 pl-10 sm:pl-12"
          >
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/[0.06]" />

            {items.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUpSubtle}
                className="relative"
              >
                <div className="absolute -left-10 sm:-left-12 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center text-xs sm:text-sm font-semibold">
                  {item.step}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-white/35">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
