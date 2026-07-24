import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { assets } from '../assets/assets';

const processSteps = [
  {
    id: 1,
    stepNumber: "01",
    phase: "PHASE 01 — STRATEGY",
    title: "Discovery & Architecture",
    tagline: "Understanding goals, audience psychology & technical scope.",
    desc: "Every successful web product begins with deep research. I collaborate with you to define target audience personas, map user journeys, and establish a clear site architecture before touching design.",
    outcomes: [
      "User Persona & Competitor Audit",
      "Information Architecture & Sitemap",
      "Technical Scope & Stack Selection",
      "Project Timeline & Milestones"
    ],
    duration: "Week 1",
    icon: Search,
    image: assets.p1
  },
  {
    id: 2,
    stepNumber: "02",
    phase: "PHASE 02 — DESIGN",
    title: "UI/UX & Interactive Design",
    tagline: "Transforming concepts into high-fidelity Figma prototypes.",
    desc: "Using the established strategy, I design intuitive wireframes and interactive prototypes. Every layout, color choice, and font pairing is meticulously crafted to match your brand identity.",
    outcomes: [
      "Low-Fidelity Wireframes",
      "High-Fidelity Figma Prototypes",
      "Custom Design System & UI Kit",
      "Mobile-First Responsive Layouts"
    ],
    duration: "Week 2 - 3",
    icon: PenTool,
    image: assets.p2
  },
  {
    id: 3,
    stepNumber: "03",
    phase: "PHASE 03 — BUILD",
    title: "Frontend Engineering",
    tagline: "Building clean, ultra-fast React & Next.js applications.",
    desc: "Design mockups come to life with modern code. I write clean, modular React and Tailwind CSS components integrated with smooth scroll, micro-animations, and full mobile optimization.",
    outcomes: [
      "Pixel-Perfect Component Architecture",
      "Framer Motion Micro-Interactions",
      "SEO & Core Web Vitals Optimization",
      "API & CMS Data Integration"
    ],
    duration: "Week 4 - 5",
    icon: Code2,
    image: assets.p3
  },
  {
    id: 4,
    stepNumber: "04",
    phase: "PHASE 04 — LAUNCH",
    title: "QA Audit & Deployment",
    tagline: "Rigorous cross-device testing & production handover.",
    desc: "Before going live, the website undergoes rigorous cross-browser testing, accessibility checks, and performance tuning to ensure a seamless launch and high visitor conversion.",
    outcomes: [
      "Cross-Device & Browser QA Testing",
      "Speed & Asset Optimization Audit",
      "Domain Setup & Vercel Deployment",
      "Post-Launch Support & Documentation"
    ],
    duration: "Week 6",
    icon: Rocket,
    image: assets.p4
  }
];

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto cycle step every 7 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeStep, isAutoPlay]);

  const current = processSteps[activeStep];

  return (
    <section className="section-space container-custom relative py-28 overflow-hidden">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[var(--color-accent)]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================
         SECTION HEADER
      ========================================= */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
          <Sparkles size={14} className="text-[var(--color-primary)]" />
          Execution Methodology
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
          How Ideas Become <br />
          <span className="text-[var(--color-primary)]">
            High-Performing Web Products.
          </span>
        </h2>
      </div>

      <div 
        onMouseEnter={() => setIsAutoPlay(false)} 
        onMouseLeave={() => setIsAutoPlay(true)}
        className="space-y-12"
      >
        
        {/* =========================================
           PROGRESS TRACKER PIPELINE BAR
        ========================================= */}
        <div className="relative max-w-4xl mx-auto px-4">
          
          {/* Connecting Background Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0" />
          
          {/* Animated Active Line */}
          <div 
            className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] -translate-y-1/2 rounded-full z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (processSteps.length - 1)) * 88}%` }}
          />

          {/* Milestone Step Buttons */}
          <div className="relative z-10 flex items-center justify-between">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  {/* Step Node Circle */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-heading font-bold transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-[#181335] text-[var(--color-accent)] ring-4 ring-[var(--color-primary)]/20 scale-110'
                      : isPassed
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-white text-gray-500 border border-gray-300 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]'
                  }`}>
                    <Icon size={24} className="transform group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Node Label */}
                  <span className={`mt-3 text-xs md:text-sm font-heading font-bold transition-colors hidden sm:block ${
                    isActive ? 'text-[var(--color-primary)]' : 'text-gray-500'
                  }`}>
                    {step.stepNumber}. {step.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* =========================================
           ACTIVE STEP FEATURE SHOWCASE PANEL
        ========================================= */}
        <div className="max-w-6xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#161136] via-[#1f174a] to-[#120d2c] text-white border border-white/15 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Decorative Step Number Watermark */}
              <span className="absolute -bottom-10 -right-4 font-heading font-extrabold text-[160px] leading-none text-white/5 pointer-events-none select-none">
                {current.stepNumber}
              </span>

              {/* LEFT CONTENT DETAILS (Cols 7) */}
              <div className="lg:col-span-7 space-y-6 relative z-10">
                
                {/* Phase Tag & Duration */}
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)] text-black text-xs font-bold tracking-wider">
                    {current.phase}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-300 font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                    <Clock size={12} className="text-[var(--color-accent)]" />
                    Estimated: {current.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                  {current.title}
                </h3>

                <p className="text-[var(--color-accent)] font-semibold text-base">
                  "{current.tagline}"
                </p>

                <p className="text-gray-300 text-base leading-relaxed">
                  {current.desc}
                </p>

                {/* Phase Outcomes List */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Phase Key Outcomes:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-200 font-medium">
                        <CheckCircle2 size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: Interactive Image Mockup Box (Cols 5) */}
              <div className="lg:col-span-5 relative z-10">
                <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-white/20 shadow-2xl aspect-[4/3] group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[var(--color-accent)]" />
                      Step {current.stepNumber} Artifacts
                    </span>
                    <span className="text-[var(--color-accent)] font-bold">Verified Workflow</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step Navigation Bar */}
        <div className="flex items-center justify-center gap-3">
          {processSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeStep === idx 
                  ? 'w-10 bg-[var(--color-primary)]' 
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to phase ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default OurProcess;