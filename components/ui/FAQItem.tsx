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
      className="border-b border-white/[0.06]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-[14px] sm:text-base font-medium text-white/80 pr-4">
          {item.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-white/20 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div className="faq-content" data-open={open}>
        <div>
          <p className="pb-5 text-white/35 leading-relaxed text-[13px] sm:text-sm">
            {item.answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
