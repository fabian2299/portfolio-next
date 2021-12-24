import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { IProject } from 'types'

export default function ProjectCard({ project }: { project: IProject }) {
  const { content, deployedUrl, githubUrl, slug, title, image, id } = project

  return (
    <div className="h-96 overflow-hidden border rounded-xl space-y-5 shadow-lg shadow-teal-100">
      <div className="relative h-56 w-full">
        <Image
          src={image ? image : '/images/mobile.jpg'}
          alt="mobile"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="space-y-5 p-4">
        <h2 className=" font-black text-lg underline text-teal-800">{title}</h2>
        <article className="max-w-xl prose line-clamp-1">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}
