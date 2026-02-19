'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function CommissionPage() {
    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-white">
            <div className="architectural-grid mb-12">
                <div className="col-span-12">
                    <Link href="/collection" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-[#7d5fff] transition-all">
                        <ArrowLeft size={14} /> Back to Inventory
                    </Link>
                </div>
            </div>

            <div className="architectural-grid gap-20">
                <div className="col-span-12 lg:col-span-6">
                    <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">Direct Request</span>
                    <h1 className="font-sans font-black text-6xl lg:text-8xl uppercase tracking-tighter leading-none mb-10">
                        Request <br /> Commission.
                    </h1>
                    <p className="text-white/40 text-sm uppercase tracking-widest leading-relaxed max-w-md mb-12">
                        Enter into a collaborative phase with the studio. Each commission is a unique artifact, built to your specific technical requirements and aesthetic preferences.
                    </p>

                    <div className="space-y-6">
                        <div className="p-8 border border-white/5 bg-white/[0.02]">
                            <span className="text-[9px] font-black text-[#7d5fff] uppercase mb-2 block">Phase 01</span>
                            <h4 className="text-white font-sans font-black uppercase mb-2">Initial Review</h4>
                            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">Studio reviews your requirements and technical feasibility.</p>
                        </div>
                        <div className="p-8 border border-white/5 bg-white/[0.02]">
                            <span className="text-[9px] font-black text-white/30 uppercase mb-2 block">Phase 02</span>
                            <h4 className="text-white font-sans font-black uppercase mb-2">Allocation & Deposit</h4>
                            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">Project slot is reserved upon 50% technical deposit.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <form className="bg-white/[0.03] border border-white/10 p-12 space-y-10">
                        <div>
                            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Model Selection</label>
                            <select className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:border-[#7d5fff] outline-none appearance-none cursor-pointer">
                                <option className="bg-black">RX-93 NU GUNDAM VER.KA</option>
                                <option className="bg-black">MSN-04 SAZABI VER.KA</option>
                                <option className="bg-black">CUSTOM REQUEST (UNLISTED)</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Technical Requirements</label>
                            <textarea
                                className="w-full bg-transparent border border-white/20 p-6 text-white font-sans focus:border-[#7d5fff] outline-none h-40 resize-none"
                                placeholder="Specify custom color palettes, specific decal requirements, or modifications..."
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Target Completion</label>
                                <input type="text" placeholder="e.g. Q3 2024" className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:border-[#7d5fff] outline-none" />
                            </div>
                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Budget Range</label>
                                <select className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:border-[#7d5fff] outline-none appearance-none cursor-pointer">
                                    <option className="bg-black">$500 - $1,000</option>
                                    <option className="bg-black">$1,000 - $2,500</option>
                                    <option className="bg-black">$2,500+</option>
                                </select>
                            </div>
                        </div>

                        <button className="w-full py-6 mt-12 bg-[#7d5fff] text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                            <Send size={14} /> Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
