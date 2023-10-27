"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import about from '../assets/About.jpg'
import "aos/dist/aos.css"
import Aos from 'aos'



function About() {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])

  return (
    <div id='about' className=' p-4 mt-20'>
      <div data-aos="fade-up" className='md:flex gap-12 justify-center'>
        <div data-aos="fade-up" className='flex md:justify-start justify-center'>
      <Image src={about} className='w-[400px] ' />
        </div>
      <div data-aos="fade-up" className='flex flex-col'>
        <h1 className='uppercase mt-2 md:text-left text-center text-[#6722B5] tracking-wider text-xl'>about our agency</h1>
        <h1 className='text-4xl md:text-5xl md:text-left text-center mt-4'>Creative agency that <br /> help you go ahead.</h1>
        <p className='md:text-left md:p-0 p-3 text-center max-w-md mt-4 text-gray-600'>
        A digital communication agency with a passion for the art of online creation. Our mission is to transform your digital presence into a captivating and memorable experience. With our expertise, we offer you tailor-made solutions to propel your business to new heights. Our approach is focused on collaboration, creativity and results.
        By working closely with you, we understand your goals, values and challenges. We then implement innovative and effective strategies to strengthen your brand, drive qualified traffic, and increase your conversions.
        </p>
      <div data-aos="fade-up" className='mt-7 gap-16 text-center flex '>
          <div data-aos="fade-up" className='flex flex-col'>
           <h1 className='text-[#6722B5] font-extrabold text-4xl'>+7</h1>
           <p className='text-gray-600 mt-2 text-base md:text-lg'>Years of experience</p>
          </div>
          <div data-aos="fade-up" className='flex flex-col'>
           <h1 className='text-[#6722B5] font-extrabold text-4xl'>+70</h1>
           <p className='text-gray-600 mt-2 text-base md:text-lg'>Satisfied client</p>
          </div>
          {/* <div data-aos="fade-up" className='flex flex-col'>
           <h1 className='text-[#6722B5] font-extrabold text-4xl'>+100</h1>
           <p className='text-gray-600 mt-2 text-base md:text-lg'>Completed project</p>
          </div> */}
      </div>
      <div data-aos="fade-up" className='flex md:justify-start justify-center'>
      <button className=' mt-8 max-w-[180px] rounded-lg border hover:border-[#6722B5] hover:text-[#6722B5] duration-500 hover:bg-white text-white px-8 bg-[#6722B5] py-3'>Get in touch</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About
