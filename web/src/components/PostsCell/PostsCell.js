import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      createdAt
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

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
