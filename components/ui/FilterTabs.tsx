"use client";

import { motion } from "motion/react";
import { siteConfig, type ServiceSlug } from "@/data/site-config";

interface FilterTabsProps {
  active: "all" | ServiceSlug;
  onChange: (filter: "all" | ServiceSlug) => void;
}

const tabs: { value: "all" | ServiceSlug; label: string }[] = [
  { value: "all", label: "All" },
  ...siteConfig.services.map((s) => ({ value: s.slug, label: s.shortTitle })),
];

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 px-2 sm:px-0">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`relative px-3.5 sm:px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 ${
            active === tab.value
              ? "text-[#08090a]"
              : "text-white/40 hover:text-white/60"
          }`}
        >
          {active === tab.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-white rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
