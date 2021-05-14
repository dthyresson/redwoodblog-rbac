import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import PostForm from 'src/components/PostForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
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

  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
      toast.success('Post updated.')
    },
    onError: () => {
      toast.error('Post cannot be edited.')
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
