import React from "react";
import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  const cardData = [
    {
      image: Single,
      title: "Single User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      image: Double,
      title: "Partnership",
      price: "$199",
      features: ["1 TB Storage", "3 Users Allowed", "Send up to 10 GB"],
    },
    {
      image: Triple,
      title: "Group Account",
      price: "$299",
      features: ["5 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div className="w-full py-[6rem] px-5 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
