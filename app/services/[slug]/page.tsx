import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig, type ServiceSlug } from "@/data/site-config";
import { getServiceBySlug, getVideosByService } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Process from "@/components/sections/Process";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import ServiceHero from "./ServiceHero";
import ServiceFeatures from "./ServiceFeatures";


export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug as ServiceSlug);
  if (!service) return {};
  return {
    title: `${service.title} | AchX Media`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug as ServiceSlug);
  if (!service) notFound();

  const videos = getVideosByService(slug as ServiceSlug);

  return (
    <>
      <Script
        id="cal-embed"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "20min", { origin: "https://app.cal.com" });
            Cal.ns["20min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
          `,
        }}
      />

      <div className="grain-overlay">
        <Navbar />
        <ServiceHero service={service} />
        <ServiceFeatures service={service} />
        {videos.length > 0 && (
          <PortfolioGrid
            filterByService={slug as ServiceSlug}
            showFilters={false}
            title={`${service.title} Portfolio`}
            subtitle={`Recent ${service.title.toLowerCase()} work for our clients`}
          />
        )}
        <Process
          steps={service.processSteps}
          title={`How ${service.title} Works`}
          subtitle="Our proven process from start to finish"
        />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
