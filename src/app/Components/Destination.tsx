// app/components/Destination.tsx
"use client";

import Image from "next/image";

type IDestCard = {
  image: string;
  title: string;
  price: number;   // assume “k” USD (e.g., 5 -> $5k)
  duration: string;
};

const DEST_CARDS: IDestCard[] = [
  { image: "/Images/rome.avif",   title: "Rome, Italy",   price: 542, duration: "10 Days Trip" },
  { image: "/Images/london.avif", title: "London, UK",    price: 4.2, duration: "12 Days Trip" },
  { image: "/Images/Europe.avif", title: "Full Europe",   price: 15,  duration: "5 Days Trip"  },
  { image: "/Images/Europe.avif", title: "Full Europe",   price: 15,  duration: "5 Days Trip"  },
  // add more cards here...
];

// Small helper to display, e.g. 4.2 -> $4.2k, 542 -> $542k
function formatPriceK(v: number) {
  // Keep decimals if provided, avoid trailing zeros for big integers
  return `$${Number.isInteger(v) ? v.toString() : v.toString()}k`;
}

function DestinationCard({ image, title, price, duration }: IDestCard) {
  return (
    <article
      className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors hover:border-blue-600 dark:border-gray-700 dark:bg-gray-800"
      aria-label={title}
    >
      {/* Media */}
      <div className="relative w-full">
        {/* Maintain aspect ratio for CLS-free loading */}
        <div className="aspect-[4/3] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            // Tighter sizes for responsive grids
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 360px"
            // Only the first card will set priority in parent map
            // (set via prop when rendered)
          />
        </div>

        {/* Subtle gradient edge for readability if text overlays are used later */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 sm:text-lg">
            {title}
          </h3>
          <p className="shrink-0 text-sm font-bold tracking-wide text-gray-700 dark:text-gray-200 sm:text-base">
            {formatPriceK(price)}
          </p>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-base">
          {duration}
        </p>

        {/* Hover lift — respects prefers-reduced-motion */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl transition-transform motion-safe:group-hover:-translate-y-0.5" />
      </div>
    </article>
  );
}

export default function Destination() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 sm:text-base">
            Top Selling
          </h2>
          <h1 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-3xl lg:text-4xl">
            Top Destinations
          </h1>
        </div>

        {/* Cards */}
        <ul
          role="list"
          className="
            mx-auto mt-10 grid max-w-7xl gap-6
            [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]
            sm:gap-8 sm:mt-12
          "
        >
          {DEST_CARDS.map((card, index) => (
            <li key={`${card.title}-${index}`} className="flex justify-center">
              <DestinationCard
                {...card}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
