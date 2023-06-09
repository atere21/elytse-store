import React from "react";
import backgroundImage from "../assets/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

	return (
		<div
			name='Home'
			data-aos='fade-right'
			className='w-full h-full md:h-screen md:m-8 py-10 px-4 bg-cover bg-center md:mt-[2rem]'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<div>

                                      
           <h1 className="text-4xl font-abc md:text-6xl text-blue-700 font-bold mx-2">"Social Fashion Marketplace"</h1>
					<p className='text-[#004DE6] md:text-xl p-2'>
						Looking for a revolutionary fashion shopping experience? Look no
						further than Elytse! Our cutting-edge technology provides a platform
						where fashion vendors and users can connect and experience the
						beauty of shopping online. Be it Clothing, Beauty, or Appearance,
						Elytse offers a diverse community and innovative solutions to all
						your shopping woes. Say goodbye to Returns, Frustrations,
						Disappointments, and Overpricing, and say hello to a world of
						adventure and possibilities! Join the community, start your Elytse
						journey today!
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

				<div
					className='flex flex-col justify-center  bg-cover bg-center sm:h-screen sm:mt-[-12rem]  h-[400px]'
					data-aos='zoom-in'
					style={{ backgroundImage: `url(${backgroundImage})` }}>
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
