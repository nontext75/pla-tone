'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SuccessPage() {
    return (
        <main className="bg-brand-primary min-h-screen flex items-center justify-center p-6 text-center">
            <div className="max-w-2xl">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-8 uppercase">Transmission Success</span>
                    <h1 className="font-sans font-black text-[12vw] lg:text-[8vw] leading-none text-white uppercase tracking-tighter mb-12">
                        Acquired.
                    </h1>
                    <p className="text-white/40 text-sm uppercase tracking-widest leading-relaxed mb-16 mx-auto max-w-sm">
                        Your request has been received by the studio. A detailed brief has been sent to your registered terminal.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/profile" className="px-12 py-5 bg-[#7d5fff] text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                            View Order
                        </Link>
                        <Link href="/" className="px-12 py-5 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all">
                            Back to Gallery
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
