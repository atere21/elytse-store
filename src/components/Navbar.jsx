import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-[#004DE6] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <img className="w-40 h-20" src={logo} alt="" />
      <ul className="md:flex hidden  cursor-pointer">
        <li className="p-4 hover:text-blue-800">Home</li>
        <li className="p-4 hover:text-blue-800">Solution</li>
        <li className="p-4 hover:text-blue-800">About</li>
        <li className="p-4 hover:text-blue-800">Community</li>
        <li className="p-4 hover:text-blue-800">Blog</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white cursor-pointer ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img className="w-40 h-20" src={logo} alt="/" />
        <ul className="p-4  uppercase">
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600 ">Solution </li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4 border-b border-gray-600 ">Community</li>
          <li className="p-4 border-b border-gray-600 ">Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
