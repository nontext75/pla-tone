'use client'
import React from 'react'

const Logo: React.FC = () => {
    return (
        <div className="admin-logo" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 0'
        }}>
            <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
            }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>P</span>
            </div>
            <span style={{
                fontSize: '20px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: 'white',
                fontFamily: "'Outfit', sans-serif"
            }}>
                PLA-TONE
            </span>
        </div>
    )
}

export default Logo
