import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Code2, 
  Compass, 
  Zap, 
  Users,
  Terminal,
  MapPin,
  Mail,
  Globe,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: "Projects Completed", value: "120+", icon: Award },
  { label: "Client Satisfaction Rate", value: "98%", icon: Users },
  { label: "Hours of Dedicated Coding", value: "10K+", icon: Zap },
  { label: "Live Websites Deployed", value: "50+", icon: Code2 },
];

const coreStrengths = [
  {
    title: "Human-Centered UI/UX",
    desc: "Crafting interfaces built on psychological principles, user behavior research, and accessibility standards.",
    icon: Compass
  },
  {
    title: "Clean Code & Architecture",
    desc: "Writing modular, maintainable, and scalable frontend code using React, Next.js, and modern CSS frameworks.",
    icon: Terminal
  },
  {
    title: "Conversion-Focused Design",
    desc: "Building landing pages and sales funnels structured to maximize visitor engagement and user conversion.",
    icon: Zap
  },
  {
    title: "Fluid Animations & Motion",
    desc: "Elevating web experiences with interactive micro-interactions and scroll-driven motion graphics.",
    icon: Sparkles
  }
];

const techSkills = [
  "React.js & Next.js", "Tailwind CSS v4", "TypeScript", 
  "UI/UX & Figma", "Framer Motion", "Lenis Smooth Scroll",
  "SEO & Web Vitals", "Git & GitHub Workflow"
];

// Identity card meta items
const identityMeta = [
  { icon: MapPin, label: 'Based in', value: 'Pakistan' },
  { icon: Globe, label: 'Available', value: 'Worldwide · Remote' },
  { icon: Mail, label: 'Open to', value: 'Freelance & Full-time' },
  { icon: Coffee, label: 'Fueled by', value: 'Coffee & Clean Code' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="section-space container-custom relative py-24 overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================
         SECTION HEADER
      ========================================= */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
          <Sparkles size={14} className="text-[var(--color-primary)]" />
          Passion & Purpose
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
          Designing Digital Products <br />
          <span className="text-[var(--color-primary)]">
            That Inspire & Drive Results.
          </span>
        </h2>
      </div>

      {/* =========================================
         MAIN CONTENT SPLIT GRID
      ========================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: Designer Identity Card (Cols 5) */}
        <div className="lg:col-span-5 relative">
          
          <div className="relative rounded-3xl overflow-hidden bg-gray-950 border border-white/10 shadow-2xl">

            {/* Top gradient accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[var(--color-primary)] via-purple-500 to-[var(--color-accent)]" />

            <div className="p-8">

              {/* Avatar — Abstract Monogram */}
              <div className="flex items-start justify-between mb-8">
                <div className="relative">
                  {/* Glow Ring */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-30 blur-md" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-heading font-extrabold text-white tracking-tight">AS</span>
                  </div>
                </div>

                {/* Live badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
                </div>
              </div>

              {/* Name & Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-extrabold text-white mb-1">Aazim Sherazi</h3>
                <p className="text-sm text-gray-400 font-medium">Web Designer & Frontend Engineer</p>
              </div>

              {/* Identity Meta */}
              <div className="space-y-3 mb-8">
                {identityMeta.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-[var(--color-primary)]" />
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500 font-medium w-20">{item.label}</span>
                        <span className="text-gray-200 font-semibold">{item.value}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/10 mb-6" />

              {/* Mini Skill Bar Summary */}
              <div className="space-y-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-4">Top Expertise</p>
                {[
                  { label: 'UI/UX Design', pct: 95 },
                  { label: 'React / Next.js', pct: 90 },
                  { label: 'Frontend Dev', pct: 88 },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                      <span className="font-medium">{bar.label}</span>
                      <span>{bar.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA inside card */}
              <div className="mt-8">
                <Link
                  to="/about"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-heading font-semibold text-sm text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span>View Full Biography</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Interactive Tabs & Narrative (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Bio Narrative */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              I am a passionate Web Designer and Frontend Engineer dedicated to turning complex ideas into sleek, high-performing digital experiences. 
              My focus blends human-centered UI/UX design with clean, scalable code architecture.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
            {[
              { id: 'overview', label: 'Core Strengths' },
              { id: 'stats', label: 'Key Achievements' },
              { id: 'skills', label: 'Tech Stack' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: CORE STRENGTHS */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {coreStrengths.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-[var(--color-primary)]/40 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-3">
                          <Icon size={20} />
                        </div>
                        <h4 className="font-heading font-bold text-gray-900 text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* TAB 2: KEY ACHIEVEMENTS & STATS */}
              {activeTab === 'stats' && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-5"
                >
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-3xl font-heading font-bold text-[var(--color-primary)]">
                            {stat.value}
                          </span>
                          <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/20 text-black flex items-center justify-center">
                            <Icon size={18} />
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* TAB 3: TECH STACK */}
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-gray-600">
                    Continuously adopting modern frameworks, build tools, and design principles to engineer world-class web experiences.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {techSkills.map((skill, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-gray-800 flex items-center gap-3 shadow-sm">
                        <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              <span>Let's Work Together</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-gray-800 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <span>Full Biography & Timeline</span>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;