import { DirectiveNode, GraphQLObjectType, GraphQLResolveInfo } from 'graphql'

export function getDirective(
  info: GraphQLResolveInfo,
  name: string
): null | DirectiveNode {
  const { parentType, fieldName, schema } = info
  const schemaType = schema.getType(parentType.name) as GraphQLObjectType
  const field = schemaType.getFields()[fieldName]
  const astNode = field.astNode
  const authDirective = astNode?.directives?.find((d) => d.name.value === name)

  return authDirective || null
}

export function getRoles(authDirective): [string] | undefined {
  console.log(authDirective)
  if (authDirective.kind === 'Directive') {
    const directiveArgs = authDirective.arguments?.filter(
      (d) => d.name.value === 'roles'
    )

    const roles =
      directiveArgs
        .values()
        .next()
        .value?.value?.values?.map((v) => v.value) || undefined

    return roles
  }

  return undefined
}
