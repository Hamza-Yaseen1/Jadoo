"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type IDestCard = {
  image: string;
  title: string;
  price: number;
  duration: string;
};

const DEST_CARDS: IDestCard[] = [
  { image: "/Images/rome.avif", title: "Rome, Italy", price: 542, duration: "10 Days Trip" },
  { image: "/Images/london.avif", title: "London, UK", price: 420, duration: "12 Days Trip" },
  { image: "/Images/paris.avif", title: "Paris, France", price: 615, duration: "8 Days Trip" },
  { image: "/Images/tokyo.avif", title: "Tokyo, Japan", price: 890, duration: "14 Days Trip" },
  { image: "/Images/bali.avif", title: "Bali, Indonesia", price: 580, duration: "6 Days Trip" },
  { image: "/Images/dubai.avif", title: "Dubai, UAE", price: 640, duration: "7 Days Trip" },
  { image: "/Images/athens.avif", title: "Athens, Greece", price: 560, duration: "9 Days Trip" },
  { image: "/Images/honolulu.avif", title: "Honolulu, Hawaii", price: 980, duration: "12 Days Trip" },
];

function formatPriceK(v: number) {
  return `$${v}k`;
}

const getCountry = (title: string) => title.split(", ").pop() || title;
const getDays = (duration: string) => parseInt(duration.match(/\d+/)?.[0] || "0");

function DestinationCard({ image, title, price, duration }: IDestCard) {
  return (
    <article className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-blue-600 dark:border-gray-700 dark:bg-gray-800 transition">
      <div className="relative w-full">
        <div className="aspect-[4/3] w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex justify-between">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{formatPriceK(price)}</p>
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{duration}</p>
      </div>
    </article>
  );
}

export default function Destination() {
  const [showFilters, setShowFilters] = useState(false);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("All");

  const countries = useMemo(() => ["All", ...Array.from(new Set(DEST_CARDS.map(c => getCountry(c.title))))], []);

  const filtered = DEST_CARDS.filter(c => {
    const matchQuery = c.title.toLowerCase().includes(query.toLowerCase());
    const matchCountry = country === "All" || getCountry(c.title) === country;
    return matchQuery && matchCountry;
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Top Selling</h2>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Top Destinations</h1>
        </div>

        {/* Filter Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setShowFilters(prev => !prev)}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {showFilters ? <X size={18} /> : <Filter size={18} />}
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Animated Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:items-end sm:justify-between">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by destination..."
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:max-w-xs"
                />

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:max-w-xs"
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  
                </select>
                {/* <h1>Price</h1> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cards Grid */}
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-7xl gap-6 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]"
        >
          {filtered.map((card, index) => (
            <li key={index} className="flex justify-center">
              <DestinationCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
