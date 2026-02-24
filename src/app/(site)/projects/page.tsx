import { motion } from 'framer-motion';
import Link from 'next/link';
import config from '@/payload.config';
import { getPayload } from 'payload';
import type { Project, ProjectImage } from '@/types';
import { logError } from '@/lib/errors';

export default async function ProjectsPage() {
    let projects: Project[] = [];
    
    try {
        const payload = await getPayload({ config });
        const result = await payload.find({
            collection: 'projects',
            sort: '-year',
        });
        projects = result.docs as Project[];
    } catch (error) {
        logError('Failed to fetch projects', error);
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
                    <p className="text-white/60 mb-8">New works coming soon...</p>
                    <Link href="/" className="text-brand-accent hover:text-white transition-colors">← Back to Home</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12">
                    <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">
                        CHRONOLOGY
                    </span>
                    <h1 className="font-sans font-black text-[10vw] lg:text-[7vw] leading-none text-white uppercase tracking-tighter">
                        Works.
                    </h1>
                </div>
            </div>

            <div className="architectural-grid space-y-32">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        className="col-span-12 group relative h-[60vh] overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <img
                            src={getImageUrl(project.mainImage)}
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                            alt={project.title}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                            <div>
                                <span className="text-[10px] font-black text-[#7d5fff] block mb-2 tracking-[0.5em]">
                                    {project.specs?.series || 'CUSTOM'}
                                </span>
                                <h3 className="text-4xl lg:text-6xl font-sans font-black text-white uppercase tracking-tighter">
                                    {project.title}
                                </h3>
                            </div>
                            <Link 
                                href={`/collection/${project.slug}`} 
                                className="group/btn relative flex items-center justify-center gap-3 px-12 h-[60px] border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden transition-all hover:border-brand-accent"
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
                                <div className="absolute inset-x-0 bottom-0 h-0 bg-brand-accent transition-all duration-300 group-hover/btn:h-full -z-0" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
