import React from "react";
import img from "../assets/page4.png";

const Virtual = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={img} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#004DE6] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Virtual Fitting Assistant
          </h1>
          <p className="text-[#004DE6]">
            The Virtual Fitting Assistant feature provides users with a
            convenient and efficient way of shopping for clothes and other
            fashion items, as they can try on various items without having to
            visit a physical store. Additionally, the feature reduces the need
            for returns, as users can see how an item would look on them before
            purchasing it.
          </p>
          <button className="text-[#004DE6] w-[200px] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 bg-[#e7c624]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
