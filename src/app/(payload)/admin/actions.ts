'use server'

import { handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@/payload.config'

export async function serverFunctions(args: any) {
    return handleServerFunctions({
        ...args,
        config,
    })
}
