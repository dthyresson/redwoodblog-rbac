import { useGenericAuth } from '@envelop/generic-auth'

import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/graphql-server'
import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { requireAuth } from 'src/lib/auth'

export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: { tracing: true, operationName: true, query: true },
  },
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  db,
  extraPlugins: [
    // eslint-disable-next-line -- Envelop plugin thinks it is a React hook.
    useGenericAuth({
      resolveUserFn: (context) => {
        return context.currentUser
      },
      validateUser: () => {
        requireAuth({ roles: undefined })
      },
      authDirectiveName: 'requireAuth',
      contextFieldName: 'resolvedUser',
      mode: 'protect-auth-directive',
    }),
  ],
})
