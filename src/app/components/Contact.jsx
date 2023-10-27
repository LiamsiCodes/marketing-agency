"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import contact from '../assets/contact.png'
import emailjs from 'emailjs-com'
import "aos/dist/aos.css"
import Aos from 'aos'

function Contact() {
  useEffect(()=>{
    Aos.init({duration:1700})
   },[])

   function submitForm(e){
      e.preventDefault();
      emailjs.sendForm('service_9292fvg','template_00625ms',e.target,'By4oRB-XSF-9XYM8M')
      .then(res=>{
        console.log(res)
      }).catch(err=>{console.log(err)});
   }

  return (
    <div id='contact' className='w-full mt-6 bg-[#6722B5] h-full'>
        <div className='flex justify-center'>
            <div data-aos="fade-up"  className='mt-16 mr-16'>
            <Image alt='contact' src={contact} className='lg:flex hidden' />
            </div> 
     <div data-aos="fade-up"  className='p-8'>
    <h1 className='text-2xl md:text-4xl'>Let's talk about your project</h1>
    <p className='md:max-w-lg max-w-sm mt-4 text-[#bcbbbb] text-xl'>Together, we can create an impactful online presence, grow your brand,
     and drive exceptional results. Join us at Our agency and let's embark on an 
     exciting journey to digital success together.</p>

    <form   onSubmit={submitForm}  className='mt-8 text-center'>
        <div data-aos="fade-up"   className='md:flex justify-center gap-12 items-center'>
            <input type="text" name='from_name'   className='mt-5 w-full  rounded-lg placeholder:text-[#bcbbbb] text-[#bcbbbb] p-3 bg-[#ffffff12] border-none outline-none' placeholder='Full Name' />
            <input type="email" name='Email'   className='mt-5  w-full rounded-lg placeholder:text-[#bcbbbb] text-[#bcbbbb] p-3 bg-[#ffffff12] border-none outline-none' placeholder='Email' />
        </div>
        <div data-aos="fade-up"  className='md:flex  gap-12 items-center'>
            <input type="text" className='mt-5  rounded-lg w-full placeholder:text-[#bcbbbb] text-[#bcbbbb] p-3 bg-[#ffffff12] border-none outline-none' placeholder='Phone Number' />
            <input type="text" className='mt-5  rounded-lg w-full placeholder:text-[#bcbbbb] text-[#bcbbbb] p-3 bg-[#ffffff12] border-none outline-none' placeholder=' Sujet' />
        </div>
        <div  data-aos="fade-up" className='flex justify-start'>
        <textarea name='message' className='mt-5 w-full rounded-lg p-3 placeholder:text-[#bcbbbb] placeholder:text-xl text-[#bcbbbb] bg-[#ffffff12] border-none outline-none' cols="27" placeholder='Your message' rows="4"></textarea>
        </div>
       <div   className='mt-4 flex justify-start'>
        <input type="submit" value="Submit"  className='rounded-lg cursor-pointer text-xl text-[#6722B5] px-10 bg-white py-3' />
       </div>
    </form>



     </div>
    </div> 
       

    </div>
  )
}

export default Contact
