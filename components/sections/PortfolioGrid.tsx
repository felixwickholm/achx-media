"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig, type ServiceSlug, type PortfolioVideo } from "@/data/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import VideoCard from "@/components/ui/VideoCard";
import VideoModal from "@/components/ui/VideoModal";

interface PortfolioGridProps {
  filterByService?: ServiceSlug;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export default function PortfolioGrid({
  filterByService,
  showFilters = true,
  title = "Our Work",
  subtitle = "See what we've built for SaaS teams like yours",
}: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | ServiceSlug>(
    filterByService ?? "all"
  );
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);

  const videos = filterByService
    ? siteConfig.portfolio.filter((v) => v.service === filterByService)
    : activeFilter === "all"
    ? siteConfig.portfolio.filter((v) => v.featured)
    : siteConfig.portfolio.filter((v) => v.service === activeFilter);

  return (
    <section id="portfolio" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title={title} subtitle={subtitle} />

        {showFilters && !filterByService && (
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setActiveVideo}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {videos.length === 0 && (
          <p className="text-center text-foreground/40 py-12">
            Videos coming soon for this category.
          </p>
        )}
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
