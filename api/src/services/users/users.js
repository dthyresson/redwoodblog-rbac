import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const users = async () => {
  requireAuth({ role: 'admin' })

  const adminToken = context.clientContext?.identity?.token

  if (adminToken) {
    const { body } = await got.get(
      `https://${process.env.SITE_NAME}.netlify.app/.netlify/identity/admin/users`,
      {
        responseType: 'json',
        headers: {
          authorization: `Bearer ${adminToken}`,
        },
      }
    )

    return body['users']
  } else {
    const user = {
      id: `${Date.now()}`,
      email: 'example@example.com',
      app_metadata: { roles: [] },
      user_metadata: { full_name: 'Xavier Example' },
    }

    return [user, user, user]
  }
}
