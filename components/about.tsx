import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-card py-20 lg:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image */}
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[60px]">
              <Image
                src="/images/dr-maya-about.jpg"
                alt="Dr. Maya Reynolds in her Santa Monica therapy office, creating a warm and welcoming environment for clients"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border-2 border-accent" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-secondary" aria-hidden="true" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2
              id="about-heading"
              className="mb-6 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl"
            >
              <span className="text-balance">Warm, collaborative</span>
              <br />
              <span className="relative inline-block">
                therapy that works
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 280 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C60 2 140 2 200 4C240 5 260 6 278 4"
                    stroke="#c9a87c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Hi, I&apos;m Dr. Maya Reynolds. As a licensed psychologist based in Santa Monica,
                I specialize in helping adults navigate anxiety, trauma, burnout, and perfectionism.
                My approach is grounded in evidence-based methods while honoring your unique story.
              </p>
              <p className="leading-relaxed">
                I integrate Cognitive Behavioral Therapy (CBT), EMDR, mindfulness practices,
                and body-based techniques to create a personalized path toward healing. I believe
                therapy works best when it feels like a true partnership—one where you feel safe,
                seen, and supported every step of the way.
              </p>
              <p className="leading-relaxed">
                Whether you&apos;re struggling with overwhelming worry, processing difficult experiences,
                or simply feeling exhausted by the pressure to be perfect, I&apos;m here to help you
                find relief and build a life that feels more aligned with who you truly are.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start" role="list" aria-label="Credentials">
              <div className="text-center lg:text-left" role="listitem">
                <p className="font-serif text-2xl font-medium text-foreground">PsyD</p>
                <p className="text-sm text-muted-foreground">Doctor of Psychology</p>
              </div>
              <div className="h-12 w-px bg-border" aria-hidden="true" />
              <div className="text-center lg:text-left" role="listitem">
                <p className="font-serif text-2xl font-medium text-foreground">CA Licensed</p>
                <p className="text-sm text-muted-foreground">Psychologist</p>
              </div>
              <div className="h-12 w-px bg-border" aria-hidden="true" />
              <div className="text-center lg:text-left" role="listitem">
                <p className="font-serif text-2xl font-medium text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
