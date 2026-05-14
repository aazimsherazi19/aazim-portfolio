import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {assets} from '../assets/assets'

const projects = [
  {
    id: 1,
    date: "January 2024",
    title: "Modern Web Design Portfolio",
    image: assets.project1,
    desc: "Designed a sleek, modern portfolio showcasing creative work with an intuitive user-friendly interface.",
  },
  {
    id: 2,
    date: "March 2024",
    title: "E-Commerce Website Revamp",
    image: assets.project1,
    desc: "A complete overhaul of an online store, focusing on conversion rates and mobile responsiveness.",
  },
  {
    id: 3,
    date: "May 2024",
    title: "SaaS Dashboard UI Kit",
    image: assets.project1,
    desc: "Minimalist and clean dashboard design for a project management tool with dark mode support.",
  },
  {
    id: 4,
    date: "June 2024",
    title: "Mobile Banking App",
    image: assets.project1,
    desc: "Secure and user-centric mobile application design for a leading fintech startup.",
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Projects ko left shift karne ke liye logic
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-primary">
      {/* Sticky container jo screen pe ruka rahega */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header */}
        <div className="absolute top-[10%] left-[6%] z-20 flex justify-between items-center w-[88%]">
          <h2 className="text-white text-h2 font-heading font-bold">Our Projects</h2>
          <button className="btn-primary rounded-sm hidden md:flex items-center gap-2 text-small font-bold px-6 py-3">
            View All Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Moving Track */}
        <motion.div style={{ x }} className="flex gap-8 px-[6vw] mt-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white cursor-pointer w-[90vw] md:w-[75vw] lg:w-[1000px] h-[500px] shrink-0"
            >
              {/* Left: Content Side (UI from 1st SS) */}
              <div className="flex-1 p-8 md:p-14 flex flex-col justify-between order-2 md:order-1">
                <div className="space-y-4">
                  <span className="text-white/60 text-small font-medium group-hover:text-primary transition-colors">
                    {project.date}
                  </span>
                  <h3 className="text-white text-h2 font-heading leading-tight group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-8 space-y-6">
                  <p className="!text-white text-body max-w-sm group-hover:!text-black/70 transition-colors">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-2 text-accent group-hover:text-primary font-bold transition-colors">
                    <span className="text-small">View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Right: Image Side */}
              <div className="flex-1 overflow-hidden order-1 md:order-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
          
          {/* Last Spacing */}
          <div className="w-[15vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;