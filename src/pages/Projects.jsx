import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import PortfolioGridSection from '../sections/PortfolioGrid';
import { FolderGit2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'E-Commerce', 'SaaS', 'Web Design', 'Fintech'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-12 pb-20">
      
      {/* =========================================
         PAGE HERO HEADER
      ========================================= */}
      <section className="container-custom text-center max-w-3xl mx-auto mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6">
          <FolderGit2 size={16} />
          Selected Portfolio Work
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
          Featured Projects & <br />
          <span className="text-[var(--color-primary)]">Digital Case Studies</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          A showcase of custom web applications, SaaS dashboards, and high-conversion e-commerce websites designed to solve real business challenges.
        </p>
      </section>

      {/* =========================================
         PROJECT CATEGORY FILTERS & CARDS GRID
      ========================================= */}
      <section className="container-custom mb-20">
        
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25 scale-105'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} priority={idx < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =========================================
         LIVE SITES SHOWCASE (PortfolioGrid)
      ========================================= */}
      <PortfolioGridSection />

      {/* =========================================
         PROJECT INQUIRY CTA BANNER
      ========================================= */}
      <section className="container-custom mt-20">
        <div className="p-10 md:p-16 rounded-[36px] bg-gradient-to-r from-[#181335] via-[#221a47] to-[#181335] text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-white/10">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-primary)]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[var(--color-accent)] mb-6 backdrop-blur-md">
              <Sparkles size={14} />
              Have a Project in Mind?
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              Let's turn your vision into a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[var(--color-accent)]">
                high-converting reality.
              </span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Whether you need a complete redesign, custom SaaS web app, or frontend development, I'm here to bring your ideas to life.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              <span>Start Your Project Today</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;