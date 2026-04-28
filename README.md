# Accredian Enterprise Clone

A partial clone of the Accredian Enterprise landing page built with Next.js App Router and Tailwind CSS.

## Project Overview

This repository contains a responsive enterprise landing page built with:
- Next.js 16 App Router
- React 19 functional components + hooks
- Tailwind CSS for styling
- A lead capture modal form
- A mock Next.js API route at `/api/leads`

## Live Demo

https://accredian-orcin.vercel.app

## Repository

This repository contains the full source code for the Accredian Enterprise assignment.

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
- Reviewing and validating component structure
- Improving README and documentation clarity
- Confirming assignment coverage against project files

## Manual Improvements

Manual work included:
- Connecting the lead form modal to the hero section
- Implementing form validation and API submission
- Building responsive layout sections and navigation
- Refining footer, navbar, and section anchors



## Notes

This build is focused on clarity, responsiveness, and component reuse for the Accredian Enterprise landing page assignment.
