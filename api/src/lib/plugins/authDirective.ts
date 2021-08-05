import { Plugin } from '@envelop/types'
import { DirectiveNode, GraphQLError, GraphQLResolveInfo } from 'graphql'
import { getDirective } from './utils'
import { context } from '@redwoodjs/graphql-server'

class UnauthenticatedError extends GraphQLError {}

export type ValidateUserFn = (
  resolverInfo?: {
    root: unknown
    args: Record<string, unknown>
    info: GraphQLResolveInfo
  },
  directiveNode?: DirectiveNode
) => void | Promise<void>

export type AuthDirectivePluginOptions = {
  validateUser?: ValidateUserFn
  /**
   * Overrides the default directive name
   * @default requireAuth
   */
  authDirectiveName?: 'requireAuth' | string
}

export function defaultValidateFn(): void {
  if (!context.currentUser) {
    throw new UnauthenticatedError('Unauthenticated!')
  }
}

export const useAuthDirective = (
  options: AuthDirectivePluginOptions
): Plugin<{
  validateUser: ValidateUserFn
}> => {
  const validateUser = options.validateUser || defaultValidateFn

  return {
    onExecute() {
      return {
        async onResolverCalled({ args, root, info }) {
          const authDirectiveNode = getDirective(
            info,
            options.authDirectiveName || 'requireAuth'
          )

          if (authDirectiveNode) {
            await validateUser(
              {
                info,
                args,
                root,
              },
              authDirectiveNode
            )
          }
        },
      }
    },
  }

  return {}
}
