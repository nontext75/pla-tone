'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="bg-brand-primary min-h-screen text-brand-secondary pt-40 pb-24">
            <div className="architectural-grid">
                <div className="col-span-12 lg:col-span-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-metadata text-brand-accent mb-6 block">The Residency</span>
                        <h1 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
                            Crafting <br /> Legends
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-secondary/60 leading-relaxed font-sans max-w-2xl">
                            Pla.tone Studio is a Tokyo-based creative residency dedicated to the absolute pinnacle of mecha modeling. We believe every build is a legacy in plastic.
                        </p>
                    </motion.div>
                </div>

                <div className="col-span-12 grid grid-cols-12 gap-12 items-center">
                    <div className="col-span-12 lg:col-span-7 aspect-video bg-neutral-900 overflow-hidden">
                        <img src="/images/hero_temp.jpg" className="w-full h-full object-cover grayscale" alt="Studio" />
                    </div>
                    <div className="col-span-12 lg:col-span-5 space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black text-white tracking-tighter italic">Philosophy</h3>
                            <p className="text-brand-secondary/40 font-sans leading-relaxed">
                                We don't just build models; we engineer memories. Every panel line, custom shade, and decal placement is executed with surgical precision to honor the original mechanical design while breathing new life into it.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black text-white tracking-tighter italic">Process</h3>
                            <p className="text-brand-secondary/40 font-sans leading-relaxed">
                                From 3D-printed custom parts to multi-layer paint finishing, our workflow bridges the gap between traditional craftsmanship and modern manufacturing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
