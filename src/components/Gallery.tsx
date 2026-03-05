'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const photos = [
    { src: "/images/grad_ceremony.jpg", alt: "Graduation Ceremony" },
    { src: "/images/chicago_board_of_trade.jpg", alt: "University of Arizona Campus" },
    { src: "/images/grad_fountain.jpg", alt: "Graduation Fountain" },
    { src: "/images/grad_walking.jpg", alt: "Graduation Walking" },
    { src: "/images/night_in_chicago_2.jpg", alt: "Night in Chicago during Grace Hopper Conference" },
    { src: "/images/arizona_suit.jpg", alt: "Arizona Suit" },
    { src: "/images/arizona_sweater.jpg", alt: "Arizona Sweater" },
    { src: "/images/arizona_brick.jpg", alt: "Arizona Brick" },
    { src: "/images/arizona_auditorium.jpg", alt: "Arizona Auditorium" },
    { src: "/images/night_in_chicago.jpg", alt: "A Night in Denver during ETH Denver 2025" },
    { src: "/images/grad_wide.jpg", alt: "Mount Lemmon, Tucson" },
    { src: "/images/eth_sf_memories.png", alt: "ETH SanFrancisco" },
    { src: "/images/ua_bench_2.jpg", alt: "Relaxing on UA Bench" },
    { src: "/images/grad_fountain_wide.jpg", alt: "Graduation Fountain Wide View" },
    { src: "/images/chicago_street_pose.jpg", alt: "Evening Walk in Chicago" }
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = photos.length - 1;
            if (nextIndex >= photos.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 12000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-savannah-500 mb-16 text-center"
            >
                Captured Moments
            </motion.h2>

            <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center rounded-3xl group">

                {/* Carousel Container */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-zinc-900/50">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={photos[currentIndex].src}
                                alt={photos[currentIndex].alt}
                                className="w-full h-full object-contain p-2 md:p-4 pointer-events-none"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />

                            {/* Caption Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex justify-center pointer-events-none">
                                <div className="backdrop-blur-md bg-black/40 border border-white/10 px-6 py-3 rounded-full">
                                    <p className="text-white font-medium text-sm md:text-base tracking-wide flex items-center gap-2">
                                        <span className="text-savannah-500 font-mono">{currentIndex + 1} / {photos.length}</span>
                                        <span className="text-white/30 hidden sm:inline">,</span>
                                        {photos[currentIndex].alt}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Left Control */}
                <button
                    className="absolute left-4 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/50 hover:bg-savannah-500 text-white hover:text-black border border-white/20 hover:border-savannah-500 transition-all z-10 backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 shrink-0"
                    onClick={() => paginate(-1)}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Right Control */}
                <button
                    className="absolute right-4 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/50 hover:bg-savannah-500 text-white hover:text-black border border-white/20 hover:border-savannah-500 transition-all z-10 backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 shrink-0"
                    onClick={() => paginate(1)}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>

            </div>
        </section>
    );
}
