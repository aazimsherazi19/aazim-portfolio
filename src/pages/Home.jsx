import React from 'react'
import SEO from '../components/common/SEO'
import Hero from '../sections/Hero.jsx'
import Marquee from '../components/ui/Marquee.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import WhyChooseMe from '../sections/WhyChooseMe.jsx'
import OurProcess from '../sections/OurProcess.jsx'
import Projects from '../sections/Projects.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import PortfolioGrid from '../sections/PortfolioGrid.jsx'

const Home = () => {
  return (
    <div>
      <SEO
        title="Aazim Sherazi | Turning Business Needs Into Web Solutions"
        description="Aazim Sherazi builds custom websites, ecommerce stores, booking platforms, and web applications tailored to real business needs."
        canonical="https://aazimsherazi.com/"
      />
      <Hero/>
      <Marquee/>
      <About/>
      <Services/>
      <WhyChooseMe/>
      <OurProcess/>
      <Projects/>
      {/* HIDE FOR NOW - Uncomment to re-enable Testimonials section on Home page */}
      {/* <Testimonials/> */}
      <PortfolioGrid isHomePage={true} />
    </div>
  )
}

export default Home