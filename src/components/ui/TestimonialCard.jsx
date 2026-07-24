import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TestimonialCard = ({ testimonial, isActive = false }) => {
  const { title, content, author, role, company, rating = 5, image, projectType } = testimonial;

  return (
    <div className={`relative h-full flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(88,64,186,0.12)] hover:-translate-y-1 group overflow-hidden ${
      isActive ? 'border-[var(--color-primary)]/30 ring-1 ring-[var(--color-primary)]/20' : ''
    }`}>
      
      {/* Subtle Background Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/15 transition-all duration-500 pointer-events-none" />

      {/* Decorative Large Quote Icon Watermark */}
      <Quote 
        size={80} 
        className="absolute -bottom-4 -right-4 text-gray-100 group-hover:text-[var(--color-primary)]/10 transition-colors duration-500 pointer-events-none stroke-[1]" 
      />

      <div>
        {/* Top Header: Star Rating & Project Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          {/* Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                className="fill-[var(--color-accent)] text-[var(--color-accent)] drop-shadow-[0_2px_4px_rgba(198,255,0,0.4)]" 
              />
            ))}
          </div>

          {/* Project Type Badge */}
          {projectType && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-bg)] text-[var(--color-primary)] border border-gray-200/80">
              {projectType}
            </span>
          )}
        </div>

        {/* Testimonial Title */}
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          "{title}"
        </h3>

        {/* Testimonial Content Quote */}
        <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10 font-normal">
          {content}
        </p>
      </div>

      {/* Footer: Client Info with Fixed-Aspect Ratio Avatar */}
      <div className="pt-6 border-t border-gray-100 flex items-center gap-4 relative z-10">
        
        {/* Avatar Image Container - Fixed 56x56 px with aspect ratio preserve & crisp cover */}
        <div className="relative shrink-0 w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] shadow-md">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Verified Badge Dot */}
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center border-2 border-white shadow-sm">
            <CheckCircle2 size={12} className="text-white" />
          </div>
        </div>

        {/* Author Details */}
        <div className="overflow-hidden">
          <h4 className="font-heading font-bold text-gray-900 text-base leading-tight truncate">
            {author}
          </h4>
          <p className="text-xs text-gray-500 font-medium truncate mt-0.5">
            {role} <span className="text-[var(--color-primary)] font-semibold">• {company}</span>
          </p>
        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;
