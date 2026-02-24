import type { GlobalConfig } from 'payload'

export const Stats: GlobalConfig = {
    slug: 'stats',
    fields: [
        {
            name: 'items',
            type: 'array',
            minRows: 1,
            maxRows: 4,
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
