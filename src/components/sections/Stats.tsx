'use client';

import { motion } from 'framer-motion';

const stats = [
    { label: 'Years Active', value: '04' },
    { label: 'Models Built', value: '142' },
    { label: 'Commissions', value: '89' },
    { label: 'Awards', value: '12' },
];

export default function Stats() {
    return (
        <section className="bg-brand-secondary py-24 text-brand-primary">
            <div className="architectural-grid">
                <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex flex-col items-center justify-center border-l first:border-l-0 border-brand-primary/10 md:border-l md:first:border-l-0"
                        >
                            <span className="text-[10vw] md:text-[6vw] font-sans font-black leading-none tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-metadata mt-4">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
