'use client'
import React, { useEffect } from 'react'
import bran from'../assets/bran.png'
import dev from'../assets/dev.png'
import icon from'../assets/icoonn.png'
import icon2 from'../assets/icon.png'
import email from'../assets/email.png'
import seo from'../assets/Seo.png'
import ads from'../assets/ads.png'
import ecom from'../assets/ecom.png'
import Image from 'next/image'
import "aos/dist/aos.css"
import Aos from 'aos'


function Services() {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])
  return (
    <div id='services' className='bg-[#FAF9FF] w-full h-full mt-20'>
      <div data-aos="fade-up" className='pt-32'>
       <div className='text-center'>
         <h1 className='text-[#6722B5] text-4xl'>OUR KEY SERVICES</h1>
         <p className='text-gray-700 p-2'>At our agency, we are passionate about the power of digital and strive to provide innovative and effective solutions to propel your business to online success</p>
       </div>

      <div data-aos="fade-up" className='grid gap-4 p-12 mt-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto'>

        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='services' src={bran} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>Graphic Design</h1>
            <p className='p-2 mt-5 text-gray-700'>We understand the importance of a strong brand identity.
             Our team of talented designers creates unique and engaging brand designs</p>
            </div>
        </div>


        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='services' src={dev} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>Website Creation</h1>
            <p className='p-2 mt-5 text-gray-700'>We design dynamic, attractive and user-friendly websites that are tailored to your business and target audience.</p>
            </div>
        </div>

        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='serc' src={icon} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>Social Media</h1>
            <p className='p-2 mt-5 text-gray-700'>We understand the importance of social media for your business.
            We create and manage effective social media campaigns</p>
            </div>
        </div>

        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='servc' src={icon2} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>Facebook ADS</h1>
            <p className='p-2 mt-5 text-gray-700'>With our expertise, we can create targeted and effective
             advertising campaigns that will increase your visibility and generate quality leads.</p>
            </div>
        </div>


        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='dkd' src={ads} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>Google Ads</h1>
            <p className='p-2 mt-5 text-gray-700'>Increase your online visibility with Google Ads.
             Our Google Ads certified team creates successful advertising campaigns</p>
            </div>
        </div>


        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='cdd' src={ecom} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>eCommerce</h1>
            <p className='p-2 mt-5 text-gray-700'>Do you want to launch your online store? We're here to help. We develop customized e-commerce solutions,</p>
            </div>
        </div>


        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='kkxkx' src={seo} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>Search Engine Optimization (SEO)</h1>
            <p className='p-2 mt-5 text-gray-700'>SEO is essential to increase your organic visibility on search engines. Our team of SEO experts</p>
            </div>
        </div>


        <div data-aos="fade-up" className='shadow-2xl hover:scale-105 cursor-pointer duration-500 bg-white w-full  h-full md:py-8 py-4 rounded-2xl'>
            <div className='flex justify-center'>
           <Image alt='hsjxkxkx' src={email} className='w-[140px]' />
            </div>
            <div className='text-center'>
            <h1 className='hover:text-[#6722B5] text-2xl mt-6 duration-500 cursor-pointer'>E-mailing</h1>
            <p className='p-2 mt-5 text-gray-700'>Our email service is designed to help you create impactful email marketing campaigns that build customer loyalty.</p>
            </div>
        </div>



      </div>
      </div>
    </div>
  )
}

export default Services
