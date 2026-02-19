import config from '../../../payload.config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import ProjectDetails from './ProjectDetails'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'projects',
        where: {
            slug: {
                equals: slug
            }
        },
        limit: 1,
    })

    const project = docs[0]

    if (!project) {
        return notFound()
    }

    return <ProjectDetails project={project} />
}
