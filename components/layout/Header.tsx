import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiRocket } from 'react-icons/bi'

export default function Header() {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname
  return (
    <header className="sticky top-0 bg-slate-100 z-10">
      <div className="flex justify-between  p-5 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <a>
            <div className="flex space-x-3 text-emerald-900">
              <span>
                <BiRocket className="h-5 w-5" />
              </span>
              <p>Ad Astra</p>
            </div>
          </a>
        </Link>
        {/* Nav */}
        <ul className="flex space-x-5">
          <li>
            <Link href="/">
              <a
                className={`${
                  isActive('/') ? 'text-emerald-500' : 'text-emerald-800'
                }`}
              >
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <a
                className={`${
                  isActive('/projects')
                    ? 'text-emerald-500'
                    : 'text-emerald-800'
                }`}
              >
                Projects
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a
                className={`${
                  isActive('/about') ? 'text-emerald-500' : 'text-emerald-800'
                }`}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
