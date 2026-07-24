import React from 'react';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { 
  Sparkles, 
  Layers, 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze target audience needs, business objectives, competitors, and functional requirements to build a clear roadmap.",
    icon: Search
  },
  {
    step: "02",
    title: "UI/UX & Wireframing",
    desc: "Transforming ideas into wireframes, interactive Figma prototypes, and cohesive design systems tailored to your brand identity.",
    icon: PenTool
  },
  {
    step: "03",
    title: "Frontend Engineering",
    desc: "Building clean, accessible, ultra-fast web interfaces using React, Next.js, Tailwind CSS, and fluid motion animations.",
    icon: Code2
  },
  {
    step: "04",
    title: "QA & Launch",
    desc: "Thorough cross-device testing, SEO optimization, performance auditing, and seamless deployment to your production environment.",
    icon: Rocket
  }
];

const techStack = [
  "React.js", "Next.js", "Tailwind CSS", "TypeScript", "Figma", 
  "Framer Motion", "Node.js", "Git / GitHub", "Vercel", "Redux Toolkit"
];

const ServicesPage = () => {
  return (
    <div className="pt-12 pb-20">
      
      {/* =========================================
         PAGE HERO HEADER
      ========================================= */}
      <section className="container-custom text-center max-w-3xl mx-auto mb-20 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6">
          <Layers size={16} />
          Services & Capabilities
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
          Specialized Services to <br />
          <span className="text-[var(--color-primary)]">Elevate Your Brand</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          From intuitive UI/UX design to production-ready frontend engineering, I build scalable digital solutions focused on usability, performance, and conversion.
        </p>
      </section>

      {/* =========================================
         ALL SERVICES CARDS GRID
      ========================================= */}
      <section className="container-custom mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* =========================================
         OUR DESIGN & DEVELOPMENT PROCESS
      ========================================= */}
      <section className="section-space container-custom bg-[#f9f9fc] rounded-[40px] py-20 px-6 md:px-14 my-16 border border-gray-100 relative overflow-hidden">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            My Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            How I Bring Your Ideas to Life
          </h2>
          <p className="text-gray-600 text-base mt-3">
            A structured, collaborative approach ensuring transparent progress and exceptional results.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((stepItem) => {
            const Icon = stepItem.icon;
            return (
              <div 
                key={stepItem.step}
                className="relative bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <span className="text-2xl font-heading font-bold text-gray-300 group-hover:text-[var(--color-accent)] transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* =========================================
         TECH STACK & TOOLING SHOWCASE
      ========================================= */}
      <section className="container-custom my-20 text-center">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Technologies & Tools I Use
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {techStack.map((tech, idx) => (
            <div 
              key={idx}
              className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-semibold shadow-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200 flex items-center gap-2"
            >
              <CheckCircle2 size={14} className="text-[var(--color-primary)]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
         PROJECT INQUIRY CTA BANNER
      ========================================= */}
      <section className="container-custom mt-20">
        <div className="p-10 md:p-16 rounded-[36px] bg-gradient-to-r from-[#181335] via-[#221a47] to-[#181335] text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-white/10">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-primary)]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[var(--color-accent)] mb-6 backdrop-blur-md">
              <Sparkles size={14} />
              Start Your Project
            </span>

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              Ready to elevate your digital presence?
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your project scope and craft a tailored solution designed for maximum impact.
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

export default ServicesPage;