'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Github, ArrowRight, Award, Users, Lightbulb, SlidersHorizontal } from 'lucide-react';
import FeaturedArticle from './FeaturedArticle';

const projects = [
    {
        title: "spruce.fun",
        category: "Web3",
        tagline: "Solana Prediction Market Infrastructure",
        tech: ["Solana", "Anchor", "Rust", "Next.js"],
        description: "Built a Solana-based derivatives platform for trading real-world outcomes with leveraged long and short positions. The project combines an on-chain central limit order book, SPL position tokens, USDC collateral, a Rust risk engine, and live market data streams for a more transparent prediction-market trading experience.",
        links: { demo: "#", code: "https://github.com/karansalot/spruce.fun" },
        images: ["/images/regen_art_canvas_2.png", "/images/eth_denver_inflatable_2.jpg"]
    },
    {
        title: "VetoClub.AI",
        category: "AI",
        tagline: "AI Group-Chat Planning Agent",
        tech: ["FastAPI", "LLMs", "Yelp API", "Google Maps"],
        description: "Designed an AI concierge for group chats that quietly tracks preferences like cuisine, timing, budget, dietary needs, and travel constraints, then responds when tagged with ranked dinner options. The agent uses a silent extraction loop, an active planning loop, Yelp search, Maps validation, and confirmation tracking before moving a group toward a booking.",
        links: { demo: "#", code: "https://github.com/JyotBuch/VetoClub.AI" },
        images: ["/images/chicago_street_pose.jpg", "/images/night_in_chicago_2.jpg"]
    },
    {
        title: "Interview.AI",
        category: "AI",
        tagline: "Adaptive Mock Interview Platform",
        tech: ["Flask", "React", "LLMs", "Voice AI"],
        description: "Built an interview-practice platform with technical, behavioral, and coding modes. It parses a candidate's resume, generates tailored questions, supports voice input and feedback, grades responses with a rubric, runs coding questions in a sandbox, and produces a post-session report with concrete improvement signals.",
        links: { demo: "#", code: "https://github.com/JyotBuch/Interview.AI" },
        images: ["/images/personal.jpeg", "/images/keyless_ai_demo.png"]
    },
    {
        title: "NeuroNexus AI Campus Assistant",
        category: "Hackathons",
        tagline: "Hack Arizona 2025",
        tech: ["GPT-4", "Next.js", "Python", "AWS"],
        description: "Built an AI campus assistant at Hack Arizona to help students find university resources faster. I focused on product direction, user research, and turning a broad student support problem into a working full-stack demo with practical NLP flows.",
        links: { demo: "https://devpost.com/software/neuronexus", code: "#" },
        images: ["/images/neuronexus_1.jpg", "/images/neuronexus_2.jpg"]
    },
    {
        title: "Regen Art DAO",
        category: "Hackathons",
        tagline: "ETH Denver 2025",
        tech: ["Web3", "Smart Contracts", "React", "Ethereum"],
        description: "Built a DAO concept for regenerative artists at ETH Denver, with smart contracts for community governance and a front-end experience that made collaboration, ownership, and collective art easier to understand.",
        links: { demo: "https://devfolio.co/projects/regen-art-dao-1a93", code: "#" },
        images: ["/images/eth_denver_inflatable_2.jpg", "/images/regen_art_canvas_2.png"]
    },
    {
        title: "Keyless AI",
        category: "Hackathons",
        tagline: "ETH SanFrancisco 2024",
        tech: ["Machine Learning", "Cryptography", "Python", "Node.js"],
        description: "Explored a smoother authentication flow using AI and zero-knowledge cryptography, allowing users to verify credentials without exposing sensitive underlying data.",
        links: { demo: "https://ethglobal.com/showcase/keyless-znz6x", code: "#" },
        images: ["/images/keyless_ai_demo.png"]
    },
    {
        title: "Estonian Traffic Safety Analytics",
        category: "Strategy",
        tagline: "Data Analytics Challenge (DAC) - Eller College",
        tech: ["Data Analytics", "Strategy", "Public Policy", "Risk Modeling"],
        description: "Examined regional datasets to identify high-risk counties in Estonia (Rapla and Jõgeva) experiencing disproportionate traffic violations. Designed a strategic framework proposing a joint venture between the government and insurance companies to offer premium discounts based on telematics and clean records. Established KPIs targeting a 5% reduction in speeding violations and carbon emissions within the first year.",
        links: { demo: "#", code: "#" },
        images: ["/images/dac_3.jpg", "/images/dac_2.jpg"]
    },
    {
        title: "Student Enrollment Prediction Model",
        category: "Data",
        tagline: "Data Mining and Business Intelligence",
        tech: ["Machine Learning", "Logistic Regression", "Random Forest", "XGBoost"],
        description: "Compared six machine learning models for student enrollment prediction and packaged the findings for university analytics use. The goal was not just accuracy, but a model story that decision-makers could follow.",
        links: { demo: "https://github.com/karansalot/MS-MIS_SEM-1_ELLER/blob/main/Data%20Mining%20and%20Business%20Intelligence.pdf", code: "#" },
        images: ["/images/grad_wide.jpg"]
    },
    {
        title: "Smart Study Assistant (AI Chatbot)",
        category: "Product",
        tagline: "Information System Analysis and Design",
        tech: ["UI/UX Design", "Figma", "Prototyping", "EdTech"],
        description: "Designed a Figma prototype for a study assistant that organizes course material and suggests personalized study plans inside the D2L learning experience.",
        links: { demo: "https://github.com/karansalot/MS-MIS_SEM-1_ELLER/blob/main/Information%20System%20Analysis%20and%20Design.pdf", code: "#" },
        images: ["/images/ua_bench_2.jpg"]
    },
    {
        title: "Revitalizing Disney Theme Parks",
        category: "Strategy",
        tagline: "Product & Business Strategy Presentation",
        tech: ["Product Strategy", "Data Analytics", "Financial Modeling", "Market Research"],
        description: "Built and presented a strategy for Disney Theme Parks that balanced robotics, AR/VR, analytics, and sustainability investments against ROI, operations, and guest experience.",
        links: { demo: "https://github.com/karansalot/MS-MIS_SEM-1_ELLER/blob/main/Strategic%20Business%20Communication.pdf", code: "#" },
        images: ["/images/disney_2.jpg"]
    }
];

