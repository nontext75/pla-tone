import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import VerticalGallery from '@/components/sections/VerticalGallery';
import config from '@/payload.config';
import { getPayload } from 'payload';
import type { HeroGlobal, StatsGlobal, Project } from '@/types';
import { logError } from '@/lib/errors';

export const metadata: Metadata = {
    title: "PLA.TONE | Bespoke Gundam Artistry",
    description: "Experience the pinnacle of mecha modeling. Custom painted builds, precision engineering, and luxury aesthetics for the discerning collector.",
    openGraph: {
        title: "PLA.TONE | Bespoke Gundam Artistry",
        description: "Redefining the art of mecha modeling. Precision engineering meets luxury aesthetics.",
        images: ['/images/project_gp_custom.png'],
        type: 'website',
    },
};

export default async function Home() {
    let hero: HeroGlobal | null = null;
    let stats: StatsGlobal | null = null;
    let featuredProjects: Project[] = [];

    try {
        const payload = await getPayload({ config });

        // Fetch Hero Data
        try {
            hero = await payload.findGlobal({ slug: 'hero' }) as HeroGlobal | null;
        } catch (error) {
            logError('Failed to fetch hero data', error);
        }

        // Fetch Stats Data
        try {
            stats = await payload.findGlobal({ slug: 'stats' }) as StatsGlobal | null;
        } catch (error) {
            logError('Failed to fetch stats data', error);
        }

        // Fetch Featured Projects
        try {
            const result = await payload.find({
                collection: 'projects',
                where: {
                    isFeatured: {
                        equals: true
                    }
                },
                sort: '-createdAt',
                limit: 3,
            });
            featuredProjects = result.docs as Project[];
        } catch (error) {
            logError('Failed to fetch featured projects', error);
        }
    } catch (error) {
        logError('Failed to initialize payload', error);
    }

    return (
        <main className="bg-brand-primary min-h-screen text-brand-secondary selection:bg-brand-accent selection:text-white">
            <Hero data={hero} />
            <Stats data={stats} />
            <VerticalGallery projects={featuredProjects} />
        </main>
    );
}
