
import React from 'react'
import img from '../assets/page1.png'
const Hero = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <div>
                
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#004DE6]'>
                Social Fashion Marketplace
                </h1>
                <p className='text-[#004DE6] '>
                Join the fashion revolution and step into a world without limits.
                 We are a dynamic social marketplace where innovation meets community, and shopping is an adventure. <br/>
                 Our cutting-edge technology brings your fashion dreams to life, 
                while our diverse  community empowers you to express your unique style. 
                Discover a whole new way to experience fashion.
                </p>

                <div>
                <input className='bg-[#adb7cc] w-[200px] rounded-md text-blue-800 font-medium md:mx-0 mx-auto my-6 py-3' type='email' placeholder='Enter your best email'/>
                <button className='text-[#004DE6] w-[200px] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 bg-[#e7c624]'>Submit</button>
                </div>
            </div>
            
            <div className='flex flex-col justify-center'>
        
            <img
            className='w-[500px] mx-auto my-4'
             src={img} alt='/'/>
            </div>
            </div>
    
    </div>
  )
}

export default Hero