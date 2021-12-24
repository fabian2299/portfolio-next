import Hero from '@/components/Home/Hero'
import Main from '@/components/layout/Main'
import { InferGetStaticPropsType } from 'next'
import { clientAxios } from 'services/clientAxios'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import { IProject } from 'types'

export default function Web({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Main title="Home">
      <Hero />
      <FeaturedProjects projects={projects} />
    </Main>
  )
}

export const getStaticProps = async () => {
  const res = await clientAxios.get('/projects')
  const projects = (await res.data) as IProject[]

  return {
    props: { projects },
    revalidate: 1,
  }
}
