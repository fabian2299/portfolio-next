import Image from 'next/image'

interface DescriptionProps {
  title: string
  image: any
  description: string
}

export default function Description({
  title,
  image,
  description,
}: DescriptionProps) {
  return (
    <div className="relative h-80 w-[28rem] rounded-lg overflow-hidden mx-auto">
      <Image
        src={image}
        alt="description"
        layout="fill"
        className=" brightness-75"
        placeholder="blur"
      />
      <div className="absolute flex justify-between p-4 items-center h-full w-full flex-col space-y-5  ">
        <h2 className=" text-3xl font-black text-white">{title}</h2>
        <p className=" text-slate-50 font-bold text-center text-lg bg-gray-900/80 p-3 rounded-lg ">
          {description}
        </p>
      </div>
    </div>
  )
}
