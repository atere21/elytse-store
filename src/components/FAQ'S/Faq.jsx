import React from 'react'
import { data } from "../../data"
import { Accordion } from './Accordion'


export const Faq= () => {
  return (
    <div className='w-full h-full px-4 bg-yellow-500 text-blue-800 m-8 p-8 grid place-items-center max-w-[1240px] mx-auto mt-[14rem]  '>
        <div className='px-[2px] w-full '>
        <h3 className='my-4 justify-center font-abc text-2xl flex  items-center'>
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