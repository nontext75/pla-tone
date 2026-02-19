'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    category: string;
};

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: string) => void;
    toggleCart: () => void;
    cartTotal: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([
        // Initial sample item for demonstration
        {
            id: 'rx-93',
            title: 'RX-93 Nu Gundam',
            price: 850.00,
            image: '/images/hero_temp.jpg',
            quantity: 1,
            category: 'MG Ver.Ka'
        }
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
        setItems(current => {
            const existingItem = current.find(item => item.id === newItem.id);
            if (existingItem) {
                return current.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...current, { ...newItem, quantity: 1 }];
        });
        setIsOpen(true);
    };

    const removeItem = (id: string) => {
        setItems(current => current.filter(item => item.id !== id));
    };

    const toggleCart = () => setIsOpen(prev => !prev);

    const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, isOpen, addItem, removeItem, toggleCart, cartTotal, itemCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
