'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const funFacts = [
    {
        src: "/images/lion-hero.jpg",
        title: "WILDLIFE FANATIC",
        fact: "I absolutely love wildlife documentaries. Ask me about the lions in the Maasai Mara, but only if you have an hour to spare."
    },
    {
        src: "/images/guitar.png",
        title: "MUSIC & RHYTHM",
        fact: "I have a deep passion for music! I apply that same creative rhythm and energy to building impactful products and leading teams."
    },
    {
        src: "/images/cricket.png",
        title: "SPORTS ENTHUSIAST",
        fact: "You'll almost always catch me passionately supporting the Indian National Cricket Team or completely mesmerized by Messi's footwork."
    }
];

export default function About() {
    const [currentFact, setCurrentFact] = useState(0);

    // Auto-advance the fun facts slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFact((prev) => (prev + 1) % funFacts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto relative mt-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-savannah-500/30 bg-savannah-500/10 text-savannah-400 font-medium tracking-wider text-sm mb-4">
                        INTRODUCTION
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        I like turning messy problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-savannah-400 to-savannah-200">clearer systems.</span>
                    </h2>

                    <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                        <div className="prose prose-invert max-w-none">
                            <p className="text-zinc-100 text-base md:text-lg leading-relaxed md:leading-loose font-normal mb-6">
                                I am a Management Information Systems graduate from the University of Arizona, now working as a Program Coordinator for COHC and IMHO at the University of Arizona Comprehensive Cancer Center. Most of my work lives in the practical middle: data systems, reporting, participant workflows, and the small process decisions that make a team easier to run.
                            </p>
                            <p className="text-zinc-100 text-base md:text-lg leading-relaxed md:leading-loose font-normal mb-6">
                                Before that, I worked across behavioral economics research, product analytics, teaching, live-client consulting, and hackathon builds. I like projects where the question is still a little fuzzy at the beginning, because that is usually where research, product judgment, and good communication matter most.
                            </p>
                            <p className="text-zinc-100 text-base md:text-lg leading-relaxed md:leading-loose font-normal">
                                When I unplug, I&apos;m usually shouting at the TV supporting the Indian Cricket Team, enthusiastically playing guitar, watching wildlife documentaries, or skating.
                            </p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
                        <div className="text-sm text-savannah-100/60 font-mono">
                            <a href="mailto:karansalot10@gmail.com" className="block hover:text-savannah-400 transition-colors">
                                karansalot10@gmail.com
                            </a>
                            <a href="mailto:karansalot10@gmail.com" className="block hover:text-savannah-400 transition-colors mt-2">
                                karan20@arizona.edu
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Slideshow Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border-2 border-white/10 hover:border-savannah-500/50 transition-colors duration-500"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentFact}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={funFacts[currentFact].src}
                                alt={funFacts[currentFact].title}
                                className="h-full w-full object-cover object-center"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

                    {/* Caption Card */}
                    <div className="absolute bottom-8 left-8 right-8 z-30">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFact}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="backdrop-blur-md bg-white/5 border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-colors cursor-default"
                            >
                                <p className="text-savannah-400 font-bold text-xs md:text-sm tracking-widest mb-2 uppercase">{funFacts[currentFact].title}</p>
                                <p className="text-white text-base md:text-lg font-light leading-relaxed">{funFacts[currentFact].fact}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute top-8 right-8 z-30 flex gap-2">
                        {funFacts.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentFact(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentFact === idx ? 'bg-savannah-400 w-8' : 'bg-white/30 hover:bg-white/60'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
