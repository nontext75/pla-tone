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
            name: 'isFeatured',
            type: 'checkbox',
            label: 'Show on Main Gallery',
            defaultValue: false,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'mainImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'artist',
            type: 'text',
            defaultValue: 'NONTEXT',
        },
        {
            name: 'year',
            type: 'text',
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
                    name: 'series',
                    type: 'text',
                    admin: {
                        description: 'e.g. MG Ver.Ka'
                    }
                },
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
