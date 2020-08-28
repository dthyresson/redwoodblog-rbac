import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    typeof datetime !== 'undefined' && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Post = ({ post }) => {
  const { addMessage } = useFlash()
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
      addMessage('Post deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  const { hasRole } = useAuth()

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Post {post.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{post.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(post.createdAt)}</td>
            </tr>
            <tr>
              <th>Published at</th>
              <td>{timeTag(post.publishedAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(post.updatedAt)}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{post.body}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        {hasRole(['admin', 'editor', 'publisher']) && (
          <Link
            to={routes.editPost({ id: post.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
        )}
        {hasRole(['admin', 'publisher']) && (
          <a
            href="#"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(post.id)}
          >
            Delete
          </a>
        )}
      </nav>
    </>
  )
}

export default Post
