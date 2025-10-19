// app/components/Category.tsx
import Image, { StaticImageData } from "next/image";

type ICategory = {
  image: string | StaticImageData;
  title: string;
  desc: string;
  className?: string;
  featured?: boolean;
  height ?: number
  width ?: number
};

const categories: ICategory[] = [
  {
    image: "/Images/satellite-dish.png",
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    width: 80,
    height: 80,
  },
  {
    image: "/Images/Group 51.png",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    featured: true, // ⭐ center highlight
    width: 100,
    height: 100,
  },
  {
    image: "/Images/Group.png",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    width: 80,
    height: 80,
  },
  {
    image: "/Images/d0d8526022e21349487e00b57498708013a7bb90.png",
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
    width: 80,
    height: 80,
  },
];

export default function Category() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-xl font-semibold text-gray-500 text-center tracking-wide">
          Category
        </h2>
        <h1 className="mt-5 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          We Offer Best Services
        </h1>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {categories.map((card, i) => {
            const base =
              "relative rounded-4xl bg-white p-6 h-72 shadow-sm border border-slate-200/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md";
            const featured = card.featured
              ? "ring-1 ring-blue-200 shadow-lg"
              : "";

            return (
              <div
                key={i}
                className={`${base} ${featured}`}
                role="article"
                aria-label={card.title}
              >{card.featured && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 -bottom-6 h-16 rounded-3xl bg-gradient-to-b from-black/0 to-black/10 blur-2xl h- "
                  />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={card.height || 80}
                      height={card.width || 80}
                      className="h-20 w-20 object-contain"
                      priority={card.featured}
                    />
                  </div>

                  <h3
                    className={`text-base font-semibold ${
                      card.featured ? "text-blue-900" : "text-slate-800"
                    } pt-3`}
                  >
                    {card.title}
                  </h3>

                  <p className="mt-2 max-w-[14rem] text-md leading-7 pt-3 text-slate-600">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
