'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const experiences = [
    {
        id: "uacc",
        type: "work",
        title: "Program Coordinator, COHC and IMHO",
        company: "University of Arizona Comprehensive Cancer Center",
        location: "Tucson, AZ · Hybrid",
        period: "Mar 2026 – Present",
        image: "/images/uacc%20logo.png",
        story: (
            <div className="space-y-6">
                <p>
                    I support program operations across COHC and IMHO initiatives, with a focus on making the day-to-day work easier to track, coordinate, and improve. A lot of my role sits where people, data, and technology meet.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">Data systems</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">Manage program data in REDCap and Trellis CRM for participant tracking, events, and communications.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">Reporting</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">Build reports and dashboards that help teams monitor engagement, outcomes, and workflow health.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">Program insight</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">Analyze trends and translate findings into practical next steps for clinicians, researchers, and program teams.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">Better coordination</p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">Streamline processes so community-facing work can scale without losing the participant experience.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/uacc%20logo.png" alt="University of Arizona Cancer Center" className="h-20 w-full rounded-xl bg-white object-contain p-3" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/nci%20uacc.png" alt="NCI Comprehensive Cancer Center designation" className="h-20 w-full rounded-xl bg-white object-contain p-3" />
                </div>
            </div>
        )
    },
    {
        id: "freedom-center",
        type: "work",
        title: "Research Analyst",
        company: "Freedom Center",
        location: "Tucson, AZ",
        period: "Jan 2025 – Dec 2025",
        image: "/images/freedom_center_horizontal_logo.png",
        story: "At the Freedom Center, I worked with Dr. Mary Rigdon on better ways to understand engagement in behavioral economics research. I supported surveys in Qualtrics, helped shape stakeholder interviews, and built data workflows in Python and SQL so the team could spend less time cleaning data and more time learning from it. The work eventually turned into dashboards and internal tools that made participant patterns easier to see and act on."
    },
    {
        id: "ua-ta",
        type: "work",
        title: "Graduate Teaching Assistant",
        company: "University of Arizona",
        location: "Tucson, AZ",
        period: "Jan 2025 – Dec 2025",
        image: "/images/ua_logo_official.png",
        story: "Teaching helped me get clearer about my own thinking while helping students build confidence with systems work. Under Dr. Nikolas Hodge, I mentored more than 60 students across Agile methods, requirements gathering, SQL, and data analysis. I also developed course materials and small analytics tools that helped project teams move from vague ideas to cleaner final deliverables."
    },
    {
        id: "ua-tech",
        type: "work",
        title: "Strategy Analyst (Live Client Project)",
        company: "Eller College of Management, University of Arizona",
        location: "Tucson, AZ",
        period: "Jan 2025 – May 2025",
        image: "/images/ua_logo_official.png",
        story: "I worked with Eller's marketing team on a brand audit for the undergraduate marketing program. The project combined stakeholder interviews, survey feedback, competitor research, and a practical SWOT analysis. The final recommendations focused on clearer positioning and communication choices the team could actually use."
    },
    {
        id: "mhhc",
        type: "work",
        title: "Business Analyst (Live Client Project)",
        company: "MHHC Enterprises",
        location: "Remote (Tucson, AZ)",
        period: "Aug 2024 – Dec 2024",
        image: "/images/mhhc_logo_official.png",
        story: "For MHHC Enterprises, I worked as a business analyst on a live client systems project. My role was to translate business needs into clear technical requirements while the team designed B2B and B2C workflows. We built ERDs, wrote SQL triggers, shaped the database design, and created an Oracle-based frontend that made the client data easier to use."
    },
    {
        id: "happy-hunters",
        type: "work",
        title: "Founding Product Analyst",
        company: "Happy Hunters Travel",
        location: "Mumbai, India",
        period: "Jan 2023 – Aug 2024",
        image: "/images/happy_hunters_logo_official.png",
        story: "As the founding product analyst at Happy Hunters, I helped turn early product ideas into working systems. I partnered with the founders on roadmap decisions, user research, SQL databases, and ETL workflows. I also built a Python recommendation model that helped personalize travel leads and reduce a large amount of manual operations."
    },
    {
        id: "djs-beats",
        type: "work",
        title: "Vice Chairperson & Artist",
        company: "DJS Beats",
        location: "Mumbai, India",
        period: "Apr 2021 – Oct 2023",
        image: "/images/djs_beats_logo_official.png",
        story: "DJS Beats was where music, logistics, and leadership all came together for me. I grew from artist and events executive to vice chairperson, helping run large events, manage teams, and perform along the way. It taught me how to stay calm when plans change and how much good coordination matters behind the scenes."
    },
    {
        id: "dj-codestars",
        type: "work",
        title: "Project Coordinator",
        company: "DJ CodeStars",
        location: "Mumbai, India",
        period: "Sep 2021 – Sep 2023",
        image: "/images/dj_codestars_logo_official.png",
        story: "At DJ CodeStars, I helped keep a student technical community active and useful. I coordinated article schedules, contributed writing on AI, machine learning, blockchain, and analytics, and worked with peers to make technical topics feel more approachable."
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
                                <img src={exp.image} alt={exp.company} className={`w-full h-full opacity-100 relative z-10 ${exp.id === 'freedom-center' || exp.id === 'uacc' ? 'p-1 bg-white rounded-lg object-contain' : 'p-2 object-contain'}`} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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
                                {typeof activeExp.story === "string" ? (
                                    <p className="text-zinc-100 leading-relaxed md:leading-loose text-base md:text-lg">
                                        {activeExp.story}
                                    </p>
                                ) : (
                                    <div className="text-zinc-100 leading-relaxed text-base md:text-lg">
                                        {activeExp.story}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
