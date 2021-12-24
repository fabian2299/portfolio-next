import { fadeInUp, fadeTitle, stagger } from 'animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IProject } from 'types'
import ProjectCard from '../Project/ProjectCard'

export default function FeaturedProjects({
  projects,
}: {
  projects: IProject[]
}) {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className=" space-y-5 p-5 border-x"
    >
      <motion.h2
        variants={fadeTitle}
        className=" text-center text-4xl font-black text-emerald-800"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        variants={stagger}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.slice(0, 3).map((project) => (
          <Link href={`projects/${project.slug}`} key={project.id} passHref>
            <motion.a
              className="text-center w-[28rem] mx-auto"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1, ease: 'easeOut' },
                willChange: 'contents',
              }}
              whileTap={{
                scale: 1,
                transition: { duration: 0.1, ease: 'easeOut' },
                willChange: 'contents',
              }}
            >
              <ProjectCard project={project} />
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </motion.section>
  )
}
