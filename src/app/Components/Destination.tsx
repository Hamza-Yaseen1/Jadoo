// app/components/Destination.tsx
import Image from "next/image";

type IDestCard = {
  image: string;
  title: string;
  price: number;   // assume “k” USD (e.g., 5 -> $5k)
  duration: string;
};

const DestCard: IDestCard[] = [
  {
    image: "/Images/rome.avif",
    title: "Rome, Italy",
    price: 542,
    duration: "10 Days Trip",
  },
  {
    image: "/Images/london.avif",
    title: "London, UK",
    price: 4.2,
    duration: "12 Days Trip",
  },
  {
    image: "/Images/Europe.avif",
    title: "Full Europe",
    price: 15,
    duration: "5 Days Trip",
  },
  // add more cards here...
];

const Destination = () => {
  return (
<section className="py-20 ">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headings */}
        <h2 className="text-xl font-semibold text-gray-500 text-center tracking-wide">
          Top Selling
        </h2>
        <h1 className="text-4xl text-gray-950 text-center mt-5 font-bold">
          Top Destinations
        </h1>
       

        {/* Cards */}
        <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" style={{ fontFamily: "Poppins, sans-serif" }}>
          {DestCard.map((card, index) => (
            <article
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800 dark:border-gray-700 hover:border-blue-700 hover:transition-colors duration-300  "
              aria-label={card.title}
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Body */}
              <div className="p-5" >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-500 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-base font-bold text-gray-600 tracking-wider">
                    ${card.price}k
                  </p>
                </div>

                <p className="mt-7 text-lg text-gray-600 dark:text-gray-300 font-semibold" style={{wordSpacing:"2px"}}>
                  {card.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
