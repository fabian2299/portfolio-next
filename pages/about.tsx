import Main from '@/components/Layout/Main'
import Image from 'next/image'
import rocket from '../public/images/rocket.jpg'

export default function AboutPage() {
  return (
    <Main title="Portfolio - About">
      <section className="flex flex-col items-center space-y-10 p-5 border-x max-w-4xl mx-auto">
        <div className="relative rounded-lg overflow-hidden aspect-video h-80">
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
            Since 2020 I discovered the world that was within programming since
            then I have been studying and developing personal projects, my
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
