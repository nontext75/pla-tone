import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Projects } from './collections/Projects'
import { Media } from './collections/Media'
import { Inquiries } from './collections/Inquiries'
import { Hero } from './collections/Inquiries'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: 'users',
        meta: {
            titleSuffix: '- PLA-TONE Admin',
        },
    },
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3004',
    cors: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3004'],
    csrf: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3004'],
    collections: [
        {
            slug: 'users',
            auth: true,
            fields: [],
        },
        Projects,
        Media,
        Inquiries,
    ],
    globals: [
        Hero,
    ],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
})
