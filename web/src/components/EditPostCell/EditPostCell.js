import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import PostForm from 'src/components/PostForm'

export const QUERY = gql`
  query FIND_EDIT_POST_BY_ID($id: Int!) {
    post: post(id: $id) {
      id
      createdAt
      title
      body
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      publishedAt
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ post }) => {
  const { hasRole } = useAuth()
  const { addMessage } = useFlash()
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
      addMessage('Post updated.', { classes: 'rw-flash-success' })
    },
    onError: () => {
      addMessage('Post cannot be edited.', { classes: 'rw-flash-error' })
    },
  })

  const onSave = (input, id) => {
    updatePost({ variables: { id, input } })
  }

  return (
    (hasRole('admin') ||
      hasRole('author') ||
      hasRole('editor') ||
      hasRole('publisher')) && (
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Edit Post {post.id}
          </h2>
        </header>
        <div className="rw-segment-main">
          <PostForm
            post={post}
            onSave={onSave}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    )
  )
}
