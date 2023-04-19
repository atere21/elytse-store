import React from 'react'
import { data } from "../../data"
import { Accordion } from './Accordion'


export const Faq= () => {
  return (
    <div className='w-full h-full px-4 bg-yellow-500 text-blue-800  grid place-items-center max-w-[1240px] mx-auto md:mt-[6rem]  '>
        <div className='px-[2px] w-full p-2 '>
        <h3 className='my-8 justify-center flex  items-center'>
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