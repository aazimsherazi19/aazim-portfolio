import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, FolderGit2, Star, Code2, Layers, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const techStack = [
  { name: 'React', color: '#61DAFB', bg: '#61DAFB15' },
  { name: 'Next.js', color: '#ffffff', bg: '#ffffff15' },
  { name: 'Tailwind', color: '#38BDF8', bg: '#38BDF815' },
  { name: 'TypeScript', color: '#3178C6', bg: '#3178C615' },
  { name: 'Figma', color: '#F24E1E', bg: '#F24E1E15' },
  { name: 'Framer', color: '#a78bfa', bg: '#a78bfa15' },
];

const floatingCards = [
  {
    icon: Code2,
    title: 'Frontend Engineer',
    sub: 'React • Next.js • TypeScript',
    position: 'top-left',
  },
  {
    icon: Layers,
    title: 'UI/UX Designer',
    sub: 'Figma • Design Systems',
    position: 'bottom-right',
  },
];

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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-[1.1] tracking-tight">
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
           RIGHT — ANIMATED TECH VISUAL (Cols 5)
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

            {/* Main Visual Card — Code Terminal */}
            <div className="relative rounded-[32px] overflow-hidden bg-gray-950 border border-white/10 shadow-2xl p-6">

              {/* Terminal Top Bar */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">aazim.portfolio.js</span>
              </div>

              {/* Animated Code Lines */}
              <div className="font-mono text-sm space-y-2 text-left">
                {[
                  { indent: 0, token: 'const', name: ' developer', rest: ' = {' },
                  { indent: 1, key: 'name', val: '"Aazim Sherazi"', color: '#fbbf24' },
                  { indent: 1, key: 'role', val: '"Frontend Engineer"', color: '#34d399' },
                  { indent: 1, key: 'passion', val: '"Beautiful UI/UX"', color: '#a78bfa' },
                  { indent: 1, key: 'available', val: 'true', color: '#38bdf8' },
                  { indent: 0, rest: '};' },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-1"
                    style={{ paddingLeft: `${(line.indent || 0) * 16}px` }}
                  >
                    {line.token && <span className="text-purple-400">{line.token}</span>}
                    {line.name && <span className="text-blue-300">{line.name}</span>}
                    {line.key && <span className="text-gray-400">{line.key}<span className="text-gray-600">:</span></span>}
                    {line.val && <span style={{ color: line.color }} className="ml-2">{line.val}<span className="text-gray-600">,</span></span>}
                    {line.rest && <span className="text-gray-300">{line.rest}</span>}
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  className="flex items-center gap-1 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-gray-500">{'>'}</span>
                  <motion.span
                    className="inline-block w-2.5 h-5 bg-[var(--color-primary)] rounded-sm ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + i * 0.08 }}
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{
                        color: tech.color,
                        backgroundColor: tech.bg,
                        borderColor: `${tech.color}30`,
                      }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
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