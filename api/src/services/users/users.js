import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const users = async () => {
  // requireAuth()

  const adminToken = context.clientContext.identity.token

  const { body } = await got.get(
    'https://redwoodblog-with-identity.netlify.app/.netlify/identity/admin/users',
    {
      responseType: 'json',
      headers: {
        authorization: `Bearer ${adminToken}`,
      },
    }
  )
  console.log(body['users'])

  return body['users']
}
