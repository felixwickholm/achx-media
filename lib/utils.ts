import { siteConfig, type ServiceSlug } from "@/data/site-config";

export function getYoutubeThumbnail(
  embedId: string,
  quality: "default" | "hq" | "maxres" = "hq"
): string {
  const map = { default: "default", hq: "hqdefault", maxres: "maxresdefault" };
  return `https://img.youtube.com/vi/${embedId}/${map[quality]}.jpg`;
}

export function getFeaturedVideos() {
  return siteConfig.portfolio.filter((v) => v.featured);
}

export function getVideosByService(slug: ServiceSlug) {
  return siteConfig.portfolio.filter((v) => v.service === slug);
}

export function getServiceBySlug(slug: ServiceSlug) {
  return siteConfig.services.find((s) => s.slug === slug);
}

export function openCalBooking() {
  if (typeof window !== "undefined" && window.Cal) {
    window.Cal.ns[siteConfig.brand.calNamespace]("modal", {
      calLink: siteConfig.brand.calLink,
      config: { layout: "month_view" },
    });
  }
}
