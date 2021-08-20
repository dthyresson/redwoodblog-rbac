import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/graphql-server'
import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: { tracing: true, operationName: true },
  },
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
})
