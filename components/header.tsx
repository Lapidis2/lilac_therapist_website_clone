"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "My Approach", sectionId: "approach" },
  { label: "Our Office", sectionId: "office" },
  { label: "Contact", sectionId: "contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 shadow-sm backdrop-blur-md" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link
            href="/"
            className="font-serif text-xl font-medium text-foreground md:text-2xl"
            aria-label="Dr. Maya Reynolds - Home"
          >
            Dr. Maya Reynolds
          </Link>

        
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                type="button"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              type="button"
            >
              Schedule a Free Consult
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            type="button"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 pb-4 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                type="button"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="mt-2 rounded-full bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground"
              type="button"
            >
              Schedule a Free Consult
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
