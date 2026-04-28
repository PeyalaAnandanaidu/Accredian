// layout.tsx is the ROOT LAYOUT
// It wraps EVERY page in the application
// Think of it as the "frame" — header and footer go here

import type { Metadata } from "next";
// Metadata type provides TypeScript intellisense for SEO tags

import { Inter } from "next/font/google";
// next/font automatically optimizes Google Fonts
// It self-hosts the font, removing the need for an external request
// This improves Core Web Vitals (LCP, CLS)

import "./globals.css";
// Importing global CSS here makes it available everywhere
// You can only import CSS in layout files (not component files) in App Router

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Initialize Inter font
// subsets: ["latin"] means we only download Latin characters (smaller bundle)
// variable: "--font-inter" creates a CSS custom property we can reference
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Shows fallback font while Inter loads (better UX)
});

// Metadata object — Next.js uses this to inject <title> and <meta> tags
// This is the App Router way (replaces <Head> from Pages Router)
export const metadata: Metadata = {
  title: "Accredian",
  description:
    "Cultivate high-performance teams through expert learning. Tailored solutions, industry insights, and expert guidance for enterprise organizations.",
  keywords: "enterprise training, corporate learning, skill development, Accredian",
  openGraph: {
    // Open Graph tags control how your page looks when shared on social media
    title: "Accredian Enterprise",
    description: "Next-Gen Expertise For Your Enterprise",
    type: "website",
  },
};

// RootLayout receives `children` — this is whatever page.tsx renders
// The { children }: { children: React.ReactNode } pattern is standard TypeScript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // ReactNode = any valid JSX (components, strings, null, etc.)
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* 
        lang="en" helps screen readers and SEO
        className={inter.variable} makes the CSS variable available globally
        This does NOT set the font directly — we'll reference it via Tailwind
      */}
      <body className="font-sans bg-white text-gray-900 antialiased">
        {/* 
          font-sans: applies our Inter font (configured in tailwind.config.ts)
          bg-white: default white background
          text-gray-900: dark text for readability
          antialiased: makes font rendering smoother on screens
        */}
        <Navbar />
        {/* 
          Navbar is rendered here so it appears on EVERY page
          If you added /about or /contact pages, navbar would still show
        */}
        <main>
          {children}
          {/* 
            children is whatever page.tsx (or any nested page) exports
            This is React's composition pattern
          */}
        </main>
        <Footer />
      </body>
    </html>
  );
}