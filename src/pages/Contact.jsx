import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  User, 
  MessageSquare, 
  Sparkles, 
  HelpCircle, 
  Copy,
  Check,
  Zap,
  PhoneCall,
  Clock,
  ShieldCheck,
  Loader2,
  AlertCircle
} from 'lucide-react';

const projectTypes = [
  "Business Website",
  "eCommerce Store",
  "Booking / Appointment Site",
  "Website Redesign",
  "Healthcare / Clinic Site",
  "Landing Page",
  "Maintenance & Speed Fix",
  "Custom Web Application"
];

const budgetRanges = [
  "Starting from $500",
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000+"
];

const faqs = [
  {
    q: "How long does a typical website project take?",
    a: "Standard business websites and landing pages take 1 to 2 weeks. Full eCommerce stores, booking portals, or complex custom applications typically take 2 to 4 weeks depending on requirements and content availability."
  },
  {
    q: "What do you need from me to get started?",
    a: "A brief overview of your business, your target customers, logo/branding assets (if you have them), and examples of websites you like. If you don't have text or photos ready, I can help guide you."
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes! If your current website is outdated, slow, or not bringing in leads, I can rebuild it with a modern design, faster loading speeds, and better mobile optimization while preserving your existing domain and Google rankings."
  },
  {
    q: "Can I easily update text and photos myself after launch?",
    a: "Absolutely. I set up user-friendly dashboards (such as WordPress) and provide short video walkthroughs showing you exactly how to edit text, upload photos, add blog posts, or update products without needing technical skills."
  },
  {
    q: "Do you offer ongoing website maintenance and security?",
    a: "Yes. I offer monthly care packages that cover security updates, plugin maintenance, regular backups, and content updates so you never have to worry about your site breaking or going offline."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! I am based in Pakistan and work with business owners, clinics, local services, and founders globally across North America, Europe, the Middle East, and Asia via email, Zoom, or WhatsApp."
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    budget: '$500 - $1,500',
    message: ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [renderTime] = useState(() => Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aazimsherazi@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please enter your full name or company name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setErrorMsg('Please provide at least 10 characters describing your project or goals.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          projectType: formData.projectType,
          budget: formData.budget,
          message: trimmedMessage,
          company_url: honeypot,
          renderTime
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Unable to deliver message. Please contact directly via email below.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMsg('A network error occurred while submitting. Please click "Open Email App" or use direct email.');
    } finally {
      setSubmitting(false);
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
          Let's Talk About Your <br />
          <span className="text-[var(--color-primary)]">Website Project</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Tell me about your business goals and what you need. I'll get back to you with initial thoughts, project recommendations, and a clear price estimate.
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
                  Currently Booking New Projects
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Ready for Business Client Projects
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Accepting new website builds, eCommerce store setups, and redesign projects. Projects starting from $500.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[var(--color-accent)]" />
                  <span>Response time: Within 12–24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[var(--color-accent)]" />
                  <span>Fixed scope & transparent pricing</span>
                </div>
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
                    <a href="mailto:aazimsherazi@gmail.com" className="text-base font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                      aazimsherazi@gmail.com
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
                    Location & Scope
                  </span>
                  <p className="text-base font-bold text-gray-900">
                    Pakistan — Serving Clients Worldwide
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
                    Project Inquiry Sent!
                  </h3>

                  <p className="text-gray-600 text-base max-w-md mx-auto">
                    Thank you <strong className="text-gray-900">{formData.name}</strong> for reaching out! Your inquiry for <strong className="text-gray-900">{formData.projectType}</strong> has been delivered directly to my inbox. I will review your details and reply to <strong className="text-gray-900">{formData.email}</strong> within 12–24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMsg('');
                      setFormData({ name: '', email: '', projectType: 'Business Website', budget: '$500 - $1,500', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors shadow-md"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Invisible Anti-Spam Honeypot Field */}
                  <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <label htmlFor="company_url">Do not fill this field</label>
                    <input
                      id="company_url"
                      type="text"
                      name="company_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      Send a Project Inquiry
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fill out the details below and I'll respond with initial recommendations, timeline options, and a quote.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={18} className="shrink-0 text-red-500" />
                        <span>{errorMsg}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <a
                          href={`mailto:aazimsherazi@gmail.com?subject=${encodeURIComponent(`Website Inquiry: ${formData.name || 'Client'}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`)}`}
                          className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                        >
                          <Mail size={14} />
                          <span>Open Email App</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="px-4 py-2 rounded-xl bg-white border border-red-200 text-red-700 hover:bg-red-100 transition-colors"
                        >
                          {copied ? 'Copied Email!' : 'Copy Direct Email'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Project Type Selection Chips */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block">
                      1. What service does your business need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          disabled={submitting}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
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
                      2. Estimated Budget Expectation
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          disabled={submitting}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
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
                        <span>Your Full Name / Company Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={submitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe / Acme Co."
                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
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
                        disabled={submitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-[var(--color-primary)]" />
                      <span>Tell Me About Your Business & Goals *</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      disabled={submitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your business, target audience, key features you need, current website URL (if any), and desired timeframe..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] disabled:opacity-60 disabled:cursor-not-allowed transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-[var(--color-primary)]/20 transform hover:-translate-y-0.5"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 Confidential submission. No sales calls, spam, or shared details.
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