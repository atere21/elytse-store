import React from "react";
import img from "../assets/page5.png";

const Swap = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2' text-[#004DE6]">
            Sell, Rent, & Swap
          </h1>
          <p className="text-[#004DE6] ">
            Elytse's social fashion marketplace is designed to also enable
            fashion-conscious individuals to buy and sell pre-owned clothing,
            accessories, shoes, or other fashion items, as well as swap items
            with other users. This concept of swap or sell sustainability allows
            users to participate in a circular economy, reducing waste and
            promoting sustainable fashion practices. The platform connects users
            with one another and with a community of fashion enthusiasts who
            share a passion for eco-conscious living and fashion.
          </p>

          <div>
            <button className="text-[#004DE6] w-[200px] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 bg-[#e7c624]">
            Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <img className="w-[500px] mx-auto my-4" src={img} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Swap;
