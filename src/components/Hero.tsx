'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Linkedin, Github, BookOpen, BarChart2, GraduationCap, Mail, Twitter } from 'lucide-react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yLion = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">

            {/* Top Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-b from-black/80 to-transparent"
            >
                <div className="text-savannah-500 font-heading font-bold text-3xl tracking-widest hidden md:block">KS.</div>

                {/* Section Links */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm md:text-base font-medium tracking-wide">
                    <a href="#about" className="text-zinc-200 hover:text-savannah-400 transition-colors uppercase tracking-wider text-xs md:text-sm">About Me</a>
                    <a href="#education" className="text-zinc-200 hover:text-savannah-400 transition-colors uppercase tracking-wider text-xs md:text-sm">Education</a>
                    <a href="#experience" className="text-zinc-200 hover:text-savannah-400 transition-colors uppercase tracking-wider text-xs md:text-sm">Experience</a>
                    <a href="#projects" className="text-zinc-200 hover:text-savannah-400 transition-colors uppercase tracking-wider text-xs md:text-sm">Projects</a>
                    <a href="#gallery" className="text-zinc-200 hover:text-savannah-400 transition-colors uppercase tracking-wider text-xs md:text-sm">Gallery</a>
                </div>
            </motion.nav>

            {/* Background Image / Interactive Layer */}
            <motion.div
                style={{ y: yLion, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/40 to-background flex z-10" />
                <Image
                    src="/images/grad_night.jpg"
                    alt="Karan Salot"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: yText, opacity }}
                className="relative z-20 text-center px-6 md:px-12 py-10 max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-24"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-savannah-500 mb-6 drop-shadow-2xl"
                >
                    Karan Salot
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-savannah-100 mb-6 drop-shadow-lg"
                >
                    Product, Data & Business Analyst
                </motion.p>

                {/* Short Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-2xl mx-auto mb-10 px-4"
                >
                    <p className="text-zinc-100 text-sm md:text-base font-light leading-relaxed drop-shadow-md">
                        I am a recent masters in management information systems graduate currently based in the United States, deeply passionate about researching and solving ambiguous problems to build impactful products. When I&apos;m not driving product strategy, you can find me playing my guitars, competing in hackathons, attending conferences, or geeking out over wildlife, sports, and geopolitics.
                    </p>
                </motion.div>

                {/* Profile Links Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-4 md:gap-8 justify-center mb-12"
                >
                    <a href="mailto:karansalot10@gmail.com" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <Mail className="w-5 h-5" /><span className="text-sm font-medium">Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/karansalot20/" target="_blank" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <Linkedin className="w-5 h-5" /><span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a href="https://github.com/karansalot" target="_blank" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <Github className="w-5 h-5" /><span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a href="https://x.com/karan_salot" target="_blank" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <Twitter className="w-5 h-5" /><span className="text-sm font-medium">Twitter</span>
                    </a>
                    <a href="https://medium.com/@salotkaran" target="_blank" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <BookOpen className="w-5 h-5" /><span className="text-sm font-medium">Medium</span>
                    </a>
                    <a href="https://public.tableau.com/app/profile/karan.salot/vizzes" target="_blank" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <BarChart2 className="w-5 h-5" /><span className="text-sm font-medium">Tableau</span>
                    </a>
                    <a href="https://scholar.google.com/citations?hl=en&user=jQ_2KoUAAAAJ" target="_blank" className="flex items-center gap-2 text-zinc-300 hover:text-savannah-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
                        <GraduationCap className="w-5 h-5" /><span className="text-sm font-medium">Scholar</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                >
                    <a href="#projects" className="px-8 py-3.5 bg-savannah-600 hover:bg-savannah-500 text-black font-bold rounded-full transition-colors shadow-lg shadow-savannah-500/20 w-full sm:w-auto text-lg">
                        View My Work
                    </a>
                    <a href="https://drive.google.com/drive/folders/17be5eLELFl9GU24Vb0O3XA-BhRSg6qa-" target="_blank" className="px-8 py-3.5 border border-savannah-500 bg-savannah-500/10 text-savannah-400 hover:bg-savannah-500 hover:text-black font-bold rounded-full transition-all w-full sm:w-auto text-lg">
                        Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
