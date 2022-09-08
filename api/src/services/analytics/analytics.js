import { logger } from 'src/lib/logger'

import { getBlogPostViewCount } from 'src/lib/analytics'

export const blogPostViews = async ({ id }) => {
  const data = await getBlogPostViewCount({ id })

  logger.debug({ custom: data }, 'response data service')

  return data[0]
}
