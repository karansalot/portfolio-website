'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, ChevronRight, BookOpen } from 'lucide-react';
import { useState } from 'react';

const education = [
    {
        id: "eller-arizona",
        title: "Master of Science in MIS, Concentration in Security Information Assurance",
        institution: "Eller College of Management, University of Arizona",
        location: "Tucson, AZ",
        period: "Aug 2024 – Dec 2025",
        image: "/images/ua_logo_official.png",
        story: (
            <span>
                My graduate journey at the University of Arizona has pushed me to the cutting edge of data and technology. Maintaining a 3.74 GPA, I am pursuing a concentration in Security Information Assurance. My rigorous coursework includes:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Strategic Communication</li>
                    <li>Enterprise Data Management</li>
                    <li>Information Systems Analysis & Design</li>
                    <li>Data Mining & Business Intelligence</li>
                    <li>Intro to Statistics for Managers</li>
                    <li>Business Foundations/IT</li>
                    <li>Information Security in Public & Private Sectors</li>
                    <li>System Security Management</li>
                    <li>Business Data Communications & Networking</li>
                    <li>Information Security Risk Management</li>
                    <li>Data Visualization</li>
                </ul>
            </span>
        )
    },
    {
        id: "djsce-mumbai",
        title: "B.Tech in Electronics & Telecom, Honors in AI & ML",
        institution: "Dwarkadas J. Sanghvi College of Engineering, University of Mumbai",
        location: "Mumbai, India",
        period: "Aug 2020 – Jun 2024",
        image: "/images/dj_sanghvi_logo_official.png",
        story: (
            <span>
                My engineering roots were planted at the University of Mumbai, where I graduated with a 3.8 GPA. My Honors track in Artificial Intelligence & Machine Learning gave me an incredibly strong mathematical and programming foundation. I spent four years mastering coursework including:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Computer Networks</li>
                    <li>Object-Oriented Programming</li>
                    <li>Big Data Analytics</li>
                </ul>
            </span>
        )
    },
    {
        id: "pace-science",
        title: "Higher Secondary Education (Science)",
        institution: "Pace Junior Science College",
        location: "Mumbai, India",
        period: "2018 – 2020",
        image: "/images/pace_logo_official.png",
        story: (
            <span>
                During my time at Pace Junior Science College, I dedicated myself entirely to the sciences. This intense, two-year preparation period solidified my foundational understanding, leading to an aggregate score of 89.54% across:
                <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Mathematics</li>
                    <li>Electrical Maintenance (Scored 200/200, Topped in Maharashtra)</li>
                    <li>English</li>
                </ul>
                I successfully cleared highly competitive entrance examinations including JEE, MHT-CET, BITSAT, SAT, and VITEEE, serving as the perfect launchpad for my transition into a rigorous engineering degree.
            </span>
        )
    },
    {
        id: "cambridge-school",
        title: "Secondary School Education",
        institution: "Cambridge School",
        location: "Mumbai, India",
        period: "2016 – 2018",
        image: "/images/ryan_logo_official.png",
        story: (
            <span>
                Transitioning to Cambridge School for two pivotal years, I focused intensely on core academics while beginning to explore my early passions for technology and leadership. I achieved an aggregate score of 90.8% across a comprehensive curriculum including:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Mathematics</li>
                    <li>Biology</li>
                    <li>History/Civics</li>
                    <li>Geography</li>
                    <li>Physical Education</li>
                    <li>English</li>
                </ul>
            </span>
        )
    },
    {
        id: "ryan-christian",
        title: "Primary & Middle School Education",
        institution: "Ryan Christian School",
        location: "Mumbai, India",
        period: "2006 – 2016",
        image: "/images/ryan_logo_official.png",
        story: "I spent my most formative decade at Ryan Christian School. Beyond building excellent academic fundamentals, I participated deeply in extracurricular activities, discovered my love for music and sports, and developed the core values of curiosity and community that still guide me today."
    }
];

export default function Education() {
    const [activeId, setActiveId] = useState(education[0].id);
    const activeEdu = education.find(e => e.id === activeId) || education[0];

    return (
        <section id="education" className="py-24 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-savannah-500 mb-16 text-center"
            >
                Education
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
                {/* Left Sidebar (Tabs) */}
                <div className="flex flex-col w-full lg:w-[35%] xl:w-1/3 gap-3">
                    <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2 px-2">Academic History</h3>
                    {education.map((edu) => (
                        <button
                            key={edu.id}
                            onClick={() => setActiveId(edu.id)}
                            className={`w-full text-left px-4 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border focus:outline-none ${activeId === edu.id
                                ? 'bg-zinc-800/90 border-savannah-500/50 shadow-lg shadow-savannah-500/10'
                                : 'bg-transparent border-transparent hover:bg-zinc-900/60 hover:border-zinc-800'
                                }`}
                        >
                            <div className={`relative w-12 h-12 shrink-0 rounded-lg flex items-center justify-center overflow-hidden border transition-colors ${activeId === edu.id ? 'bg-zinc-900 border-zinc-700' : 'bg-zinc-900/50 border-zinc-800'
                                }`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={edu.image} alt={edu.institution} className="w-full h-full object-contain p-2 opacity-100 relative z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <BookOpen className="absolute inset-0 m-auto opacity-20 w-5 h-5 pointer-events-none z-0" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`font-bold transition-colors truncate ${activeId === edu.id ? 'text-savannah-400' : 'text-zinc-300'}`}>
                                    {edu.institution}
                                </h4>
                                <p className="text-xs text-zinc-500 mt-1 truncate">{edu.title}</p>
                            </div>
                            <div className={`p-1 rounded-full transition-colors shrink-0 ${activeId === edu.id ? 'bg-savannah-500/20 text-savannah-400' : 'text-transparent'}`}>
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
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{activeEdu.title}</h3>
                                    <p className="text-lg text-savannah-400 font-medium flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-savannah-500/70 shrink-0" />
                                        {activeEdu.institution}
                                    </p>
                                </div>
                                <div className="flex flex-wrap xl:flex-col gap-3 shrink-0 text-sm font-mono text-zinc-400">
                                    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-2 rounded-lg border border-zinc-700/50 shadow-inner">
                                        <Calendar className="w-4 h-4 text-savannah-500 shrink-0" /> {activeEdu.period}
                                    </div>
                                    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-2 rounded-lg border border-zinc-700/50 shadow-inner">
                                        <MapPin className="w-4 h-4 text-savannah-500 shrink-0" /> {activeEdu.location}
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                {typeof activeEdu.story === "string" ? (
                                    <p className="text-zinc-100 leading-relaxed md:leading-loose text-base md:text-lg">
                                        {activeEdu.story}
                                    </p>
                                ) : (
                                    <div className="text-zinc-100 leading-relaxed md:leading-loose text-base md:text-lg">
                                        {activeEdu.story}
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
