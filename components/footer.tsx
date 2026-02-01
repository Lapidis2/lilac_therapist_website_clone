"use client";

import Link from "next/link";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "My Approach", sectionId: "approach" },
  { label: "Our Office", sectionId: "office" },
  { label: "Contact", sectionId: "contact" },
];

export function Footer() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer className="bg-foreground py-12 text-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <Link href="/" className="font-serif text-2xl font-medium" aria-label="Dr. Maya Reynolds - Home">
              Dr. Maya Reynolds
            </Link>
            <p className="mt-2 text-sm text-background/70">
              Licensed Psychologist | Santa Monica, CA
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm md:justify-end" aria-label="Footer navigation">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-background/70 transition-colors hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-background"
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-background/60 md:flex-row md:justify-between md:text-left">
            <p>2026 Dr. Maya Reynolds Therapy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-background">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-background">
                Terms of Service.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
