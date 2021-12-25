import Link from 'next/link'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-emerald-800 p-2">
      <div className=" text-center flex justify-around  space-x-5">
        <div>
          <p className="text-white">Fabian Nieves © 2021</p>
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
          </ul>
        </div>
      </div>
    </footer>
  )
}
