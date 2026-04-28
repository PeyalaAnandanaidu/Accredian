import React from "react"; // ← ADD THIS IMPORT (needed for React.Fragment)
import {
  Lightbulb,
  MessageSquare,
  Settings,
  Globe,
  TrendingUp,
  Target,
  Package,
} from "lucide-react";

interface EdgeFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  position: "top" | "bottom";
  style: "light" | "dark";
}

const edgeFeatures: EdgeFeature[] = [
  {
    icon: Lightbulb,
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    position: "top",
    style: "light",
  },
  {
    icon: MessageSquare,
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    position: "bottom",
    style: "dark",
  },
  {
    icon: Settings,
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    position: "top",
    style: "dark",
  },
  {
    icon: Globe,
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    position: "bottom",
    style: "dark",
  },
  {
    icon: TrendingUp,
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    position: "top",
    style: "dark",
  },
  {
    icon: Target,
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    position: "bottom",
    style: "dark",
  },
  {
    icon: Package,
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    position: "top",
    style: "dark",
  },
];

export default function AccredianEdge() {
  const COL_W = 130;
  const CONN_W = 40;
  const CIRCLE_OUTER = 100;
  const CIRCLE_INNER = 76;
  const V_LINE_H = 40;
  const LABEL_H = 100;

  return (
    <section id="accredian-edge" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The <span className="text-[#1a6fe4]">Accredian Edge</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Key Aspects of{" "}
            <span className="text-[#1a6fe4] font-medium">Our Strategic Training</span>
          </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block overflow-x-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: edgeFeatures
                .map((_, i) =>
                  i < edgeFeatures.length - 1
                    ? `${COL_W}px ${CONN_W}px`
                    : `${COL_W}px`
                )
                .join(" "),
              margin: "0 auto",
            }}
          >
            {edgeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isLight = feature.style === "light";
              const isTop = feature.position === "top";

              return (
                /*
                  THE FIX:
                  Use React.Fragment with key prop instead of <>
                  <> shorthand syntax does NOT support the key prop
                  React.Fragment long-form DOES support key prop
                  
                  This is the correct pattern whenever you need:
                  - A fragment wrapper (no extra DOM node)
                  - AND a key prop (for list rendering)
                */
                <React.Fragment key={index}>

                  {/* ── FEATURE COLUMN ── */}
                  <div
                    style={{
                      width: `${COL_W}px`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* TOP SECTION */}
                    {isTop ? (
                      <div
                        style={{
                          height: `${LABEL_H + V_LINE_H}px`,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        {/* LABEL */}
                        <div style={{ width: "100%", padding: "0 4px" }}>
                          <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                            {/* BLUE DOT */}
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#1a6fe4",
                                flexShrink: 0,
                                marginTop: "4px",
                              }}
                            />
                            <div>
                              <p style={{ fontWeight: "700", fontSize: "13px", color: "#111827", lineHeight: "1.3", margin: 0 }}>
                                {feature.title}
                              </p>
                              <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.5", margin: "4px 0 0 0" }}>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* VERTICAL LINE DOWN */}
                        <div
                          style={{
                            width: "1px",
                            height: `${V_LINE_H}px`,
                            backgroundColor: "#1a6fe4",
                            flexShrink: 0,
                          }}
                        />
                      </div>
                    ) : (
                      // Empty spacer for bottom-positioned features
                      <div style={{ height: `${LABEL_H + V_LINE_H}px` }} />
                    )}

                    {/* ── CIRCLE ── */}
                    <div
                      style={{
                        width: `${CIRCLE_OUTER}px`,
                        height: `${CIRCLE_OUTER}px`,
                        borderRadius: "50%",
                        border: "2px dashed #b8c8dc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: `${CIRCLE_INNER}px`,
                          height: `${CIRCLE_INNER}px`,
                          borderRadius: "50%",
                          backgroundColor: isLight ? "#ffffff" : "#1e3a8a",
                          border: isLight ? "3px solid #1a6fe4" : "3px solid #2563eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: isLight
                            ? "0 6px 20px rgba(26,111,228,0.25)"
                            : "0 6px 20px rgba(30,58,138,0.40)",
                        }}
                      >
                        <Icon size={30} color={isLight ? "#1a6fe4" : "#ffffff"} />
                      </div>
                    </div>

                    {/* BOTTOM SECTION */}
                    {!isTop ? (
                      <div
                        style={{
                          height: `${V_LINE_H + LABEL_H}px`,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        {/* VERTICAL LINE DOWN */}
                        <div
                          style={{
                            width: "1px",
                            height: `${V_LINE_H}px`,
                            backgroundColor: "#1a6fe4",
                            flexShrink: 0,
                          }}
                        />

                        {/* LABEL */}
                        <div style={{ width: "100%", padding: "0 4px" }}>
                          <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                            {/* BLUE DOT */}
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#1a6fe4",
                                flexShrink: 0,
                                marginTop: "4px",
                              }}
                            />
                            <div>
                              <p style={{ fontWeight: "700", fontSize: "13px", color: "#111827", lineHeight: "1.3", margin: 0 }}>
                                {feature.title}
                              </p>
                              <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.5", margin: "4px 0 0 0" }}>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Empty spacer for top-positioned features
                      <div style={{ height: `${V_LINE_H + LABEL_H}px` }} />
                    )}
                  </div>

                  {/* ── CONNECTOR ›› ── */}
                  {index < edgeFeatures.length - 1 && (
                    <div
                      style={{
                        width: `${CONN_W}px`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: `${LABEL_H + V_LINE_H}px`,
                        paddingBottom: `${LABEL_H + V_LINE_H}px`,
                        alignSelf: "stretch",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#94a3b8",
                          letterSpacing: "-4px",
                          lineHeight: 1,
                          display: "flex",
                          alignItems: "center",
                          height: `${CIRCLE_OUTER}px`,
                        }}
                      >
                        ››
                      </span>
                    </div>
                  )}

                </React.Fragment> // ← closes React.Fragment with key
              );
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {edgeFeatures.map((feature) => {
            const Icon = feature.icon;
            const isLight = feature.style === "light";
            return (
              <div
                key={feature.title}
                style={{
                  display: "flex",
                  gap: "14px",
                  padding: "16px",
                  borderRadius: "16px",
                  backgroundColor: "#f0f7ff",
                  border: "1px solid #dbeafe",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    backgroundColor: isLight ? "#ffffff" : "#1e3a8a",
                    border: `2px solid ${isLight ? "#1a6fe4" : "#2563eb"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={isLight ? "#1a6fe4" : "#ffffff"} />
                </div>
                <div>
                  <p style={{ fontWeight: "700", fontSize: "13px", color: "#111827", margin: 0 }}>
                    {feature.title}
                  </p>
                  <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "4px", lineHeight: "1.5" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}