const projectFilters = ["All", "AI", "Web3", "Hackathons", "Data", "Product", "Strategy"];

const hackArizonaPhotos = [
    { src: "/images/hack%20az%201.jpeg", alt: "Hack Arizona award moment" },
    { src: "/images/hack%20az%202.jpeg", alt: "Hack Arizona team certificates" },
    { src: "/images/hack%20az%203.jpeg", alt: "Hack Arizona community partners" }
];

function HackArizonaHighlight() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-20 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/55 shadow-2xl"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[320px] border-b border-white/10 lg:border-b-0 lg:border-r">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/hackaz%20new.png" alt="Karan at Hack Arizona with Freedom Center partners" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                            <Award className="h-4 w-4 text-savannah-400" />
                            Southern Arizona Social Innovation Track
                        </p>
                    </div>
                </div>

                <div className="p-7 md:p-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-savannah-400">Community Highlight</p>
                    <h3 className="mb-5 text-2xl md:text-3xl font-bold text-white">
                        Hack Arizona brought students, nonprofits, and community partners into the same room.
                    </h3>
                    <p className="mb-6 text-base md:text-lg leading-relaxed text-zinc-300">
                        The Southern Arizona Social Innovation Track focused on scalable ideas for economic mobility and community well-being. Dr. Mary L. Rigdon joined the awards ceremony to share remarks and present prizes, with the Freedom Center supporting the challenge alongside the Community Food Bank of Southern Arizona.
                    </p>
                    <p className="mb-7 text-base leading-relaxed text-zinc-300">
                        The weekend also included a Freedom Center workshop on Synthetic Cultural Agents for culturally robust AI, helping teams think through how to design more inclusive and globally relevant AI systems. I helped support the experience with the University of Arizona Provost&apos;s Office.
                    </p>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <Users className="mb-3 h-5 w-5 text-savannah-400" />
                            <p className="text-2xl font-bold text-white">136</p>
                            <p className="text-xs uppercase tracking-wide text-zinc-500">Participants</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <Lightbulb className="mb-3 h-5 w-5 text-savannah-400" />
                            <p className="text-2xl font-bold text-white">36</p>
                            <p className="text-xs uppercase tracking-wide text-zinc-500">Teams</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <Award className="mb-3 h-5 w-5 text-savannah-400" />
                            <p className="text-2xl font-bold text-white">42</p>
                            <p className="text-xs uppercase tracking-wide text-zinc-500">Projects</p>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        {hackArizonaPhotos.map((photo) => (
                            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto my-10 relative">

            <div className="absolute inset-0 bg-savannah-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="text-center mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-bold text-savannah-500 mb-4"
                >
                    Hackathons & Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-400 max-w-2xl mx-auto mb-10"
                >
                    A more navigable look at hackathon builds, analytics work, product concepts, and strategy projects.
                </motion.p>
            </div>

            <HackArizonaHighlight />

            <div className="relative z-10 mb-12 flex flex-col gap-4 border-y border-white/10 bg-zinc-950/25 py-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-zinc-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-savannah-400">
                        <SlidersHorizontal className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white">Filter the shelf</p>
                        <p className="text-xs text-zinc-500">{filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} in view</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2" aria-label="Project filters">
                    {projectFilters.map((filter) => {
                        const selected = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${selected
                                    ? 'border-savannah-400 bg-savannah-400/90 text-black shadow-lg shadow-savannah-400/10'
                                    : 'border-white/10 bg-white/[0.025] text-zinc-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-16 relative z-10 mb-20">
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
                    >
                        {/* Project Images */}
                        <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group-hover:border-savannah-500/30 transition-colors shrink-0">
                            {project.images.length > 0 ? (
                                <div className="flex h-full w-full">
                                    {project.images.map((img, i) => (
                                        <div key={img} className="relative w-full h-full border-r last:border-0 border-white/10 overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 pointer-events-none mix-blend-overlay" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80">
                                    <div className="text-zinc-500 font-mono tracking-widest text-sm">CONCEPT / SHOWCASE</div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 pointer-events-none" />
                        </div>

                        {/* Project Details */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">

                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-savannah-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-lg text-savannah-500/80 font-mono tracking-wide mb-6 flex items-center gap-2">
                                {project.tagline}
                                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-sans font-semibold tracking-normal text-zinc-400">
                                    {project.category}
                                </span>
                            </p>

                            <p className="text-zinc-300 text-lg leading-relaxed font-light mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-sm px-4 py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 font-medium tracking-wide">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 mt-auto">
                                {project.links.demo !== "#" && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-black bg-savannah-500 hover:bg-savannah-400 px-6 py-3 rounded-xl transition-colors group/link">
                                        View Project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                )}
                                {project.links.code !== "#" && (
                                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl transition-colors">
                                        <Github size={18} /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <FeaturedArticle />

        </section>
    );
}
