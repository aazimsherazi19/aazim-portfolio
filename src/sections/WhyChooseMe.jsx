import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  Search, 
  Smartphone, 
  ShieldCheck, 
  Sliders, 
  TrendingUp,
  Headphones,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: TrendingUp,
    title: "Business-First Mindset",
    desc: "I don't just build pretty pages. I design websites structured to bring in inquiries, sales, and real business results."
  },
  {
    icon: MessageSquare,
    title: "Direct 1-on-1 Communication",
    desc: "No middlemen or junior account managers. You work directly with me from initial consultation to final launch."
  },
  {
    icon: Zap,
    title: "Fast Loading & Optimized",
    desc: "Slow websites lose customers. Every site I build is performance-tuned so your pages load in under two seconds."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Over 70% of your visitors are on smartphones. Your website will look and function flawlessly on every screen size."
  },
  {
    icon: Search,
    title: "Google & SEO Ready",
    desc: "Built with clean semantic code, fast speeds, and proper metadata so search engines can easily index your business."
  },
  {
    icon: Sliders,
    title: "Easy to Manage Yourself",
    desc: "I set up simple, intuitive admin dashboards so you can easily update text, photos, products, or blog posts anytime."
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Fair Pricing",
    desc: "Clear project scope, transparent quotes, and zero hidden costs. You know exactly what you get before we start."
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Peace of Mind",
    desc: "I don't disappear after launch. I provide training, backups, security, and monthly maintenance to keep you protected."
  }
];

const WhyChooseMe = () => {
  return (
    <section className="section-space container-custom relative py-24 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[var(--color-primary)]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          <Sparkles size={14} />
          Why Work With Me
        </div>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
          A Reliable Partner for Your <br />
          <span className="text-[var(--color-primary)]">Company's Digital Presence</span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Here is why business owners choose to work with me over bloated agencies or unreliable freelancers.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 md:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Callout Banner */}
      <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#181335] via-[#221a47] to-[#181335] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
        <div>
          <h3 className="text-2xl font-heading font-bold text-white mb-2">
            Ready to discuss your website goals?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl">
            Book a free 15-minute discovery call or send me a message with your project details. No sales pressure.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-md shrink-0"
        >
          <span>Book a Free Call</span>
          <ArrowRight size={18} />
        </Link>
      </div>

    </section>
  );
};

export default WhyChooseMe;
