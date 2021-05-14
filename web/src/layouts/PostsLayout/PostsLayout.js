import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const PostsLayout = (props) => {
  const { hasRole } = useAuth()

  return (
    <>
      <div className="rw-scaffold">
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
    </>
  )
}

export default PostsLayout
