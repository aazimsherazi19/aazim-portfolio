import React from 'react';
import { ArrowRight, Check } from 'lucide-react'; // Icons ke liye
import { assets } from '../assets/assets';

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "120+" },
    { label: "Satisfied Clients", value: "98%" }, // Image mein 'Projects Completed' do baar hai, maine logic ke hisaab se change kiya
    { label: "hours dedicated to solutions.", value: "10k+" },
    { label: "E-commerce store designed", value: "50+" },
  ];

  const skills = [
    "Responsive Web Design",
    "UI/UX Design",
    "E-commerce",
    "SEO Optimization",
    "WordPress",
  ];

  return (
    <section className="section-space container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Title & Image */}
        <div className="lg:col-span-4 space-y-8">
          <h4 className="font-heading font-semibold text-text uppercase tracking-wider">About Me</h4>
          
          <div className="relative group max-w-[350px]">
            <div className="overflow-hidden rounded-sm">
              <img 
                src={assets.hero} 
                alt="Web Designer" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-primary duration-500 object-cover"
              />
            </div>
            <button className="btn-primary w-full flex justify-between items-center group mt-[-2px]">
              <span className="text-body font-bold">More About Me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Content & Grid */}
        <div className="lg:col-span-8">
          <h2 className="section-title mb-12">
            Experienced Web <span className="text-primary">Designer with 2+ years,</span> based in PAK.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="border border-border p-8 flex flex-col justify-center min-h-[160px]">
                  <h3 className="text-display font-bold mb-2">{stat.value}</h3>
                  <p className="text-small leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              <p className="text-body leading-relaxed">
                <span className="text-primary font-bold">My skills</span> blend creativity and technical expertise, 
                allowing me to approach projects with a holistic perspective. My strengths include:
              </p>
              
              <ul className="space-y-4">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                    <span className="text-body font-medium text-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;