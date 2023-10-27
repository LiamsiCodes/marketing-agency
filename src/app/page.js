import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Why from './components/Why'
import Plan from './components/Plan'
import Contact from './components/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <div className=''>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Why/>
      <Plan/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page

