"use client";

import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { useInitial } from "@/lib/use-in-view-animation";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesOverview() {
  const initial = useInitial();
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#f5e8e2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Two Ways to Grow with Video"
          subtitle="Choose the service that fits your stage — or combine both"
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial={initial}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
