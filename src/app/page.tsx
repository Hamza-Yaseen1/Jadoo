import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import Destination from "./Components/Destination";
import Steps from "./Components/Steps";

export default function Home() {
  return (
    <>
    <div className=" bg-no-repeat bg-[top_right] bg-[length:600px_600px]"
    style={{backgroundImage:"url('./Images/Decore.png')"}}>
    <Navbar/>
    <Hero/>
      <Category/>
      <Destination/>
      <Steps/>
    </div>
    </>
  );
}
