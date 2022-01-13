import { links } from 'lib/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  return (
    <nav>
      <ul className="hidden md:flex space-x-5 items-center p-2 text-white">
        {links.map((link, i) => {
          const { page, url } = link
          return (
            <li key={i} className="first-letter:uppercase">
              <Link href={url}>
                <a
                  className={` ${
                    isActive(url)
                      ? 'font-bold underline underline-offset-2'
                      : ''
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
