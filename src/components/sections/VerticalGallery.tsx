'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    {
        id: 'rx-93',
        title: 'RX-93 Nu Gundam',
        category: 'Ver. Ka',
        year: '2024',
        artist: 'NONTEXT',
        image: '/images/project_gp_custom.png'
    },
    {
        id: 'sazabi',
        title: 'MSN-04 Sazabi',
        category: 'Ver. Ka',
        year: '2023',
        artist: 'NONTEXT',
        image: '/images/project_mars.jpg'
    },
    {
        id: 'unicorn',
        title: 'RX-0 Unicorn',
        category: 'PG Unleashed',
        year: '2023',
        artist: 'NONTEXT',
        image: '/images/project_theo.png'
    }
];

export default function VerticalGallery() {
    return (
        <section className="bg-brand-primary py-32 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12 flex items-end justify-between border-b border-brand-secondary/10 pb-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-technical text-brand-accent">Archived Series</span>
                        <h2 className="font-sans font-black text-white text-[8vw] leading-[0.85] tracking-tighter uppercase">Latest</h2>
                    </div>
                    <span className="text-metadata text-brand-secondary/60 mb-4 hidden md:block">Scroll to Explore / 001-003</span>
                </div>
            </div>

            <div className="architectural-grid">
                <div className="col-span-12 space-y-48">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="group grid grid-cols-12 gap-8 md:gap-12 cursor-pointer relative"
                        >
                            {/* Number Index */}
                            <div className="absolute -left-4 md:-left-8 top-0 hidden md:block">
                                <span className="text-monumental text-white/5 font-black leading-none select-none">
                                    0{i + 1}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="col-span-12 md:col-span-8 relative overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-white/5">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Image Overlay Info */}
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-technical text-white border border-white/20 px-3 py-1 backdrop-blur-sm">
                                        Specs: Custom Painted / High-Detail
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="col-span-12 md:col-span-4 flex flex-col justify-between py-4">
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="h-[2px] w-8 bg-brand-accent"></span>
                                            <span className="text-xs font-black text-white tracking-[0.2em] uppercase">{project.category}</span>
                                        </div>
                                        <h3 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight group-hover:text-brand-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-[9px] font-mono text-brand-accent/60 mt-1 block uppercase tracking-[0.3em]">
                                            BY {project.artist}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pb-8 border-b border-white/10">
                                        <div>
                                            <span className="text-[9px] uppercase tracking-widest text-brand-secondary/40 block mb-1">Scale</span>
                                            <span className="text-xs font-mono text-brand-secondary/80">1/100 MASTER GRADE</span>
                                        </div>
                                        <div>
                                            <span className="text-[9px] uppercase tracking-widest text-brand-secondary/40 block mb-1">Year</span>
                                            <span className="text-xs font-mono text-brand-secondary/80">{project.year}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link href={`/collection/${project.id}`} className="group/btn relative flex items-center justify-center gap-3 overflow-hidden border border-brand-secondary/20 px-8 h-[60px] text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary transition-all hover:border-brand-accent">
                                        <span className="relative z-10 transition-colors group-hover/btn:text-white">More Details</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                        <div className="absolute inset-x-0 bottom-0 h-0 bg-brand-accent transition-all duration-300 group-hover/btn:h-full -z-0" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
