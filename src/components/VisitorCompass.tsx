'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { BarChart3, Compass, Guitar, ArrowRight } from 'lucide-react';

const paths = [
    {
        id: 'builder',
        label: 'Builder mode',
        icon: Compass,
        title: 'Give me a fuzzy idea and a whiteboard.',
        body: 'This is the side of me that likes shaping messy problems into a product direction, a prototype, or a workflow people can actually use. Hackathons, live-client projects, and program operations all sit here.',
        bullets: ['Product instincts', 'Fast prototypes', 'Clear next steps'],
        cta: 'See projects',
        href: '#projects'
    },
    {
        id: 'systems',
        label: 'Systems mode',
        icon: BarChart3,
        title: 'I like when the spreadsheet starts telling a story.',
        body: 'This is the data-and-operations lane: REDCap, Trellis CRM, dashboards, research workflows, reporting, and the behind-the-scenes systems that make a team easier to run.',
        bullets: ['Dashboards', 'Research data', 'Workflow cleanup'],
        cta: 'See experience',
        href: '#experience'
    },
    {
        id: 'off-hours',
        label: 'Off-hours',
        icon: Guitar,
        title: 'A little music, a little cricket, a lot of curiosity.',
        body: 'Outside the work tabs, I am usually around guitars, sports, wildlife documentaries, travel photos, or a conversation that somehow turns into a product idea.',
        bullets: ['Guitar breaks', 'Cricket energy', 'Wildlife docs'],
        cta: 'See gallery',
        href: '#gallery'
    }
];

export default function VisitorCompass() {
    const [activeId, setActiveId] = useState(paths[0].id);
    const active = useMemo(() => paths.find((path) => path.id === activeId) ?? paths[0], [activeId]);
    const ActiveIcon = active.icon;

    return (
        <section className="px-4 max-w-7xl mx-auto -mt-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-y border-white/10 bg-zinc-950/30 py-8 md:py-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-savannah-400 mb-3">Choose A Lens</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                            Pick a side of the story.
                        </h2>
                        <p className="mt-4 text-zinc-400 leading-relaxed max-w-xl">
                            Jump between the product work, the systems thinking, and the off-hours pieces that make the rest feel more human.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Visitor paths">
                            {paths.map((path) => {
                                const Icon = path.icon;
                                const selected = activeId === path.id;
                                return (
                                    <button
                                        key={path.id}
                                        type="button"
                                        onClick={() => setActiveId(path.id)}
                                        className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${selected
                                            ? 'border-savannah-400 bg-savannah-400/90 text-black shadow-lg shadow-savannah-400/10'
                                            : 'border-white/10 bg-white/[0.025] text-zinc-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white'
                                            }`}
                                        role="tab"
                                        aria-label={path.label}
                                        aria-selected={selected}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {path.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 md:p-7 shadow-xl shadow-black/10"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-savannah-400/25 bg-savannah-400/10 text-savannah-400">
                                <ActiveIcon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                                <p className="mt-3 text-zinc-300 leading-relaxed">{active.body}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {active.bullets.map((bullet) => (
                                <span key={bullet} className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-sm text-zinc-300">
                                    {bullet}
                                </span>
                            ))}
                        </div>

                        <a
                            href={active.href}
                            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-savannah-400/50 hover:bg-savannah-400 hover:text-black"
                        >
                            {active.cta}
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
