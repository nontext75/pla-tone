import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import VerticalGallery from '@/components/sections/VerticalGallery';

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

export default function Home() {
    return (
        <main className="bg-brand-primary min-h-screen text-brand-secondary selection:bg-brand-accent selection:text-white">
            <Hero />
            <Stats />
            <VerticalGallery />
        </main>
    );
}
