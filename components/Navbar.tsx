"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white border-b border-gray-100
        transition-shadow duration-300
        ${isScrolled ? "shadow-md" : "shadow-none"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handleNavClick("#home")}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1a6fe4] leading-none">
                accredian
              </span>
              {/* 
                Using text-[#1a6fe4] — Tailwind v4 arbitrary value syntax
                This is the SAFEST approach: works in both v3 and v4
              */}
              <span className="text-[9px] text-gray-400 font-light tracking-wide">
                credentials that matter
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`
                  text-sm font-medium transition-colors duration-200 pb-1
                  ${activeLink === link.href
                    ? "text-[#1a6fe4] border-b-2 border-[#1a6fe4]"
                    : "text-gray-600 hover:text-[#1a6fe4]"
                  }
                `}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1a6fe4] hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`
                block w-full text-left px-6 py-3 text-sm font-medium
                transition-colors duration-200
                ${activeLink === link.href
                  ? "text-[#1a6fe4] bg-blue-50"
                  : "text-gray-600 hover:text-[#1a6fe4] hover:bg-gray-50"
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}