"use client";

import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesOverview() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#0c0d0f]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Three Ways to Grow with Video"
          subtitle="Choose the service that fits your stage — or combine all three"
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
