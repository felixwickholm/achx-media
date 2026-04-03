"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { fadeUpSubtle } from "@/lib/animations";
import type { FAQItem as FAQItemType } from "@/data/site-config";

interface FAQItemProps {
  item: FAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUpSubtle}
      className="border-b border-black/[0.06]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-[14px] sm:text-base font-medium text-black/80 pr-4">
          {item.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`shrink-0 transition-all duration-300 ${
            open ? "rotate-180 text-orange-500/60" : "text-black/30"
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-content" data-open={open}>
        <div>
          <p className="pb-6 text-black/50 leading-relaxed text-sm">
            {item.answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
