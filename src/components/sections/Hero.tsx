'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ data }: { data?: any }) {
    const heroContent = data?.type === 'project' && data.project
        ? {
            title: data.project.title,
            subtitle: data.project.specs?.series || 'MECHANICAL AESTHETICS',
            image: typeof data.project.mainImage === 'object' ? data.project.mainImage.url : data.project.mainImage,
            link: `/collection/${data.project.slug}`
        }
        : {
            title: data?.customContent?.title || 'MECHANICAL\nAESTHETICS',
            subtitle: data?.customContent?.subtitle || 'Bespoke Mecha Model Artistry',
            image: typeof data?.customContent?.image === 'object' ? data.customContent.image.url : (data?.customContent?.image || '/images/hero_temp.jpg'),
            link: data?.customContent?.link || '/collection'
        };

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-brand-primary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroContent.image}
                    alt="Hero Background"
                    className="h-full w-full object-cover opacity-60 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 via-transparent to-brand-primary" />
            </div>

            <div className="container-nontet relative z-10 h-full flex flex-col justify-center">
                <div className="col-span-12 lg:col-span-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="mb-6 block text-technical text-brand-accent">
                            {heroContent.subtitle}
                        </span>
                        <h1 className="text-display mb-12 text-white whitespace-pre-line uppercase">
                            {heroContent.title}
                        </h1>

                        <div className="pt-8">
                            <Link
                                href={heroContent.link}
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
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Scroll to Explore</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-brand-accent to-transparent" />
            </motion.div>
        </section>
    );
}
