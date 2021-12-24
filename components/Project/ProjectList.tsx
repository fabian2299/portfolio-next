import { fadeInUp, fadeTitle, stagger } from 'animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IProject } from 'types'
import ProjectCard from './ProjectCard'

interface ProjectListProps {
  projects: IProject[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className=" space-y-5 py-10"
    >
      <motion.h2
        variants={fadeTitle}
        className=" text-center text-2xl font-black text-emerald-800"
      >
        All My Projects
      </motion.h2>

      <motion.div
        variants={stagger}
        className="grid grid-cols-3 gap-5 justify-center max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <Link href={`projects/${project.slug}`} key={project.id} passHref>
            <motion.a
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
