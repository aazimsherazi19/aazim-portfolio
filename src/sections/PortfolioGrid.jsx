import React from 'react';
import { ArrowUpRight, Globe, Layers } from 'lucide-react';
import { assets } from '../assets/assets';

const portfolioData = [
  {
    id: 1,
    title: "ShopFlow E-Commerce & Retail",
    category: "Full Stack Web App",
    image: assets.g1,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 2,
    title: "Artisan Co. Photography Studio",
    category: "Portfolio & Gallery",
    image: assets.p1,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 3,
    title: "TechFlow Digital Marketing Agency",
    category: "Corporate Agency",
    image: assets.p2,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 4,
    title: "Gourmet Bistro Restaurant & Cafe",
    category: "Hospitality & Dining",
    image: assets.p3,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 5,
    title: "Urban Space Architecture & Interior",
    category: "Real Estate & Design",
    image: assets.p4,
    link: "https://shop-flow-r6no.vercel.app/"
  },
  {
    id: 6,
    title: "Nova AI SaaS Platform Studio",
    category: "SaaS & Dashboard",
    image: assets.project1,
    link: "https://shop-flow-r6no.vercel.app/"
  }
];

const PortfolioGrid = () => {
  return (
    <section className="section-space container-custom py-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          <Globe size={14} />
          Live Website Showcase
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
          <span className="text-[var(--color-primary)]">50+ Complete Websites</span> <br />
          Built & Deployed for Clients
        </h2>

        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Explore a curated selection of live, fully responsive websites designed for startups, e-commerce brands, and agency clients worldwide.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project) => (
          <div key={project.id} className="group relative flex flex-col h-full bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            
            {/* Device Browser Frame */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[380px] overflow-hidden bg-gray-900"
            >
              {/* MacOS Window Control Header */}
              <div className="absolute top-0 inset-x-0 h-7 bg-gray-900/90 z-20 flex items-center justify-between px-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-gray-400">
                  {project.title.toLowerCase().split(' ')[0]}.live
                </span>
                <div className="w-6" />
              </div>

              {/* Smooth Scrolling Image Container */}
              <div className="w-full h-full pt-7 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-top transition-transform duration-[5s] ease-out group-hover:translate-y-[calc(-100%+380px)]"
                />
              </div>

              {/* Hover Dark Overlay with Action Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center pointer-events-none">
                <div className="px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-black font-heading font-semibold text-xs flex items-center gap-2 shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span>Visit Live Website</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>

            {/* Footer Metadata */}
            <div className="p-6 flex items-center justify-between bg-white border-t border-gray-100">
              <div>
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h4 className="font-heading font-bold text-gray-900 text-base group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h4>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[var(--color-accent)] group-hover:text-black flex items-center justify-center text-gray-600 transition-all duration-300 shrink-0"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="flex justify-center mt-16">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
        >
          <Layers size={18} />
          <span>Explore All 50+ Client Sites</span>
        </a>
      </div>

    </section>
  );
};

export default PortfolioGrid;