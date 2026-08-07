import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Building2, Calendar, Wrench, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const { title, subtitle, category, image, liveUrl, caseStudy, metrics } = project;
  const cs = caseStudy || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto border border-gray-100"
          >
            {/* Header Sticky Bar */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
                  {category}
                </span>
                <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
                  Case Study Overview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-black bg-[var(--color-accent)] hover:bg-black hover:text-white transition-all duration-300"
                >
                  <span>Visit Website</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Close Case Study"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-10">

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight mb-2">
                  {title}
                </h2>
                <p className="text-lg text-[var(--color-primary)] font-semibold">
                  {subtitle || cs.client}
                </p>
              </div>

              {/* Browser Preview Frame */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden bg-gray-900 shadow-lg">
                {/* Browser Header Bar */}
                <div className="h-8 bg-gray-900 flex items-center justify-between px-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 truncate max-w-[200px]">
                    {new URL(liveUrl).hostname}
                  </span>
                  <div className="w-8" />
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-950">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-black font-heading font-bold text-sm hover:bg-white transition-all shadow-xl"
                    >
                      <ExternalLink size={16} />
                      <span>Launch Live Website ({new URL(liveUrl).hostname})</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Building2 size={12} /> Client
                  </span>
                  <p className="text-sm font-bold text-gray-900">{cs.client || "Client Project"}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Layers size={12} /> Industry
                  </span>
                  <p className="text-sm font-bold text-gray-900">{cs.industry || category}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Calendar size={12} /> Timeline
                  </span>
                  <p className="text-sm font-bold text-gray-900">{cs.timeline || "2-3 Weeks"}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp size={12} /> Key Outcome
                  </span>
                  <p className="text-sm font-bold text-[var(--color-primary)]">{metrics || "High Growth"}</p>
                </div>
              </div>

              {/* Impact Stats Grid */}
              {cs.impactStats && cs.impactStats.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={16} className="text-[var(--color-primary)]" />
                    Measured Business Results
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cs.impactStats.map((stat, idx) => {
                      const len = stat.value ? stat.value.length : 0;
                      const sizeClass = len > 15 
                        ? 'text-base sm:text-lg' 
                        : len > 8 
                        ? 'text-lg sm:text-xl' 
                        : 'text-xl sm:text-2xl';
                      return (
                        <div 
                          key={idx} 
                          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/5 to-purple-50/50 border border-[var(--color-primary)]/15 flex flex-col justify-between h-full min-h-[90px] overflow-hidden"
                        >
                          <span className={`${sizeClass} font-heading font-bold text-[var(--color-primary)] block leading-tight tracking-tight break-words mb-1`}>
                            {stat.value}
                          </span>
                          <span className="text-xs font-semibold text-gray-600 leading-snug block">
                            {stat.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Project Overview */}
              <div className="space-y-3">
                <h3 className="text-lg font-heading font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles size={18} className="text-[var(--color-primary)]" />
                  Project Overview
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {cs.overview || project.desc}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Challenge */}
                <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100 space-y-4">
                  <h4 className="font-heading font-bold text-red-900 text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    The Challenge
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.problem}
                  </p>
                  {cs.challengePoints && (
                    <ul className="space-y-2 pt-2">
                      {cs.challengePoints.map((point, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Solution */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-4">
                  <h4 className="font-heading font-bold text-emerald-900 text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    The Engineered Solution
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.solution}
                  </p>
                  {cs.solutionPoints && (
                    <ul className="space-y-2 pt-2">
                      {cs.solutionPoints.map((point, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>

              {/* Key Features Built */}
              {cs.keyFeatures && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-heading font-bold text-gray-900 flex items-center gap-2">
                    <Wrench size={18} className="text-[var(--color-primary)]" />
                    Key Features Built
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200/70 flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[var(--color-primary)] shrink-0" />
                        <span className="text-sm font-semibold text-gray-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Provided Badges */}
              {cs.services && (
                <div className="pt-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                    Services Delivered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((srv, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Action Footer */}
              <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all shadow-lg"
                >
                  <span>Visit Live Client Site</span>
                  <ArrowUpRight size={18} />
                </a>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-black bg-[var(--color-accent)] hover:bg-yellow-400 transition-all shadow-md"
                >
                  <span>Request Similar Project</span>
                  <Sparkles size={16} />
                </Link>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
