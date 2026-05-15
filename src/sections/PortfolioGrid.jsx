import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets';

const portfolioData = [
  {
    id: 1,
    title: "SEO & Digital Marketing",
    image: assets.g1, // Full page screenshot yahan aayega
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 2,
    title: "Photography & Photographer",
    image: assets.g1,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 3,
    title: "Digital Marketing Agency",
    image: assets.g1,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 4,
    title: "Restaurant & Cafe",
    image: assets.g1,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 5,
    title: "Architecture & Interior",
    image: assets.g1,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 6,
    title: "Creative Business Agency",
    image: assets.g1,
    link: "https://shop-flow-r6no.vercel.app/"
  }
];

const PortfolioGrid = () => {
  return (
    <section className="section-space container-custom">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-h2 font-heading">
          <span className="text-primary italic font-semibold">50+ Clients</span> Served <br />
          with Complete Websites
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioData.map((project) => (
          <div key={project.id} className="group relative">
            
            

            {/* Hover Container with Link */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative w-full h-[450px] overflow-hidden rounded-xl border border-border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] z-10 hover:z-20"
            >
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10 pointer-events-none" />

              {/* Scrolling Image Logic */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-top transition-all duration-[4s] ease-linear group-hover:translate-y-[calc(-100%+450px)]"
                  // 'translate-y' logic: Image ki poori height minus container ki height (450px)
                />
              </div>

              {/* View Demo Button - Appears on Hover */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="btn-primary rounded-full px-6 py-2 flex items-center gap-2 text-small whitespace-nowrap shadow-xl">
                  Live View <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
           {/* Project Title (Top) */}
            <h4 className="text-center mt-6 font-heading font-bold text-text-light group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h4>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-20">
        <button className="btn-secondary border border-[var(--color-primary)]flex items-center gap-3 rounded-sm font-bold uppercase tracking-wider hover:bg-transparent  hover:text-black transition-primary">
          View All Sites <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default PortfolioGrid;