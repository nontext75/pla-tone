import React from 'react'

import { importMap } from './admin/importMap'
import config from '@/payload.config'
import '@payloadcms/next/css'
import '../../styles/admin.css' // Import custom admin styles
import './custom.css' // Carjoy Theme
import { RootLayout } from '@payloadcms/next/layouts'
import { serverFunctions } from './admin/actions'

const Layout = ({ children }: { children: React.ReactNode }) => (
    <RootLayout
        importMap={importMap}
        config={config}
        serverFunction={serverFunctions}
    >
        {children}
    </RootLayout>
)

export default Layout
