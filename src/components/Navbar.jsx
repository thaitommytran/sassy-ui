import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">SaaSy UI.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block hover:cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={`fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] px-4 py-[30px]">
          SaaSy UI.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            About
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
