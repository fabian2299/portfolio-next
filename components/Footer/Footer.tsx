import Link from 'next/link'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export default function Footer() {
  const { data: session } = useSession()

  return (
    <footer className="bg-emerald-700 p-2 text-white">
      <div className=" text-center flex justify-around  space-x-5">
        <div>
          <p className="text-white">
            Fabian Nieves © {new Date().getFullYear()}
          </p>
          <p className="text-white">Built with NextJS</p>
        </div>

        <div className="flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0 ">
          <p className="text-white">
            Contact Links <span className="ml-4">↪</span>
          </p>
          <ul className="flex space-x-5 ">
            <li>
              <Link href="https://www.linkedin.com/in/fabian-nieves-73a77821a/  ">
                <a target="_blank">
                  <BsLinkedin className="text-white w-7 h-7" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://github.com/fabian2299  ">
                <a target="_blank">
                  <BsGithub className="text-white w-7 h-7" />
                </a>
              </Link>
            </li>

            {session ? (
              <li className="cursor-pointer" onClick={() => signOut()}>
                Log out
              </li>
            ) : (
              <li className="cursor-pointer" onClick={() => signIn()}>
                Log in (admin)
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}
