import React from 'react'

import { importMap } from './admin/importMap'
import config from '../../payload.config'
import '@payloadcms/next/css'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'

const Layout = ({ children }: { children: React.ReactNode }) => (
    <RootLayout
        importMap={importMap}
        config={config}
        serverFunction={handleServerFunctions}
    >
        {children}
    </RootLayout>
)

export default Layout
