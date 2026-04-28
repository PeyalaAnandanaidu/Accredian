// tailwind.config.ts
// In Tailwind v4, most config moved to globals.css @theme block
// This file is kept for compatibility but most settings are in CSS

import type { Config } from "tailwindcss";

const config: Config = {
  // content is auto-detected in v4, but can be specified
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;