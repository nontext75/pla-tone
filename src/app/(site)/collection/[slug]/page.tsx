import config from '@/payload.config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import ProjectDetails from './ProjectDetails'

const staticProjects: Record<string, any> = {
    'rx-93': {
        title: 'RX-93 Nu Gundam',
        slug: 'rx-93',
        specs: {
            series: 'MG Ver.Ka',
            scale: '1/100',
            buildTime: '120 Hours',
            paintFinish: 'Super Matte',
        },
        price: 850,
        status: 'in_stock',
        gallery: [
            { image: { url: '/images/hero_temp.jpg', alt: 'Nu Gundam Main' } },
            { image: { url: '/images/project_gp_custom.png', alt: 'Nu Gundam Side' } },
        ],
        description: 'The RX-93 Nu Gundam is Amuro Ray’s final mobile suit, reconstructed with supreme precision and custom panel lining.'
    },
    'sazabi': {
        title: 'MSN-04 Sazabi',
        slug: 'sazabi',
        specs: {
            series: 'MG Ver.Ka',
            scale: '1/100',
            buildTime: '150 Hours',
            paintFinish: 'Gloss / Metallic',
        },
        price: 950,
        status: 'in_stock',
        gallery: [
            { image: { url: '/images/project_mars.jpg', alt: 'Sazabi' } },
        ],
        description: 'Char Aznable’s legendary custom suit, finished with multi-tone red and custom decals.'
    },
    'unicorn': {
        title: 'RX-0 Unicorn',
        slug: 'unicorn',
        specs: {
            series: 'PG Unleashed',
            scale: '1/60',
            buildTime: '200 Hours',
            paintFinish: 'Pearl White',
        },
        price: 1200,
        status: 'commission',
        gallery: [
            { image: { url: '/images/project_theo.png', alt: 'Unicorn Gundam' } },
        ],
        description: 'The ultimate PG Unleashed Unicorn, featuring full LED integration and high-detail frame painting.'
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config })

    let { docs } = await payload.find({
        collection: 'projects',
        where: {
            slug: {
                equals: slug
            }
        },
        limit: 1,
    })

    let project = docs[0]

    // Fallback to static data if not found in DB
    if (!project && staticProjects[slug]) {
        project = staticProjects[slug];
    }

    if (!project) {
        return notFound()
    }

    return <ProjectDetails project={project} />
}
