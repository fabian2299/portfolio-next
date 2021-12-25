import { links } from 'lib/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  return (
    <nav>
      <ul className="hidden md:flex space-x-5 items-center p-2">
        {links.map((link, i) => {
          const { page, url } = link
          return (
            <li key={i} className="first-letter:uppercase">
              <Link href={url}>
                <a
                  className={` ${
                    isActive(url) ? 'text-emerald-500' : 'text-emerald-800'
                  } `}
                >
                  {page}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
