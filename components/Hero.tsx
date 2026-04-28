"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import LeadForm from "./LeadForm";

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="home" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* HERO CARD */}
        <div
          className="rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            /*
              REPLACED: bg-gradient-to-br from-blue-50 to-blue-100/50
              WHY: Tailwind v4 gradient classes with opacity modifier caused errors
              FIX: Use inline style with plain CSS gradient (always works in any version)
            */
            background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 60%, #eff6ff 100%)",

            /*
              BOX SHADOW — three layer approach:
              Layer 1: tight shadow for crisp edge definition
              Layer 2: medium blue-tinted shadow for depth
              Layer 3: wide soft blue glow for floating card effect
            */
            boxShadow: `
              0 2px 4px rgba(0, 0, 0, 0.04),
              0 8px 16px rgba(26, 111, 228, 0.08),
              0 24px 48px rgba(26, 111, 228, 0.12)
            `,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* LEFT COLUMN — Text Content */}
            <div className="space-y-6">

              {/* HEADLINE */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Next-Gen{" "}
                {/*
                  REPLACED: text-brand-blue
                  WHY: Custom Tailwind v3 class that doesn't exist in v4 without config
                  FIX: Use arbitrary hex value text-[#1a6fe4] which works in all versions
                */}
                <span className="text-[#1a6fe4]">Expertise</span>
                <br />
                For Your{" "}
                <span className="text-[#1a6fe4]">Enterprise</span>
              </h1>

              {/* SUBHEADING */}
              <p className="text-lg text-gray-600 font-medium">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* FEATURE PILLS */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                  >
                    {/*
                      REPLACED: text-brand-blue → text-[#1a6fe4]
                    */}
                    <CheckCircle
                      size={18}
                      className="text-[#1a6fe4] flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="
                  text-white px-8 py-4 rounded-xl
                  font-semibold text-lg
                  transform hover:scale-105
                  transition-all duration-200
                  shadow-lg hover:shadow-xl
                "
                style={{ backgroundColor: "#1a6fe4" }}
                /*
                  REPLACED: bg-brand-blue hover:bg-brand-blue-dark
                  WHY: Custom Tailwind v3 color classes don't work in v4 without config
                  FIX: backgroundColor via inline style for base color
                       hover effect handled via onMouseEnter/Leave below
                */
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0f4ea8";
                  // Darker blue on hover — matches hover:bg-brand-blue-dark
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a6fe4";
                  // Restore original blue on mouse leave
                }}
              >
                Enquire Now
              </button>
            </div>

            {/* RIGHT COLUMN — Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop&crop=faces"
                alt="Enterprise professionals"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </div>

      {/* LEAD FORM MODAL */}
      {isFormOpen && (
        <LeadForm onClose={() => setIsFormOpen(false)} />
      )}
    </section>
  );
}