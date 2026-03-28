"use client";

import { motion } from "motion/react";
import { scaleIn } from "@/lib/animations";
import { getYoutubeThumbnail } from "@/lib/utils";
import type { PortfolioVideo } from "@/data/site-config";

interface VideoCardProps {
  video: PortfolioVideo;
  onPlay: (video: PortfolioVideo) => void;
}

const serviceLabels: Record<string, string> = {
  "launch-videos": "Launch",
  "ai-avatar": "AI Avatar",
};

const serviceGradients: Record<string, string> = {
  "launch-videos": "from-orange-500/20 via-rose-500/10 to-pink-500/20",
  "ai-avatar": "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
};

function getThumbnail(video: PortfolioVideo): string | null {
  if (video.thumbnail) return video.thumbnail;
  if (video.youtubeEmbedId && video.youtubeEmbedId !== "REPLACE_ME") {
    return getYoutubeThumbnail(video.youtubeEmbedId);
  }
  return null;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const thumbnail = getThumbnail(video);
  const hasVideo = !!(video.youtubeEmbedId && video.youtubeEmbedId !== "REPLACE_ME") || !!video.videoFile;
  const hasLocalVideo = !!video.videoFile;

  return (
    <motion.div
      variants={scaleIn}
      className="group cursor-pointer"
      onClick={() => hasVideo && onPlay(video)}
    >
      <div className="video-card-thumb relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] aspect-video">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : hasLocalVideo ? (
          <video
            src={video.videoFile}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onLoadedMetadata={(e) => {
              const vid = e.currentTarget;
              vid.currentTime = 3;
            }}
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${serviceGradients[video.service] ?? "from-indigo-500/20 to-purple-500/20"}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-40">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <p className="text-white/40 text-sm font-medium text-center">{video.title}</p>
            </div>
          </div>
        )}

        {/* Play button overlay */}
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#08090a" className="ml-1">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        )}

        {/* Service badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.08] text-white/60 backdrop-blur-sm border border-white/[0.06]">
            {serviceLabels[video.service]}
          </span>
        </div>

        {/* Result metric */}
        {video.result && (
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white">
              {video.result}
            </span>
          </div>
        )}
      </div>

      {/* Info below thumbnail */}
      <div className="mt-3 px-1">
        <p className="font-semibold text-white/80">{video.title}</p>
        <p className="text-sm text-white/30">{video.client}</p>
      </div>
    </motion.div>
  );
}
