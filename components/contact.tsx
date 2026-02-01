"use client";

import React from "react"

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-card py-20 lg:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="mx-auto max-w-2xl font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl"
          >
            <span className="text-balance">Ready to take the</span>{" "}
            <span className="relative inline-block">
              first step?
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 160 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 6C30 2 80 2 110 4C140 5 150 6 158 4"
                  stroke="#7a9e7e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I offer a free 15-minute phone consultation to see if we&apos;re a good fit.
            There&apos;s no pressure—just a chance to ask questions and see if therapy with me
            feels right for you.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        
          <div className="flex-1">
            {submitted ? (
              <div className="flex h-full min-h-100 flex-col items-center justify-center rounded-3xl bg-secondary p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <svg
                    className="h-8 w-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-2xl font-medium text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                      First Name <span className="text-destructive" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                      Last Name <span className="text-destructive" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email <span className="text-destructive" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="(310) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    How can I help? <span className="text-destructive" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell me a little about what brings you here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

     
          <aside className="flex-1 lg:max-w-sm">
            <div className="rounded-3xl bg-secondary p-8 lg:p-10">
              <h3 className="mb-6 font-serif text-2xl font-medium text-foreground">Contact Information</h3>
              <address className="space-y-6 not-italic">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card" aria-hidden="true">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Location</p>
                    <p className="text-sm text-muted-foreground">
                      1234 Ocean Avenue, Suite 300
                      <br />
                      Santa Monica, CA 90401
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card" aria-hidden="true">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+13105550199" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      (310) 555-0199
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card" aria-hidden="true">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:hello@drmayareynolds.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      hello@drmayareynolds.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card" aria-hidden="true">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Thursday: 9am - 7pm
                      <br />
                      Friday: 9am - 3pm
                    </p>
                  </div>
                </div>
              </address>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-center text-sm text-muted-foreground">
                  I also offer secure telehealth sessions for clients throughout California.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
