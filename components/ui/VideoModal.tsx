"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { modalIn } from "@/lib/animations";
import type { PortfolioVideo } from "@/data/site-config";

interface VideoModalProps {
  video: PortfolioVideo | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (video) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, handleKeyDown]);

  const isYoutube = video?.youtubeEmbedId && video.youtubeEmbedId !== "REPLACE_ME";
  const isLocal = video?.videoFile;

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 backdrop-blur-xl bg-black/70"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Video player */}
          <motion.div
            variants={modalIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYoutube && (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeEmbedId}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
            {isLocal && !isYoutube && (
              <video
                src={video.videoFile}
                autoPlay
                muted
                controls
                className="w-full h-full bg-black"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
