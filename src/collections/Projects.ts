import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
        },
        {
            type: 'ui',
            name: 'bulkUpload',
            admin: {
                components: {
                    Field: '/components/payload/BulkUpload',
                },
            },
        },
        {
            name: 'gallery',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'description',
            type: 'richText',
        },
        {
            name: 'specs',
            type: 'group',
            fields: [
                {
                    name: 'scale',
                    type: 'text',
                },
                {
                    name: 'buildTime',
                    type: 'text',
                },
                {
                    name: 'paintFinish',
                    type: 'text',
                },
                {
                    name: 'series',
                    type: 'text', // e.g., MG Ver.Ka
                },
            ],
        },
        {
            name: 'price',
            type: 'number',
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'In Stock', value: 'in_stock' },
                { label: 'Sold Out', value: 'sold_out' },
                { label: 'Commission', value: 'commission' },
            ],
            defaultValue: 'in_stock',
        },
    ],
}
