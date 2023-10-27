"use client"

import React, { useEffect } from 'react'
import {GoVerified} from 'react-icons/go'
import "aos/dist/aos.css"
import Aos from 'aos'



function Plan() {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])
  return (
    <div id='plan' className='bg-[#FAF9FF] w-full h-full mt-20'>
    <div className='pt-28'>
      <div data-aos="fade-up" className='text-center'>
        <h1 className='text-[#6722B5] text-4xl'>OUR PACKS</h1>
        <p className='text-gray-700 p-2'>We are committed to providing tailor-made digital communication solutions, with a focus on quality, creativity but also on the best price.</p>
      </div>


      <div className='grid gap-4 p-12 mt-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
      <div data-aos="fade-up" className='shadow-2xl hover:scale-100 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-3xl'>
            <div className='p-2'>
             <h1 className='text-[#6722B5] text-2xl'>ESSENTIAL PACK</h1>
             <p className='text-[#6722B5] text-2xl'>2990 Dhs</p>
             <hr className='mt-6' />
            </div>
            <div className='fflex flex-col'>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Web site  1 page</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Domain name and hosting 1 year</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Content Creation (Presentation & Services)</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Contact Form + WhatsApp Button</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>SEO Optimized Code</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Delivery Within 1 week</p>
                </div>
            
            </div>
        </div>

      <div data-aos="fade-up" className='shadow-2xl hover:scale-100 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-3xl'>
            <div className='p-2'>
             <h1 className='text-[#6722B5] text-2xl'>BUSINESS PACK </h1>
             <p className='text-[#6722B5] text-2xl'>4000 Dhs</p>
             <hr className='mt-6' />
            </div>
            <div className='fflex flex-col'>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Showcase website unlimited pages</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Domain name and hosting 1 year</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Content Creation (Presentation & Services)</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Contact Form + WhatsApp Button</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Digital Strategy</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>SEO Optimized Code</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Delivery within 10 days</p>
                </div>
            
            </div>
        </div>

      <div data-aos="fade-up" className='shadow-2xl hover:scale-100 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-3xl'>
            <div className='p-2'>
             <h1 className='text-[#6722B5] text-2xl'>E-COMMERCE PACK</h1>
             <p className='text-[#6722B5] text-2xl'>6000 Dhs</p>
             <hr className='mt-6' />
            </div>
            <div className='fflex flex-col'>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400'  size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>E-commerce website unlimited pages</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400'  size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Domain name and hosting 1 year</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified  className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Content Creation (Presentation & Services)</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400'  size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Contact Form + WhatsApp Button</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified  className='text-green-400' size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>SEO Optimized Code</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400'  size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>Insertion of 25 products</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400'  size={20}/>
                 <p className='cursor-pointer hover:text-[#6722B5] duration-500'>1 year maintenance</p>
                </div>
                <div className='flex p-2 gap-4 text-gray-600 items-center'>
                 <GoVerified className='text-green-400'  size={20}/>
                 <p className=''>Delivery within 2 weeks</p>
                </div>
            
            </div>
        </div>
       
       
       
        </div>
    </div>
    </div>
  )
}

export default Plan
