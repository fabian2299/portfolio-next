import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

/**
 * See all Next Auth configurations options at:
 * https://next-auth.js.org/configuration
 */
const options: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
  },
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 15, // 15 min
  },
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Credentials({
      name: 'Admin',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/admin`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      },
    }),
  ],
}

export default NextAuth(options)
