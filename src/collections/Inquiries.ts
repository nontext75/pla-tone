import type { CollectionConfig } from 'payload'


export const Inquiries: CollectionConfig = {
    slug: 'inquiries',
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'message',
            type: 'textarea',
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Unread', value: 'unread' },
                { label: 'Read', value: 'read' },
                { label: 'Replied', value: 'replied' },
            ],
            defaultValue: 'unread',
        },
    ],
}


