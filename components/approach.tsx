import Image from "next/image";
import { Check } from "lucide-react";

const approaches = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Identify and transform negative thought patterns that fuel anxiety, depression, and self-doubt.",
  },
  {
    title: "EMDR Therapy",
    description: "Process traumatic memories and reduce their emotional charge so you can move forward with peace.",
  },
  {
    title: "Mindfulness-Based Approaches",
    description: "Develop present-moment awareness to calm your nervous system and reduce reactivity to stress.",
  },
  {
    title: "Body-Based Techniques",
    description: "Reconnect with your body's wisdom to release stored tension and build greater resilience.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-card py-20 lg:py-32" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
          {/* Image */}
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
              <Image
                src="/images/office-therapy-room.jpg"
                alt="Peaceful and calming therapy space at Dr. Maya Reynolds' Santa Monica office"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl lg:-left-12">
              <p className="font-serif text-3xl font-medium">100%</p>
              <p className="text-sm opacity-90">Confidential</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-primary lg:text-left">
              My Approach
            </p>
            <h2
              id="approach-heading"
              className="mb-6 text-center font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-left lg:text-5xl"
            >
              <span className="text-balance">Evidence-based methods,</span>
              <br />
              <span className="relative inline-block">
                personalized care
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 240 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C50 2 120 2 180 4C210 5 220 6 238 4"
                    stroke="#c9a87c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mb-8 text-center leading-relaxed text-muted-foreground lg:text-left">
              I draw from multiple therapeutic modalities to create a customized approach
              that honors your unique experiences and goals. Together, we&apos;ll find what works
              best for you—because healing isn&apos;t one-size-fits-all.
            </p>

            <ul className="space-y-4" aria-label="Therapeutic approaches">
              {approaches.map((approach, index) => (
                <li key={index} className="flex gap-4 rounded-2xl bg-secondary p-5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary" aria-hidden="true">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">{approach.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{approach.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
