"use client"
import React, { useState } from 'react';
import hero from "../assets/hero.png"
import logo from "../assets/logo.png"
import Image from 'next/image';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'

function Nav() {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
      }
  return (
    <div className='bg-[#F0F4FE] w-full h-screen'>
        <div className=''>
        <Image alt='nav' src={hero} className='absolute' width={600} />
        </div>
    <div className='flex px-6 pt-[40px] items-center justify-between relative'>
        <Image alt='nav' src={logo} className='' width={180}/>
        <ul className='hidden md:flex items-center text-[18px]'>
            <Link to='about' spy={true} smooth={true} offset={-30} duration={500}  className='px-7 hover:text-[#6722B5] duration-500 cursor-pointer'>About</Link>
            <Link to='services' spy={true} smooth={true} offset={20} duration={500}  className='px-7 hover:text-[#6722B5] duration-500 cursor-pointer'>Services</Link>
            <Link to='plan' spy={true} smooth={true} offset={60} duration={500}  className='px-7 hover:text-[#6722B5] duration-500 cursor-pointer'>Plans</Link>
            <Link to='why' spy={true} smooth={true} offset={40} duration={500}  className='px-7 hover:text-[#6722B5] duration-500 cursor-pointer'>Why us</Link>
        </ul>
        <Link to='contact' className='hidden md:flex' spy={true} smooth={true} offset={-10} duration={500}>
        <button className='rounded-lg border hover:border-[#6722B5] hover:text-[#6722B5] duration-500 hover:bg-white text-white px-8 bg-[#6722B5] py-3'>Contact</button>
        </Link>
       
     <div onClick={handleNav} className='md:hidden absolute right-4 flex'>
        <AiOutlineMenu className='cursor-pointer' size={30}/>
     </div>

     <div className={nav ? 'bg-gray-200 z-[100] flex md:hidden fixed ease-out duration-700 top-0 left-0 w-[350px] h-screen':'left-[-140%]   z-[100]  ease-in duration-700 bg-gray-200 fixed top-0  w-[350px] h-screen'}>
        <div className='py-10'>
         <div className='p-3 absolute right-6  max-w-[50px] flex items-center rounded-full shadow-xl cursor-pointer '>
         <AiOutlineClose onClick={handleNav} className='' size={30}/>
         </div>
         <ul className='mt-24 flex flex-col'>
            <Link to='about' spy={true} smooth={true} offset={-30} duration={500}  onClick={handleNav} className='py-5 px-28 text-lg hover:text-[#6722B5] duration-500 cursor-pointer'>About us</Link>
            <Link to='services' spy={true} smooth={true} offset={20} duration={500}  onClick={handleNav} className='py-5 px-28 text-lg hover:text-[#6722B5] duration-500 cursor-pointer'>Services</Link>
            <Link to='plan' spy={true} smooth={true} offset={60} duration={500}  onClick={handleNav} className='py-5 px-28 text-lg hover:text-[#6722B5] duration-500 cursor-pointer'>Plans</Link>
            <Link to='why' spy={true} smooth={true} offset={40} duration={500}  onClick={handleNav}  className='py-5 px-28 text-lg hover:text-[#6722B5] duration-500 cursor-pointer'>Why us</Link>
        </ul>
        </div>
     </div>

    </div>
    </div>
  )
}

export default Nav
