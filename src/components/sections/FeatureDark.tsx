'use client';

import { motion } from 'framer-motion';
import { Paintbrush, Hexagon, Component, Zap } from 'lucide-react';

const features = [
    {
        icon: <Paintbrush className="w-6 h-6" />,
        title: "Custom Painting",
        desc: "Automotive-grade lacquer finishes with multi-layer shading and weathering effects."
    },
    {
        icon: <Hexagon className="w-6 h-6" />,
        title: "Metal Parts",
        desc: "Integration of photo-etched parts and metal thrusters for enhanced realism."
    },
    {
        icon: <Component className="w-6 h-6" />,
        title: "Detailing",
        desc: "Precision panel lining, water decals, and scratch-build modifications."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "LED Systems",
        desc: "Custom circuit design for dynamic lighting effects and remote control."
    }
];

export function FeatureDark() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#0a0a12] text-[#f5f5f0]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                        CORE<br />
                        <span className="text-[#ff3b30]">SERVICES</span>
                    </h2>
                    <p className="text-white/40 max-w-sm text-sm leading-relaxed mt-6 md:mt-0">
                        Our workshop is equipped with state-of-the-art tools to handle any level of customization request.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 border border-white/5 hover:border-[#ff3b30]/50 hover:bg-white/5 transition-all duration-300"
                        >
                            <div className="text-[#ff3b30] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
