"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUpSubtle, viewportOnce } from "@/lib/animations";
import { useInitial } from "@/lib/use-in-view-animation";
import { siteConfig } from "@/data/site-config";
import BookCallButton from "@/components/ui/BookCallButton";

export default function Footer() {
  const initial = useInitial();
  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <motion.div
        variants={fadeUpSubtle}
        initial={initial}
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-[15px] font-semibold tracking-tight text-white mb-2">
              {siteConfig.brand.name}
            </p>
            <p className="text-white/25 text-[13px] leading-relaxed mb-4">
              {siteConfig.brand.tagline}
            </p>
            <BookCallButton size="sm" variant="primary" />
          </div>

          {/* Services */}
          <div>
            <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.brand.email}`}
                  className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-200"
                >
                  {siteConfig.brand.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.brand.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-200"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/15">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All
            rights reserved.
          </p>
          <p className="text-[12px] text-white/10">
            Video production for SaaS companies
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
