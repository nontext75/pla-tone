import type { CollectionConfig } from 'payload'
import type { GlobalConfig } from 'payload'

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
                condition: (data: any) => data?.type === 'project',
            },
        },
        {
            name: 'customContent',
            type: 'group',
            admin: {
                condition: (data: any) => data?.type === 'custom',
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
