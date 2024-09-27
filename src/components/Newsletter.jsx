import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row items-center sm:items-start w-full space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              className="p-3 w-full sm:max-w-[calc(100%-216px)] rounded-md text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] px-6 py-3 whitespace-nowrap transition-colors duration-300 hover:bg-[#00c588] hover:text-white hover:shadow-md">
              Notify Me
            </button>
          </div>
          <p className="mt-4">
            We care about your data in the most transparent way. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
