import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="container mx-auto min-h-[90vh] ">{children}</main>
      <Footer />
    </div>
  )
}
