'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const experiences = [
    {
        id: "freedom-center",
        type: "work",
        title: "Research Analyst",
        company: "Freedom Center",
        location: "Tucson, AZ",
        period: "Jan 2025 – Dec 2025",
        image: "/images/freedom_center_horizontal_logo.png",
        story: "Working with Dr. Mary Rigdon (Director of Center for Philosophy of Freedom), my mission was to completely rethink how we understand user engagement. I leveraged Qualtrics for user surveys, but separately built a fully custom robust AI-driven behavioral research platform from scratch. By diving deep into stakeholder interviews, I was able to pinpoint exactly what we needed. I designed automated ETL pipelines using Python and SQL to handle data processing. Bringing this data to life through custom Power BI dashboards and a newly developed financial analytics application was incredibly rewarding, especially when it successfully drove significant increases in participant retention through our data-driven, strategic decisions."
    },
    {
        id: "ua-ta",
        type: "work",
        title: "Graduate Teaching Assistant",
        company: "University of Arizona",
        location: "Tucson, AZ",
        period: "Jan 2025 – Dec 2025",
        image: "/images/ua_logo_official.png",
        story: "Teaching has always been a way for me to solidify my own understanding while helping others grow. Working under Dr. Nikolas Hodge (Director of Implementation Services, UITS), I stepped into the role of mentoring over 60 students, delivering hands-on training on Agile methodology, requirements gathering, SQL optimization, and data analysis. I poured my energy into developing comprehensive course materials and custom analytics applications to support the curriculum. The most fulfilling part was guiding project teams through their challenges, which ultimately resulted in a 30% measurable improvement in their final deliverables."
    },
    {
        id: "ua-tech",
        type: "work",
        title: "Strategy Analyst",
        company: "Eller College of Management, University of Arizona",
        location: "Tucson, AZ",
        period: "Jan 2025 – May 2025",
        image: "/images/ua_logo_official.png",
        story: "In my consulting role for Eller College of Management's marketing department, I conducted a comprehensive brand audit for the undergraduate marketing program. By analyzing stakeholder feedback and market positioning, I identified core improvement areas. I developed a detailed SWOT analysis and formulated strategic recommendations to enhance brand positioning and communication strategy. Engaging with stakeholders through targeted surveys and interviews, while benchmarking competitor data, allowed us to outline specific pathways to enhance the program's visibility and overall market presence."
    },
    {
        id: "mhhc",
        type: "work",
        title: "Business Analyst (Live Client Project)",
        company: "MHHC Enterprises",
        location: "Remote (Tucson, AZ)",
        period: "Aug 2024 – Dec 2024",
        image: "/images/mhhc_logo_official.png",
        story: "As part of an intensive academic consulting project, I served as a Business Analyst for our live client, MHHC Enterprises. I operated as the critical bridge between technical execution and business needs during an enterprise system integration. My team and I developed scalable B2B and B2C systems. We designed comprehensive ERDs, wrote complex SQL triggers, and architected the underlying databases. To bring the backend to life, we developed a robust frontend application using Oracle, greatly streamlining how the client interacted with their data."
    },
    {
        id: "happy-hunters",
        type: "work",
        title: "Founding Product Analyst",
        company: "Happy Hunters Travel",
        location: "Mumbai, India",
        period: "Jan 2023 – Aug 2024",
        image: "/images/happy_hunters_logo_official.png",
        story: "Joining Happy Hunters as the Founding Product Analyst was an incredible opportunity to shape the product from the ground up. Partnering directly with the founders, I defined the product strategy and roadmap heavily based on direct user research. I architected SQL databases and robust ETL pipelines from scratch, processing tens of thousands of records and eliminating 70% of manual operations. But the real game-changer was building a machine learning recommendation engine using Python. By analyzing behavioral data and predicting customer needs, those personalization strategies skyrocketed our lead conversion by 57%."
    },
    {
        id: "djs-beats",
        type: "work",
        title: "Vice Chairperson & Artist",
        company: "DJS Beats",
        location: "Mumbai, India",
        period: "Apr 2021 – Oct 2023",
        image: "/images/djs_beats_logo_official.png",
        story: "Music and leadership collide at DJS Beats, where I spent over two years growing from an Artist and Events Executive to Vice Chairperson. I directed grand-scale events, managed logistics, and poured my creative energy into performing. This experience was instrumental in honing my team management skills and adaptability, proving to me that balancing technical rigor with creative passion is entirely possible when you move fast and embrace the rhythm."
    },
    {
        id: "dj-codestars",
        type: "work",
        title: "Project Coordinator",
        company: "DJ CodeStars",
        location: "Mumbai, India",
        period: "Sep 2021 – Sep 2023",
        image: "/images/dj_codestars_logo_official.png",
        story: "At DJ CodeStars, I stepped up as Project Coordinator to foster a thriving technical community. I crafted and contributed numerous articles on emerging technologies—ranging from AI and Machine Learning to Blockchain and Data Analytics. My core focus was educating and engaging our coding community by meticulously managing publication schedules and ensuring we always delivered top-tier content that met our audience's evolving needs."
    },
    {
        id: "grace-hopper",
        type: "work",
        title: "Conference Attendee & Scholar",
        company: "Grace Hopper Celebration",
        location: "Chicago, IL",
        period: "Nov 2025",
        image: "/images/grace_hopper_logo_official.png",
        story: (
            <span>
                Walking into the Grace Hopper Celebration 2025, I knew it would be a powerful space for learning and connection. Over four days, casual conversations turned into real insights, and the future of tech felt tangible and human. I started my mornings speaking with professionals from companies like Meta, Amazon, Microsoft, and Google, hearing about their career paths, internal systems, and the problems they are excited to work on. From discussing the evolution of AI agents with Siri co-founder Adam Cheyer to exploring engineering cultures at major tech firms and startups, the experience profoundly shaped my perspective. These interactions validated my independent projects and offered a clearer sense of how I want to grow.{" "}
                <a
                    href="https://medium.com/@salotkaran/grace-hopper-celebration-2025-a-week-of-learning-conversations-and-clarity-a789357076aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-savannah-400 hover:text-savannah-300 underline underline-offset-4 transition-colors font-semibold"
                >
                    View Article
                </a>
            </span>
        )
    },
];

