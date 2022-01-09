import { NextApiHandler } from 'next'

const credentialsAuth: NextApiHandler = (request, response) => {
  if (request.method !== 'POST') {
    response.status(405).end()
  }

  if (request.body.password === process.env.AUTH_PLATZI_SECRET) {
    const user = {
      name: 'Admin',
    }

    return response.status(200).json(user)
  }

  response.status(401).end()
}

export default credentialsAuth
