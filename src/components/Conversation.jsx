import React from "react";
import img from "../assets/page3.png";

const Conversation = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2' text-[#004DE6]">
            Community Driven Marketplace
          </h1>
          <p className="text-[#004DE6] ">
            Join the conversation As a social fashion marketplace, Elytse offers
            a platform for users to share, learn, and interact with a community
            of fashion enthusiasts. In addition to buying and selling fashion
            items, users can market their services and products, and earn points
            for their activities on the platform, which can be redeemed for
            discounts on future purchases. Whether you're looking to discover
            new styles or build your personal brand, Elytse provides an engaging
            space to connect and grow within the fashion community.
          </p>

          <div>
            <button className="text-[#004DE6] w-[200px] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 bg-[#e7c624]">
              Join the conversation
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

export default Conversation;
