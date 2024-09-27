import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center h-screen">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:leading-normal sm:leading-normal leading-normal">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 sm:pl-3 pl-2"
            strings={["B2B", "B2C", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for B2B, B2C, & SAAS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-blbg-[#00df9a] text-black rounded-md font-medium w-[200px] px-6 py-3 whitespace-nowrap transition-all duration-300 hover:bg-[#00c785] hover:shadow-lg hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
