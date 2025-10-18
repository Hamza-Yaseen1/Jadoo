'use client'
import BlurText from "../animations/BlurText";

const Hero = () => {
  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>

{/* const handleAnimationComplete = () => {
  console.log('Animation completed!');
}; */}


      <section className="flex flex-col md:flex-row justify-between items-center px-10 ">
        {/* Left Text Section */}
        <div className="max-w-xl text-gray-800 space-y-4 md:pr-8 ml-24">
          <h2 className="text-lg font-bold text-[#DF6951] uppercase tracking-wide">
            
            <BlurText
  text="Best Destinations Around the World"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
          </h2>

          <h1 className="text-6xl font-extrabold leading-tight">
            Travel, enjoy and live a{" "}
            <span className="text-[#3A556A]">new and full life</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Discover amazing places, cultures, and adventures waiting for you.
            Your journey starts here.
          </p>

          <div className="flex gap-4 pt-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300">
              Get Started
            </button>

            <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className=" md:mt-0 md:w-1/2 flex justify-center">
        <img src="./Images/plane.png" alt="" 
        className="object-contain absolute top-52 right-2"/>
        <img src="./Images/plane.png" alt="" 
        className="object-contain absolute top-52 right-96"/>
          <img
            src="./Images/Traveller 1.png"
            alt="Traveller"
            className="w-full  animate-[smoothBounce_1.2s_ease-out_1]"
          />
        </div>
      </section>

      {/* Custom Keyframes for smooth one-time bounce */}
      <style>{`
        @keyframes smoothBounce {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          40% { transform: translateY(-25px); }
          70% { transform: translateY(0); }
          85% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Hero;
