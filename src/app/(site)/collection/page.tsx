'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const inventory = [
    { id: 'rx-93', name: 'RX-93 Nu Gundam', series: 'MG Ver.Ka', artist: 'NONTEXT', image: '/images/hero_temp.jpg' },
    { id: 'sazabi', name: 'MSN-04 Sazabi', series: 'MG Ver.Ka', artist: 'NONTEXT', image: '/images/project_mars.jpg' },
    { id: 'unicorn', name: 'RX-0 Unicorn', series: 'PG Unleashed', artist: 'NONTEXT', image: '/images/project_theo.png' },
    { id: 'zaku', name: 'MS-06S Zaku II', series: 'custom', artist: 'NONTEXT', image: '/images/project_zaku.jpg' },
    { id: 'gp01', name: 'GP-01 Custom', series: 'RG', artist: 'NONTEXT', image: '/images/project_gp_custom.png' },
];

export default function CollectionPage() {
    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary">
            <div className="architectural-grid mb-20">
                <div className="col-span-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4"
                    >
                        ARCHIVE / DATA
                    </motion.span>
                    <h1 className="font-sans font-black text-[10vw] lg:text-[7vw] leading-none text-white uppercase tracking-tighter">
                        Inventory.
                    </h1>
                </div>
            </div>

            <div className="architectural-grid gap-y-12 gap-x-8">
                {inventory.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="col-span-12 md:col-span-6 lg:col-span-4 group transition-all"
                    >
                        <div className="aspect-square overflow-hidden mb-8 bg-black border border-white/5 group-hover:border-[#7d5fff]/30 transition-colors">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>
                        <div className="flex justify-between items-start mb-6 px-1">
                            <div>
                                <span className="text-[11px] font-black text-brand-accent block mb-2 uppercase tracking-widest">{item.series}</span>
                                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter group-hover:text-brand-accent transition-colors">
                                    {item.name}
                                </h3>
                                <div className="mt-3 pt-3 border-t border-white/5 inline-block">
                                    <span className="text-[9px] font-mono text-brand-secondary/30 block tracking-[0.2em]">ARTIST / {item.artist}</span>
                                </div>
                            </div>
                        </div>
                        <Link href={`/collection/${item.id}`} className="group/btn relative flex items-center justify-center w-full py-5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] transition-all overflow-hidden hover:border-brand-accent">
                            <span className="relative z-10 transition-colors group-hover/btn:text-white">More Details</span>
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#7d5fff] transition-all duration-300 group-hover/btn:h-full -z-0" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
