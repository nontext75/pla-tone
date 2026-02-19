'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
    const { isOpen, toggleCart, items, removeItem, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] bg-brand-primary border-l border-white/10 z-[201] p-12 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <h2 className="text-2xl font-sans font-black text-white uppercase tracking-tighter">Acquisition <br /> Cart.</h2>
                            <button onClick={toggleCart} className="text-white hover:text-[#7d5fff] transition-colors"><X size={24} /></button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-8">
                            {items.length === 0 ? (
                                <div className="text-white/40 text-center py-12 font-mono text-xs">CART IS EMPTY</div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="w-24 h-24 bg-white/5 border border-white/10 overflow-hidden">
                                            <img src={item.image} className="w-full h-full object-cover grayscale" alt={item.title} />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-[9px] font-black text-[#7d5fff] uppercase tracking-widest mb-1 block">{item.category}</span>
                                                    <h4 className="text-white font-sans font-black uppercase text-sm">{item.title}</h4>
                                                </div>
                                                <button onClick={() => removeItem(item.id)} className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-xs text-white/40">Qty: {item.quantity}</span>
                                                <span className="text-sm font-black text-white">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 space-y-8">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Total Acquisition</span>
                                <span className="text-2xl font-sans font-black text-white">${cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-6 bg-[#7d5fff] text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                                Initiate Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
