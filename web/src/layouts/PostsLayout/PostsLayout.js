import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import StackedLayout from 'src/layouts/StackedLayout'

const PostsLayout = (props) => {
  const { hasRole } = useAuth()

  return (
    <StackedLayout>
      <Flash timeout={1000} />

      <div className="rw-scaffold mt-8">
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.posts()} className="rw-link">
              Posts
            </Link>
          </h1>
          {(hasRole('admin') || hasRole('author')) && (
            <Link to={routes.newPost()} className="rw-button rw-button-green">
              <div className="rw-button-icon">+</div> New Post
            </Link>
          )}
        </header>
        <main className="rw-main">{props.children}</main>
      </div>
    </StackedLayout>
  )
}

export default PostsLayout
