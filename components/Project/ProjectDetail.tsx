import { fadeInUp, stagger } from 'animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { IProject } from 'types'

export default function ProjectDetail({ project }: { project: IProject }) {
  const router = useRouter()
  const { content, deployedUrl, githubUrl, title, image, categories } = project

  const categoriesArray = categories?.split(',')

  return (
    <motion.section initial="initial" animate="animate" className="p-5 ">
      <button
        onClick={() => router.back()}
        className="py-2 px-3 bg-emerald-600 rounded-lg text-white my-4"
      >
        {' '}
        Go Back
      </button>
      <div className="grid grid-cols-2 gap-10 justify-center items-center p-5 ">
        <motion.div
          variants={fadeInUp}
          className="relative h-96 w-[80%] mx-auto "
        >
          <Image
            src={image!}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        <div className=" space-y-8">
          <h1 className="text-center text-4xl font-bold">{title}</h1>
          <article className="max-w-xl prose">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

          {categories && (
            <motion.ul
              variants={stagger}
              className="flex space-x-5 select-none"
            >
              {categoriesArray?.map((category, i) => (
                <motion.li
                  variants={fadeInUp}
                  className="bg-emerald-700 text-white py-1 px-3 rounded-lg shadow-lg shadow-emerald-800/30  "
                  key={i}
                >
                  {category}
                </motion.li>
              ))}
            </motion.ul>
          )}

          <div className=" space-x-5 p-3">
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
      </div>
    </motion.section>
  )
}
