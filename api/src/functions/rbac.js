import { AuthenticationError, ForbiddenError } from '@redwoodjs/api'

import { requireAuth } from 'src/lib/auth'

export const handler = async (event, context) => {
  try {
    requireAuth({ roles: 'admin' })

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: 'Permitted',
      }),
    }
  } catch (e) {
    if (e instanceof AuthenticationError) {
      return {
        statusCode: 401,
      }
    } else if (e instanceof ForbiddenError) {
      return {
        statusCode: 403,
      }
    } else {
      return {
        statusCode: 400,
      }
    }
  }
}
