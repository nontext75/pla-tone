'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="bg-brand-primary min-h-screen text-brand-secondary pt-40 pb-24">
            <div className="architectural-grid">
                <div className="col-span-12 lg:col-span-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
                            Let's <br /> Build
                        </h1>
                        <p className="text-brand-secondary/60 font-sans uppercase tracking-widest text-xs mb-16">
                            Open for custom commissions and creative collaborations.
                        </p>

                        <div className="space-y-12">
                            <div>
                                <span className="text-metadata text-brand-accent block mb-2">Electronic Mail</span>
                                <a href="mailto:studio@platone.jp" className="text-3xl font-black text-white hover:text-brand-accent transition-colors">studio@platone.jp</a>
                            </div>
                            <div>
                                <span className="text-metadata text-brand-accent block mb-2">Location</span>
                                <p className="text-3xl font-black text-white">Shibuya, Tokyo // Japan</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <form className="space-y-8 bg-white/5 p-12 backdrop-blur-sm border border-white/10">
                        <div className="space-y-2">
                            <label className="text-metadata">Your Identity</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-accent outline-none text-white transition-colors" placeholder="Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-metadata">Communication Path</label>
                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-accent outline-none text-white transition-colors" placeholder="Email" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-metadata">Brief Description</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-accent outline-none text-white transition-colors resize-none" placeholder="How can we help?" />
                        </div>
                        <button className="w-full py-6 bg-brand-accent text-white text-[11px] font-black tracking-[0.4em] uppercase hover:bg-[#9175ff] transition-all mt-12">
                            Transmit Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
