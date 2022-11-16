import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      createdAt
      updatedAt
      publishedAt
      title
      body
    }
  }
`

export const Loading = () => (
  <div className=" ease-in transition-opacity duration-1000 opacity-0 opacity-100 animate-bounce">
    <div className="rw-text-center">Loading...</div>
  </div>
)

export const Empty = () => {
  const { hasRole } = useAuth()

  return (
    <div>
      <div className="rw-text-center">{'No posts yet. '}</div>
      {(hasRole('admin') || hasRole('author') || hasRole('publisher')) && (
        <div className="rw-text-center">
          <Link to={routes.newPost()} className="rw-link">
            {'Create one?'}
          </Link>
        </div>
      )}
    </div>
  )
}

export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}