export default function Experience() {
    const [activeId, setActiveId] = useState(experiences[0].id);
    const activeExp = experiences.find(e => e.id === activeId) || experiences[0];

    return (
        <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-savannah-500 mb-16 text-center"
            >
                My Journey
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                {/* Left Sidebar (Tabs) */}
                <div className="flex flex-col w-full lg:w-[35%] xl:w-1/3 gap-3">
                    <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2 px-2">Professional & Academic</h3>
                    {experiences.map((exp) => (
                        <button
                            key={exp.id}
                            onClick={() => setActiveId(exp.id)}
                            className={`w-full text-left px-4 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border focus:outline-none ${activeId === exp.id
                                ? 'bg-zinc-800/90 border-savannah-500/50 shadow-lg shadow-savannah-500/10'
                                : 'bg-transparent border-transparent hover:bg-zinc-900/60 hover:border-zinc-800'
                                }`}
                        >
                            <div className={`relative w-12 h-12 shrink-0 rounded-lg flex items-center justify-center overflow-hidden border transition-colors ${activeId === exp.id ? 'bg-zinc-900 border-zinc-700' : 'bg-zinc-900/50 border-zinc-800'
                                }`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={exp.image} alt={exp.company} className={`w-full h-full opacity-100 relative z-10 ${exp.id === 'freedom-center' ? 'p-1 bg-white rounded-lg object-contain' : 'p-2 object-contain'}`} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                {exp.type === 'work' ? (
                                    <Briefcase className="absolute inset-0 m-auto opacity-20 w-5 h-5 pointer-events-none z-0" />
                                ) : (
                                    <GraduationCap className="absolute inset-0 m-auto opacity-20 w-5 h-5 pointer-events-none z-0" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`font-bold transition-colors truncate ${activeId === exp.id ? 'text-savannah-400' : 'text-zinc-300'}`}>
                                    {exp.company}
                                </h4>
                                <p className="text-xs text-zinc-500 mt-1 truncate">{exp.title}</p>
                            </div>
                            <div className={`p-1 rounded-full transition-colors shrink-0 ${activeId === exp.id ? 'bg-savannah-500/20 text-savannah-400' : 'text-transparent'}`}>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right Content Area (Story) */}
                <div className="flex-1 lg:w-[65%] xl:w-2/3 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col h-full"
                        >
                            <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-8 pb-8 border-b border-zinc-800/80">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{activeExp.title}</h3>
                                    <p className="text-lg text-savannah-400 font-medium flex items-center gap-2">
                                        {activeExp.type === 'work' ? <Briefcase className="w-5 h-5 text-savannah-500/70" /> : <GraduationCap className="w-5 h-5 text-savannah-500/70" />}
                                        {activeExp.company}
                                    </p>
                                </div>
                                <div className="flex flex-wrap xl:flex-col gap-3 shrink-0 text-sm font-mono text-zinc-400">
                                    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-2 rounded-lg border border-zinc-700/50 shadow-inner">
                                        <Calendar className="w-4 h-4 text-savannah-500" /> {activeExp.period}
                                    </div>
                                    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-2 rounded-lg border border-zinc-700/50 shadow-inner">
                                        <MapPin className="w-4 h-4 text-savannah-500" /> {activeExp.location}
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="text-zinc-100 leading-relaxed md:leading-loose text-base md:text-lg text-justify">
                                    {activeExp.story}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
