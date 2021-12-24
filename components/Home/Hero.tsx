import Image from 'next/image'

export default function Hero() {
  return (
    <section className="p-5 space-y-5 bg-emerald-700">
      <div className=" space-y-5 text-slate-50">
        <h1 className="text-center  text-3xl font-black">
          Succesfull Front-end Development
        </h1>
        <p className="text-center text-lg font-bold">
          Hi.I am Fabian, a frontend developer with 1 year of experience
          creating successful websites
        </p>
      </div>

      <div className="grid gap-5 grid-cols-3">
        {/* Photo 1 */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/rocket.jpg"
            alt="mobile"
            layout="fill"
            className=" brightness-75"
          />
          <div className="absolute flex justify-between p-4 items-center h-full w-full flex-col space-y-5 ">
            <h2 className=" text-xl font-black text-emerald-400">
              This is a simple example
            </h2>
            <p className=" text-slate-100 font-semibold text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              molestias, minima vitae quibusdam consequatur similique facilis
              provident enim atque dolores non
            </p>
          </div>
        </div>
        {/* Photo 2 */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/rocket.jpg"
            alt="mobile"
            layout="fill"
            className=" brightness-75"
          />
          <div className="absolute flex justify-between p-4 items-center h-full w-full flex-col space-y-5 ">
            <h2 className=" text-xl font-black text-emerald-400">
              This is a simple example
            </h2>
            <p className=" text-slate-100 font-semibold text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              molestias, minima vitae quibusdam consequatur similique facilis
              provident enim atque dolores non
            </p>
          </div>
        </div>
        {/* Photo 3 */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/rocket.jpg"
            alt="mobile"
            layout="fill"
            className=" brightness-75"
          />
          <div className="absolute flex justify-between p-4 items-center h-full w-full flex-col space-y-5 ">
            <h2 className=" text-xl font-black text-emerald-400">
              This is a simple example
            </h2>
            <p className=" text-slate-100 font-semibold text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              molestias, minima vitae quibusdam consequatur similique facilis
              provident enim atque dolores non
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
