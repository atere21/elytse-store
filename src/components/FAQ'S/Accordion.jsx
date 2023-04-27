import React from 'react'
import { BsChevronCompactDown } from "react-icons/bs";
import useOpenController from './useOpenController';

export const Accordion = ({section, key }) => {
  const {isOpen, toggle} = useOpenController(false);
   console.log(section);
  
  return (
    <div className=''>
        <ExpendableColumn
         question= {section.question} 
        isOpen={isOpen}
        toggle={toggle}
        />
        {isOpen &&  <TextSection text={section.answer}/>}
       
        </div>
  )
}

export const ExpendableColumn = ({question, isOpen, toggle}) => {
    return (
    <div className='md:text-xl column-container flex justify-between gap-8 p-4 mx-auto ' onClick={toggle}>
       <div className='column-text flex  text-blue-900 max-w-[700px] w-full font-semibold '>{question}</div>
          
          <span
           style={{transform: 'rotate(${isOpen ? 180 : 0}deg)', transition: "all 0.2s",
          }}
           ><button><BsChevronCompactDown className='text-xl text-blue-800 font-bold  '/></button></span>

    </div>
    )
}
export const TextSection = ({text}) => {
    return <div className='text-container text-yellow-800  mx-8'>
      <div>{text}</div>
    </div>
}
