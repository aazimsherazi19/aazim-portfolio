import React from 'react';
import { MoveUpRight, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "01.",
      title: "Web Design",
      desc: "Creating user-friendly, innovative app designs that enhance functionality and deliver exceptional user experiences.",
    },
    {
      id: "02.",
      title: "App Design",
      desc: "Creating user-friendly, innovative app designs that enhance functionality and deliver exceptional user experiences.",
    },
    {
      id: "03.",
      title: "Dashboard",
      desc: "Creating user-friendly, innovative app designs that enhance functionality and deliver exceptional user experiences.",
    },
    {
      id: "04.",
      title: "Wireframe",
      desc: "Creating user-friendly, innovative app designs that enhance functionality and deliver exceptional user experiences.",
    },
  ];

  return (
    <section className="bg-primary section-space">
      <div className="container-custom">
        {/* Header Part */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-white font-body font-medium mb-4 block">Our Services</span>
            <h2 className="text-white leading-tight">
              <span className="text-accent italic">Web design solutions</span> <br />
              to elevate your online presence.
            </h2>
          </div>
          <button className="btn-primary rounded-sm flex items-center gap-2 h-fit whitespace-nowrap">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Services List */}
        <div className="border-t border-white/20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group border-b border-white/20 py-10 md:py-14 flex flex-col md:grid md:grid-cols-12 md:items-center gap-6 transition-all duration-500 hover:bg-white/5 cursor-pointer"
            >
              {/* Number and Title */}
              <div className="md:col-span-5 flex items-center gap-6 md:gap-12">
                <span className="text-accent font-heading text-h4 font-bold">
                  {service.id}
                </span>
                <h3 className="text-white text-h3 md:text-h2 group-hover:translate-x-3 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="!text-white text-body max-w-md">
                  {service.desc}
                </p>
              </div>

              {/* Icon Link */}
              <div className="md:col-span-2 flex md:justify-end">
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <MoveUpRight className="text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;