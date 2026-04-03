"use client";

import { useState, useEffect } from "react";
import { useInitial } from "@/lib/use-in-view-animation";
import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeUpBlur,
  fadeUpSubtle,
  buttonReveal,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";
import { siteConfig } from "@/data/site-config";
import BookCallButton from "@/components/ui/BookCallButton";
import HeroGlow from "@/components/effects/HeroGlow";

function useTypewriter(phrases: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsDeleting(true), 2200);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 40);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayText, phraseIndex, isDeleting, phrases]);

  return displayText;
}

export default function Hero() {
  const initial = useInitial();
  const typedText = useTypewriter(siteConfig.cta.typewriterPhrases);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <HeroGlow />

      {/* Content */}
      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial={initial}
        animate="visible"
        className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-20 pb-16 sm:pt-24 sm:pb-20"
      >
        {/* Accent dot */}
        <motion.div
          variants={scaleIn}
          className="w-2 h-2 rounded-full bg-orange-400 mx-auto mb-8"
        />

        {/* Headline */}
        <motion.h1
          variants={fadeUpBlur}
          className="text-3xl sm:text-5xl md:text-7xl font-semibold text-black leading-[1.05] tracking-[-0.035em]"
        >
          Videos That
          <br />
          <span className="text-gradient-animated">
            {typedText}
          </span>
          <span className="inline-block w-[2px] h-[0.75em] bg-orange-400/90 ml-0.5 align-middle animate-[cursor-blink_1s_step-end_infinite]" />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpSubtle}
          className="mt-6 text-base sm:text-[17px] md:text-lg text-black/50 max-w-[540px] mx-auto leading-relaxed"
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial={initial}
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <motion.div variants={buttonReveal}>
            <BookCallButton variant="primary" size="lg" />
          </motion.div>
          <motion.div variants={buttonReveal}>
            <a
              href="#portfolio"
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-black/[0.1] text-black/60 hover:text-black/80 hover:border-black/[0.15] hover:bg-black/[0.03] backdrop-blur-sm transition-all duration-200"
            >
              {siteConfig.hero.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Service pills */}
        <motion.div
          variants={staggerContainer(0.08, 0.6)}
          initial={initial}
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {siteConfig.services.map((s) => (
            <motion.div key={s.slug} variants={scaleIn}>
              <Link
                href={`/services/${s.slug}`}
                prefetch={false}
                className="px-4 py-2 text-sm font-medium rounded-full border border-black/[0.1] text-black/50 hover:text-black/70 hover:border-black/[0.2] transition-colors duration-200"
              >
                {s.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof line */}
        <motion.p
          variants={fadeUpSubtle}
          className="mt-16 text-[13px] text-black/25"
        >
          Trusted by 50+ SaaS and fast-growing startups
        </motion.p>
      </motion.div>
    </section>
  );
}
