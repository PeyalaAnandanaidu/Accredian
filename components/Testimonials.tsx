"use client";
// Needs "use client" for useState (carousel slide tracking)

import { useState } from "react";

interface Testimonial {
  logo: string;       // logo image URL
  logoAlt: string;    // alt text for logo
  quote: string;      // testimonial text
  isCircle: boolean;  // some logos are circular (Bayer), some rectangular (ADP)
}

const testimonials: Testimonial[] = [
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png",
    logoAlt: "ADP",
    quote:
      '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
    isCircle: false,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1280px-Logo_Bayer.svg.png",
    logoAlt: "Bayer",
    quote:
      '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
    isCircle: true,
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
    logoAlt: "Reliance Industries Limited",
    quote:
      '"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."',
    isCircle: false,
  },
  {
    logo: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png",
    logoAlt: "HCL Technologies",
    quote:
      '"Accredian has transformed how we approach learning and development. Their programs are practical, industry-relevant, and delivered by true experts who understand enterprise challenges deeply."',
    isCircle: false,
  },
];

// We show 2 cards at a time — so we have (total - 1) slide positions
// Slide 0: cards 0,1 | Slide 1: cards 1,2 | Slide 2: cards 2,3
const CARDS_PER_SLIDE = 2;

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // currentSlide = index of the FIRST card shown in current view

  // Total number of dot indicators
  // Each dot = a unique pair of cards
  const totalSlides = testimonials.length - CARDS_PER_SLIDE + 1;
  // 4 testimonials - 2 per slide + 1 = 3 dots

  // Get the two cards for current slide
  const visibleTestimonials = testimonials.slice(
    currentSlide,
    currentSlide + CARDS_PER_SLIDE
  );
  // slice(0, 2) → cards 0,1
  // slice(1, 3) → cards 1,2
  // slice(2, 4) → cards 2,3

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Testimonials from{" "}
            <span className="text-[#1a6fe4]">Our Partners</span>
          </h2>
          <p className="text-gray-500 text-lg">
            What{" "}
            <span className="text-[#1a6fe4] font-medium">Our Clients</span>{" "}
            Are Saying
          </p>
        </div>

        {/* TESTIMONIAL CARDS — 2 visible at a time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${currentSlide}-${index}`}
              /*
                Key includes currentSlide so React re-renders cards
                when slide changes (prevents stale content)
              */
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                backgroundColor: "#ffffff",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // Matches the reference: bordered card, white bg, rounded
              }}
            >
              {/* COMPANY LOGO */}
              <div style={{ marginBottom: "24px" }}>
                <img
                  src={testimonial.logo}
                  alt={testimonial.logoAlt}
                  style={{
                    height: testimonial.isCircle ? "64px" : "40px",
                    width: "auto",
                    objectFit: "contain",
                    // isCircle logos (Bayer) need more height
                    // rectangular logos (ADP, HCL) look better at 40px
                  }}
                />
              </div>

              {/* QUOTE TEXT */}
              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: "1.7",
                  fontStyle: "normal",
                  margin: 0,
                  // Matches reference: dark gray, comfortable line height
                }}
              >
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>

        {/* DOT INDICATORS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentSlide(dotIndex)}
              style={{
                width: dotIndex === currentSlide ? "10px" : "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                padding: 0,
                backgroundColor:
                  dotIndex === currentSlide
                    ? "#1a6fe4"   // active dot = brand blue (filled)
                    : "#d1d5db", // inactive dot = light gray
                transition: "background-color 0.2s ease",
                // Matches reference exactly: blue active dot, gray inactive
              }}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
