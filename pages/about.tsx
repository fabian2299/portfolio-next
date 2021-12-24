import Main from '@/components/layout/Main'
import Image from 'next/image'
import rocket from '../public/images/rocket.jpg'

export default function AboutPage() {
  return (
    <Main title="About">
      <section className="flex flex-col items-center space-y-10 p-5 border border-gray-400 rounded-lg shadow-lg shadow-gray-400 my-3">
        <div className="relative h-80 w-[30rem] rounded-lg overflow-hidden">
          <Image
            className=""
            src={rocket}
            alt="rocket"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>

        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-4xl font-bold uppercase text-slate-800">
            about me
          </h1>
          <p className="max-w-2xl text-slate-800 leading-7 text-xl">
            Since 2020 I discovered the world that was within programming and
            one of the areas that most caught my attention was web development,
            since then I have been studying and developing personal projects, my
            favorite language is javascript due to the freedom it gives to the
            developer when creating web applications.
          </p>
          <p className="max-w-2xl text-slate-800 leading-7 text-xl">
            My main activity is the frontend but my goal is to understand and
            cover the entire development process from the design of the idea to
            production.
          </p>
        </div>
      </section>
    </Main>
  )
}
