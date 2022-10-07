import { useEffect, useState } from "react";
import coverPhoto from "../assets/cover.jpg";
import Navbar from "./navbar";
import AboutData from "../data/aboutData";

const Masthead = () => {
  const [headingAnimation, setHeadingAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeadingAnimation(true), 500);
  }, []);

  return (
    <>
      <Navbar />
      <div className="sticky top-14 -z-10 w-screen max-w-full">
        <img
          src={coverPhoto}
          alt="Team members and mentors"
          className="w-full max-h-screen brightness-50 object-cover"
        />
        <div
          className={`transition-all text-white text-center absolute w-full
            top-0 md:top-1/4 left-1/2 -translate-x-1/2 opacity-0 duration-700 ${
              headingAnimation && "opacity-100 translate-y-24"
            }`}
        >
          <h1 className="text-4xl md:text-7xl mb-4 tracking-tighter drop-shadow">
            Velocity
          </h1>
          <h2 className="text-2xl md:text-3xl tracking-tight drop-shadow-sm">
            {AboutData.subtitle}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Masthead;
