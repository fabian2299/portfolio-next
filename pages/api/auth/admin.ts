import { NextApiHandler } from 'next'

const credentialsAuth: NextApiHandler = (request, response) => {
  if (request.method !== 'POST') {
    // Not supported method
    response.status(405).end()
  }

  if (request.body.password === process.env.AUTH_PLATZI_SECRET) {
    // How about using another API to randomly generate user's and avatars? :)
    const user = {
      name: 'Admin',
    }

    return response.status(200).json(user)
  }

  // Auth failed
  response.status(401).end()
}

export default credentialsAuth
