import React from "react"
import img from "../assets/page17.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Revolution(){
    useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
    return(
        <div>
            <div data-aos='fade-right' className="text-blue-800  w-full mx-auto px-16 mt-5 border-t-4 border-gray-100 py-10">
                <p>Join the revolution of social fashion today - Sign up with Elytse and let's discover trends together, experience the future of personalized style and unlock a world of fashion possibilities!</p>
                <div className='flex  w-full justify-center py-6  '>
                    <div>
                        <input className='bg-[#e6d7ff] border-[#d2c7e4] border-y-2 border-x-2 rounded-full text-[#004de6f6] font-medium md: mx-auto my-6 py-2 p-2 w-full ' type='email' placeholder='Enter your best email'/>
                        <button className='text-[#004DE6] w-[150px] hover:bg-[#f9d108] rounded-full font-medium md:mx-0 mx-auto my-4 py-2  px-4 bg-[#e7c624]'>Submit</button>
                    </div>
                    <img src={img} alt=""  className="w-[8rem] md:w-[15rem] "/>
                </div>
            </div>
            
        </div>
    )
}