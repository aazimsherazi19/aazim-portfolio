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
  ShieldCheck
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    stepNumber: "01",
    phase: "PHASE 01 — DISCOVERY",
    title: "Discovery & Strategy Call",
    tagline: "Understanding your business goals, target market & website requirements.",
    desc: "Every successful project begins with clarity. We discuss your business, target audience, competitors, and the specific goals you want your website to achieve before any design work starts.",
    outcomes: [
      "Target Audience & Competitor Analysis",
      "Clear Sitemap & Page Hierarchy",
      "Functionality & Feature Specification",
      "Fixed Project Quote & Milestone Timeline"
    ],
    duration: "Days 1 - 3",
    icon: Search
  },
  {
    id: 2,
    stepNumber: "02",
    phase: "PHASE 02 — DESIGN",
    title: "Custom Visual Design",
    tagline: "Crafting a clean layout tailored to your brand & customer conversion.",
    desc: "I create custom design layouts for key pages. Every headline, button, and image placement is chosen to reflect your business's quality and guide visitors toward contacting you or purchasing.",
    outcomes: [
      "Homepage & Key Page Visual Layouts",
      "Mobile & Tablet Responsive Mockups",
      "Brand Colors & Typography Pairing",
      "Client Feedback & Revision Rounds"
    ],
    duration: "Week 1 - 2",
    icon: PenTool
  },
  {
    id: 3,
    stepNumber: "03",
    phase: "PHASE 03 — BUILD",
    title: "Development & Integration",
    tagline: "Building your website with fast speeds & easy content management.",
    desc: "Approved designs are turned into a fully functional website. I configure easy-to-use content editing tools, mobile responsiveness, contact forms, booking systems, and store checkout flows.",
    outcomes: [
      "Pixel-Perfect Mobile & Desktop Build",
      "Contact Forms & Booking Integration",
      "Content Management System Setup",
      "Fast Speed & Caching Optimization"
    ],
    duration: "Week 2 - 3",
    icon: Code2
  },
  {
    id: 4,
    stepNumber: "04",
    phase: "PHASE 04 — LAUNCH",
    title: "Testing & Smooth Go-Live",
    tagline: "Rigorous cross-device testing, domain setup & production launch.",
    desc: "Before going live, the website undergoes full testing across iPhones, Androids, tablets, and computers. I connect your domain name, set up SSL security, and launch the site smoothly.",
    outcomes: [
      "Mobile, Tablet & Desktop QA Check",
      "SSL Security Certificate Activation",
      "Google Search Console & Analytics Setup",
      "Smooth Domain & Hosting Deployment"
    ],
    duration: "Launch Day",
    icon: Rocket
  },
  {
    id: 5,
    stepNumber: "05",
    phase: "PHASE 05 — SUPPORT",
    title: "Training & Ongoing Care",
    tagline: "Walkthrough video training & optional monthly maintenance support.",
    desc: "After launch, I don't leave you stranded. I provide simple video instructions showing you how to update text and photos, plus optional ongoing maintenance to keep your site updated and safe.",
    outcomes: [
      "Custom Client Dashboard Video Guide",
      "30 Days of Free Post-Launch Support",
      "Backup & Security Verification",
      "Optional Monthly Care Package"
    ],
    duration: "Ongoing",
    icon: ShieldCheck
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
          Simple & Predictable Process
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
          How We Build Your Business <br />
          <span className="text-[var(--color-primary)]">
            Website Step by Step.
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
        <div className="relative max-w-5xl mx-auto px-4">
          
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
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-heading font-bold transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-[#181335] text-[var(--color-accent)] ring-4 ring-[var(--color-primary)]/20 scale-110'
                      : isPassed
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-white text-gray-500 border border-gray-300 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]'
                  }`}>
                    <Icon size={22} className="transform group-hover:scale-110 transition-transform" />
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
        <div className="max-w-4xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#161136] via-[#1f174a] to-[#120d2c] text-white border border-white/15 shadow-2xl relative overflow-hidden"
            >
              
              {/* Decorative Step Number Watermark */}
              <span className="absolute -bottom-10 -right-4 font-heading font-extrabold text-[160px] leading-none text-white/5 pointer-events-none select-none">
                {current.stepNumber}
              </span>

              {/* CONTENT DETAILS */}
              <div className="space-y-6 relative z-10">
                
                {/* Phase Tag & Duration */}
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)] text-black text-xs font-bold tracking-wider">
                    {current.phase}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-300 font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                    <Clock size={12} className="text-[var(--color-accent)]" />
                    Timeline: {current.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                  {current.title}
                </h3>

                <p className="text-[var(--color-accent)] font-semibold text-base">
                  "{current.tagline}"
                </p>

                <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                  {current.desc}
                </p>

                {/* Phase Deliverables List */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    What You Receive In This Step:
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
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default OurProcess;