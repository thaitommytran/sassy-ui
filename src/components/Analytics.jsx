import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            praesentium dolore itaque tempore quibusdam aliquam error vitae!
            Beatae id repudiandae, voluptatem laudantium, fugit ad earum quam
            quaerat, saepe cum culpa.
          </p>
          <button className="w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black text-[#00df9a] transition-all duration-300 ease-in-out hover:bg-[#0a0a0a] hover:text-[#00ffaa] hover:scale-105 hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
