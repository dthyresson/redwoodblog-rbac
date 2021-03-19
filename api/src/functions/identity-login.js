import { logger } from 'src/lib/logger'

export const handler = async (req, _context) => {
  const body = JSON.parse(req.body)
  const eventType = body.event
  const user = body.user

  if (eventType === 'login') {
    logger.info(`User: ${user.id} logged in`)
    logger.debug(user, `User: ${user.id} details`)
  }

  return {
    statusCode: 200,
  }
}
