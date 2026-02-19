'use client';

import { motion } from 'framer-motion';

const services = [
    { title: 'Painting', desc: 'Premium hand-painted finishes using high-quality lacquers and airbrush techniques for a factory-perfect look.', num: '01' },
    { title: 'Detail Up', desc: 'Precision part detailing with custom decals, panel lining, and selective painting for enhanced realism.', num: '02' },
    { title: 'Custom', desc: 'Bespoke builds tailored to your vision — from color schemes to full modifications.', num: '03' },
];

export function Service() {
    return (
        <section id="service" className="py-32 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#ff3b30] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">What We Do</span>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a12]">SERVICES</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="group bg-white p-12 border border-gray-100 hover:border-[#ff3b30] transition-colors duration-300"
                        >
                            <span className="text-6xl font-black text-gray-100 mb-8 block">{service.num}</span>
                            <h4 className="text-2xl font-bold text-[#0a0a12] mb-4">{service.title}</h4>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0a0a12] group-hover:text-[#ff3b30] transition-colors">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
