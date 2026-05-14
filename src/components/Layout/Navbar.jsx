import React, { useState }from 'react'
import { NavLink } from 'react-router-dom'
import {Menu, X} from 'lucide-react';
import { div } from 'framer-motion/client';



const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Services", path: "/services"},
    {name: "Projects", path: "/projects"},
    {name: "Blogs", path: "/blogs"}
  ];

  return (
    <>
    <header className='w-full bg-white'>
    <div className='container-custom flex items-center justify-between h-20 '>
      <div className="flex items-center gap-12">
        {/* logo area */}
        <div className='text-4xl font-heading font-bold'>
          Aa<span className='text-[var(--color-primary)]'>zim</span>
        </div>

        <nav className='hidden lg:flex items-center gap-8'>
          {navLinks.map((link)=>(
            <NavLink
            key={link.name}
            to={link.path}
            className={({isActive})=> 
            `text-base font-medium transition-primary hover:text-[var(--color-primary)] 
            ${isActive ? "text-[var(--color-primary)]": "text-black"}`
            }
            > {link.name}
            </NavLink>

          ))}
        </nav>
      </div>

      <div className='hidden lg:block'>
        <button className='btn-secondary hover:bg-[var(--color-accent)] hover:text-black transition-primary'>
          Hire Me
        </button>
      </div>

      <div className='lg:hidden'>
        <button className='inline-flex items-center justify-center px-3 py-3 bg-[var(--color-primary)] text-white rounded-full' onClick={()=> setOpen(true)}> 
         <Menu size={20}/>
        </button>
      </div>
    </div>
    </header>
    
     {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-primary"
        />
      )}

      {/* Mobile Sidebar */}
      {open && (
        <div className='fixed inset-0 bg-black/40 z-40'
          onClick={()=> setOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 bg-white h-full w-72 z-50 transform transition-transform duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex items-center justify-between p-6 border-b border-[#f5f5f5]'>
          <div className='text-2xl font-heading font-bold'>
          Me<span className='text-[var(--color-primary)]'>nu</span>
        </div>
        <button className='inline-flex items-center justify-center px-3 py-3 rounded-full bg-[var(--color-primary)] text-white' onClick={()=> setOpen(false)}>
          <X size={20}/>
        </button>
        </div>

        <nav className='flex flex-col gap-6 p-6'>
          {navLinks.map((link)=> (
            <NavLink
            key={link.name}
            to={link.path}
            className={({isActive})=> 
            `block w-full px-4 py-2 text-base font-medium transition-primary hover:text-[var(--color-primary)] ${isActive ? "text-white bg-[var(--color-primary)]" : "text-black"}`}
            >
              {link.name}
            </NavLink>
          ))}

          <button className='btn-secondary mt-4 hover:bg-[var(--color-accent)] hover:text-black transition-primary'>
           Hire Me
          </button>
        </nav>
      </div>
    </>
    
  )
}

export default Navbar