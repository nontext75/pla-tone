import { motion } from 'framer-motion';
import Link from 'next/link';
import config from '@/payload.config';
import { getPayload } from 'payload';
import type { Project, ProjectImage } from '@/types';
import { logError } from '@/lib/errors';

export default async function CollectionPage() {
    let projects: Project[] = [];
    
    try {
        const payload = await getPayload({ config });
        const result = await payload.find({
            collection: 'projects',
            sort: '-createdAt',
        });
        projects = result.docs as Project[];
    } catch (error) {
        logError('Failed to fetch collection', error);
    }

    const getImageUrl = (image: unknown): string => {
        if (typeof image === 'object' && image !== null && 'url' in image) {
            return (image as ProjectImage).url;
        }
        if (typeof image === 'string') {
            return image;
        }
        return '/images/placeholder.jpg';
    };

    if (!projects || projects.length === 0) {
        return (
            <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black uppercase mb-4">No Projects Available</h1>
                    <p className="text-white/60 mb-8">Collection is being updated...</p>
                    <Link href="/" className="text-brand-accent hover:text-white transition-colors">← Back to Home</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary">
            <div className="architectural-grid mb-20">
                <div className="col-span-12">
                    <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">
                        ARCHIVE / DATA
                    </span>
                    <h1 className="font-sans font-black text-[10vw] lg:text-[7vw] leading-none text-white uppercase tracking-tighter">
                        Inventory.
                    </h1>
                </div>
            </div>

            <div className="architectural-grid gap-y-12 gap-x-8">
                {projects.map((item, i) => (
                    <motion.div
                        key={item.id}
                        className="col-span-12 md:col-span-6 lg:col-span-4 group transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <div className="aspect-square overflow-hidden mb-8 bg-black border border-white/5 group-hover:border-[#7d5fff]/30 transition-colors">
                            <img
                                src={getImageUrl(item.mainImage)}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex justify-between items-start mb-6 px-1">
                            <div>
                                <span className="text-[11px] font-black text-brand-accent block mb-2 uppercase tracking-widest">
                                    {item.specs?.series || 'CUSTOM'}
                                </span>
                                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter group-hover:text-brand-accent transition-colors">
                                    {item.title}
                                </h3>
                                <div className="mt-3 pt-3 border-t border-white/5 inline-block">
                                    <span className="text-[9px] font-mono text-brand-secondary/30 block tracking-[0.2em]">
                                        ARTIST / {item.artist || 'NONTEXT'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link 
                            href={`/collection/${item.slug}`} 
                            className="group/btn relative flex items-center justify-center gap-3 w-full h-[60px] border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] transition-all overflow-hidden hover:border-brand-accent"
                        >
                            <span className="relative z-10 transition-colors group-hover/btn:text-white">More Details</span>
                            <svg 
                                width="14" 
                                height="14" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#7d5fff] transition-all duration-300 group-hover/btn:h-full -z-0" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
