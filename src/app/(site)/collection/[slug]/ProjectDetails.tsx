'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetails({ project }: { project: any }) {
    const [activeTab, setActiveTab] = useState('specs');

    return (
        <main className="bg-brand-primary min-h-screen pt-32 pb-20 text-white">
            <div className="architectural-grid mb-12">
                <div className="col-span-12">
                    <Link href="/collection" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-[#7d5fff] transition-all">
                        <ArrowLeft size={14} /> Back to Inventory
                    </Link>
                </div>
            </div>

            <div className="architectural-grid gap-16 lg:gap-24">
                {/* Visual Gallery Segment - Long Scroll */}
                <div className="col-span-12 lg:col-span-7 space-y-8">
                    {project.gallery?.map((item: any, i: number) => (
                        <div key={i} className="w-full bg-white/5 border border-white/10 overflow-hidden group">
                            {item.image && typeof item.image !== 'string' && (
                                <img
                                    src={item.image.url}
                                    alt={item.image.alt || project.title}
                                    className="w-full h-auto object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                            <div className="p-4 bg-black/50 backdrop-blur-sm border-t border-white/10">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Fig. {String(i + 1).padStart(2, '0')}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technical Specs & Action Center - Sticky */}
                <div className="col-span-12 lg:col-span-5 relative">
                    <div className="sticky top-32">
                        <div className="mb-12">
                            <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase text-technical">
                                {project.specs?.series || 'Custom Build'}
                            </span>
                            <h1 className="font-sans font-black text-6xl lg:text-7xl uppercase tracking-tighter leading-none mb-6">
                                {project.title}
                            </h1>
                            <div className="flex items-center gap-6">
                                {project.price && <span className="text-3xl font-sans font-black text-white">${project.price.toLocaleString()}</span>}
                                <span className="text-[10px] font-black border border-white/20 px-4 py-2 uppercase tracking-widest text-white/40">
                                    {project.status === 'in_stock' ? 'In Stock' : project.status?.replace('_', ' ')}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Rich Text Description */}
                            {project.description && (
                                <div className="prose prose-invert prose-sm max-w-none text-white/60 leading-relaxed font-sans">
                                    {/* Simplified rendering for now, or use a proper RichText parser */}
                                    {/* In a real scenario, use @payloadcms/richtext-lexical/react */}
                                    <div dangerouslySetInnerHTML={{ __html: JSON.stringify(project.description) }} />
                                    {/* Note: Serializing Lexical JSON to HTML requires a parser. For now, showing placeholder or basic text if simple. */}
                                </div>
                            )}


                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4">
                                <button className="flex items-center justify-center gap-4 py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#7d5fff] hover:text-white transition-all group">
                                    <Zap size={14} className="fill-current" /> Instant Acquisition
                                </button>
                                <button className="flex items-center justify-center gap-4 py-6 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] hover:border-[#7d5fff] hover:text-[#7d5fff] transition-all">
                                    Request Custom Commission
                                </button>
                            </div>

                            {/* Technical Tabs */}
                            <div>
                                <div className="flex gap-10 border-b border-white/10 mb-8">
                                    {['specs', 'materials', 'process'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-4 text-[9px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-white' : 'text-white/30'}`}
                                        >
                                            {tab}
                                            {activeTab === tab && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7d5fff]" />}
                                        </button>
                                    ))}
                                </div>
                                <div className="text-[11px] text-white/50 uppercase tracking-widest leading-relaxed">
                                    {activeTab === 'specs' && (
                                        <ul className="space-y-4">
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Scale</span> <span className="text-white">{project.specs?.scale || 'N/A'}</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Total Build Time</span> <span className="text-white">{project.specs?.buildTime || 'N/A'}</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Paint Finish</span> <span className="text-white">{project.specs?.paintFinish || 'N/A'}</span></li>
                                        </ul>
                                    )}
                                    {activeTab === 'materials' && "Premium lacquers, metal thrusters, custom decal sets, and photo-etched components used throughout the frame."}
                                    {activeTab === 'process' && "Full inner frame detailing, custom panel line scribing, and multi-tone color modulation for maximum realistic scale."}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
