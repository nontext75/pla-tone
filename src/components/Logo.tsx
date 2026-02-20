'use client'
import React from 'react'

export const Logo: React.FC = () => {
    return (
        <div className="logo" style={{ maxWidth: '180px' }}>
            <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* White background box for high contrast */}
                <rect width="180" height="50" fill="white" />
                {/* Inner black border */}
                <rect x="5" y="5" width="170" height="40" stroke="black" strokeWidth="2" />
                {/* Text */}
                <text x="90" y="33" fill="black" fontFamily="sans-serif" fontWeight="900" fontSize="24" letterSpacing="0.05em" textAnchor="middle">PLA-TONE</text>
            </svg>
        </div>
    )
}
