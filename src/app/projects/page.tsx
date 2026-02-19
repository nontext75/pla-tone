'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    {
        id: 'rx-93',
        title: 'RX-93 Nu Gundam',
        category: 'Ver. Ka',
        year: '2024',
        image: '/images/hero_temp.jpg'
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
    },
    {
        id: 'zaku',
        title: 'MS-06S Zaku II',
        category: 'Painted Build',
        year: '2023',
        image: '/images/project_zaku.jpg'
    }
];

export default function ProjectsPage() {
    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4"
                    >
                        CHRONOLOGY
                    </motion.span>
                    <h1 className="font-sans font-black text-[10vw] lg:text-[7vw] leading-none text-white uppercase tracking-tighter">
                        Works.
                    </h1>
                </div>
            </div>

            <div className="architectural-grid space-y-32">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-12 group relative h-[60vh] overflow-hidden"
                    >
                        <img
                            src={project.image}
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                            alt={project.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                            <div>
                                <span className="text-[10px] font-black text-[#7d5fff] block mb-2 tracking-[0.5em]">{project.category}</span>
                                <h3 className="text-4xl lg:text-6xl font-sans font-black text-white uppercase tracking-tighter">{project.title}</h3>
                            </div>
                            <Link href={`/project/${project.id}`} className="px-12 py-4 border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                                Analysis
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
