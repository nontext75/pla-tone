'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    {
        id: 'rx-93',
        title: 'RX-93 Nu Gundam',
        category: 'Ver. Ka',
        year: '2024',
        image: '/images/project_gp_custom.png'
    },
    {
        id: 'sazabi',
        title: 'MSN-04 Sazabi',
        category: 'Ver. Ka',
        year: '2023',
        image: '/images/project_mars.jpg'
    },
    {
        id: 'unicorn',
        title: 'RX-0 Unicorn',
        category: 'PG Unleashed',
        year: '2023',
        image: '/images/project_theo.png'
    }
];

export default function VerticalGallery() {
    return (
        <section className="bg-brand-primary py-32 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12 flex items-end justify-between">
                    <h2 className="font-sans font-black text-white text-[8vw] leading-[0.85] tracking-tighter uppercase">Selected <br /> Works</h2>
                    <span className="text-metadata text-brand-secondary/60 mb-4 hidden md:block">Scroll to Explore</span>
                </div>
            </div>

            <div className="architectural-grid">
                <div className="col-span-12 space-y-32">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="group grid grid-cols-12 gap-8 md:gap-12 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="col-span-12 md:col-span-8 relative overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                            </div>

                            {/* Info */}
                            <div className="col-span-12 md:col-span-4 flex flex-col justify-between py-2 border-t border-brand-secondary/20 md:border-t-0">
                                <div>
                                    <span className="text-metadata text-brand-accent mb-2 block">{project.category}</span>
                                    <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">{project.title}</h3>
                                    <span className="text-[10px] font-mono text-brand-secondary/60 block">{project.year} / PAINTED BUILD</span>
                                </div>

                                <div className="mt-8 md:mt-0">
                                    <Link href={`/project/${project.id}`} className="inline-block text-[10px] font-black uppercase tracking-[0.3em] border border-brand-secondary/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
                                        View Project
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
