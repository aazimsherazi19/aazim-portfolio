import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets'; 

const testimonials = [
    {
        id: 1,
        title: "Stunning Results!",
        content: "From start to finish, Rayyan exceeded our expectations. Their ability to blend functionality with stunning design is unmatched.",
        author: "James Taylor",
        role: "Owner of Taylor's Studio",
        image: assets.t1
    },
    {
        id: 2,
        title: "Outstanding & Creative Work",
        content: "Working with Rayyan has been an absolute pleasure. They brought our vision to life with innovative design and a seamless user experience.",
        author: "Sarah Johnson",
        role: "Founder of Artisan Co.",
        image: assets.t2
    },
    {
        id: 3,
        title: "Exceptional UI/UX Design",
        content: "The attention to detail and professional approach was refreshing. Highly recommended for any high-end web project looking for a modern touch.",
        author: "Michael Chen",
        role: "CEO of TechFlow",
        image: assets.t3
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Variants for Framer Motion
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500, // Slide start position
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500, // Slide end position
            opacity: 0,
        }),
    };

    const firstCard = testimonials[currentIndex];
    const secondCard = testimonials[(currentIndex + 1) % testimonials.length];

    return (
        <section className="section-space container-custom bg-bg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <div className="lg:col-span-3">
                    <span className="font-body font-semibold text-text uppercase tracking-widest text-small">
                        Testimonials
                    </span>
                </div>

                <div className="lg:col-span-9 space-y-12">
                    <h2 className="max-w-2xl leading-[1.1]">
                        <span className="text-primary italic font-normal">Trusted by Clients,</span> <br />
                        Loved for Exceptional Designs
                    </h2>

                    {/* Container for the slider */}
                    <div className="relative h-[450px] md:h-[300px] w-full overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {[firstCard, secondCard].map((item, idx) => (
                                    <div 
                                        key={`${item.id}-${idx}`}
                                        className="bg-surface p-6 flex flex-col xl:flex-row gap-6 shadow-sm border border-border h-full"
                                    >
                                        <div className="w-full xl:w-40 h-40 shrink-0 overflow-hidden bg-gray-100">
                                            <img
                                                src={item.image}
                                                alt={item.author}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-between py-1 overflow-hidden">
                                            <div className="space-y-2">
                                                <h4 className="text-h5 font-bold font-heading truncate">{item.title}</h4>
                                                <p className="text-small leading-relaxed text-text-light line-clamp-3">
                                                    "{item.content}"
                                                </p>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-border">
                                                <h5 className="font-bold text-small truncate">
                                                    {item.author}, <span className="font-normal text-text-light">{item.role}</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;