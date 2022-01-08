import Main from '@/components/layout/Main'
import ProjectDetail from '@/components/Project/ProjectDetail'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { clientAxios } from 'services/clientAxios'
import { IProject } from 'types'
import { useSession } from 'next-auth/react'

export default function ProjectDetailsPage({ project }: { project: IProject }) {
  const router = useRouter()
  const { data: session } = useSession()

  const handleDelete = async (id: number) => {
    try {
      const res = await clientAxios.delete(`/projects/${id}`)
      const data = await res.data
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      router.replace('/projects')
    }
  }

  return (
    <Main title={project.title}>
      <ProjectDetail project={project} />

      {session && (
        <div className="space-x-5">
          <button
            className="mt-5 rounded-full px-4 py-3 bg-red-600 text-white"
            onClick={() => handleDelete(project.id)}
          >
            Delete Project
          </button>
          <button className="mt-5 rounded-full px-4 py-3 bg-yellow-600 text-white">
            Update Project
          </button>
        </div>
      )}
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await clientAxios.get('/projects')
  const projects = (await res.data) as IProject[]
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as any
  const res = await clientAxios.get(`/projects/${slug}`)
  const project = await res.data

  return { props: { project } }
}
