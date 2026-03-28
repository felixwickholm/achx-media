"use client";

import { motion } from "motion/react";
import { fadeUpSubtle, viewportOnce } from "@/lib/animations";
import { useInitial } from "@/lib/use-in-view-animation";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";

export default function TrustedBy() {
  const initial = useInitial();
  const doubled = [...siteConfig.clients, ...siteConfig.clients];

  return (
    <section className="py-16 bg-background overflow-hidden border-t border-white/[0.04]">
      <motion.p
        variants={fadeUpSubtle}
        initial={initial}
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center text-[13px] font-medium text-white/20 uppercase tracking-[0.15em] mb-10"
      >
        Trusted by 50+ SaaS and fast-growing startups
      </motion.p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-8 sm:mx-14 shrink-0 opacity-40 hover:opacity-60 transition-opacity duration-300"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
              ) : (
                <span className="text-lg font-semibold text-white select-none">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
