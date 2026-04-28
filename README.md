# Accredian Enterprise Clone

A partial clone of the Accredian Enterprise landing page built with Next.js App Router and Tailwind CSS.

## Project Overview

This repository contains a responsive enterprise landing page built with:
- Next.js 16 App Router
- React 19 functional components + hooks
- Tailwind CSS for styling
- A lead capture modal form
- A mock Next.js API route at `/api/leads`

## Project Links

- Live demo: https://accredian-orcin.vercel.app
- GitHub repository: https://github.com/PeyalaAnandanaidu/Accredian.git

## Project Status

This build includes the landing page sections, responsive navigation, footer, lead capture form, and mock API integration. The current submission reflects a strong component-driven clone of the Accredian Enterprise landing experience.

## Key Features

- Fully responsive landing page design
- Smooth section navigation and scroll tracking
- Reusable component-based UI
- Lead capture form integrated in the hero section
- API integration using Next.js App Router API route
- Navbar and footer rendered globally via root layout

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Folder Structure

- `app/` — Next.js App Router pages, layout, and API routes
- `components/` — reusable UI components for landing page sections
- `app/api/leads/route.ts` — mock lead capture endpoint
- `app/layout.tsx` — site layout with Navbar and Footer
- `app/page.tsx` — landing page composition

## AI Usage

AI tools were used for:
- Structuring the project and breaking the UI into reusable components
- Debugging Tailwind and Next.js client/server issues
- Improving README clarity and ensuring assignment coverage

## Manual Improvements

Manual work included:
- Organizing reusable components such as Navbar, Hero, Testimonials, CTA, and Footer
- Refining UI spacing, responsiveness, and alignment
- Fixing incorrect Tailwind usage and icon imports
- Ensuring client-side interactivity with `use client` where required

## Future Improvements

With more time, I would:
- Add polished animations and improve interactive UI elements
- Optimize performance with lazy loading and image optimization
- Implement backend persistence for lead submissions
- Enhance accessibility and SEO further

## Notes

This build focuses on clarity, responsiveness, and maintainable component design for the Accredian Enterprise assignment.
