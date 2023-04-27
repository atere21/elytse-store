import React from "react";
import backgroundImage from "../assets/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typed from 'react-typed';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="Home"
      data-aos="fade-right"
      className="w-full h-full md:h-screen md:m-8 py-10 px-4 bg-cover bg-center md:mt-[2rem]"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
        <Typed 
           className='className="md:text-6xl font-abc sm:text-6xl text-4xl font-bold py-2 text-[#004DE6] p-2 w-[50%]'
           strings={["Social Fashion Marketplace", "Sell/Swap/Rent Pre-owned Items", "Community Driven Space", "Dynamic & Competitive Pricing", "Virtual Fitting Assistant", "Virtual Body Measurement", "Imagine Creative Studio", "Services Real-Time Monitoring", "Personalized AI Fashion Recommender", "Virtual Wardrobe Assistant", "Customer Experience Verification", "Last-Mile Order Fulfilment"]} 
           typeSpeed={150} 
           backSpeed={30} loop/>
          
          
          <p className="text-[#004DE6] md:text-xl p-2">
          Looking for a revolutionary fashion shopping experience? Look no further than Elytse! Our cutting-edge technology provides a platform where fashion vendors and users can connect and experience the beauty of shopping online. Be it Clothing, Beauty, or Appearance, Elytse offers a diverse community and innovative solutions to all your shopping woes. Say goodbye to Returns, Frustrations, Disappointments, and Overpricing, and say hello to a world of adventure and possibilities! Join the community, start your Elytse journey today!
             </p>

          <div className="md:flex grid  bg-white md:py-8 mx-2 p-2 gap-2">
          <button className="p-4 hover:bg-blue-400  bg-blue-800 rounded-md text-white ">
           Sign Up 
           </button>

           <button className="p-4 hover:bg-yellow-300 bg-yellow-400 text-white rounded-md">
           Sign In
           </button>
           
          </div>
        </div>

        <div className="flex flex-col justify-center  bg-cover bg-center h-screen md:mt-[-12rem]"
        data-aos="zoom-in"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        
  >
          
          {/* <img
            data-aos="zoom-in"
            className="w-full h-full mx-auto my-4"
            src={img}
            alt="/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
