import React from 'react';
import { CheckCircle2, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { id, icon: Icon, title, shortDesc, features, businessBenefit, tools } = service;

  return (
    <div className="group relative flex flex-col justify-between h-full p-8 md:p-9 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(88,64,186,0.14)] hover:border-[var(--color-primary)]/40 transition-all duration-500 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[var(--color-primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/15 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Bar: Service ID & Icon */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-sm">
            <Icon size={26} className="transform group-hover:scale-110 transition-transform duration-300" />
          </div>

          <span className="text-3xl font-heading font-extrabold text-gray-200 group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {id}.
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {shortDesc}
        </p>

        {/* Business Benefit Highlight */}
        {businessBenefit && (
          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-100 mb-6 flex items-center gap-2.5 text-xs text-[var(--color-primary)] font-bold">
            <TrendingUp size={16} className="shrink-0" />
            <span>{businessBenefit}</span>
          </div>
        )}

        {/* Deliverables Checklist */}
        <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            What You Receive
          </h4>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
              <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tools & Inquire Action */}
      <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200/60"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Direct Action Link */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-primary)] group/link hover:text-[var(--color-primary-dark)] transition-colors shrink-0"
        >
          <span>Get Quote</span>
          <ArrowUpRight size={16} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default ServiceCard;
