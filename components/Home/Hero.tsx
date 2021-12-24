import Description from './Description'
import pcImage from '../../public/images/pc.jpg'
import rocketImage from '../../public/images/rocket.jpg'
import landImage from '../../public/images/land.jpg'

export default function Hero() {
  return (
    <section className="p-5 space-y-5 bg-emerald-700">
      <div className=" space-y-5 text-slate-50">
        <h1 className="text-center  text-3xl font-black flex-grow">
          Succesfull Front-end Development
        </h1>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-5 ">
        <Description
          title="Technologies"
          description="I am improving and practicing every day, to build scalable, functional and great applications (like this one 😃   )."
          image={pcImage}
        />
        <Description
          title="Front-end Developer"
          description="Hi I am Fabian nice to meet you, I design and code beautifully simple things, and I love what I do."
          image={rocketImage}
        />
        <Description
          title="Learning Path"
          description="I believe that learning never ends and Udemy, Platzi , Youtube and more... helped me to achieve that goal."
          image={landImage}
        />
      </div>
    </section>
  )
}
