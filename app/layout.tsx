import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AchX Media | Video Production for SaaS & Startups",
  description:
    "Launch videos and AI avatar videos for SaaS companies and startups. Book a free call.",
  metadataBase: new URL("https://achx.in"),
  openGraph: {
    title: "AchX Media | Video Production for SaaS & Startups",
    description:
      "Launch videos and AI avatar videos for SaaS companies and startups.",
    type: "website",
    url: "https://achx.in",
    siteName: "AchX Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "AchX Media | Video Production for SaaS & Startups",
    description:
      "Launch videos and AI avatar videos for SaaS companies and startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
