'use client';

import { motion } from 'framer-motion';

export default function ProfilePage() {
    const orders = [
        { id: 'ORD-9932', date: '2024.02.10', item: 'RX-93 Nu Gundam Ver.Ka', status: 'SHIPPED', price: '$850.00' },
        { id: 'ORD-9811', date: '2024.01.15', item: 'MSN-04 Sazabi Custom', status: 'BUILDING', price: '$1,200.00' },
    ];

    const commissions = [
        { id: 'COM-042', title: 'Unicorn Gundam PG Unleashed', stage: 'DEPOSIT_RECEIVED', update: 'Frame assembly starting soon.' },
    ];

    return (
        <main className="bg-brand-primary min-h-screen pt-40 pb-20 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12 lg:col-span-8">
                    <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase">User Dashboard</span>
                    <h1 className="font-sans font-black text-[10vw] lg:text-[7vw] leading-none text-white uppercase tracking-tighter">
                        Master <br /> Residency.
                    </h1>
                </div>
            </div>

            <div className="architectural-grid gap-16">
                {/* Order History */}
                <div className="col-span-12 lg:col-span-7">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 border-b border-white/10 pb-4">Acquisition History</h3>
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white/[0.02] border border-white/5 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-[#7d5fff]/30 transition-all">
                                <div>
                                    <span className="text-[9px] font-black text-white/30 block mb-1">{order.date} // {order.id}</span>
                                    <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">{order.item}</h4>
                                </div>
                                <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                    <span className="text-sm font-black text-white">{order.price}</span>
                                    <span className="text-[9px] font-black border border-white/20 px-3 py-1 text-brand-accent uppercase">{order.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Commissions */}
                <div className="col-span-12 lg:col-span-5">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 border-b border-white/10 pb-4">Active Commissions</h3>
                    <div className="space-y-4">
                        {commissions.map((comm) => (
                            <div key={comm.id} className="bg-white/[0.02] border border-white/5 p-8 hover:border-[#7d5fff]/30 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[9px] font-black text-[#7d5fff] tracking-widest">{comm.id}</span>
                                    <span className="text-[9px] font-black border border-[#7d5fff]/50 px-3 py-1 text-[#7d5fff] uppercase">{comm.stage.replace('_', ' ')}</span>
                                </div>
                                <h4 className="font-sans font-black text-xl text-white uppercase tracking-tighter mb-4">{comm.title}</h4>
                                <p className="text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                                    Current Update: <span className="text-white/70 italic">{comm.update}</span>
                                </p>
                                <button className="w-full mt-8 py-4 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                                    View Detailed Journal
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
