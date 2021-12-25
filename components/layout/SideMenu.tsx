import { motion } from 'framer-motion'
import { links } from 'lib/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SideMenu() {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: 'linear', duration: 0.5 }}
      variants={{
        initial: {
          width: 0,
        },
        animate: {
          width: '100%',
        },
      }}
      className=" md:hidden fixed z-10 h-screen right-0  top-10 bg-gray-50 "
    >
      <ul className="flex flex-col space-y-5 text-center p-5  ">
        {links.map((link, i) => {
          const { page, url } = link
          return (
            <li key={i} className="first-letter:uppercase text-xl">
              <Link href={url}>
                <a
                  className={`${
                    isActive(url) ? 'text-emerald-500' : 'text-emerald-800'
                  }`}
                >
                  {page}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
