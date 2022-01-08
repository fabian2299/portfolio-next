import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </SessionProvider>
  )
}

export default MyApp
