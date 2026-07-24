import React from 'react';
import TestimonialsSection from '../sections/Testimonials';
import { testimonialsData } from '../data/testimonials';
import TestimonialCard from '../components/ui/TestimonialCard';
import { MessageSquareQuote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  return (
    <div className="pt-12 pb-20">
      {/* Hero Header */}
      <section className="container-custom text-center max-w-3xl mx-auto mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/15 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6">
          <MessageSquareQuote size={16} />
          Client Reviews
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
          Client Feedback & <br />
          <span className="text-[var(--color-primary)]">Success Stories</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Discover how I help founders, startups, and creative teams elevate their digital presence through compelling UI/UX design and modern web development.
        </p>
      </section>

      {/* Featured Testimonials Carousel Section */}
      <TestimonialsSection />

      {/* Grid of All Client Reviews */}
      <section className="container-custom mt-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-3">
            All Recommendations
          </h2>
          <p className="text-gray-600">
            Real feedback from collaborators and clients across recent web projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} isActive={false} />
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="container-custom mt-24">
        <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Ready to create your success story?
            </h2>
            <p className="text-purple-100 text-base mb-8">
              Let's collaborate to build a modern, high-converting web experience tailored specifically to your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-black bg-[var(--color-accent)] hover:bg-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <span>Get in Touch</span>
              <Sparkles size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;