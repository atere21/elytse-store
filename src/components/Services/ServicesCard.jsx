import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({ card }) => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='text-blue-800 w-[100vw] h-full flex  flex-col  bg-white  items-center md:py-2 '>
			<p className='sm:hidden block text-l text-[#91b3fa] font-bold pb-1 pt-1 mb-2 border-b-4 sm:border-b-0 text-center w-[100px] border-blue-900 m-auto'>
				{card.title}
			</p>

			<div className='flex flex-col sm:flex-row-reverse  w-[100%] sm:bg-white  '>
				<div data-aos='zoom-in' className=''>
					<img
						className='w-full h-full mx-auto my-4 px-4 object-cover rounded-md'
						src={card.img}
						alt='/'
					/>
				</div>
				<div
					data-aos='fade-right'
					className='sm:px-[5rem] flex flex-col  w-[100%] sm:w-[60%]  px-2 mt-6 mb-[5rem] duration-150 ease-out'>
					<p className='sm:block hidden text-l text-left text-[#07308a] font-bold pb-1 pt-1 mb-2 border-b-4 sm:border-b-0 sm:w-full w-[100px] border-blue-900 m-auto text-2xl'>
						{card.title}
					</p>
					<p className='duration-150 ease-out'>{card.body}</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;