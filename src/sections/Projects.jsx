import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';

const categories = ['All', 'Healthcare', 'eCommerce', 'Restaurant', 'Real Estate', 'Landing Page', 'Booking'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by active category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section-space container-custom relative overflow-hidden py-24">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================
         SECTION HEADER & CATEGORY FILTER TABS
      ========================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        
        {/* Left Title */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
            <Sparkles size={14} className="text-[var(--color-primary)]" />
            Client Case Studies
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            Real Projects. <br />
            <span className="text-[var(--color-primary)]">
              Real Business Results.
            </span>
          </h2>
        </div>

        {/* Right Action Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2.5 flex-wrap mb-12 border-b border-gray-200 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20 scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* =========================================
         PROJECTS CARDS GRID
      ========================================= */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA Banner Link */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm mb-4 font-medium">
          Need a website tailored specifically to your industry?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-base font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors group"
        >
          <FolderGit2 size={18} />
          <span className="underline decoration-2 underline-offset-4 group-hover:decoration-[var(--color-accent)]">
            Discuss Your Custom Project With Me
          </span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </section>
  );
};

export default Projects;