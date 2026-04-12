"use client";
import { Typewriter } from "react-simple-typewriter";

const TwHomeHero: React.FC = () => {
  return (
    <h1 className="text-white text-4xl font-bold md:text-6xl lg:text-7xl leading-tight">
      <Typewriter
        words={["DESIGN", "DEVELOP", "ELEVATE"]}
        loop={true}
        cursor
        cursorStyle=""
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={2000}
      />
      <span className="opacity-0">a</span>
    </h1>
  );
};

export default TwHomeHero;
