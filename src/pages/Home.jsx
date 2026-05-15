import React from 'react'
import Hero from '../sections/Hero.jsx'
import Marquee from '../components/ui/Marquee.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import OurProcess from '../sections/OurProcess.jsx'
import Projects from '../sections/Projects.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import PortfolioGrid from '../sections/PortfolioGrid.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <About/>
      <Services/>
      <OurProcess/>
      <Projects/>
      <Testimonials/>
      <PortfolioGrid/>
    </div>
  )
}

export default Home