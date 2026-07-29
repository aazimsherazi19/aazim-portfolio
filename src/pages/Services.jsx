import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { 
  Sparkles, 
  Layers, 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Clock,
  ArrowRight,
  TrendingUp,
  Filter,
  Check,
  Zap,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: "01",
    phase: "Phase 1",
    title: "Discovery & Strategy",
    subtitle: "Setting clear goals & roadmap",
    desc: "We discuss your business objectives, target audience, and website features to create a clear blueprint before writing code.",
    outcomes: ["Target Audience & Competitor Research", "Sitemap & Page Structure", "Fixed Timeline & Project Scope"],
    duration: "1 - 3 Days",
    icon: Search
  },
  {
    step: "02",
    phase: "Phase 2",
    title: "Custom Visual Design",
    subtitle: "Crafting your brand identity",
    desc: "Designing clean, mobile-first page layouts tailored to your brand identity that guide visitors toward contacting you.",
    outcomes: ["Homepage & Key Page Layouts", "Mobile-First Responsive Wireframes", "Client Review & Feedback Rounds"],
    duration: "Week 1 - 2",
    icon: PenTool
  },
  {
    step: "03",
    phase: "Phase 3",
    title: "Development & Integration",
    subtitle: "Building the fast, live site",
    desc: "Turning approved designs into a fast, responsive website with contact forms, booking systems, store checkouts, and easy admin tools.",
    outcomes: ["Pixel-Perfect Mobile & Desktop Build", "Form & Booking System Setup", "Easy Content Management Dashboard"],
    duration: "Week 2 - 3",
    icon: Code2
  },
  {
    step: "04",
    phase: "Phase 4",
    title: "QA Testing & Launch",
    subtitle: "Zero-friction go-live",
    desc: "Rigorous cross-device testing across smartphones and desktop browsers, speed tuning, SSL security setup, and smooth deployment.",
    outcomes: ["Cross-Device & Browser QA Audit", "SSL & Domain Connection", "Google Indexing & Search Console Setup"],
    duration: "Launch Day",
    icon: Rocket
  },
  {
    step: "05",
    phase: "Phase 5",
    title: "Training & Ongoing Care",
    subtitle: "Hands-free post-launch support",
    desc: "Walkthrough video guidance showing you how to update content, plus optional monthly security and backup maintenance.",
    outcomes: ["Custom Video Dashboard Walkthrough", "30-Day Free Post-Launch Support", "Optional Monthly Care Plan"],
    duration: "Ongoing",
    icon: ShieldCheck
  }
];

const businessQuizOptions = [
  {
    label: "I need a website for my local business or practice",
    category: "01",
    recommendation: "Business Website Development or Healthcare Website",
    desc: "Build credibility and get local customers calling your business directly from Google."
  },
  {
    label: "I want to sell products online and process payments",
    category: "02",
    recommendation: "eCommerce & Online Store Development",
    desc: "Full online store with catalog, shopping cart, checkout, and order management."
  },
  {
    label: "I run a clinic, salon, or service that needs online bookings",
    category: "03",
    recommendation: "Booking & Appointment Websites",
    desc: "Allow clients to book appointments 24/7 with automatic confirmations."
  },
  {
    label: "I have an old website that looks outdated or runs slowly",
    category: "06",
    recommendation: "Website Redesign & Speed Optimization",
    desc: "Modernize your design, boost load speed, and improve mobile conversion rates."
  }
];

const techCategories = [
  {
    title: "Content Management & Stores",
    items: ["WordPress", "WooCommerce", "Custom Admin Dashboards"]
  },
  {
    title: "Frontend & Performance",
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Vite"]
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "MongoDB", "MySQL", "cPanel & Cloud Hosting"]
  }
];

const ServicesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(0);

  const filterCategories = ['All', 'Websites', 'Stores & Booking', 'Performance & Support'];

  const filteredServices = servicesData.filter((service) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Websites') return ['01', '04', '05'].includes(service.id);
    if (selectedFilter === 'Stores & Booking') return ['02', '03'].includes(service.id);
    if (selectedFilter === 'Performance & Support') return ['06', '07', '08'].includes(service.id);
    return true;
  });

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[var(--color-accent)]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================
         1. HERO HEADER SECTION
      ========================================= */}
      <section className="container-custom pt-8 pb-16 md:pt-12 md:pb-20 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6"
        >
          <Layers size={16} />
          End-to-End Web Solutions
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight"
        >
          Tailored Web Solutions Built for <br />
          <span className="text-[var(--color-primary)]">Measurable Business Growth.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          From business websites and eCommerce stores to automated booking systems and speed fixes — everything I deliver is built to generate leads, build trust, and increase revenue.
        </motion.p>

        {/* Hero Quick Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto p-4 rounded-3xl bg-white border border-gray-200/80 shadow-md"
        >
          <div className="p-3 text-center border-r border-gray-100 last:border-0">
            <span className="text-2xl font-heading font-bold text-gray-900">8</span>
            <p className="text-xs text-gray-500 font-medium">Targeted Services</p>
          </div>
          <div className="p-3 text-center border-r border-gray-100 last:border-0">
            <span className="text-2xl font-heading font-bold text-[var(--color-primary)]">100%</span>
            <p className="text-xs text-gray-500 font-medium">On-Time Delivery</p>
          </div>
          <div className="p-3 text-center border-r border-gray-100 last:border-0">
            <span className="text-2xl font-heading font-bold text-gray-900">1-on-1</span>
            <p className="text-xs text-gray-500 font-medium">Direct Communication</p>
          </div>
          <div className="p-3 text-center">
            <span className="text-2xl font-heading font-bold text-gray-900">5.0 ★</span>
            <p className="text-xs text-gray-500 font-medium">Client Satisfaction</p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
         2. INTERACTIVE SERVICE FINDER WIZARD
      ========================================= */}
      <section className="container-custom mb-20">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#140e2b] via-[#1c143d] to-[#120d29] text-white border border-white/15 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
              <Zap size={14} />
              Interactive Solution Selector
            </div>

            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-3 leading-tight">
              Not sure which service fits your business?
            </h2>

            <p className="text-gray-300 text-sm md:text-base mb-8">
              Select your primary goal below to see the recommended solution:
            </p>

            {/* Quiz Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {businessQuizOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuiz(idx)}
                  className={`p-4 rounded-2xl text-left text-sm font-medium transition-all duration-300 flex items-start gap-3 border ${
                    activeQuiz === idx
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-accent)] shadow-lg'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                    activeQuiz === idx ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-black' : 'border-gray-500'
                  }`}>
                    {activeQuiz === idx && <Check size={12} className="stroke-[3]" />}
                  </div>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Selected Quiz Recommendation Result Card */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-semibold text-[var(--color-accent)] tracking-widest block mb-1">
                  Recommended Package
                </span>
                <h4 className="text-xl font-heading font-bold text-white mb-1">
                  {businessQuizOptions[activeQuiz].recommendation}
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {businessQuizOptions[activeQuiz].desc}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all shadow-md shrink-0 text-sm"
              >
                <span>Get Started With This</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         3. SERVICES CATALOG & CATEGORY FILTER TABS
      ========================================= */}
      <section className="container-custom mb-24">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-3">
              <Filter size={14} />
              Full Service Catalog
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Explore Our Core Services
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedFilter === cat
                    ? 'bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20 scale-105'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =========================================
         4. MODERN PROCESS & WORKFLOW PRESENTATION
      ========================================= */}
      <section className="section-space container-custom my-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
            <Sparkles size={14} />
            Predictable & Transparent Execution
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            How We Build Your Business Website <br />
            <span className="text-[var(--color-primary)]">From Concept to Go-Live</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            A simple 5-step process designed to ensure your website is delivered on time, within budget, and built for maximum conversions.
          </p>
        </div>

        {/* Modern Interactive Process Timeline Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Step Selection Navigation (Cols 5) */}
          <div className="lg:col-span-5 space-y-3">
            {processSteps.map((step, idx) => {
              const isActive = activeProcessStep === idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#140e2b] text-white border-[var(--color-primary)] shadow-xl scale-[1.02]'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-heading font-bold text-sm transition-colors ${
                      isActive ? 'bg-[var(--color-accent)] text-black' : 'bg-gray-100 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white'
                    }`}>
                      <Icon size={20} />
                    </div>

                    <div>
                      <span className={`text-[10px] uppercase tracking-widest font-semibold block ${
                        isActive ? 'text-[var(--color-accent)]' : 'text-gray-400'
                      }`}>
                        Step {step.step} • {step.phase}
                      </span>
                      <h3 className={`text-base font-heading font-bold ${
                        isActive ? 'text-white' : 'text-gray-900 group-hover:text-[var(--color-primary)]'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-400 group-hover:text-gray-900'
                  }`}>
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Active Step Detailed Showcase Panel (Cols 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider">
                      {processSteps[activeProcessStep].phase}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-semibold px-3 py-1.5 rounded-full bg-gray-100">
                      <Clock size={12} className="text-[var(--color-primary)]" />
                      Duration: {processSteps[activeProcessStep].duration}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
                    {processSteps[activeProcessStep].title}
                  </h3>

                  <p className="text-[var(--color-primary)] text-sm font-semibold mb-4">
                    "{processSteps[activeProcessStep].subtitle}"
                  </p>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                    {processSteps[activeProcessStep].desc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-6 border-t border-gray-100 space-y-3 mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                      Deliverables In This Phase:
                    </h4>

                    <div className="space-y-2.5">
                      {processSteps[activeProcessStep].outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="stroke-[3]" />
                          </span>
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Navigation Bar */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">
                    Step {activeProcessStep + 1} of {processSteps.length}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={activeProcessStep === 0}
                      onClick={() => setActiveProcessStep(prev => prev - 1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                    >
                      Previous Step
                    </button>
                    <button
                      disabled={activeProcessStep === processSteps.length - 1}
                      onClick={() => setActiveProcessStep(prev => prev + 1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-primary)] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-primary-dark)] transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =========================================
         5. CATEGORIZED TECH STACK SHOWCASE
      ========================================= */}
      <section className="container-custom my-20">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              Technology & Platform Ecosystem
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              We choose the right platform based on your business requirements — keeping performance, security, and scalability first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50/70 border border-gray-200/60">
                <h4 className="text-xs uppercase font-bold text-[var(--color-primary)] tracking-wider mb-4">
                  {cat.title}
                </h4>
                <div className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-gray-800 bg-white p-3 rounded-xl border border-gray-200/60 shadow-sm">
                      <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         6. CALL TO ACTION BANNER
      ========================================= */}
      <section className="container-custom mt-20">
        <div className="p-10 md:p-16 rounded-[36px] bg-gradient-to-r from-[#181335] via-[#221a47] to-[#181335] text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-white/10">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-primary)]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[var(--color-accent)] mb-6 backdrop-blur-md">
              <Sparkles size={14} />
              Let's Discuss Your Goals
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              Ready to get a website that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[var(--color-accent)]">
                drives real business results?
              </span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Send me a message about your project requirements and let's craft a tailored solution for your company.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              <span>Get a Free Quote & Consultation</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;