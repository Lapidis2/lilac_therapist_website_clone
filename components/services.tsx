import { Brain, Heart, Flame } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Anxiety Therapy",
    location: "Santa Monica",
    description:
      "Struggling with constant worry, racing thoughts, or panic? Together, we'll uncover the roots of your anxiety and build practical tools to help you feel calm, confident, and in control of your life again.",
  },
  {
    icon: Heart,
    title: "Trauma-Informed Counseling",
    location: "Santa Monica",
    description:
      "Past experiences don't have to define your future. Using EMDR and body-based approaches, I'll help you process difficult memories and reclaim a sense of safety, wholeness, and peace.",
  },
  {
    icon: Flame,
    title: "Burnout & Perfectionism Support",
    location: "Santa Monica",
    description:
      "Feeling exhausted, overwhelmed, or never quite good enough? I specialize in helping high-achievers break free from perfectionism, set healthy boundaries, and rediscover joy and balance.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-secondary py-20 lg:py-32" aria-labelledby="services-heading">

      <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            How I Can Help
          </p>
          <h2
            id="services-heading"
            className="mx-auto max-w-2xl font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl"
          >
            <span className="text-balance">Services tailored to your</span>{" "}
        
              unique needs
          
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3" role="list">
          {services.map((service, index) => (
            <article
              key={index}
              className="group rounded-3xl bg-card p-8 shadow-sm transition-all hover:shadow-md lg:p-10"
              role="listitem"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary" aria-hidden="true">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 font-serif text-xl font-medium text-foreground lg:text-2xl">
                {service.title} in {service.location}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
