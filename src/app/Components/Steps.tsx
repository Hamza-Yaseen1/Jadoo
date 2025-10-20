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
    descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    img: "/Images/Group 12.png",
    title: "Make Payment",
    descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    img: "/Images/Group 11.png",
    title: "Reach Airport on Selected Date",
    descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];
const Steps = () => {
  return (
    <div className="flex justify-evenly py-20">
      {/* booking Steps */}
      <section>
        <div>
          <h2
            className="text-gray-600 font-semibold text-xl p-5 pl-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Easy and Fast
          </h2>
          <h1 className="text-5xl font-bold p-2 pl-10 leading-14">
            Book your next trip <br /> in 3 easy steps
          </h1>
        </div>
{StepData.map((Content,i)=>(


        <div className="flex mt-8 p-3 pl-14">
          {/* logo */}
          <div>
            <img src={Content.img} alt="" />
          </div>
          {/* content */}
          <div className="pl-4">
            <h3 className="font-semibold text-lg">{Content.title}</h3>
            <p className="font-medium">
              {Content.descp}{" "}
            </p>
          </div>
        </div>
        ))}

     
      </section>

      {/* image  */}
      <section>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
 <div className="relative w-full h-80">
                <Image
                  src="/Images/rome.avif"
                  alt="Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  
                />
              </div>          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Steps;
