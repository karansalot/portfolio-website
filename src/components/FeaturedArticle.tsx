'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function FeaturedArticle() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto mb-10 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-zinc-900/50 border border-savannah-500/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-savannah-500/5 to-transparent pointer-events-none" />

                <div className="flex flex-col md:flex-row">
                    {/* Content Section */}
                    <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-savannah-500/20 text-savannah-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-savannah-500/30">
                                Latest Article
                            </span>
                            <span className="text-zinc-500 text-sm font-mono">Medium</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-savannah-400 transition-colors">
                            Building Three AI Products in 36 Hours at HackIllinois 2026
                        </h3>

                        <div className="space-y-4 text-zinc-300 text-lg leading-relaxed font-light mb-8">
                            <p>
                                Hackathons are a strange but wonderful combination of chaos, creativity, and caffeine... That is exactly what happened at HackIllinois 2026.
                            </p>
                            <p>
                                My team and I spent the weekend building three different AI projects in under 36 hours. It was intense, chaotic, incredibly fun, and one of those weekends where you forget how tired you are because you are too excited about what you are building.
                            </p>
                        </div>

                        <div className="mt-auto">
                            <a
                                href="https://medium.com/@salotkaran/building-three-ai-products-in-36-hours-at-hackill-002c52b2f6eb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-black bg-savannah-500 hover:bg-savannah-400 px-6 py-3 rounded-xl transition-colors group/btn"
                            >
                                Read Full Story <ExternalLink size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/3 relative min-h-[300px] bg-zinc-800 flex flex-col sm:flex-row md:flex-col">
                        <div className="relative w-full h-1/2 min-h-[150px] border-b sm:border-b-0 sm:border-r md:border-b md:border-r-0 border-white/10 group/img1 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/medium-1.jpg"
                                alt="HackIllinois 2026 Group"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img1:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                    e.currentTarget.onerror = null;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                        <div className="relative w-full h-1/2 min-h-[150px] group/img2 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/medium-2.jpg"
                                alt="Fulcrum GT Banner"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img2:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                    e.currentTarget.onerror = null;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
