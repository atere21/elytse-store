import React from "react"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Vision(){
    useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
    return(
        <div data-aos='fade-right' className=" w-full h-full md:py-8 grid md:grid-cols-2 mx-auto text-[#004DE6] p-10">
        <div className="md:py-10">
            <h2>Our Mission</h2>
            <p className="p-2">At Elytse, our mission is to revolutionize the fashion industry by providing a sustainable, innovative and socially-conscious marketplace that connect fashion products and service providers and consumers. We aim to offer a seamless and personalised shopping experience that is accessible to everyone while promoting ethical and eco-friendly fashion practices</p>
        </div>
        <div className="w-30 bg-[#f9d108] py-12 px-6">
            <h2>Our Vision</h2>
            <p className="p-2">Our Vision at Elytse is to be the leading fashion place in Africa, offering cutting edge technology and services that enable fashion products and service providers to showcase their creation and connect with a diverse range of customers worldwide. We strive to become a global fashion destination that promotes sustainability, creativity and diversity while empowering local communities and driving positive change.</p>
        </div>
    </div>
    )
}