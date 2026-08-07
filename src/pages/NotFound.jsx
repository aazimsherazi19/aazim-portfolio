import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FolderKanban, Send, Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom max-w-3xl mx-auto text-center relative z-10">

        {/* Animated 404 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-8"
        >
          <Compass size={16} />
          <span>Error 404 — Page Not Found</span>
        </motion.div>

        {/* Big 404 Display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl sm:text-9xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-purple-700 to-indigo-900 tracking-tighter mb-4"
        >
          404
        </motion.h1>

        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-10"
        >
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900">
            Lost in Cyberspace?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            The page you are looking for doesn't exist, was removed, or had its name changed. Let's get you back on track!
          </p>
        </motion.div>

        {/* Primary Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-xl shadow-[var(--color-primary)]/20 transform hover:-translate-y-0.5"
          >
            <Home size={18} />
            <span>Back to Homepage</span>
          </Link>

          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-200/80 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FolderKanban size={18} />
            <span>Explore Portfolio</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
          >
            <Send size={18} />
            <span>Get in Touch</span>
          </Link>
        </motion.div>

        {/* Quick Route Links Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 max-w-xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-4">
            Quick Navigation Links
          </span>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            <Link to="/" className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:text-[var(--color-primary)] border border-gray-200/60 shadow-sm transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:text-[var(--color-primary)] border border-gray-200/60 shadow-sm transition-colors">
              About Me
            </Link>
            <Link to="/services" className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:text-[var(--color-primary)] border border-gray-200/60 shadow-sm transition-colors">
              Services
            </Link>
            <Link to="/projects" className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:text-[var(--color-primary)] border border-gray-200/60 shadow-sm transition-colors">
              Featured Projects
            </Link>
            <Link to="/contact" className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:text-[var(--color-primary)] border border-gray-200/60 shadow-sm transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;