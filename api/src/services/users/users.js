import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const users = async () => {
  // requireAuth()

  const adminToken = context.clientContext.identity.token

  console.log(adminToken)
  console.log(process.env.SITE_NAME)

  const { body } = await got.get(
    'https://redwoodblog-with-identity.netlify.app/.netlify/identity/admin/users',
    {
      responseType: 'json',
      headers: {
        authorization: `Bearer ${adminToken}`,
      },
    }
  )
  console.log(body)

  return [{ id: 'one' }, { id: 'two' }, { id: 'three' }]
}
