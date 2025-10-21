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
        {StepData.map((Content, i) => (
          <div className="flex mt-8 p-3 pl-14">
            {/* logo */}
            <div>
              <img src={Content.img} alt="" />
            </div>
            {/* content */}
            <div className="pl-4">
              <h3 className="font-semibold text-lg">{Content.title}</h3>
              <p className="font-medium">{Content.descp} </p>
            </div>
          </div>
        ))}
      </section>

      {/* image  */}
      <section>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg mt-12 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <div className="relative w-96 h-52 ">
              <Image
                src="/Images/rome.avif"
                alt="Image"
                fill
                className="object-cover rounded-4xl p-5"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>{" "}
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Trip To Greece
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              14-29 June | by Robbin joseph
            </p>
            <div className="flex p-5 gap-4">
              <img src="/Images/LEAF.png" alt="" />
              <img src="/Images/map icon.png" alt="" />
              <img src="/Images/send.png" alt="" />
            </div>
            <div className="flex gap-4 p-5">
              <img src="/Images/building 1.png" alt="" />
              <p className="text-lg text-gray-500 font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>24 people going</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Steps;
