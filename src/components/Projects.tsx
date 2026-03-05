'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import FeaturedArticle from './FeaturedArticle';
import TrendingNews from './TrendingNews';

const projects = [
    {
        title: "NeuroNexus AI Campus Assistant",
        tagline: "Hack Arizona 2025",
        tech: ["GPT-4", "Next.js", "Python", "AWS"],
        description: "Built a comprehensive AI-driven campus assistant to seamlessly connect students with university resources. Led the product strategy and user research, developing a robust full-stack web application. Engineered NLP capabilities to parse natural language queries, collaborating seamlessly to deliver an impactful, student-centric platform.",
        links: { demo: "https://devpost.com/software/neuronexus", code: "#" },
        images: ["/images/neuronexus_1.jpg", "/images/neuronexus_2.jpg"]
    },
    {
        title: "Regen Art DAO",
        tagline: "ETH Denver 2025",
        tech: ["Web3", "Smart Contracts", "React", "Ethereum"],
        description: "Architected a decentralized autonomous organization platform focused on empowering and supporting regenerative artists. Built the smart contract infrastructure to facilitate transparent collaborative works and community governance, allowing users to seamlessly interact with blockchain elements and view dynamic art grids representing collective creativity.",
        links: { demo: "https://devfolio.co/projects/regen-art-dao-1a93", code: "#" },
        images: ["/images/eth_denver_inflatable_2.jpg", "/images/regen_art_canvas_2.png"]
    },
    {
        title: "Keyless AI",
        tagline: "ETH SanFrancisco 2024",
        tech: ["Machine Learning", "Cryptography", "Python", "Node.js"],
        description: "Developed an innovative showcase project for ETHGlobal aimed at removing the friction from traditional authentication methods. Bridged the gap between AI and Zero-Knowledge cryptography to allow users to verify credentials seamlessly without exposing underlying sensitive data, maintaining a rigorous approach towards security.",
        links: { demo: "https://ethglobal.com/showcase/keyless-znz6x", code: "#" },
        images: ["/images/keyless_ai_demo.png"]
    },
    {
        title: "Estonian Traffic Safety Analytics",
        tagline: "Data Analytics Challenge (DAC) - Eller College",
        tech: ["Data Analytics", "Strategy", "Public Policy", "Risk Modeling"],
        description: "Examined regional datasets to identify high-risk counties in Estonia (Rapla and Jõgeva) experiencing disproportionate traffic violations. Designed a strategic framework proposing a joint venture between the government and insurance companies to offer premium discounts based on telematics and clean records. Established KPIs targeting a 5% reduction in speeding violations and carbon emissions within the first year.",
        links: { demo: "#", code: "#" },
        images: ["/images/dac_3.jpg", "/images/dac_2.jpg"]
    },
    {
        title: "Student Enrollment Prediction Model",
        tagline: "Data Mining and Business Intelligence",
        tech: ["Machine Learning", "Logistic Regression", "Random Forest", "XGBoost"],
        description: "Built a robust student enrollment prediction model utilizing 6 different machine learning algorithms to rigorously compare performance and accuracy. Delivered a highly scalable solution to the University Analytics team, substantially improving predictive accuracy and optimizing long-term institutional planning.",
        links: { demo: "https://github.com/karansalot/MS-MIS_SEM-1_ELLER/blob/main/Data%20Mining%20and%20Business%20Intelligence.pdf", code: "#" },
        images: ["/images/grad_wide.jpg"]
    },
    {
        title: "Smart Study Assistant (AI Chatbot)",
        tagline: "Information System Analysis and Design",
        tech: ["UI/UX Design", "Figma", "Prototyping", "EdTech"],
        description: "Designed and developed a comprehensive Figma prototype for an AI-powered chatbot that intelligently organizes study materials and provides personalized recommendations. Enhanced the university's D2L platform by conceptualizing a tailored learning tool that generates dynamic study plans adapted to individual student progress.",
        links: { demo: "https://github.com/karansalot/MS-MIS_SEM-1_ELLER/blob/main/Information%20System%20Analysis%20and%20Design.pdf", code: "#" },
        images: ["/images/ua_bench_2.jpg"]
    },
    {
        title: "Revitalizing Disney Theme Parks",
        tagline: "Product & Business Strategy Presentation",
        tech: ["Product Strategy", "Data Analytics", "Financial Modeling", "Market Research"],
        description: "Developed and presented a comprehensive business strategy to revitalize Disney Theme Parks by allocating strategic investments across Robotics, AR/VR, Data Analytics, and Sustainability. Focused heavily on balancing ROI, long-term operational efficiency, and significantly enhancing the ultimate customer experience.",
        links: { demo: "https://github.com/karansalot/MS-MIS_SEM-1_ELLER/blob/main/Strategic%20Business%20Communication.pdf", code: "#" },
        images: ["/images/disney_2.jpg"]
    }
];

export default function Projects() {
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
                    A collection of my winning hackathon builds, strategic case studies, and full-stack product ventures.
                </motion.p>
            </div>

            <div className="flex flex-col gap-16 relative z-10 mb-20">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
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

            <TrendingNews />

        </section>
    );
}
