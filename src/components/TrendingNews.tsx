'use client';

import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';

const newsArticles = [
    {
        title: "The Intersection of Product, Data, and AI",
        source: "Towards Data Science",
        date: "March 2026",
        link: "https://towardsdatascience.com/product-management",
        description: "How product managers are leveraging data analytics and AI to drive strategic business decisions and growth."
    },
    {
        title: "Building Resilient Enterprise Data Systems",
        source: "Medium",
        date: "February 2026",
        link: "https://medium.com/tag/data-engineering",
        description: "Key strategies for creating scalable, robust data pipelines that endure scale and complexity."
    },
    {
        title: "Product Strategy in the Age of GenAI",
        source: "Harvard Business Review",
        date: "January 2026",
        link: "https://hbr.org/topic/subject/artificial-intelligence",
        description: "How product managers must pivot their roadmaps to successfully integrate generative capabilities."
    }
];

export default function TrendingNews() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto mb-16 relative z-10">
            <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="text-savannah-500" size={28} />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                    What I&apos;m Reading
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsArticles.map((article, idx) => (
                    <motion.a
                        key={idx}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group flex flex-col bg-zinc-900/40 border border-white/5 hover:border-savannah-500/30 rounded-2xl p-6 transition-all hover:bg-zinc-900/80 hover:-translate-y-1 shadow-lg backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-mono font-bold text-savannah-500 bg-savannah-500/10 px-2 py-1 rounded">
                                {article.source}
                            </span>
                            <span className="text-xs text-zinc-500">
                                {article.date}
                            </span>
                        </div>

                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-savannah-400 transition-colors">
                            {article.title}
                        </h4>

                        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 flex-grow">
                            {article.description}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-zinc-500 group-hover:text-savannah-500 transition-colors mt-auto">
                            READ ARTICLE <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
