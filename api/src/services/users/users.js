import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const users = async () => {
  // requireAuth()

  const adminToken = context.clientContext.identity.token

  console.log(adminToken)

  const { body } = await got.put(
    'https://${process.env.SITE_NAME}.netlify.app/.netlify/identity/users',
    {
      responseType: 'json',
      headers: {
        authorization: `Bearer ${adminToken}`,
      },
    }
  )
  console.log(body)

  return [{ id: 'afdna' }]
}
