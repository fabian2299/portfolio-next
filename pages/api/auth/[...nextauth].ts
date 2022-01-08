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
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.AUTH_JWT_SECRET,
  },
  providers: [
    Credentials({
      name: 'Admin',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(`http://localhost:3000/api/auth/admin`, {
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
