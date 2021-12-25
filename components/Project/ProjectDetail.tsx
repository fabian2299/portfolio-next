import { fadeInUp, stagger } from 'animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { IProject } from 'types'

export default function ProjectDetail({ project }: { project: IProject }) {
  const router = useRouter()
  const { content, deployedUrl, githubUrl, title, image, categories, id } =
    project
  const categoriesArray = categories?.trim().split(',')

  return (
    <motion.section initial="initial" animate="animate" className="p-5">
      <button
        onClick={() => router.back()}
        className="py-2 px-3 bg-emerald-600 rounded-lg text-white my-4"
      >
        Go Back
      </button>
      <article className="grid  lg:grid-cols-2 gap-10 justify-center items-center p-5 border-2 border-gray-400 rounded-lg shadow-lg shadow-gray-400">
        <motion.div
          variants={fadeInUp}
          className="relative h-60 lg:h-96 min-w-full mx-auto "
        >
          <Image
            src={image ? image : '/images/rocket.jpg'}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        <div className=" space-y-8 flex flex-col items-center p-10">
          <h1 className="text-center text-4xl font-black text-emerald-800">
            {title}
          </h1>
          <article className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

          {categories && (
            <motion.ul
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center select-none"
            >
              {categoriesArray?.map((category, i) => (
                <motion.li
                  variants={fadeInUp}
                  className="bg-emerald-700 text-center text-white py-1 px-3 rounded-lg shadow-lg shadow-emerald-800/30  "
                  key={i}
                >
                  {category}
                </motion.li>
              ))}
            </motion.ul>
          )}

          <div className="flex space-x-5 text-center">
            <Link href={deployedUrl}>
              <a
                target="_blank"
                className=" bg-emerald-800 text-white p-3 rounded-lg shadow-lg shadow-emerald-800/30"
              >
                Visit Web
              </a>
            </Link>
            <Link href={githubUrl}>
              <a
                target="_blank"
                className="bg-gray-200 text-black p-3 rounded-lg shadow-lg shadow-gray-200"
              >
                Visit Code
              </a>
            </Link>
          </div>
        </div>
      </article>
    </motion.section>
  )
}
