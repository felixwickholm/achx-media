"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import BookCallButton from "./BookCallButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background pt-20 px-5 sm:px-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-4 w-11 h-11 flex items-center justify-center cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <nav className="flex flex-col gap-6">
            <a
              href="#portfolio"
              onClick={onClose}
              className="text-xl font-semibold text-foreground"
            >
              Portfolio
            </a>

            <div>
              <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-3">
                Services
              </p>
              {siteConfig.services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  className="block text-lg text-foreground/80 py-2"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <a
              href="#process"
              onClick={onClose}
              className="text-xl font-semibold text-foreground"
            >
              Process
            </a>

            <a
              href="#faq"
              onClick={onClose}
              className="text-xl font-semibold text-foreground"
            >
              FAQ
            </a>

            <div className="mt-4">
              <BookCallButton size="lg" className="w-full" />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
