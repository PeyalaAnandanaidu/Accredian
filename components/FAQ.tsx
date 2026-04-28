"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    name: "About the Course",
    faqs: [
      {
        question: "What types of courses does Accredian offer for enterprises?",
        answer: "Accredian offers a comprehensive range of courses including AI & Machine Learning, Data Science, Product Management, Leadership Development, and Digital Transformation programs — all tailored to enterprise needs.",
      },
      {
        question: "Can courses be customized for our specific industry?",
        answer: "Absolutely! We specialize in creating industry-specific learning paths for IT, Healthcare, Finance, Retail, Manufacturing, and more.",
      },
    ],
  },
  {
    name: "About the Delivery",
    faqs: [
      {
        question: "What is the ideal team size for corporate training?",
        answer: "Our programs are designed to accommodate teams of any size — from small focused groups of 10 to large organizations with 1000+ employees.",
      },
      {
        question: "How do we get started with Accredian?",
        answer: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process — from skill gap analysis to a custom program tailored to your needs.",
      },
    ],
  },
  {
    name: "Miscellaneous",
    faqs: [
      {
        question: "Do you provide completion certificates?",
        answer: "Yes, all participants receive industry-recognized certificates upon successful completion of the program.",
      },
      {
        question: "Is there post-training support available?",
        answer: "Yes, we provide 90-day post-training support including access to course materials, mentor sessions, and a dedicated learning community.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const currentFAQs = faqCategories[activeCategory].faqs;

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Frequently Asked <span className="text-[#1a6fe4]">Questions</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CATEGORY TABS */}
          <div className="flex flex-col gap-4">
            {faqCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenQuestion(null);
                }}
                className="text-left px-6 py-4 rounded-xl border-2 font-medium transition-all duration-200"
                style={{
                  borderColor: activeCategory === index ? "#1a6fe4" : "#e5e7eb",
                  color: activeCategory === index ? "#1a6fe4" : "#4b5563",
                  backgroundColor: activeCategory === index ? "#eff6ff" : "transparent",
                }}
                /*
                  Using inline style for dynamic colors based on state.
                  This is the v4-safe pattern for conditional dynamic colors.
                */
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ ACCORDION */}
          <div className="lg:col-span-2 space-y-4">
            {currentFAQs.map((faq) => {
              const isOpen = openQuestion === faq.question;
              return (
                <div
                  key={faq.question}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(faq.question)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium transition-colors duration-200"
                    style={{
                      color: isOpen ? "#1a6fe4" : "#374151",
                      backgroundColor: isOpen ? "#eff6ff" : "transparent",
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp size={20} className="flex-shrink-0" style={{ color: "#1a6fe4" }} />
                    ) : (
                      <ChevronDown size={20} className="flex-shrink-0 text-gray-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* ENQUIRE NOW */}
            <div className="flex justify-center pt-8">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white px-10 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg"
                style={{ backgroundColor: "#1a6fe4" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f4ea8")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a6fe4")}
                /*
                  For the hover effect on this button, we use onMouseEnter/Leave
                  since hover: with inline styles doesn't work in React.
                  Alternative: use a CSS class with hover: defined in globals.css
                */
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}