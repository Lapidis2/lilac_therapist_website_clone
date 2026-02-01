import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dr. Reynolds helped me understand my anxiety in a whole new way. For the first time, I feel like I have real tools to manage my worry instead of being controlled by it.",
    author: "Client",
    detail: "Anxiety Therapy",
  },
  {
    quote:
      "I was skeptical about EMDR, but the results have been life-changing. Maya created such a safe space for me to process things I'd been carrying for years.",
    author: "Client",
    detail: "Trauma Counseling",
  },
  {
    quote:
      "As a perfectionist, I never thought I'd learn to be kinder to myself. Dr. Reynolds helped me see that rest isn't weakness—and my life is so much better for it.",
    author: "Client",
    detail: "Burnout Support",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32" aria-labelledby="testimonials-heading">
    
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/20" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
            Kind Words
          </p>
          <h2 id="testimonials-heading" className="font-serif text-3xl font-medium text-primary-foreground md:text-4xl lg:text-5xl">
            What clients are saying
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3" role="list">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="relative rounded-3xl bg-card p-8 shadow-lg transition-transform duration-300 ease-out hover:scale-105" role="listitem">
              <Quote className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
              <p className="mb-6 leading-relaxed text-muted-foreground">{`"${testimonial.quote}"`}</p>
              <footer className="border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="block font-medium text-foreground">{testimonial.author}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.detail}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
