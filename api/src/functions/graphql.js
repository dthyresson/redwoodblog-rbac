import { netlifyAuthDecoder as authDecoder } from '@redwoodjs/auth-providers-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  authDecoder,
  loggerConfig: {
    logger,
    options: {
      data: true,
      operationName: true,
      query: true,
    },
  },

  getCurrentUser,
  directives,
  sdls,
  services,
})
