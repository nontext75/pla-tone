'use client';

import { motion } from 'framer-motion';

const works = [
    { id: 1, title: 'RX-78-2', subtitle: 'Custom', location: 'Tokyo' },
    { id: 2, title: 'MS-06S', subtitle: 'Zaku II', location: 'Osaka' },
    { id: 3, title: 'MS-07B-3', subtitle: 'Gouf Custom', location: 'Seoul' },
    { id: 4, title: 'RX-0', subtitle: 'Unicorn', location: 'Nagoya' },
];

export function Works() {
    return (
        <section id="works" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-20">
                    <div>
                        <span className="text-[#ff3b30] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Portfolio</span>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a12]">WORKS</h3>
                    </div>
                    <a href="#contact" className="hidden md:block text-xs font-bold tracking-[0.3em] uppercase border-b border-[#0a0a12] pb-1 hover:opacity-50 transition-opacity">
                        View All Projects
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, i) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                                <img
                                    src={`https://picsum.photos/seed/gundam${work.id}/900/675`}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-2xl font-black text-[#0a0a12] mb-1">{work.title}</h4>
                                    <p className="text-gray-400 text-sm">{work.subtitle}</p>
                                </div>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{work.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a href="#contact" className="text-xs font-bold tracking-[0.3em] uppercase border-b border-[#0a0a12] pb-1">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
