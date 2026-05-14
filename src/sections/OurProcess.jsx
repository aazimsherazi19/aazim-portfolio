import React from 'react';
import { Search, PenTool, Layout, Rocket } from 'lucide-react'; // Icons for the top circles
import { assets } from '../assets/assets';


const processes = [
  {
    id: 1,
    title: "Discovery & Planning",
    desc: "Understanding client vision, goals, and target audience.",
    icon: <Search className="w-5 h-5 text-white" />,
    image: assets.p1
  },
  {
    id: 2,
    title: "Design & Development",
    desc: "Transforming Concepts into Stunning Visual Web Designs",
    icon: <PenTool className="w-5 h-5 text-white" />,
    image: assets.p2
  },
  {
    id: 3,
    title: "Content Integration",
    desc: "Showcase Your Best Work with Detailed Descriptions",
    icon: <Layout className="w-5 h-5 text-white" />,
    image: assets.p3
  },
  {
    id: 4,
    title: "Testing & Launch",
    desc: "Conduct thorough testing across devices and browsers.",
    icon: <Rocket className="w-5 h-5 text-white" />,
    image: assets.p4
  }
];

const OurProcess = () => {
  return (
    <section className="section-space container-custom">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-h2 font-heading">Our Process</h2>
      </div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {processes.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center group">
            
            {/* Circle Image Container */}
            <div className="relative w-64 h-64 mb-8">
              {/* The Circular Image */}
              <div className="w-full h-full rounded-full overflow-hidden border border-border group-hover:border-primary transition-primary duration-500">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Floating Icon Badge */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 px-4">
              <h4 className="text-h4 font-heading font-bold text-text">
                {item.title}
              </h4>
              <p className="text-body text-text-light leading-relaxed max-w-[250px] mx-auto">
                {item.desc}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;