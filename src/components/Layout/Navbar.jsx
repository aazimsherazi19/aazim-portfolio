import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll effect for glass header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    // { name: "Testimonials", path: "/testimonials" }, // HIDE FOR NOW - Re-enable later
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* =========================================
         MAIN HEADER NAVBAR
      ========================================= */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/85 backdrop-blur-md border-b border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3" 
            : "bg-white/50 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo Area */}
          <Link 
            to="/" 
            className="text-3xl font-heading font-extrabold text-gray-900 tracking-tight flex items-center gap-1 group"
          >
            <span>Aa</span>
            <span className="text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              zim
            </span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] inline-block ml-0.5 animate-pulse" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-100/70 p-1.5 rounded-full border border-gray-200/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-white bg-[var(--color-primary)] font-semibold shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white/80"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-md shadow-[var(--color-primary)]/15 transform hover:-translate-y-0.5 text-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
              className="p-3 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors shadow-md flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </header>

      {/* =========================================
         MOBILE SIDEBAR & OVERLAY
      ========================================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Slide-over Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0d0a1a] text-white z-50 shadow-2xl flex flex-col justify-between p-8 overflow-y-auto border-l border-white/10"
            >
              {/* Top Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="text-2xl font-heading font-bold">
                    Aa<span className="text-[var(--color-accent)]">zim</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close Menu"
                    className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2 pt-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                          isActive
                            ? "bg-[var(--color-primary)] text-white shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={16} className="opacity-60" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Info & CTA */}
              <div className="pt-8 border-t border-white/10 space-y-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all shadow-lg"
                >
                  <span>Get a Free Quote</span>
                  <Sparkles size={18} />
                </Link>

                {/* Contact Quick Details */}
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[var(--color-accent)]" />
                    <span>aazimsherazi@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[var(--color-accent)]" />
                    <span>Available Worldwide</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;