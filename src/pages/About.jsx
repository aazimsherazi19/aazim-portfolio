import React from 'react';
import AboutSection from '../sections/About';
import { 
  User, 
  Sparkles, 
  Target, 
  Lightbulb, 
  Cpu, 
  TrendingUp, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: "User-First Thinking",
    desc: "Every layout, animation, and CTA is designed around real human behavior and friction-free user journeys.",
    icon: Target
  },
  {
    title: "Precision Code Craftsmanship",
    desc: "Writing modular, scalable React & Tailwind CSS code optimized for fast load times and clean maintainability.",
    icon: Cpu
  },
  {
    title: "Continuous Innovation",
    desc: "Leveraging modern tools like Framer Motion, Lenis scroll, and Next.js to deliver forward-thinking digital products.",
    icon: Lightbulb
  },
  {
    title: "Measurable Impact",
    desc: "Focusing on metrics that matter — user retention, conversion rates, and SEO performance.",
    icon: TrendingUp
  }
];

const timeline = [
  {
    year: "2024 — Present",
    role: "Lead Frontend Engineer & Web Designer",
    company: "Freelance / Global Clients",
    desc: "Engineering high-conversion e-commerce stores, SaaS dashboards, and agency portfolios for clients worldwide."
  },
  {
    year: "2023 — 2024",
    role: "UI/UX & Web Developer",
    company: "Digital Product Studio",
    desc: "Designed design systems, responsive web apps, and custom interactive web experiences."
  },
  {
    year: "2022 — 2023",
    role: "Frontend Developer",
    company: "Tech Projects",
    desc: "Built custom client websites focusing on responsive HTML/CSS, JavaScript, and React integrations."
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
          Biography & Background
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
          Crafting Meaningful <br />
          <span className="text-[var(--color-primary)]">Digital Products</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          I am Aazim — a Web Designer and Frontend Engineer dedicated to turning complex client visions into sleek, high-performing websites.
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
            The Philosophy Behind My Work
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
            Milestones
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
              Ready to start your next web project?
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Send me a message with your project idea, and let's craft an exceptional digital experience together.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;