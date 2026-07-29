import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin,
  Mail,
  Globe,
  BookOpen,
  Users,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: "Projects Delivered", value: "50+", icon: TrendingUp },
  { label: "Happy Clients", value: "40+", icon: Users },
  { label: "Years of Experience", value: "2+", icon: BookOpen },
  { label: "Client Satisfaction", value: "100%", icon: HeartHandshake },
];

const strengths = [
  {
    title: "I Understand Businesses First",
    desc: "Before writing a single line of code, I take time to understand your business goals, your customers, and what makes you different. The website follows the business — not the other way around.",
  },
  {
    title: "Websites That Actually Convert",
    desc: "A beautiful website is useless if it doesn't bring in customers. Everything I build is designed to move visitors toward the action you need — a call, a form submission, or a purchase.",
  },
  {
    title: "Clean, Fast, and Reliable",
    desc: "Slow or broken websites turn customers away. Every website I deliver loads quickly, works on all devices, and is built to stay stable and secure over time.",
  },
  {
    title: "You Stay in Control",
    desc: "I build websites you can actually manage yourself. No ongoing dependency on me for every small change — though I'm always available if you need support.",
  }
];

const techSkills = [
  "Business Websites", "eCommerce Stores", "Booking Systems",
  "Healthcare Websites", "Restaurant Websites", "Landing Pages",
  "Website Redesigns", "Speed Optimization", "Ongoing Maintenance"
];

const identityMeta = [
  { icon: MapPin, label: 'Based in', value: 'Pakistan' },
  { icon: Globe, label: 'Serving', value: 'Clients Worldwide' },
  { icon: Mail, label: 'Open to', value: 'Business Projects' },
  { icon: BookOpen, label: 'Also', value: 'BS Computer Science' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="section-space container-custom relative py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[var(--color-primary)]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-accent)]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
          <Sparkles size={14} />
          About Aazim
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
          I Build Websites That Help <br />
          <span className="text-[var(--color-primary)]">
            Businesses Grow Online.
          </span>
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT — Identity Card (Cols 5) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gray-950 border border-white/10 shadow-2xl">
            
            {/* Top gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[var(--color-primary)] via-purple-500 to-[var(--color-accent)]" />

            <div className="p-8">
              {/* Monogram + Status */}
              <div className="flex items-start justify-between mb-8">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-25 blur-md" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-heading font-extrabold text-white tracking-tight">AS</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Taking New Projects
                </div>
              </div>

              {/* Name & Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-extrabold text-white mb-1">Aazim Sherazi</h3>
                <p className="text-sm text-gray-400 font-medium">Web Developer & Digital Solutions Provider</p>
              </div>

              {/* Meta */}
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

              {/* Services Summary */}
              <div className="space-y-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-4">I Build Websites For</p>
                <div className="flex flex-wrap gap-2">
                  {["Small Businesses", "Clinics", "Restaurants", "eCommerce Brands", "Real Estate", "Startups"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/8 border border-white/12 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/about"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-heading font-semibold text-sm text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span>My Full Story & Experience</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Tabs & Bio (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Aazim — a web developer from Pakistan who specializes in building websites for businesses that want to grow online. My background is in CMS development, which means I understand what a business actually needs from a website: something that's easy to manage, attracts customers, and helps the business make more money.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Over the past two years, I've built websites for clinics, restaurants, eCommerce brands, real estate agencies, and local service businesses. I also develop custom web applications when a business needs something beyond a standard website.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
            {[
              { id: 'overview', label: 'My Approach' },
              { id: 'stats', label: 'Track Record' },
              { id: 'skills', label: 'Services I Offer' },
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

          {/* Tab Content */}
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: MY APPROACH */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {strengths.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all duration-300">
                      <h4 className="font-heading font-bold text-gray-900 text-sm mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 2: TRACK RECORD */}
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
                          <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/20 text-gray-800 flex items-center justify-center">
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

              {/* TAB 3: SERVICES */}
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
                    From simple business websites to custom web applications — I cover everything a business needs to succeed online.
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-gray-800 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <span>Read Full Story</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;