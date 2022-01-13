import type { InferGetStaticPropsType } from 'next'
import { IProject } from 'types'
import Link from 'next/link'
import { clientAxios } from 'services/clientAxios'

import { Box, Button, Center } from '@chakra-ui/react'

import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Hero from '@/components/Home/Hero'
import Main from '@/components/Layout/Main'
import TechStackList from '@/components/Home/TechStackList'

export const getStaticProps = async () => {
  const res = await clientAxios.get('/projects')
  const projects = (await res.data) as IProject[]

  return {
    props: { projects },
  }
}

export default function Web({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Main title="Portfolio - Home">
      <Hero />

      <FeaturedProjects projects={projects} />

      <Center mt="10">
        <Link href="/projects" passHref>
          <Button align="center" colorScheme="green">
            More Projects
          </Button>
        </Link>
      </Center>

      <Box>
        <TechStackList />
      </Box>
    </Main>
  )
}
