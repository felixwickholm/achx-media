"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import type { Service } from "@/data/site-config";

interface ServiceCardProps {
  service: Service;
}

const icons: Record<string, React.ReactNode> = {
  scissors: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  rocket: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  sparkles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  ),
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/services/${service.slug}`} prefetch={false} className="block">
        <div className="service-card group/card rounded-2xl border border-black/[0.06] bg-white/60 backdrop-blur-sm p-6 sm:p-8 h-full relative overflow-hidden">
          {/* Hover gradient glow */}
          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-purple-500/[0.02] pointer-events-none" />
          <div className="relative w-14 h-14 rounded-xl bg-orange-500/[0.08] text-orange-500 flex items-center justify-center mb-5 ring-1 ring-orange-500/[0.15] shadow-[0_0_20px_-4px_rgba(249,115,22,0.1)]">
            {icons[service.icon]}
          </div>

          <h3 className="relative text-lg sm:text-xl font-semibold text-black mb-2">
            {service.title}
          </h3>

          <p className="relative text-black/45 mb-5">{service.tagline}</p>

          <ul className="relative space-y-2 mb-6">
            {service.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-black/55">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <span className="relative inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group">
            Learn more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
