import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TeamCard = ({ card }) => {
  return (
    <>
      <div className=" relative bg-[#F6F9FF] text-slate-900 m-2   flex justify-center items-center rounded-lg hover:scale-105 duration-300   sm:w-[250px] w-[250px] h-[270px] py-5  cursor-pointer drop-shadow-xl">
        <div className="w-[150px] h-[150px] pt-8  absolute top-[-5%] items-center justify-center rounded-[50%] ">
          <img
            className="w-full h-full mx-auto my-[-2rem] px-4 object-cover  rounded-[50%] mt-[-4rem]"
            src={card.icon}
            alt="/"
          />
        </div>

        <div className="text-blue-800  mt-[10rem] flex">
          <p className="text-center text-yellow-600 font-bold z-40">
            {card.title}
          </p>
          <span>
              <AiOutlinePlus className=" bg-white w-[20px] h-[20px] rounded-md gap-8" />
            </span>
          <p className="flex items-center justify-around text-[0.95rem]">
           
           
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
