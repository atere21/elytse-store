import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({ card }) => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='text-blue-600 mx-auto w-[100vw]  flex  flex-col  bg-white  items-center md:py-2 p-8 md:p-16 mb-[-4rem]'>
			<p className='sm:hidden block  text-[#91b3fa] font-bold pb-1 pt-1 mb-2 border-b-4 sm:border-b-0 text-center w-[150px] border-blue-900 m-auto text-xl'>
				{card.title}
			</p>

			<div className='flex flex-col sm:flex-row-reverse  w-[100%] sm:bg-white '>
				<div data-aos='zoom-in' className='w-full'>
					<img
						className='w-[80%] h-[70%] mx-auto my-[2rem] object-fit'
						src={card.img}
						alt='/'
					/>
          
				</div>
				<div 
					data-aos='fade-right'
					className='sm:px-[8rem] flex flex-col  w-[100%] sm:w-[60%]  px-2 my-16 mb-[5rem] duration-150 ease-out p-8'>
					<p className='sm:block hidden text-l text-left text-blue-600 font-bold pb-1 pt-1 mb-2 border-b-4 sm:border-b-0 sm:w-full w-[100px] border-blue-900
                         m-auto text-2xl '>
						{card.title}
					</p> 
					<p className='duration-150 ease-out w-full '>{card.body}</p>
				  
				    <button className="duration-150 ease-out  md:my-[10rem] my-[4rem]
					text-left  rounded-md  font-semibold hover:text-blue-600 w-[10rem] 
					items-center flex justify-center p-2 mx-2 
					 bg-yellow-400 text-blue-800 ">
						{card.button}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;