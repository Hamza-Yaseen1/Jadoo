// app/components/Steps.tsx
import Image from "next/image";

type IStepData = {
  img: string;
  title: string;
  descp: string;
};

const StepData: IStepData[] = [
  {
    img: "/Images/Group 7.png",
    title: "Choose Destination",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    img: "/Images/Group 12.png",
    title: "Make Payment",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    img: "/Images/Group 11.png",
    title: "Reach Airport on Selected Date",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const Steps = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Booking Steps */}
        <div>
          <header className="text-left" style={{ fontFamily: "Poppins, sans-serif" }}>
            <h2 className="text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400 sm:text-base">
              Easy and Fast
            </h2>
            <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:mt-4 sm:text-3xl lg:text-5xl">
              Book your next trip <br className="hidden sm:block" /> in 3 easy steps
            </h1>
          </header>

          <ul className="mt-8 space-y-6 sm:mt-10">
            {StepData.map((content, i) => (
              <li
                key={`${content.title}-${i}`}
                className="flex items-start gap-4 rounded-xl p-3 sm:gap-5 sm:p-4"
              >
                {/* Icon */}
                <div className="relative shrink-0">
                  <Image
                    src={content.img}
                    alt={content.title}
                    width={56}
                    height={56}
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                    sizes="(max-width: 640px) 56px, 64px"
                    priority={i === 0}
                  />
                </div>

                {/* Copy */}
                <div className="pt-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
                    {content.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300 sm:text-base">
                    {content.descp}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Preview Card */}
        <div className="mx-auto w-full max-w-md mt-10">
          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="relative">
              {/* Keep a stable aspect ratio to avoid CLS */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/Images/rome.avif"
                  alt="Trip preview: Greece coastline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 480px"
                  priority
                />
              </div>
            </div>

            <div className="p-4 sm:p-5" style={{ fontFamily: "Poppins, sans-serif" }}>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                Trip To Greece
              </h5>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                14–29 June | by Robbin Joseph
              </p>

              <div className="mt-4 flex gap-3 sm:gap-4" aria-label="Trip tags">
                <Image
                  src="/Images/LEAF.png"
                  alt="Eco-friendly"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  sizes="32px"
                />
                <Image
                  src="/Images/map icon.png"
                  alt="Map"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  sizes="32px"
                />
                <Image
                  src="/Images/send.png"
                  alt="Share"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  sizes="32px"
                />
              </div>

              <div className="mt-8 flex items-center gap-3 sm:gap-4">
                <Image
                  src="/Images/building 1.png"
                  alt="Building icon"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                  sizes="24px"
                />
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 sm:text-lg">
                  24 people going
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Steps;
