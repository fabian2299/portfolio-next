import Main from '@/components/layout/Main'
import ProjectDetail from '@/components/Project/ProjectDetail'
import { GetStaticPaths, GetStaticProps } from 'next'
import { clientAxios } from 'services/clientAxios'
import { IProject } from 'types'

export default function ProjectDetailsPage({ project }: { project: IProject }) {
  return (
    <Main title={project.title}>
      <ProjectDetail project={project} />
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await clientAxios.get('/projects')
  const projects = (await res.data) as IProject[]
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as any
  const res = await clientAxios.get(`/projects/${slug}`)
  const project = await res.data

  return { props: { project } }
}
