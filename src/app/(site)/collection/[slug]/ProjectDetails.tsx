'use client';

import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';
import type { Project, ProjectGalleryItem } from '@/types';

interface ProjectDetailsProps {
    project: Project;
}

const isImageObject = (image: unknown): image is { url: string; alt?: string } => {
    return typeof image === 'object' && image !== null && 'url' in image;
};

const GalleryImage = memo(({ item, index, title }: { item: ProjectGalleryItem; index: number; title: string }) => {
    if (!item.image) return null;
    
    const imageUrl = isImageObject(item.image) ? item.image.url : null;
    const imageAlt = isImageObject(item.image) ? item.image.alt || title : title;
    
    if (!imageUrl) return null;

    return (
        <div className="w-full bg-white/5 border border-white/10 overflow-hidden group">
            <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="p-4 bg-black/50 backdrop-blur-sm border-t border-white/10">
                <span className="text-[9px] font-black uppercase tracking-widest text-white/60">
                    Fig. {String(index + 1).padStart(2, '0')}
                </span>
            </div>
        </div>
    );
});

GalleryImage.displayName = 'GalleryImage';

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const [activeTab, setActiveTab] = useState<'specs' | 'materials' | 'process'>('specs');

    if (!project) {
        return (
            <main className="bg-brand-primary min-h-screen pt-32 pb-20 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-black uppercase">Project Not Found</h1>
                    <Link href="/collection" className="text-brand-accent mt-4 inline-block">← Back to Inventory</Link>
                </div>
            </main>
        );
    }

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
                    {project.gallery && project.gallery.length > 0 ? (
                        project.gallery.map((item, i) => (
                            <GalleryImage key={i} item={item} index={i} title={project.title} />
                        ))
                    ) : (
                        <div className="w-full bg-white/5 border border-white/10 p-12 text-center">
                            <span className="text-white/40">No gallery images available</span>
                        </div>
                    )}
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
                                {project.price !== undefined && (
                                    <span className="text-3xl font-sans font-black text-white">
                                        ${project.price.toLocaleString()}
                                    </span>
                                )}
                                <span className="text-[10px] font-black border border-white/20 px-4 py-2 uppercase tracking-widest text-white/40">
                                    {project.status === 'in_stock' ? 'In Stock' : project.status?.replace('_', ' ').toUpperCase() || 'UNAVAILABLE'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Description */}
                            {project.description && (
                                <div className="text-white/60 leading-relaxed font-sans text-sm">
                                    {typeof project.description === 'string' ? (
                                        <p>{project.description}</p>
                                    ) : (
                                        <p>Premium Gundam model customization and artistry</p>
                                    )}
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4">
                                <Link href="/checkout" className="group/btn relative flex items-center justify-center gap-3 h-[60px] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] overflow-hidden transition-all hover:border-brand-accent">
                                    <span className="relative z-10 transition-colors group-hover/btn:text-white flex items-center gap-3">
                                        <Zap size={14} className="fill-current" /> Instant Acquisition
                                    </span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    <div className="absolute inset-x-0 bottom-0 h-0 bg-brand-accent transition-all duration-300 group-hover/btn:h-full -z-0" />
                                </Link>
                                <Link href="/contact" className="group/btn relative flex items-center justify-center gap-3 h-[60px] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] overflow-hidden transition-all hover:border-brand-accent">
                                    <span className="relative z-10 transition-colors group-hover/btn:text-white">Request Custom Commission</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    <div className="absolute inset-x-0 bottom-0 h-0 bg-brand-accent transition-all duration-300 group-hover/btn:h-full -z-0" />
                                </Link>
                            </div>

                            {/* Technical Tabs */}
                            <div>
                                <div className="flex gap-10 border-b border-white/10 mb-8">
                                    {(['specs', 'materials', 'process'] as const).map((tab) => (
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
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Scale</span>
                                                <span className="text-white">{project.specs?.scale || 'N/A'}</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Total Build Time</span>
                                                <span className="text-white">{project.specs?.buildTime || 'N/A'}</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Paint Finish</span>
                                                <span className="text-white">{project.specs?.paintFinish || 'N/A'}</span>
                                            </li>
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
