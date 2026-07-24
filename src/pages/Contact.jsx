import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  User, 
  MessageSquare, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Copy,
  Check,
  Zap,
  Globe
} from 'lucide-react';

const projectTypes = [
  "Web Design & UI/UX",
  "React / Next.js Development",
  "E-Commerce Store",
  "SaaS Dashboard",
  "Full Brand Identity",
  "Other Inquiry"
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+"
];

const faqs = [
  {
    q: "What is your typical turnaround time for a website project?",
    a: "Standard landing pages take 1-2 weeks, while full custom web applications or complex e-commerce platforms typically take 3-5 weeks depending on scope."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! I work with founders, startups, and agency teams globally across North America, Europe, Asia, and the Middle East."
  },
  {
    q: "What do you need from me to get started?",
    a: "Brief project overview, brand guidelines or inspiration sites (if any), desired launch deadline, and budget expectations."
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Design & UI/UX',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aazim.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-12 pb-24">
      
      {/* =========================================
         PAGE HERO HEADER
      ========================================= */}
      <section className="container-custom text-center max-w-3xl mx-auto mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6">
          <Sparkles size={16} />
          Let's Work Together
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
          Have a Project in Mind? <br />
          <span className="text-[var(--color-primary)]">Let's Build Something Great.</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you need a complete redesign, custom SaaS dashboard, or frontend engineering, I'm here to bring your vision to life.
        </p>
      </section>

      {/* =========================================
         MAIN CONTACT GRID
      ========================================= */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: DIRECT CONTACT INFO & FAQS (Cols 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Live Availability Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#161136] via-[#1f174a] to-[#120d2c] text-white border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Currently Available for Booking
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Ready for New Projects
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Accepting freelance design, full website builds, and contract frontend development positions for Q3/Q4.
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-400 pt-4 border-t border-white/10">
                <Zap size={14} className="text-[var(--color-accent)]" />
                <span>Typical response time: Within 12–24 hours</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Copy Trigger */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-between gap-4 group hover:border-[var(--color-primary)]/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a href="mailto:aazim.dev@gmail.com" className="text-base font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                      aazim.dev@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                    Location & Remote Scope
                  </span>
                  <p className="text-base font-bold text-gray-900">
                    Pakistan — Available Worldwide
                  </p>
                </div>
              </div>

            </div>

            {/* Quick FAQ Section */}
            <div className="pt-6 border-t border-gray-200 space-y-4">
              <h4 className="text-lg font-heading font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle size={18} className="text-[var(--color-primary)]" />
                Frequently Asked Questions
              </h4>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h5 className="text-sm font-bold text-gray-800">
                        {faq.q}
                      </h5>
                      <span className="text-gray-400 font-bold text-base">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </div>

                    {activeFaq === idx && (
                      <p className="mt-3 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM (Cols 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl relative overflow-hidden">
              
              {submitted ? (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-primary)] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={40} className="text-[var(--color-primary)]" />
                  </div>

                  <h3 className="text-3xl font-heading font-bold text-gray-900">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-gray-600 text-base max-w-md mx-auto">
                    Thank you <strong className="text-gray-900">{formData.name}</strong> for reaching out! I have received your message and will get back to you within 24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectType: 'Web Design & UI/UX', budget: '$1,000 - $3,000', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors shadow-md"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      Send Me a Message
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fill out the form below and I'll respond with initial project thoughts and timeline options.
                    </p>
                  </div>

                  {/* Project Type Selection Chips */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block">
                      1. What service do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            formData.projectType === type
                              ? 'bg-[var(--color-primary)] text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection Chips */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block">
                      2. Estimated Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            formData.budget === b
                              ? 'bg-[var(--color-accent)] text-black font-bold shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                        <User size={14} className="text-[var(--color-primary)]" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                        <Mail size={14} className="text-[var(--color-primary)]" />
                        <span>Your Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-[var(--color-primary)]" />
                      <span>Project Details & Goals *</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, target audience, key features, and timeline expectations..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-300 shadow-xl shadow-[var(--color-primary)]/20 transform hover:-translate-y-0.5"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 Your information is confidential and will never be shared.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;