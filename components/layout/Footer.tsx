import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-emerald-800 text-center p-1 flex justify-center items-center space-x-5">
        <p className="text-white">Fabian Nieves © 2021</p>
        <p className="text-white">Built with NextJS</p>
        <p className="text-white">
          Contact Links <span className="ml-4">↪</span>
        </p>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/fabian-nieves-73a77821a/  ">
              <a target="_blank">
                <BsLinkedin className="text-white w-7 h-7" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
