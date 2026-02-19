'use client';

import { motion } from 'framer-motion';

export default function CheckoutPage() {
    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12">
                    <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">Secure Portal</span>
                    <h1 className="font-sans font-black text-[10vw] lg:text-[7vw] leading-none text-white uppercase tracking-tighter">
                        Checkout.
                    </h1>
                </div>
            </div>

            <div className="architectural-grid gap-20">
                <div className="col-span-12 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7 space-y-16">
                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10 border-b border-white/10 pb-4">Shipping Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input placeholder="Full Name" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#7d5fff] transition-colors" />
                                <input placeholder="Email Address" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#7d5fff] transition-colors" />
                                <input placeholder="Address" className="col-span-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#7d5fff] transition-colors" />
                            </div>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10 border-b border-white/10 pb-4">Payment Method</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="py-4 border border-[#7d5fff] text-[10px] font-black text-white hover:bg-[#7d5fff] transition-all">CREDIT CARD</button>
                                <button className="py-4 border border-white/10 text-[10px] font-black text-white/40 hover:border-white transition-all">PAYPAL</button>
                                <button className="py-4 border border-white/10 text-[10px] font-black text-white/40 hover:border-white transition-all">CRYPTO</button>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/[0.03] border border-white/10 p-12 sticky top-40">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10 pb-4">Summary</h3>
                            <div className="space-y-6 mb-12">
                                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                                    <span className="text-white/40">Subtotal</span>
                                    <span className="text-white">$850.00</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                                    <span className="text-white/40">Logistics</span>
                                    <span className="text-white font-sans">Calculated at Step 2</span>
                                </div>
                                <div className="pt-6 border-t border-white/10 flex justify-between items-center font-sans font-black text-2xl text-white">
                                    <span>Total</span>
                                    <span>$850.00</span>
                                </div>
                            </div>
                            <button className="w-full py-6 bg-[#7d5fff] text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                                Complete Acquisition
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
