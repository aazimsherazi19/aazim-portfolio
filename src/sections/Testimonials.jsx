import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Quote, Award } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import TestimonialCard from '../components/ui/TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto slide every 6 seconds
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoplay]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  // Slide transition variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  // Get current active item and next item for side-by-side view on desktop
  const activeCard = testimonialsData[currentIndex];
  const nextCard = testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section className="section-space container-custom relative overflow-hidden bg-[#f9f9fc] rounded-[40px] my-12 py-20 px-6 md:px-12 border border-gray-100">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div 
        className="onMouseEnter" 
        onMouseEnter={() => setIsAutoplay(false)} 
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
              <Sparkles size={14} className="text-[var(--color-primary)]" />
              Client Endorsements
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
              Trusted by Clients, <br />
              <span className="text-[var(--color-primary)]">
                Loved for Exceptional Work.
              </span>
            </h2>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300 transform hover:-translate-x-0.5 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300 transform hover:translate-x-0.5 active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Testimonials Slider Area */}
        <div className="relative min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <TestimonialCard testimonial={activeCard} isActive={true} />
              <TestimonialCard testimonial={nextCard} isActive={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Indicators & Trust Badges */}
        <div className="mt-14 pt-8 border-t border-gray-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-10 bg-[var(--color-primary)]' 
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="flex items-center gap-8 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-[var(--color-primary)]" />
              <span><strong>100%</strong> Satisfaction Rate</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold bg-black text-xs px-2 py-0.5 rounded">5.0 ★</span>
              <span>Top Rated Designer</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;