import Main from '@/components/layout/Main'
import Image from 'next/image'
import rocket from '../public/images/rocket.jpg'

export default function AboutPage() {
  return (
    <Main title="About">
      <section className="flex justify-center items-center h-96 my-20 p-10">
        <div className="w-1/3 relative h-80">
          <Image
            className="rounded-lg"
            src={rocket}
            alt="rocket"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>

        <div className="w-2/3 flex flex-col  items-center space-y-5">
          <h1 className="text-3xl font-bold uppercase text-slate-800">
            about me
          </h1>
          <p>Hi, I’m Fabian. Nice to meet you.</p>
          <p className="max-w-2xl text-slate-700 leading-7">
            Since 2020 I discovered the world that was within programming and
            one of the areas that most caught my attention was web development,
            since then I have been studying and developing personal projects, my
            favorite language is javascript due to the freedom it gives to the
            developer when creating web applications. My main activity is the
            frontend but my goal is to understand and cover the entire
            development process from the design of the idea to production.
          </p>
        </div>
      </section>
    </Main>
  )
}
