import BlogPostSummary from 'src/components/BlogPostSummary'

export const QUERY = gql`
  query {
    posts {
      ...postFields
    }
  }

  fragment postFields on Post {
    id
    title
    body
    createdAt
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <BlogPostSummary key={post.id} post={post} concise={true} />
  ))
}
