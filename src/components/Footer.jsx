import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const footerColumns = [
    {
      title: "Solutions",
      items: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      title: "Company",
      items: ["About", "Blog", "Jobs", "Press", "Careers"],
    },
    {
      title: "Legal",
      items: ["Claim", "Policy", "Terms"],
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-12 px-8 lg:px-12 xl:px-0 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">SaaSy UI.</h1>
        <p className="py-4 w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti
          repellat a magnam. Magni, unde. Temporibus officiis laboriosam
          molestiae a.
        </p>
        <div className="flex justify-around lg:justify-between md:w-[75%] my-6">
          <FaFacebookSquare className="text-4xl sm:text-5xl md:text-6xl lg:text-3xl hover:cursor-pointer" />
          <FaInstagramSquare className="text-4xl sm:text-5xl md:text-6xl lg:text-3xl hover:cursor-pointer" />
          <FaSquareXTwitter className="text-4xl sm:text-5xl md:text-6xl lg:text-3xl hover:cursor-pointer" />
          <FaLinkedin className="text-4xl sm:text-5xl md:text-6xl lg:text-3xl hover:cursor-pointer" />
          <FaGithubSquare className="text-4xl sm:text-5xl md:text-6xl lg:text-3xl hover:cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        {footerColumns.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
