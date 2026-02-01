"use client";

import Image from "next/image";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-background pt-20"
      aria-labelledby="hero-heading"
    >
     
      <div className="absolute right-0 top-0 h-[80%] w-[60%] overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-[120%] w-full rounded-bl-[40%] rounded-tl-[60%] bg-secondary" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:py-24">
      
        <div className="z-10 flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Licensed Psychologist in Santa Monica
          </p>
          <h1
            id="hero-heading"
            className="mb-6 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl"
          >
            <span className="text-balance">Your Santa Monica Therapist for
            <br />
           
              healing
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 8C40 4 80 2 100 4C120 6 160 10 198 6"
                  stroke="#7a9e7e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            & growth
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
            You don&apos;t have to face anxiety, trauma, or burnout alone. I provide a warm,
            collaborative space where you can feel truly heard and supported as we work
            together toward meaningful, lasting change.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              type="button"
            >
              Schedule a Free Consult
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              type="button"
            >
              Learn more about me
            </button>
          </div>
        </div>

      
        <div className="relative z-10 flex-1">
          <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px] shadow-2xl">
            <Image
              src="/images/dr-maya-hero.jpg"
              alt="Dr. Maya Reynolds, PsyD - Licensed Psychologist specializing in anxiety therapy, trauma counseling, and burnout support in Santa Monica, California"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/50" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
