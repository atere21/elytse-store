import React from "react";
import { AiFillLinkedin, AiOutlinePlus } from "react-icons/ai";

const TeamCard = ({ card }) => {
  return (
    <>
<<<<<<< HEAD
      <div className=" relative bg-[#F6F9FF] text-slate-900 m-2  flex justify-center items-center rounded-lg hover:scale-105 duration-300   sm:w-[250px] w-[220px] h-[250px] py-5  cursor-pointer drop-shadow-xl">
        <div className="w-[150px] h-[150px] pt-8  absolute top-[-5%] items-center justify-center rounded-[50%] ">
=======
      <div className=" relative bg-[#F6F9FF] text-slate-900 m-4  flex justify-center items-center rounded-lg hover:scale-105 duration-300   sm:w-[250px] w-[220px] h-[250px] py-5  cursor-pointer drop-shadow-xl">
        <div className="w-[150px] h-[150px] pt-8  absolute top-[-8%] items-center justify-center rounded-[50%] ">
>>>>>>> 958aebc98edf37cc62af468e1c35d359f3201c23
          <img
            className="w-full h-full mx-auto my-[-2rem] px-4 object-cover  rounded-[50%] mt-[-4rem]"
            src={card.icon}
            alt="/"
          />
        </div>
<<<<<<< HEAD
        <div className="text-blue-800  mt-[10rem] grid grid-cols-2 mx-12">
          <p className="text-center text-yellow-600 font-bold z-40 w-40">
            {card.title}
          </p>
          <span>
              <AiOutlinePlus className=" bg-white w-[20px] h-[20px] rounded-md gap-[12] ml-16 " />
            </span>
          <p className="items-center justify-center text-[0.95rem] p-8 w-60 ml-[0.4rem] mx-[-4rem]">
=======
        <div className="text-blue-700  mt-[8rem] grid grid-cols-2 mx-12">
          <p className="text-center text-yellow-600 font-bold z-40 w-40">
            {card.title}
          </p>
          <p className="items-center justify-center flex text-[0.95rem] p-4 w-60 ml-[-6.9rem] mt-4">
>>>>>>> 958aebc98edf37cc62af468e1c35d359f3201c23
           {card.position}
          </p>
          <span>
              <AiFillLinkedin className=" bg-white w-[20px] h-[20px] rounded-md gap-[12] ml-16 mt-[-2rem] " />
            
            </span>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
