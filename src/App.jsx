import React from 'react'
import useLenis from './hooks/useLenis'
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  useLenis();

  return (
    <Routes>

      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="testimonials" element={<Testimonials/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>

    </Routes>
  )
}

export default App