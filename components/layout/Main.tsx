import Head from 'next/head'
import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Main({ children, title, description }: MainProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </div>
  )
}

Main.defaultProps = {
  title: 'Portfolio',
  description:
    'This web shows all of my recent projects I have done during this year',
}
