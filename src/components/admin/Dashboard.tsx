'use client'
import React from 'react'
import { Card } from '@payloadcms/ui'

const Dashboard: React.FC = () => {
    return (
        <div className="custom-dashboard" style={{ padding: '2rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(to right, #fff, #9ca3af)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Welcome back, Master. 👑
                </h1>
                <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>
                    오늘도 마스터의 놀라운 아이디어를 실현할 준비가 되었습니다.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                <div className="dashboard__card" style={{
                    background: 'rgba(17, 24, 39, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{ color: '#6366f1', marginBottom: '1rem' }}>Projects</h3>
                    <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>포트폴리오 기록을 한눈에 관리하고 새로운 걸작을 등록하세요.</p>
                    <a href="/admin/collections/projects" className="btn btn--style-primary" style={{ textDecoration: 'none', display: 'inline-block', padding: '0.5rem 1rem' }}>
                        Manage Projects
                    </a>
                </div>

                <div className="dashboard__card" style={{
                    background: 'rgba(17, 24, 39, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{ color: '#a855f7', marginBottom: '1rem' }}>Inquiries</h3>
                    <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>마스터에게 도착한 소중한 문의 메시지들을 확인하세요.</p>
                    <a href="/admin/collections/inquiries" className="btn btn--style-primary" style={{ textDecoration: 'none', display: 'inline-block', padding: '0.5rem 1rem' }}>
                        View Messages
                    </a>
                </div>
            </div>

            <style jsx>{`
        .dashboard__card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
        </div>
    )
}

export default Dashboard
