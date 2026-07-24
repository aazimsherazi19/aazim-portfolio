import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowDown, FolderGit2, Star, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Hero = () => {
  return (
    <section className="container-custom pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[var(--color-primary)]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[var(--color-accent)]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-8">

        {/* =========================================
           LEFT CONTENT COLUMN (Cols 7)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left z-10"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-gray-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for Freelance & Full-time Roles
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-gray-900 leading-[1.08] tracking-tight">
            Designing <br />
            <span className="text-[var(--color-primary)]">
              Digital Products
            </span> <br />
            That Elevate Brands.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            Hey, I'm <strong className="text-gray-900 font-semibold">Aazim</strong> — a Web Designer & Frontend Engineer specializing in building intuitive, high-converting, and visually stunning web experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-300 shadow-xl shadow-[var(--color-primary)]/20 transform hover:-translate-y-1"
            >
              <span>Hire Me / Let's Talk</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <FolderGit2 size={18} className="text-[var(--color-primary)]" />
              <span>Our Portfolio</span>
            </Link>
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">50+</h4>
              <p className="text-xs text-gray-500 font-medium">Projects Built</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">2+ Yrs</h4>
              <p className="text-xs text-gray-500 font-medium">Experience</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-primary)]">100%</h4>
              <p className="text-xs text-gray-500 font-medium">Satisfaction</p>
            </div>
          </div>

        </motion.div>

        {/* =========================================
           RIGHT VISUAL PORTRAIT COLUMN (Cols 5)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-full max-w-[440px]">
            
            {/* Ambient Back Glow Ring */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 blur-2xl -z-10" />

            {/* Profile Image Container */}
            <div className="relative rounded-[36px] overflow-hidden bg-gray-900 p-2 border border-white/60 shadow-2xl">
              <img
                src={assets.hero}
                alt="Aazim - Web Designer"
                className="w-full h-auto object-cover rounded-[28px] transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glass Badge 1 (Top Left) */}
            <div className="absolute -top-4 -left-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold">
                <Code2 size={20} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-900">Modern Frontend</h5>
                <p className="text-[10px] text-gray-500">React • Next.js • Tailwind</p>
              </div>
            </div>

            {/* Floating Glass Badge 2 (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 z-20 flex items-center gap-3 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center font-bold shadow-md">
                <Star size={18} className="fill-black" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                  <span>5.0 Rating</span>
                  <span className="text-[var(--color-primary)]">★★★★★</span>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">Top Rated Web Designer</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Down Prompt */}
      <div className="hidden md:flex justify-center mt-12">
        <a 
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[var(--color-primary)] transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="transform group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

    </section>
  );
};

export default Hero;