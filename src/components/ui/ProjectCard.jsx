import React from 'react';
import { ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';

const ProjectCard = ({ project, priority = false }) => {
  const { title, category, image, desc, tags, metrics, liveUrl } = project;

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-3xl border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(88,64,186,0.15)] hover:border-[var(--color-primary)]/40 transition-all duration-500 overflow-hidden">
      
      {/* =========================================
         BROWSER MOCKUP HEADER & IMAGE CONTAINER
      ========================================= */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
        
        {/* MacOS Style Browser Header */}
        <div className="absolute top-0 inset-x-0 h-8 bg-gray-900/80 backdrop-blur-md z-20 flex items-center justify-between px-4 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-gray-400 truncate max-w-[140px]">
            {title.toLowerCase().replace(/[^a-z0-9]/g, '')}.dev
          </span>
          <div className="w-8" />
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-11 left-4 z-20">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-semibold uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Floating Metric Badge */}
        {metrics && (
          <div className="absolute top-11 right-4 z-20">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent)] text-black text-xs font-bold shadow-lg">
              <TrendingUp size={12} />
              {metrics}
            </span>
          </div>
        )}

        {/* Project Image with Smooth Hover Effect */}
        <div className="w-full h-full pt-8 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Hover Dark Overlay with Live Preview Button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-10">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-black font-heading font-semibold text-sm hover:bg-white transition-all duration-300 shadow-xl transform translate-y-4 group-hover:translate-y-0"
            >
              <span>View Live Demo</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
         CARD DETAILS CONTENT
      ========================================= */}
      <div className="p-7 flex flex-col justify-between flex-grow space-y-5">
        <div>
          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-1 mb-2.5">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Card Footer Action Link */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] group/link transition-colors"
            >
              <span>Explore Project</span>
              <ExternalLink size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>

            <span className="text-xs text-gray-400 font-medium">
              Case Study & Demo
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
