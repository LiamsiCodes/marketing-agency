"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import {GoVerified} from 'react-icons/go'
import women from '../assets/man.png'
import "aos/dist/aos.css"
import Aos from 'aos'



function Why() {
    useEffect(()=>{
        Aos.init({duration:1700})
       },[])
  return (
    <div id='why' className='mt-6 p-12'>
        <h1 className='text-center  uppercase text-4xl md:text-6xl text-gray-700'>Why choose us</h1>
        <div className='lg:flex justify-between items-center'>
       <div>
        <h1 className='lg:text-5xl lg:mt-0 mt-5 text-2xl md:text-3xl text-[#6722B5]'>Why choose our agency?</h1>
        <div  data-aos="fade-up" className='flex mt-6 gap-5 items-center'>
            <GoVerified className='text-green-400' size={27} />
            <p className='text-2xl text-gray-700 '>Expertise and Experience</p>
        </div>
        <div  data-aos="fade-up"className='flex gap-5 mt-6 items-center'>
            <GoVerified className='text-green-400' size={27} />
            <p className='text-2xl text-gray-700 '>Personalized approach</p>
        </div>
        <div  data-aos="fade-up"className='flex gap-5 mt-6 items-center'>
            <GoVerified className='text-green-400' size={27} />
            <p className='text-2xl text-gray-700 '>Measurable results</p>
        </div>
        <div data-aos="fade-up" className='flex gap-5 mt-6 items-center'>
            <GoVerified className='text-green-400' size={27} />
            <p className='text-2xl text-gray-700 '>Exceptional customer service</p>
        </div>
       </div>
            <Image alt='why' data-aos="fade-right" src={women} className='' />
        </div>
    </div>
  )
}

export default Why
