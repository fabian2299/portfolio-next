import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-[50vh] justify-center items-center flex flex-col space-y-8">
      <h1 className=" text-3xl font-semibold">
        Hello, it seems that your are lost
      </h1>
      <Link href="/">
        <a className="bg-emerald-800 shadow-lg shadow-emerald-700/30 rounded-lg text-white font-bold text-xl py-1 px-3">
          Go Back Home
        </a>
      </Link>
    </div>
  )
}
