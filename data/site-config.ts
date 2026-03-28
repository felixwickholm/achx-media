// ═══════════════════════════════════════════════════════════
// AchX Media — Site Configuration
// Edit this ONE file to update all videos, services, and content.
// ═══════════════════════════════════════════════════════════

export type ServiceSlug = "launch-videos" | "ai-avatar";

export interface PortfolioVideo {
  id: string;
  title: string;
  client: string;
  youtubeEmbedId?: string;       // YouTube video ID (e.g. "dQw4w9WgXcQ")
  videoFile?: string;             // Local MP4 in /public/videos/ (e.g. "/videos/my-clip.mp4")
  thumbnail?: string;             // Custom thumbnail in /public/videos/ (e.g. "/videos/my-clip-thumb.jpg")
  service: ServiceSlug;
  featured: boolean;
  result?: string; // e.g. "2.1M views", "350% growth"
  description?: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: "scissors" | "rocket" | "sparkles";
  features: string[];
  processSteps: ProcessStep[];
  ctaText: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface ClientLogo {
  name: string;
  logo?: string; // path to white SVG in /public/logos/
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  slug: ServiceSlug;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

// ═══════════════════════════════════════════════════════════
// THE CONFIG — Edit below to update the entire site
// ═══════════════════════════════════════════════════════════

export const siteConfig = {
  brand: {
    name: "AchX Media",
    tagline: "Video Production for SaaS & Startups",
    email: "hello@achx.in",
    twitter: "https://x.com/achxmedia",
    calNamespace: "20min",
  },

  hero: {
    headline: "Videos That Launch Products\nand Close Deals",
    subheadline:
      "Launch videos & AI avatars. Two ways to grow your SaaS.",
    ctaPrimary: "Book a Free Call",
    ctaSecondary: "See Our Work",
  },

  // ─── Clients (logo bar) ──────────────────────────────────
  clients: [
    { name: "WicFlow", logo: "/logos/wicflow.svg" },
    { name: "Kylra AI", logo: "/logos/kylra.svg" },
    { name: "Whop", logo: "/logos/whop.svg" },
    { name: "Paybase", logo: "/logos/paybase.svg" },
    { name: "Docustream", logo: "/logos/docustream.svg" },
    { name: "Shipday", logo: "/logos/shipday.svg" },
    { name: "Taplio", logo: "/logos/taplio.svg" },
  ] as ClientLogo[],

  // ─── Stats (numbers bar) ─────────────────────────────────
  stats: [
    { value: "50+", label: "Videos Delivered" },
    { value: "15+", label: "Happy Clients" },
    { value: "1M+", label: "Views Generated" },
    { value: "48h", label: "Avg. Turnaround" },
  ] as StatItem[],

  // ─── Services ────────────────────────────────────────────
  services: [
    {
      slug: "launch-videos",
      title: "Launch Videos",
      shortTitle: "Launch",
      tagline: "First impressions that convert visitors into users",
      description:
        "Premium launch and explainer videos that make your SaaS product shine. From concept to final cut, we create videos that explain your product, build trust, and drive signups.",
      icon: "rocket",
      features: [
        "Full concept & scripting",
        "Screen recordings with polish",
        "Voiceover & music",
        "Brand-matched motion design",
        "Optimized for landing pages",
        "Social media cut-downs included",
      ],
      processSteps: [
        {
          step: 1,
          title: "Strategy Call",
          description: "We learn your product, audience, and goals.",
        },
        {
          step: 2,
          title: "Script & Storyboard",
          description: "We write the narrative and plan every frame.",
        },
        {
          step: 3,
          title: "Production",
          description: "Screen capture, animation, voiceover — all handled.",
        },
        {
          step: 4,
          title: "Deliver & Optimize",
          description: "Final video plus social cuts, ready to launch.",
        },
      ],
      ctaText: "Launch Your Product Video",
    },
    {
      slug: "ai-avatar",
      title: "AI Avatar Videos",
      shortTitle: "AI Avatar",
      tagline: "Scale your video content with AI-powered presenters",
      description:
        "Create professional presenter-style videos at scale using AI avatars. Perfect for product demos, tutorials, onboarding, and social content — no camera or studio needed.",
      icon: "sparkles",
      features: [
        "Realistic AI presenters",
        "Multiple languages & accents",
        "Custom branded backgrounds",
        "Script-to-video in hours",
        "Batch production available",
        "No filming required",
      ],
      processSteps: [
        {
          step: 1,
          title: "Share Your Script",
          description: "Give us the words. We handle the rest.",
        },
        {
          step: 2,
          title: "Choose Your Avatar",
          description: "Pick from our library or create a custom one.",
        },
        {
          step: 3,
          title: "We Produce",
          description: "AI avatar + editing + branding = polished video.",
        },
        {
          step: 4,
          title: "Deliver",
          description: "Get finished videos ready for any platform.",
        },
      ],
      ctaText: "Create AI Avatar Videos",
    },
  ] as Service[],

  // ─── Portfolio Videos ────────────────────────────────────
  // HOW TO ADD VIDEOS:
  // Option 1: YouTube — paste the YouTube video ID as youtubeEmbedId
  //   e.g. for https://youtube.com/watch?v=abc123 → youtubeEmbedId: "abc123"
  //
  // Option 2: Local file — drop MP4 into /public/videos/ and set videoFile
  //   e.g. videoFile: "/videos/client-demo.mp4"
  //   Optionally add a thumbnail: "/videos/client-demo-thumb.jpg"
  //
  // Set featured: true to show on the landing page.
  portfolio: [
    // ─── Featured on landing page (3 videos) ───────────────
    {
      id: "lv-1",
      title: "WicFlow AI Agency Promo",
      client: "WicFlow",
      videoFile: "/videos/wicflow-saas.mp4",
      thumbnail: "/videos/wicflow-saas-thumb.jpg",
      service: "launch-videos",
      featured: true,
      result: "2x investors",
      description: "SaaS launch video that helped WicFlow secure investor interest and drive early traction.",
    },
    {
      id: "lv-2",
      title: "Kylra AI Launch Video",
      client: "Kylra AI",
      videoFile: "/videos/kylra-ai.mp4",
      thumbnail: "/videos/kylra-ai-thumb.jpg",
      service: "launch-videos",
      featured: true,
      result: "2x signups",
      description: "Cinematic product launch video with scripted narrative, voiceover, and motion design.",
    },
    {
      id: "ai-1",
      title: "AI Avatar Demo",
      client: "AchX Media",
      videoFile: "/videos/ai-avatar-demo.mp4",
      thumbnail: "/videos/ai-avatar-demo-thumb.jpg",
      service: "ai-avatar",
      featured: true,
      result: "No camera needed",
      description: "AI-powered presenter video — professional quality without filming a single frame.",
    },
    // ─── Additional portfolio (service pages only) ─────────
    {
      id: "lv-3",
      title: "Whop Platform Explainer",
      client: "Whop",
      videoFile: "/videos/whop.mp4",
      thumbnail: "/videos/whop-thumb.jpg",
      service: "launch-videos",
      featured: true,
      result: "350% CTR",
      description: "Compelling explainer that breaks down a complex platform into a clear, engaging story.",
    },
  ] as PortfolioVideo[],

  // ─── Testimonials ────────────────────────────────────────
  testimonials: [
    {
      id: "1",
      name: "Felix Wickholm",
      role: "Founder",
      company: "WicFlow",
      quote:
        "AchX helped us create a launch video that played a key role in getting investors interested in our company. The quality was on par with what we'd seen from much bigger agencies.",
    },
    {
      id: "2",
      name: "Sarah Chen",
      role: "Head of Marketing",
      company: "Kylra AI",
      quote:
        "We used to spend weeks coordinating video production. Now we get the same quality in a fraction of the time — and faster too. AchX is our go-to for every launch.",
    },
    {
      id: "3",
      name: "Marcus Rivera",
      role: "Growth Lead",
      company: "Whop",
      quote:
        "Our explainer video directly doubled our landing page conversion rate. AchX understood our product better than agencies that cost 5x more.",
    },
    {
      id: "4",
      name: "James Okafor",
      role: "Co-founder",
      company: "AI Startup",
      quote:
        "Finally an agency that speaks SaaS. No hand-holding needed — they got our product, audience, and tone from day one.",
    },
  ] as Testimonial[],

  // ─── Pricing ────────────────────────────────────────────
  pricing: [
    {
      name: "Launch Video",
      slug: "launch-videos",
      price: "€1,499",
      unit: "per project",
      description: "Full production from script to screen",
      features: [
        "Concept & scripting",
        "Screen recordings with polish",
        "Professional voiceover",
        "Brand-matched motion design",
        "Landing page optimized",
        "Social cut-downs included",
      ],
      highlighted: true,
      ctaText: "Start Your Project",
    },
    {
      name: "AI Avatar",
      slug: "ai-avatar",
      price: "€149",
      unit: "per video",
      description: "Scale video content without filming",
      features: [
        "Realistic AI presenters",
        "Multiple languages & accents",
        "Custom branded backgrounds",
        "Script-to-video in hours",
        "Batch discounts available",
        "No filming required",
      ],
      highlighted: false,
      ctaText: "Create Videos",
    },
  ] as PricingTier[],

  // ─── Why Us ──────────────────────────────────────────────
  whyUs: [
    {
      title: "SaaS-Native",
      description:
        "We only work with SaaS and startups. No wedding videos, no corporate galas. We understand your product, your metrics, and your audience.",
      icon: "target",
    },
    {
      title: "Speed That Matches Yours",
      description:
        "First cuts in 48 hours. Launch videos in 2 weeks. We move at startup pace because we are one.",
      icon: "zap",
    },
    {
      title: "Results, Not Just Views",
      description:
        "Every video we make is built to convert — signups, demos, activations. We measure success in your metrics, not ours.",
      icon: "trending-up",
    },
  ],

  // ─── General Process (landing page) ──────────────────────
  process: [
    {
      step: 1,
      title: "Book a Call",
      description: "Tell us about your project, timeline, and goals.",
    },
    {
      step: 2,
      title: "We Strategize",
      description: "We create a plan tailored to your brand and audience.",
    },
    {
      step: 3,
      title: "We Produce",
      description: "Our team handles editing, animation, and polish.",
    },
    {
      step: 4,
      title: "You Launch",
      description: "Get your finished video, ready to convert.",
    },
  ] as ProcessStep[],

  // ─── FAQ ─────────────────────────────────────────────────
  faq: [
    {
      question: "How much does a video cost?",
      answer:
        "Every project is different — it depends on scope, length, and complexity. Book a free call and we'll give you an exact quote within 24 hours — no strings attached.",
    },
    {
      question: "How long does production take?",
      answer:
        "Video editing: 48 hours to 1 week. AI avatar videos: 2-5 days. Launch videos: 2-4 weeks from brief to final delivery.",
    },
    {
      question: "How many revisions do I get?",
      answer:
        "Unlimited revisions on all projects. We keep going until you're 100% happy with the result.",
    },
    {
      question: "What do I need to provide?",
      answer:
        "For editing: your raw footage. For launch videos: access to your product and brand guidelines. For AI avatars: just the script. We handle everything else.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Absolutely. Most of our clients are seed to Series A startups. We understand tight budgets and fast timelines.",
    },
    {
      question: "Can I see more examples of your work?",
      answer:
        "Yes! Book a free 20-minute call and we'll walk you through relevant examples for your specific use case.",
    },
    {
      question: "What if I need videos regularly?",
      answer:
        "We offer monthly retainer packages with discounted rates and priority turnaround. Ask about our growth plans on your free call.",
    },
  ] as FAQItem[],

  // ─── CTA Section ─────────────────────────────────────────
  cta: {
    headlinePrefix: "Videos That",
    typewriterPhrases: [
      "Close More Deals",
      "Grow Your Company",
      "Build Trust",
      "Launch Products",
      "Win Investors",
    ],
    subtext:
      "Book a free 20-minute strategy call. We'll discuss your goals, show you relevant examples, and outline a plan — no commitment.",
    buttonText: "Book a Free Call",
    finePrint: "Free 20-minute consultation. No commitment.",
  },
};
