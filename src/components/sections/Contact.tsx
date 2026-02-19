'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormState({ name: '', email: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="contact" className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#ff3b30] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a12] mb-8">
                            LET'S WORK<br />TOGETHER
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-400 text-lg max-w-xl mx-auto"
                    >
                        Ready to bring your Gundam vision to life? Get in touch for a custom quote.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-xl mx-auto"
                >
                    <AnimatePresence mode='wait'>
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-[#0a0a12] text-white p-12 text-center"
                            >
                                <span className="text-[#ff3b30] text-4xl mb-4 block">✓</span>
                                <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">Message Received</h4>
                                <p className="text-gray-400">We will initiate communication shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#0a0a12]">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full bg-[#f4f4f4] border-none px-4 py-4 text-sm focus:ring-2 focus:ring-[#ff3b30] outline-none transition-all"
                                            placeholder="PILOT NAME"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#0a0a12]">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-[#f4f4f4] border-none px-4 py-4 text-sm focus:ring-2 focus:ring-[#ff3b30] outline-none transition-all"
                                            placeholder="CONTACT@DOMAIN.COM"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#0a0a12]">Mission Brief</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                        className="w-full bg-[#f4f4f4] border-none px-4 py-4 text-sm focus:ring-2 focus:ring-[#ff3b30] outline-none transition-all resize-none"
                                        placeholder="DESCRIBE YOUR REQUEST..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-5 bg-[#0a0a12] text-white font-bold text-sm tracking-widest hover:bg-[#ff3b30] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'TRANSMITTING...' : 'INITIATE CONTACT'}
                                </button>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-16 flex justify-center gap-12"
                >
                    <a href="#" className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#ff3b30] transition-colors">INSTAGRAM</a>
                    <a href="#" className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#ff3b30] transition-colors">TWITTER</a>
                    <a href="#" className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#ff3b30] transition-colors">YOUTUBE</a>
                </motion.div>
            </div>
        </section>
    );
}
