import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from './Logo'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (router.pathname) {
      setTimeout(() => {
        setIsOpen(false)
      }, 200)
    }
  }, [router.pathname])

  return (
    <header className="sticky top-0 bg-slate-100 z-10">
      <div className="flex justify-between items-center p-1 max-w-6xl mx-auto">
        {/* logo */}
        <Logo />
        {/* desktop menu */}
        <Navbar />
        {/* mobile menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <AiOutlineClose className="w-8 h-8" />
          ) : (
            <AiOutlineMenu className="h-8 w-8" />
          )}
        </button>
        {isOpen && <SideMenu />}
      </div>
    </header>
  )
}
