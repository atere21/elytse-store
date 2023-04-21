import React from "react";
import { teams  } from "../../utils/teams";
import TeamCard from "./TeamCard";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Team = () => {
  useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div name='About' className='w-full h-full bg-[white]'>
			<div data-aos='fade-right'
            className='justify-center items-center flex py-8 flex-col'>
                 
                <h2 className='font-bold text-4xl md:text-6xl text-blue-700 font-abc'>About the Team</h2>
				<div className='flex flex-col sm:flex-row gap-[3rem] flex-wrap justify-center mt-[5rem] px-[1rem] '>
					{teams.map((card, id) => {
						return <TeamCard card={card} key={id} />;
					})}
				</div>

				{/* <div className='flex flex-col justify-center items-center mt-[2rem] '>
					<button className='w-[280px] mx-[6rem] py-2 my-4  border-[1px]  text-white bg-blue-900 rounded-md mt-[1rem] m-6  hover:text-blue-500 hover:bg-blue-300'>
						Start 30 days free trial now
					</button>
					<p className='text-center text-[12px] sm:text-[1rem]'>
						This is valid for only 30 days after which your card will be charged{" "}
					</p>
				</div> */}
			</div>
		</div>
	);
};

export default Team;