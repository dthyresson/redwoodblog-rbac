import { ForbiddenError } from '@redwoodjs/api'

export const schema = gql`
  directive @requireSubscription on FIELD_DEFINITION
`

export const requireSubscription = () => {
  throw new ForbiddenError('Nope!')
}
