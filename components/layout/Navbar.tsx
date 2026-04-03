"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/site-config";
import BookCallButton from "@/components/ui/BookCallButton";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#faefe9]/85 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_1px_0_0_rgba(99,102,241,0.06),0_8px_40px_-12px_rgba(0,0,0,0.08)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="text-[15px] font-bold tracking-[-0.02em] text-black hover:text-black/80 transition-all duration-200">
            {siteConfig.brand.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            <a
              href="#portfolio"
              className="text-[13.5px] text-black/50 hover:text-black/80 transition-colors duration-200"
            >
              Portfolio
            </a>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-[13.5px] text-black/50 hover:text-black/80 transition-colors duration-200 cursor-pointer flex items-center gap-1"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`opacity-40 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  >
                    <div className="bg-white rounded-xl border border-black/[0.08] p-2 min-w-[200px] shadow-2xl shadow-black/10">
                      {siteConfig.services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-[13px] text-black/60 hover:text-black/90 hover:bg-black/[0.03] rounded-lg transition-colors duration-200"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#process"
              className="text-[13.5px] text-black/50 hover:text-black/80 transition-colors duration-200"
            >
              Process
            </a>

            <a
              href="#faq"
              className="text-[13.5px] text-black/50 hover:text-black/80 transition-colors duration-200"
            >
              FAQ
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <BookCallButton size="sm" variant="primary" />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center cursor-pointer"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
