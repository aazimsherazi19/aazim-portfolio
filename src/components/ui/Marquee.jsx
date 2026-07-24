import React from "react";
import { Sparkles, Code2, Zap, Layers, Cpu, ShieldCheck, Flame, Star } from "lucide-react";

const mainSkills = [
  { text: "UI/UX DESIGN", icon: Sparkles },
  { text: "REACT DEVELOPMENT", icon: Code2 },
  { text: "SAAS DASHBOARDS", icon: Layers },
  { text: "E-COMMERCE STORES", icon: Zap },
  { text: "MOBILE APP DESIGN", icon: Cpu },
  { text: "DESIGN SYSTEMS", icon: ShieldCheck },
  { text: "MOTION & ANIMATIONS", icon: Flame },
  { text: "CONVERSION UX", icon: Star },
];

const techTools = [
  "React.js", "Next.js 14", "Tailwind CSS v4", "TypeScript", 
  "Figma", "Framer Motion", "Lenis Scroll", "Node.js", "Vercel", "Redux"
];

const Marquee = () => {
  return (
    <section className="relative my-8 overflow-hidden py-4 select-none">
      
      {/* Edge Gradient Mask for Smooth Fade In/Out */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />

      {/* =========================================
         ROW 1: PRIMARY ACCENT HIGH-IMPACT TICKER
      ========================================= */}
      <div className="bg-gradient-to-r from-[#181335] via-[#241a4f] to-[#181335] border-y border-white/10 py-5 overflow-hidden shadow-xl transform -rotate-1 relative">
        
        {/* Glow Light */}
        <div className="absolute top-0 right-1/3 w-96 h-full bg-[var(--color-accent)]/10 blur-xl pointer-events-none" />

        <div className="marquee hover:[animation-play-state:paused] cursor-pointer">
          {/* First set */}
          {mainSkills.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 whitespace-nowrap text-white font-heading font-extrabold text-xl md:text-2xl tracking-wider">
                <span className="text-[var(--color-accent)] bg-white/10 p-2 rounded-xl backdrop-blur-md">
                  <Icon size={20} />
                </span>
                <span className="hover:text-[var(--color-accent)] transition-colors duration-300">
                  {item.text}
                </span>
                <span className="text-white/30 text-sm ml-4">✦</span>
              </div>
            );
          })}

          {/* Duplicate set for seamless infinite loop */}
          {mainSkills.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className="flex items-center gap-4 whitespace-nowrap text-white font-heading font-extrabold text-xl md:text-2xl tracking-wider">
                <span className="text-[var(--color-accent)] bg-white/10 p-2 rounded-xl backdrop-blur-md">
                  <Icon size={20} />
                </span>
                <span className="hover:text-[var(--color-accent)] transition-colors duration-300">
                  {item.text}
                </span>
                <span className="text-white/30 text-sm ml-4">✦</span>
              </div>
            );
          })}
        </div>

      </div>

      {/* =========================================
         ROW 2: TECH STACK & TOOLS REVERSE TICKER
      ========================================= */}
      <div className="bg-[var(--color-accent)] py-3 overflow-hidden transform rotate-1 border-b border-black/10 shadow-md">
        
        <div className="marquee marquee-reverse hover:[animation-play-state:paused] cursor-pointer">
          {techTools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-4 whitespace-nowrap text-black font-heading font-bold text-sm md:text-base tracking-wide">
              <span>{tool}</span>
              <span className="text-black/40 text-xs">●</span>
            </div>
          ))}

          {/* Duplicate set for seamless infinite loop */}
          {techTools.map((tool, idx) => (
            <div key={`dup2-${idx}`} className="flex items-center gap-4 whitespace-nowrap text-black font-heading font-bold text-sm md:text-base tracking-wide">
              <span>{tool}</span>
              <span className="text-black/40 text-xs">●</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Marquee;