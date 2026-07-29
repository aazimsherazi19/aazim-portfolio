import React from 'react';
import AboutSection from '../sections/About';
import { 
  User, 
  Sparkles, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: "Business-First Approach",
    desc: "Every design choice, menu item, and button is planned around real customer behavior and friction-free conversion.",
    icon: Target
  },
  {
    title: "Clean, Reliable Code",
    desc: "Writing clean, maintainable code using WordPress, WooCommerce, and modern frameworks for fast load times.",
    icon: ShieldCheck
  },
  {
    title: "Clear 1-on-1 Communication",
    desc: "No jargon or confusing speak. I communicate directly, set clear expectations, and keep you updated at every stage.",
    icon: Lightbulb
  },
  {
    title: "Measurable Impact",
    desc: "Focusing on metrics that matter to a business owner — customer inquiries, booking conversions, and sales.",
    icon: TrendingUp
  }
];

const timeline = [
  {
    year: "Present",
    role: "Professional Web Developer & CMS Specialist",
    company: "Freelance / Global Clients",
    desc: "Building business websites, eCommerce stores, booking systems, and custom web applications for clients worldwide."
  },
  {
    year: "Education",
    role: "BS in Computer Science",
    company: "University Studies",
    desc: "Deepening theoretical knowledge in software engineering, database management, computer networks, and system architecture."
  },
  {
    year: "Specialization",
    role: "WordPress, WooCommerce & MERN Development",
    company: "Client Projects",
    desc: "Developing custom themes, online stores, dynamic lead generation sites, and full-stack web applications."
  }
];

const AboutPage = () => {
  return (
    <div className="pt-12 pb-20">
      
      {/* =========================================
         PAGE HERO HEADER
      ========================================= */}
      <section className="container-custom text-center max-w-3xl mx-auto mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6">
          <User size={16} />
          About Aazim Sherazi
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
          Building Digital Solutions for <br />
          <span className="text-[var(--color-primary)]">Growing Businesses</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          I am Aazim — a web developer dedicated to building reliable, high-converting websites that help small businesses, clinics, restaurants, and eCommerce brands succeed online.
        </p>
      </section>

      {/* =========================================
         MAIN FEATURED ABOUT SECTION
      ========================================= */}
      <AboutSection />

      {/* =========================================
         MY CORE VALUES & PHILOSOPHY
      ========================================= */}
      <section className="container-custom my-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] block mb-3">
            Guiding Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            How I Approach Every Client Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
         CAREER TIMELINE & MILESTONES
      ========================================= */}
      <section className="section-space container-custom bg-[#f9f9fc] rounded-[40px] py-20 px-6 md:px-14 my-20 border border-gray-100">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] block mb-3">
            Background & Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Experience & Journey
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl">
          {timeline.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[var(--color-primary)]/40 transition-colors"
            >
              <div className="md:w-1/3">
                <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-black font-bold text-xs">
                  {item.year}
                </span>
                <h3 className="text-lg font-heading font-bold text-gray-900 mt-3">
                  {item.role}
                </h3>
                <p className="text-xs font-medium text-[var(--color-primary)]">
                  {item.company}
                </p>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
         CALL TO ACTION BANNER
      ========================================= */}
      <section className="container-custom mt-20">
        <div className="p-10 md:p-16 rounded-[36px] bg-gradient-to-r from-[#181335] via-[#221a47] to-[#181335] text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-white/10">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-primary)]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[var(--color-accent)] mb-6 backdrop-blur-md">
              <Sparkles size={14} />
              Let's Connect
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              Ready to start your next business website project?
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Send me a message with your project goals, and let's craft a website built for growth.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              <span>Get a Free Quote & Consultation</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;