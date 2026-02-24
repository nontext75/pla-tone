import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
    slug: 'hero',
    fields: [
        {
            name: 'type',
            type: 'radio',
            options: [
                { label: 'Project', value: 'project' },
                { label: 'Custom', value: 'custom' },
            ],
            defaultValue: 'custom',
            admin: {
                layout: 'horizontal',
            },
        },
        {
            name: 'project',
            type: 'relationship',
            relationTo: 'projects',
            admin: {
                condition: (data: Record<string, unknown>) => data?.type === 'project',
            },
        },
        {
            name: 'customContent',
            type: 'group',
            admin: {
                condition: (data: Record<string, unknown>) => data?.type === 'custom',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'subtitle',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'link',
                    type: 'text',
                },
            ],
        },
    ],
}
