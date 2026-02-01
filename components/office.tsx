import Image from "next/image";

const officeImages = [
  {
    src: "/images/office-waiting.jpg",
    alt: "Welcoming waiting area with comfortable seating at Dr. Maya Reynolds' Santa Monica therapy office",
  },
  {
    src: "/images/office-therapy-room.jpg",
    alt: "Private and comfortable therapy room for confidential in-person sessions in Santa Monica",
  },
  {
    src: "/images/office-details.jpg",
    alt: "Calming natural elements and plants creating a peaceful atmosphere in the therapy space",
  },
];

export function Office() {
  return (
    <section id="office" className="bg-secondary py-20 lg:py-32" aria-labelledby="office-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Our Space
          </p>
          <h2
            id="office-heading"
            className="mx-auto max-w-2xl font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl"
          >
            <span className="text-balance">A sanctuary for</span>{" "}
            <span className="relative inline-block">
              your healing
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 180 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 6C35 2 90 2 130 4C155 5 165 6 178 4"
                  stroke="#7a9e7e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            My Santa Monica office is designed to feel like a peaceful retreat—a place where
            you can exhale, be yourself, and focus fully on your wellbeing. Located in the heart
            of Santa Monica, it&apos;s easily accessible and offers a calming environment for our work together.
          </p>
        </div>

    
        <div className="grid gap-6 md:grid-cols-3">
          {officeImages.map((image, index) => (
            <figure
              key={index}
              className={`relative overflow-hidden rounded-3xl shadow-sm ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-4/3 md:aspect-square" : "aspect-4/3"}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row" role="list" aria-label="Available session types">
          <div className="flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-sm" role="listitem">
            <div className="h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">In-Person Sessions Available</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-sm" role="listitem">
            <div className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">California Telehealth Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
