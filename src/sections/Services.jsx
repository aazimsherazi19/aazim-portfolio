import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  MoveRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section className="section-space container-custom relative py-28 overflow-hidden">
      
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[var(--color-accent)]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================
         SECTION HEADER
      ========================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
            <Sparkles size={14} className="text-[var(--color-primary)]" />
            Web Solutions For Growth
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-[1.1]">
            Everything Your Business <br />
            <span className="text-[var(--color-primary)]">
              Needs to Succeed Online.
            </span>
          </h2>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 shrink-0"
        >
          <span>Explore All Services</span>
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* =========================================
         SPLIT-SCREEN INTERACTIVE SPOTLIGHT SHOWCASE
      ========================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* LEFT COLUMN: Interactive Service Selector Menu (Cols 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {servicesData.map((service, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group cursor-pointer p-5 md:p-6 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                  isActive
                    ? 'bg-[#120e29] text-white border-[var(--color-primary)]/50 shadow-xl scale-[1.02]'
                    : 'bg-white text-gray-800 border-gray-200/80 hover:border-gray-300 hover:bg-gray-50/80'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Number Badge */}
                  <span className={`text-base font-heading font-bold transition-colors ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-gray-400 group-hover:text-gray-900'
                  }`}>
                    {service.id}.
                  </span>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-heading font-bold transition-colors ${
                    isActive ? 'text-white' : 'text-gray-900 group-hover:text-[var(--color-primary)]'
                  }`}>
                    {service.title}
                  </h3>
                </div>

                {/* Arrow / Icon Indicator */}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0 ${
                  isActive 
                    ? 'bg-[var(--color-accent)] text-black rotate-0' 
                    : 'bg-gray-100 text-gray-500 group-hover:bg-[var(--color-primary)] group-hover:text-white -rotate-45'
                }`}>
                  <MoveRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Active Service Detailed Spotlight Showcase (Cols 7) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#161136] via-[#1f174a] to-[#120d2c] border border-white/15 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Decorative Accent Ring Light */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--color-primary)]/30 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)] text-black flex items-center justify-center font-bold shadow-lg shadow-[var(--color-accent)]/20">
                    {React.createElement(activeService.icon, { size: 30 })}
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[var(--color-accent)] backdrop-blur-md">
                    Targeted Solution #{activeService.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                  {activeService.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {activeService.fullDesc}
                </p>

                {/* Key Business Benefits */}
                <div className="mb-8 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4 flex items-center gap-2">
                    <Target size={14} />
                    What This Does For Your Business
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                        <CheckCircle2 size={18} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight */}
                {activeService.businessBenefit && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8 flex items-center gap-3 text-sm text-[var(--color-accent)] font-semibold">
                    <TrendingUp size={18} className="shrink-0" />
                    <span>Bottom Line: {activeService.businessBenefit}</span>
                  </div>
                )}
              </div>

              {/* Footer: Ideal For & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="text-xs text-gray-400">
                  <span className="block text-gray-500 uppercase font-semibold text-[10px] tracking-wider mb-1">Ideal For:</span>
                  <span className="text-gray-200 font-medium">{activeService.idealFor}</span>
                </div>

                {/* Direct Action Link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-xl shrink-0 transform hover:-translate-y-0.5"
                >
                  <span>Book a Project Call</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};

export default Services;