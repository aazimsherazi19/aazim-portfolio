import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowUpRight, 
  ArrowUp, 
  Mail, 
  MapPin, 
  Send, 
  Sparkles,
  CheckCircle2
} from 'lucide-react'

// Custom Clean Social Brand Icons
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const DribbbleIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ]

  const servicesLinks = [
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'Branding & Identity', path: '/services' },
    { name: 'Motion & Animation', path: '/services' },
    { name: 'Frontend Architecture', path: '/services' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
    { name: 'Dribbble', icon: DribbbleIcon, url: 'https://dribbble.com' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
  ]

  return (
    <footer className="relative bg-[#0d0a1a] text-white pt-20 pb-8 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Overlay Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="container-custom relative z-10">
        
        {/* =========================================
           CALL TO ACTION CARD
        ========================================= */}
        <div className="relative mb-20 p-8 md:p-14 rounded-[32px] bg-gradient-to-r from-[#181335] via-[#221a47] to-[#181335] border border-white/10 shadow-2xl overflow-hidden group">
          {/* Animated Ambient Light */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[var(--color-accent)]/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[var(--color-primary)]/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-[var(--color-accent)] mb-6 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
                </span>
                Available for Freelance & Full-time Roles
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-4">
                Have a vision in mind? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[var(--color-accent)]">
                  Let's build something extraordinary.
                </span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg max-w-xl">
                Ready to elevate your digital presence? Reach out today and let's craft a captivating experience for your brand.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white hover:shadow-[0_0_25px_rgba(198,255,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={20} />
              </Link>
              
              <a 
                href="mailto:aazim.dev@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail size={18} className="text-[var(--color-accent)]" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
           MAIN FOOTER CONTENT GRID
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info (Cols 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link 
              to="/" 
              onClick={scrollToTop} 
              className="inline-block text-4xl font-heading font-bold text-white hover:opacity-90 transition-opacity"
            >
              Aa<span className="text-[var(--color-accent)]">zim</span>
            </Link>

            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Passionate Web Designer & Frontend Developer dedicated to creating visually stunning, user-centered digital solutions that drive results.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Connect With Me
              </h4>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:scale-110 transition-all duration-300 group shadow-md"
                    >
                      <Icon size={18} className="transition-transform group-hover:rotate-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-lg font-heading font-semibold text-white tracking-wide flex items-center gap-2">
              <Sparkles size={16} className="text-[var(--color-accent)]" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-[var(--color-accent)] text-base font-medium transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered (Cols 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-lg font-heading font-semibold text-white tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-[var(--color-accent)] text-base font-medium transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Quick Info (Cols 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-heading font-semibold text-white tracking-wide">
              Stay Connected
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get notified about new projects, insights, and web design updates.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 pr-12 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300 text-sm"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={16} />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-medium pt-1 animate-fade-in">
                  <CheckCircle2 size={14} />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
            </form>

            {/* Direct Contact details */}
            <div className="pt-2 space-y-2.5 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[var(--color-accent)] shrink-0" />
                <span>Pakistan — Available Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--color-accent)] shrink-0" />
                <a href="mailto:aazim.dev@gmail.com" className="hover:text-white transition-colors">
                  aazim.dev@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
           FOOTER BOTTOM BAR
        ========================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-medium">Aazim</span>. All rights reserved. Built with passion & precision.
          </p>

          <div className="flex items-center gap-6">
            <Link 
              to="/privacy" 
              onClick={scrollToTop}
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              onClick={scrollToTop}
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Terms of Service
            </Link>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 ml-2 group shadow-md"
            >
              <ArrowUp size={16} className="transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer