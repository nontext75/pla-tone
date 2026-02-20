'use client'
import React from 'react'

export const Icon: React.FC = () => {
    return (
        <div className="icon" style={{ width: '40px', height: '40px' }}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" fill="white" />
                <rect x="5" y="5" width="30" height="30" stroke="black" strokeWidth="2" />
                <text x="20" y="28" fill="black" fontFamily="sans-serif" fontWeight="900" fontSize="24" textAnchor="middle">P</text>
            </svg>
        </div>
    )
}
