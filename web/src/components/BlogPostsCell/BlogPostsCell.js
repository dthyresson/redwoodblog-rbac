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

export const Loading = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">Loading</div>
    </div>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <BlogPostSummary key={post.id} post={post} concise={true} />
  ))
}
