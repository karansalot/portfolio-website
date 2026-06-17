'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" className="py-20 px-4 bg-zinc-900 mt-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-savannah-500 via-jungle-500 to-savannah-500" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-bold text-savannah-500 mb-8"
                >
                    Let&apos;s Start a New Adventure
                </motion.h2>

                <p className="text-xl text-gray-300 mb-12">
                    Open to opportunities where technology, data, and strategy intersect to build impactful solutions.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    <a href="mailto:karansalot10@gmail.com" className="flex items-center gap-3 text-lg text-savannah-100 hover:text-savannah-400 transition-colors">
                        <Mail className="w-6 h-6" /> karansalot10@gmail.com
                    </a>
                </div>

                <div className="flex justify-center gap-6">
                    <SocialLink href="https://linkedin.com/in/karansalot" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="https://github.com/karansalot" icon={<Github />} label="GitHub" />
                    {/* Add other links as needed */}
                    <SocialLink href="https://drive.google.com/drive/folders/17be5eLELFl9GU24Vb0O3XA-BhRSg6qa-" icon={<FileText />} label="Resume" />
                </div>

                <p className="mt-16 text-gray-600 text-sm">
                    Karan Salot
                </p>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            className="p-3 bg-zinc-800 rounded-full hover:bg-savannah-600 hover:text-black transition-all transform hover:scale-110"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
