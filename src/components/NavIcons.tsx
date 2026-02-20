'use client'
import React from 'react'
import { Layers, Image, MessageSquare, Star, User } from 'lucide-react'

// Wrapper to ensure consistent sizing/styling if needed
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div style={{ color: 'var(--galaxy-text-muted)', width: 20, height: 20 }}>
        {children}
    </div>
)

export const ProjectIcon = () => <IconWrapper><Layers size={20} /></IconWrapper>
export const MediaIcon = () => <IconWrapper><Image size={20} /></IconWrapper>
export const InquiryIcon = () => <IconWrapper><MessageSquare size={20} /></IconWrapper>
export const HeroIcon = () => <IconWrapper><Star size={20} /></IconWrapper>
export const UserIcon = () => <IconWrapper><User size={20} /></IconWrapper>
