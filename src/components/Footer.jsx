import React from "react"
import img from "../assets/page17.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FooterIcon from "./FooterIcon";

export default function Footer(){
    useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
    return(
        <footer>
            <div data-aos='fade-right' className="text-blue-800 w-full h-full mx-auto mt-5 border-t-4 border-gray-100 py-10 p-4">
                <p className="text-xl p-8">Join the revolution of social fashion today - Sign up with Elytse and let's discover trends together, experience the future of personalized style and unlock a world of fashion possibilities!</p>
                <div className='flex items-center justify-center py-6  '>
                    <div className="w-[50%] mx-auto p-2">
                        <input className=' w-[200px] bg-[#e6d7ff]  border-[#d2c7e4] border-y-2 border-x-2 rounded-full text-[#004de6f6] font-medium md:mx-auto my-6 p-2 ' type='email' placeholder='Enter your best email'/>
                        <button className='text-[#004DE6] w-[150px] hover:bg-[#f9d108] rounded-full font-medium md:mx-0 mx-auto  py-2  bg-[#e7c624]'>Submit</button>
                    </div>
                    <img src={img} alt=""  className="w-[40%] mr-[-6] "/>
                </div>
                <FooterIcon />
            </div>
        </footer>
    )
}