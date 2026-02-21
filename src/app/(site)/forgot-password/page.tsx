'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
    return (
        <main className="bg-brand-primary min-h-screen flex items-center justify-center pt-20">
            <div className="architectural-grid w-full">
                <div className="col-span-12 lg:col-span-6 lg:col-start-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-transparent p-12 flex flex-col items-center text-center"
                    >
                        <Link href="/login" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-brand-accent transition-colors mb-12 self-start">
                            <ArrowLeft size={14} /> Back to Login
                        </Link>

                        <div className="mb-16 w-full max-w-lg">
                            <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">Security Protocol</span>
                            <h1 className="text-5xl md:text-6xl font-sans font-black text-white uppercase tracking-tighter leading-tight">Recover <br /> Access.</h1>
                            <p className="mt-6 text-white/40 text-sm font-sans">Enter your registered email to receive a secure access reset code.</p>
                        </div>

                        <form className="space-y-10 w-full max-w-lg">
                            <div className="text-left">
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 block mb-3">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans focus:border-[#7d5fff] outline-none transition-colors text-lg"
                                    placeholder="studio@platone.live"
                                />
                            </div>

                            <button className="group/btn relative flex items-center justify-center gap-3 w-full h-[60px] mt-12 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-white overflow-hidden transition-all hover:border-brand-accent">
                                <span className="relative z-10 transition-colors group-hover/btn:text-white">Send Reset Link</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <div className="absolute inset-x-0 bottom-0 h-0 bg-[#7d5fff] transition-all duration-300 group-hover/btn:h-full -z-0" />
                            </button>
                        </form>

                        <div className="mt-16 text-[9px] font-black uppercase tracking-[0.2em] border-t border-white/5 pt-8 w-full max-w-lg text-white/20">
                            Technical Support: <a href="mailto:support@platone.live" className="hover:text-brand-accent transition-colors">support@platone.live</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
