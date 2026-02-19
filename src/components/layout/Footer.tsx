'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-primary text-brand-secondary border-t border-brand-secondary/20 pt-32 pb-12">
            <div className="architectural-grid gap-y-16">
                <div className="col-span-12 lg:col-span-6 mb-16 lg:mb-0">
                    <h2 className="font-sans font-black text-white text-[8vw] lg:text-[5vw] leading-[0.9] tracking-tighter mb-8">
                        Pla.tone <br />
                        Studio
                    </h2>
                    <p className="max-w-md text-sm text-brand-secondary/40">
                        Bespoke Gunpla artistry. <br />
                        Tokyo based modeling studio specializing in high-detail custom builds and dioramas.
                    </p>
                </div>

                <div className="col-span-6 lg:col-span-3 space-y-4">
                    <span className="text-[10px] font-black text-[#7d5fff] block mb-6 tracking-[0.4em]">SITEMAP</span>
                    <ul className="space-y-4 text-sm font-sans tracking-widest">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/collection" className="hover:text-white transition-colors">Collection</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">Studio</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="col-span-6 lg:col-span-3 space-y-4">
                    <span className="text-[10px] font-black text-[#7d5fff] block mb-6 tracking-[0.4em]">SOCIAL</span>
                    <ul className="space-y-4 text-sm font-sans tracking-widest">
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                    </ul>
                </div>

                <div className="col-span-12 mt-24 pt-8 border-t border-brand-secondary/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-secondary/40 uppercase tracking-widest">
                    <span>© 2024 PLA.TONE STUDIO. All Rights Reserved.</span>
                    <span className="mt-4 md:mt-0">Design by NONTET</span>
                </div>
            </div>
        </footer>
    );
}
