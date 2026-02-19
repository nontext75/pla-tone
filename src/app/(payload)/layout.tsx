import React from 'react'

import { importMap } from './admin/importMap'
import config from '../../payload.config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'

const Layout = async ({ children }: { children: React.ReactNode }) => (
    <RootLayout
        importMap={importMap}
        config={config}
    >
        {children}
    </RootLayout>
)

export default Layout
