import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Vision() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="About"
      data-aos="fade-right"
      className=" w-full h-full md:py-8  py-[-8rem] grid md:grid-cols-2 text-[#004DE6] p-10"
    >
      <div className="md:py-10 md:p-10 p-2">
        <h2 className="mx-2">Our Mission</h2>
        <p className="">
          At Elytse, our mission is to revolutionize the fashion industry by
          providing a sustainable, innovative and socially-conscious marketplace
          that connect fashion products and service providers and consumers. We
          aim to offer a seamless and personalised shopping experience that is
          accessible to everyone while promoting ethical and eco-friendly
          fashion practices
        </p>
      </div>
      <div className="w-27 bg-[#f9d108] py-12 p-8">
        <h2>Our Vision</h2>
        <p className="p-2">
          At Elytse, our mission is to revolutionize the fashion industry by
          providing a sustainable, affordable, innovative, and socially-conscious marketplace
          that connect fashion products and service providers and consumers. We
          aim to offer a seamless and personalised shopping experience that is
          accessible to everyone while promoting ethical and eco-friendly
          fashion practices
        </p>
      </div>
    </div>
  );
}
