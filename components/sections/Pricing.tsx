"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeUp,
  fadeUpSubtle,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import BookCallButton from "@/components/ui/BookCallButton";

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-20 md:py-28 bg-[#0c0d0f]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. No surprises. Just great video."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {siteConfig.pricing.map((tier) => (
            <motion.div
              key={tier.slug}
              variants={fadeUp}
              className={`relative rounded-xl border p-6 sm:p-8 flex flex-col ${
                tier.highlighted
                  ? "border-accent/30 bg-accent/[0.04] ring-1 ring-accent/20"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-white/35">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-white/30 ml-2">{tier.unit}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-white/50"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tier.highlighted ? "var(--accent-light)" : "var(--accent)"}
                      strokeWidth="2"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.highlighted ? (
                <BookCallButton variant="primary" size="md">
                  {tier.ctaText}
                </BookCallButton>
              ) : (
                <Link
                  href={`/services/${tier.slug}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full border border-white/[0.1] text-white/60 hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-200 text-center"
                >
                  {tier.ctaText}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUpSubtle}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-[13px] text-white/20 mt-8"
        >
          Need something custom? Book a call and we&apos;ll build a package for you.
        </motion.p>
      </div>
    </section>
  );
}
