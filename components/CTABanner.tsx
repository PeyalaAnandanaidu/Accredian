import { Headphones } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ backgroundColor: "#1a6fe4" }}
        >
          {/* decorative rings */}
          <div
            className="absolute right-40 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: 220,
              height: 220,
              border: "44px solid rgba(255,255,255,0.08)",
            }}
          />
          <div
            className="absolute right-16 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: 360,
              height: 360,
              border: "44px solid rgba(255,255,255,0.05)",
            }}
          />

          {/* left content */}
          <div className="relative z-10 flex items-center gap-5">
            <div
              className="h-16 w-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
            >
              <Headphones size={32} color="white" />
            </div>

            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-white/85 text-sm md:text-base mt-1">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>

          {/* button (pure anchor, no onClick needed) */}
          <a
            href="#home"
            className="relative z-10 inline-flex items-center justify-center gap-2
                       bg-white text-[#1a6fe4] font-semibold
                       px-8 py-4 rounded-xl
                       shadow-md hover:shadow-lg transition-shadow
                       w-fit"
          >
            Contact Us <span className="text-lg leading-none">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}