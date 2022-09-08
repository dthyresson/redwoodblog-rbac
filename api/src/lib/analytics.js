import got from 'got'

import { logger } from 'src/lib/logger'

export const getAnalyticsEndpoint = async ({ url }) => {
  logger.info({ url }, 'Fetching ...')

  const emptyResult = []

  try {
    const { body } = await got.get(url, {
      responseType: 'json',
    })

    return body['result'] || []
  } catch (error) {
    logger.error({ url }, 'Failed to fetch')
    return emptyResult
  }
}

export const getBlogPostViewCount = async ({ id }) => {
  logger.info({ id }, 'Fetching blog post views ...')

  return await getAnalyticsEndpoint({
    url: `https://logflare.app/endpoints/query/1f241f97-ae5c-4fc4-a0b6-9f8ddaf8f400?url=blog-post/${id}`,
  })
}
