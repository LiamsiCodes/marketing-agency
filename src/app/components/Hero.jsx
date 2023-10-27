'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import hero from '../assets/hero2.png'
import "aos/dist/aos.css"
import Aos from 'aos'

function Hero() {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])
  return (
    <div data-aos="fade-up" className='absolute left-[5%] top-[30%]'>
        <div data-aos="fade-up" className='flex items-center gap-8 justify-between'>
      <div data-aos="fade-up">
         <p className='md:text-7xl text-4xl'>Make an impression <br /> with creativity!</p>
         <p className='mt-8 max-w-[600px] text-gray-600 text-lg md:text-xl font-bold'>Create a remarkable brand image with our creative agency.Contact us to know more about how we can help you.</p>
        <button className='mt-8 rounded-lg border hover:border-[#6722B5] hover:text-[#6722B5] duration-500 hover:bg-white text-white px-8 bg-[#6722B5] py-3'>Get in touch</button>
      </div>
      <Image alt='hero' src={hero} className='md:flex overflow-hidden w-[530px] hidden' />
    </div>
    </div>
  )
}

export default Hero
