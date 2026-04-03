import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesOverview from "@/components/sections/ServicesOverview";
import StatsBar from "@/components/sections/StatsBar";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import FlowingLines from "@/components/effects/FlowingLines";

export default function Home() {
  return (
    <>
      {/* Cal.com Embed Script */}
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
            Cal("init", "30min", { origin: "https://app.cal.com" });
            Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
          `,
        }}
      />

      <div className="grain-overlay">
        <Navbar />
        <Hero />
        <TrustedBy />
        <div className="relative">
          <FlowingLines variant="cream" className="absolute top-0 left-0 right-0 opacity-60" />
          <ServicesOverview />
        </div>
        <StatsBar />
        <PortfolioGrid />
        <div className="relative">
          <FlowingLines variant="cream" className="absolute top-0 left-0 right-0 opacity-40" />
          <WhyUs />
        </div>
        <Process />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
