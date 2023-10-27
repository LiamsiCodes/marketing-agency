import React from 'react'

function Footer() {
  return (
     <footer className='bg-[#1D1C2D] text-center w-full h-full p-12 l'>
      <h1 className='mt-2 text-gray-400  text-xl md:text-2xl font-semibold italic'>© 2023 Socially. All rights are reserved</h1>
      <div className='text-gray-400 text-lg md:text-xl  flex items-center justify-center cursor-pointer mt-3 gap-3 underline font-semibold'>
        <p className='text-gray-400 text-lg md:text-xl '>Security</p>
        <p className='text-gray-400 text-lg md:text-xl '>Contact us</p>
        <p className='text-gray-400 text-lg md:text-xl '>Privacy Policy</p>
      </div>
    </footer>
  )
}
export default Footer
