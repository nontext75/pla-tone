'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const inventory = [
    { id: 'rx-93', name: 'RX-93 Nu Gundam', series: 'MG Ver.Ka', price: 'COMPLETED', image: '/images/hero_temp.jpg' },
    { id: 'sazabi', name: 'MSN-04 Sazabi', series: 'MG Ver.Ka', price: 'IN PROGRESS', image: '/images/project_mars.jpg' },
    { id: 'unicorn', name: 'RX-0 Unicorn', series: 'PG Unleashed', price: 'ARCHIVED', image: '/images/project_theo.png' },
    { id: 'zaku', name: 'MS-06S Zaku II', series: 'custom', price: 'COMPLETED', image: '/images/project_zaku.jpg' },
    { id: 'gp01', name: 'GP-01 Custom', series: 'RG', price: 'AVAILABLE', image: '/images/project_gp_custom.png' },
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
                        className="col-span-12 md:col-span-6 lg:col-span-4 group border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#7d5fff]/30"
                    >
                        <div className="aspect-square overflow-hidden mb-6 bg-black">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-[10px] font-black opacity-40 block mb-1 uppercase tracking-widest">{item.series}</span>
                                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tighter">{item.name}</h3>
                            </div>
                            <span className="text-[9px] font-black border border-white/20 px-3 py-1 text-brand-accent">{item.price}</span>
                        </div>
                        <Link href={`/collection/${item.id}`} className="block w-full text-center py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                            View Specs
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
