import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TeamCard = ({ card }) => {
  return (
    <>
      <div className=" relative bg-[#F6F9FF] text-slate-900 m-2  flex justify-center items-center rounded-lg hover:scale-105 duration-300   sm:w-[250px] w-[220px] h-[250px] py-5  cursor-pointer drop-shadow-xl">
        <div className="w-[150px] h-[150px] pt-8  absolute top-[-5%] items-center justify-center rounded-[50%] ">
          <img
            className="w-full h-full mx-auto my-[-2rem] px-4 object-cover  rounded-[50%] mt-[-4rem]"
            src={card.icon}
            alt="/"
          />
        </div>
        <div className="text-blue-800  mt-[10rem] grid grid-cols-2 mx-12">
          <p className="text-center text-yellow-600 font-bold z-40 w-40">
            {card.title}
          </p>
          <span>
              <AiOutlinePlus className=" bg-white w-[20px] h-[20px] rounded-md gap-[12] ml-16 " />
            </span>
          <p className="items-center justify-center text-[0.95rem] p-8 w-60 ml-[0.4rem] mx-[-4rem]">
           {card.position}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
