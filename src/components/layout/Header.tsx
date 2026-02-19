'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { toggleCart, itemCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Creating local state for mobile menu if needed, or just reusing the existing pattern if any.
    // The original code used isCartOpen for both? No, there was a mobile menu icon placeholder.
    // Let's just focus on cart for now.

    const mobileMenuToggle = () => {
        // Placeholder for mobile menu logic if separate from cart
        console.log("Mobile menu toggle");
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 text-white">
            <div className="flex items-start justify-between border-b border-white/20 pb-6">
                {/* Logo - Fixed Left */}
                <Link href="/" className="group flex flex-col items-start gap-1">
                    <div className="font-sans font-black text-2xl leading-none tracking-tighter uppercase text-brand-accent">
                        PLA.TONE
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-[1px] w-8 bg-[#7d5fff] transition-all group-hover:w-12"></span>
                        <span className="font-sans font-bold text-[9px] tracking-[0.3em] opacity-40">STUDIO</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Right Aligned */}
                <nav className="hidden md:flex items-center gap-12">
                    {siteConfig.navigation.map((item, i) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-[10px] font-bold tracking-[0.3em] font-sans uppercase hover:opacity-100 opacity-60 transition-opacity"
                        >
                            <span className="mr-2 text-brand-accent opacity-0 hover:opacity-100 transition-opacity absolute -left-4">/</span>
                            {item.name}
                        </Link>
                    ))}

                    <div className="h-4 w-[1px] bg-white/30 mx-4"></div>

                    <div className="flex gap-6">
                        <button
                            onClick={toggleCart}
                            className="text-[10px] font-bold tracking-[0.3em] font-sans uppercase cursor-pointer hover:text-[#7d5fff] transition-all"
                        >
                            CART({itemCount})
                        </button>
                        <Link href="/login" className="text-[10px] font-bold tracking-[0.3em] font-sans uppercase hover:text-[#7d5fff] transition-all">
                            LOGIN
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Icon (Placeholder) */}
                <div className="md:hidden flex gap-6 items-center">
                    <button onClick={toggleCart} className="text-[10px] font-black uppercase tracking-widest text-white/60">Cart</button>
                    <div className="space-y-1.5 cursor-pointer">
                        <span className="block w-8 h-[2px] bg-white"></span>
                        <span className="block w-8 h-[2px] bg-white"></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

