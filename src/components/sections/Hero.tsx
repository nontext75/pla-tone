'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-brand-primary text-brand-secondary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/project_gp_custom.png"
                    alt="Gundam Studio Background"
                    className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
            </div>

            {/* Content */}
            <div className="architectural-grid relative z-10 h-full">
                <div className="col-span-12 flex h-full flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-4 md:space-y-8"
                    >
                        <div className="flex items-center gap-4 overflow-hidden">
                            <motion.span
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-[1px] w-12 bg-brand-accent md:w-24"
                            />
                            <span className="text-metadata text-brand-secondary/80">EST. 2024 / TOKYO</span>
                        </div>

                        <h1 className="text-monumental font-sans text-white mix-blend-difference tracking-tighter">
                            PLA.TONE <br />
                            STUDIO
                        </h1>

                        <p className="max-w-md text-sm leading-relaxed text-brand-secondary/80 md:text-base font-sans">
                            Redefining the art of mecha modeling. <br />
                            Precision engineering meets luxury aesthetics.
                        </p>

                        <div className="pt-8">
                            <Link
                                href="/collection"
                                className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden border border-brand-secondary/20 bg-transparent px-10 h-[60px] min-w-[240px] text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary transition-all hover:border-brand-accent"
                            >
                                <span className="relative z-10 transition-colors group-hover/btn:text-white">More Details</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <div className="absolute inset-x-0 bottom-0 h-0 bg-brand-accent transition-all duration-300 group-hover/btn:h-full -z-0" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-12 left-0 right-0 w-full px-6 md:px-12">
                    <div className="grid grid-cols-12 w-full border-t border-brand-secondary/20 pt-6">
                        <div className="col-span-6 md:col-span-3">
                            <span className="text-metadata block text-brand-secondary/60">System Status</span>
                            <span className="text-[10px] uppercase text-brand-accent">Operational</span>
                        </div>
                        <div className="col-span-6 md:col-span-3 text-right md:text-left">
                            <span className="text-metadata block text-brand-secondary/60">Current Build</span>
                            <span className="text-[10px] uppercase text-brand-secondary">RX-93 Nu Gundam</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
