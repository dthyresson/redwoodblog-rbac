import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query FIND_BLOG_POST_BY_ID($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
      publishedAt
      updatedAt
      formattedDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return <BlogPost post={post} />
}
