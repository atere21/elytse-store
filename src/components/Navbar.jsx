import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-yellow-500  font-bold flex justify-between sticky top-0  bg-transparent
    z-10 items-center h-24 max-w-[1240px] mx-auto px-4 absolute">
      <img className="w-40 h-20" src={logo} alt="" />
      <ul className="md:flex hidden  cursor-pointer ">
        <li className="p-4 hover:text-blue-800">
        <Link activeClass="active" to="Home" smooth={true} duration={500} >
          Home
          </Link>
          </li>
        <li className="p-4 hover:text-blue-800">
          <Link activeClass="active" to="Solution" smooth={true} duration={500} >
          Solution
          </Link></li>
        <li className="p-4 hover:text-blue-800">
        <Link activeClass="active" to="About" smooth={true} duration={500} >
          About
          </Link>
          </li>
        <li className="p-4 hover:text-blue-800">
        <Link activeClass="active" to="Community" smooth={true} duration={500} >
          Community
          </Link>
          </li>

        <li className="p-4 hover:text-blue-800">
          Blog
        <Link activeClass="active" to="Blog" smooth={true} duration={500} >
        </Link>
        </li>
        <div className="flex gap-2 ">


        </div>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 z-10 bg-white cursor-pointer ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img className="w-40 h-20" src={logo} alt="/" />
        <ul className="p-4  uppercase">
          <li className="p-4 border-b border-gray-600 ">
          <Link onClick={handleNav} activeClass="active" to="Home" smooth={true} duration={500} >
            Home
            </Link>
            </li>
          <li className="p-4 border-b border-gray-600 ">
          <Link onClick={handleNav} activeClass="active" to="Solution" smooth={true} duration={500} >
            Solution
            </Link>
             </li>
          <li className="p-4 border-b border-gray-600 ">
          <Link onClick={handleNav} activeClass="active" to="About" smooth={true} duration={500} >
            About
            </Link>
            </li>
           
          <li className="p-4 border-b border-gray-600 ">Community
          <Link onClick={handleNav} activeClass="active" to="home" smooth={true} duration={500} >
          </Link>
          </li>

          <li className="p-4 border-b border-gray-600 ">
           <Link onClick={handleNav} activeClass="active" to="Blog" smooth={true} duration={500}>
            Blog
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
