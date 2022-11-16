import { format } from 'date-fns'

import {
  createTransformerDirective,
  TransformerDirectiveFunc,
} from '@redwoodjs/graphql-server'

export const schema = gql`
  """
  Use @publishedDateFormatter to transform add in a formatted published date
  """
  directive @publishedDateFormatter on FIELD_DEFINITION
`

const transform: TransformerDirectiveFunc = ({ root }) => {
  const post = root
  const date = post.publishedAt || post.createdAt || Date.now()
  return `${format(date, 'h:mm aaa')} on ${format(date, 'do LLLL yyyy')}`
}

const publishedDateFormatter = createTransformerDirective(schema, transform)

export default publishedDateFormatter
