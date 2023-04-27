import React from 'react'
import { data } from "../../data"
import { Accordion } from './Accordion'
import AOS from 'aos';
 import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Faq= () => {

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <div
    data-aos='zoom-in'
     className='w-full h-full px-4 bg-yellow-500 text-blue-700 m-8 p-8 grid place-items-center max-w-[1240px] mx-auto md:mt-[4rem]  Faq'>
        <div className='px-[2px] w-full '>
        <h3 className='my-4 justify-center font-abc text-2xl md:text-4xl flex  items-center'>
       Frequently Asked Questions
       </h3>
       <div className=''>
        {data.map((section,index)=> (
            <Accordion key={index} section={section}/>
        )
        )}

       </div>
       </div>
    </div>
  )
}

export default Faq
