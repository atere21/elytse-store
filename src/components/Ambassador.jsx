import React from "react"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Ambassador(){
    useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
    return(
        <div data-aos='fade-right' className=" max-w-[1240px] mx-auto px-16 my-6 grid md:grid-cols-2 ">
            <div className=" text-[#1b50bb]">
                <div className="bg-[#f9d108] py-2 mb-2 text-center">
                    <p>"Discovering the future of fashion: An ode to Elytse"</p>
                </div>
                <div className="bg-[#f9d108] text-[13px] text-center px-20 py-3">
                    <p >Elytse, where fashion meets social grace, A marketplace for stylish tastes,Where users share and shop with ease,And find new styles with expertise.</p>
                    <p >Before you toss away what's not, Consider who might want that clot.The AI at Elytse can help you see,If there's a buyer and some money to free.</p>
                    <p >With gamified features to delight And algorithms that ensure what's right,Elytse elevates the shopping gameAnd gives users a platform to proclaim.
                    </p>
                    <p >Guys take note of this innovative place,Where fashion meets social space,Elytse is the future of online shopping,A marketplace where trends keep poppin</p>
                    <span className="text-end px-0 text-[12px]">Motun Marteen, CEO, Elytse</span>
                </div>
            </div>
            <div className="ml-4 text-white">
                <div className="bg-[#004DE6] mt-16 py-3 px-3 ">
                    <h1 className="md:text-4xl text-6xl w-[6rem] ">Become An Elytse's Ambassador</h1>
                    <p className="">Are you a community builder, Influencer, Fashion Journalist, Blogger, Fashion Model, Photographer, Marketer interested in leading fashion-conscious communities</p>
                </div>
                <div className=" bg-[#004DE6] mt-2 py-3 text-center text-l">
                    <button className="text-xl">Book a call</button>
                </div>
            </div>
        </div>
    )
}