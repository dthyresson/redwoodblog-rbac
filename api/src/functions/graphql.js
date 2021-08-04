import { useSecureServices } from 'src/lib/plugins/secureServices'

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
import { requireAuth } from 'src/graphql/directives/requireAuth.directive'
import { requireSubscription } from 'src/graphql/directives/requireSubscription.directive'
import { skipAuth } from 'src/graphql/directives/skipAuth.directive'

import { getRoles } from 'src/lib/plugins/utils'

export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: { tracing: true, operationName: true, query: true },
  },
  getCurrentUser,
  // directives,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  db,
  extraPlugins: [
    // eslint-disable-next-line -- Envelop plugin thinks it is a React hook.
    useSecureServices({
      validateUser: (_resolverInfo, authDirectiveNode) => {
        requireAuth({ roles: getRoles(authDirectiveNode) })
      },
    }),
    // eslint-disable-next-line -- Envelop plugin thinks it is a React hook.
    useSecureServices({
      validateUser: () => {
        requireSubscription()
      },
      authDirectiveName: 'requireSubscription',
    }),
    // eslint-disable-next-line -- Envelop plugin thinks it is a React hook.
    useSecureServices({
      validateUser: () => {
        skipAuth()
      },
      authDirectiveName: 'skipAuth',
    }),
  ],
})
