import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const userMetadata = () => {
  requireAuth()
  return context.currentUser.user_metadata
}

export const updateUserMetadata = async ({ input }) => {
  requireAuth()

  const { body } = await got.put(
    'https://${process.env.SITE_NAME}.netlify.app/.netlify/identity/user',
    {
      responseType: 'json',

      json: {
        data: {
          ...input,
        },
      },
      headers: {
        authorization: `Bearer ${context[1].token}`,
      },
    }
  )

  return (context.currentUser.user_metadata = body.user_metadata)
}
