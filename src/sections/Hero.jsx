import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Phone, CheckCircle2, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustBadges = [
  { icon: CheckCircle2, text: "50+ Websites Delivered" },
  { icon: Star, text: "5.0 Client Satisfaction" },
  { icon: Shield, text: "Secure & Reliable Builds" },
  { icon: Clock, text: "On-Time Delivery" },
];

const clientTypes = [
  "Small Businesses", "Clinics & Healthcare", "Restaurants & Cafés",
  "eCommerce Brands", "Real Estate Agencies", "Marketing Agencies"
];

const Hero = () => {
  return (
    <section className="container-custom pt-10 pb-20 md:pt-16 md:pb-28 relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[var(--color-accent)]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 items-center gap-14 lg:gap-10">

        {/* =========================================
           LEFT CONTENT (Cols 7)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left z-10"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-gray-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Currently accepting new client projects
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-[1.08] tracking-tight">
            Your Business Deserves <br />
            <span className="text-[var(--color-primary)]">
              a Website That Works
            </span>{' '}
            as Hard as You Do.
          </h1>

          {/* Supporting Copy */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I help business owners get professional websites that attract the right customers, build trust, and turn visitors into paying clients — without the technical headaches.
          </p>

          {/* Client Types */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {clientTypes.map((type, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200"
              >
                {type}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/contact"
              id="hero-primary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-xl shadow-[var(--color-primary)]/25 transform hover:-translate-y-1"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              id="hero-secondary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <span>See Our Work</span>
            </Link>
          </div>

          {/* Stats Strip */}
          <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">50+</h4>
              <p className="text-xs text-gray-500 font-medium">Websites Delivered</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">2+ Yrs</h4>
              <p className="text-xs text-gray-500 font-medium">Client Experience</p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-primary)]">100%</h4>
              <p className="text-xs text-gray-500 font-medium">On-Time Delivery</p>
            </div>
          </div>

        </motion.div>

        {/* =========================================
           RIGHT — VISUAL CARD PANEL (Cols 5)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-full max-w-[440px]">

            {/* Ambient glow */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-15 blur-2xl -z-10" />

            {/* Main card */}
            <div className="rounded-[32px] bg-gray-950 border border-white/10 shadow-2xl overflow-hidden">
              
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-heading font-bold text-lg">What You Get</h3>
                    <p className="text-gray-400 text-xs mt-1">Every website I build includes:</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 flex items-center justify-center">
                    <span className="text-[var(--color-accent)] text-lg">✓</span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3">
                  {[
                    "Professional, modern design",
                    "Works perfectly on mobile & desktop",
                    "Fast loading speed",
                    "Easy for you to update yourself",
                    "Contact forms & lead capture",
                    "Google-ready from day one",
                    "Launch support & guidance",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-[var(--color-primary)]" />
                      </span>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-4 pt-2 border-t border-white/8">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[var(--color-accent)] text-black font-heading font-bold text-sm hover:bg-white transition-colors duration-300"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="text-center text-xs text-gray-500 mt-3 font-medium">Free consultation · No obligation</p>
              </div>
            </div>

            {/* Floating Badge — Response Time */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl">
              <div className="w-9 h-9 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <Clock size={16} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-900">Fast Response</h5>
                <p className="text-[10px] text-gray-500">Reply within 24 hours</p>
              </div>
            </div>

            {/* Floating Badge — Rating */}
            <div className="absolute -bottom-5 -right-4 z-20 flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl">
              <div className="w-9 h-9 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center font-bold shadow-md">
                <Star size={16} className="fill-black" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                  <span>5.0</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium">Client-Rated</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Prompt */}
      <div className="hidden md:flex justify-center mt-16">
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