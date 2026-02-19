'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <main className="bg-brand-primary min-h-screen flex items-center justify-center pt-20">
            <div className="architectural-grid w-full">
                <div className="col-span-12 lg:col-span-4 lg:start-5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/[0.03] border border-white/10 p-12 backdrop-blur-xl"
                    >
                        <div className="mb-12">
                            <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">Identity Verification</span>
                            <h1 className="text-4xl font-sans font-black text-white uppercase tracking-tighter">Access <br /> Residency.</h1>
                        </div>

                        <form className="space-y-8">
                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:border-[#7d5fff] outline-none transition-colors"
                                    placeholder="studio@platone.live"
                                />
                            </div>
                            <div>
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Access Code</label>
                                <input
                                    type="password"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:border-[#7d5fff] outline-none transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button className="w-full py-6 mt-12 bg-[#7d5fff] text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                                Request Access
                            </button>
                        </form>

                        <div className="mt-12 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em]">
                            <Link href="/signup" className="text-white/40 hover:text-white transition-colors">Apply for Residency</Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">Forgot Credentials?</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
