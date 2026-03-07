"use client";

import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItemComponent from "@/components/ui/FAQItem";

export default function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before we start"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {siteConfig.faq.map((item, i) => (
            <FAQItemComponent key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
