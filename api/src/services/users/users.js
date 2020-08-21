import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const users = async () => {
  requireAuth({ role: 'admin' })

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

  return body['users']
}
