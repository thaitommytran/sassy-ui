import React from "react";

const Card = ({ image, title, price, features }) => {
  return (
    <div className="w-[80%] md:w-full mx-auto shadow-xl border flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={image}
        alt={title}
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold pb-4">{price}</p>
      <div className="text-center font-medium">
        {features.map((feature, index) => (
          <p key={index} className="py-2 border-b mx-[3rem] md:mx-[1rem]">
            {feature}
          </p>
        ))}
      </div>
      <button className="bg-black w-[11rem] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] whitespace-nowrap transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
        Start Trial
      </button>
    </div>
  );
};

export default Card;
