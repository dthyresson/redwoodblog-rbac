import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PostForm from 'src/components/PostForm'
import { QUERY } from 'src/components/PostsCell'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const { hasRole } = useAuth()

  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
      toast.success('Post created.')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onSave = (input) => {
    createPost({ variables: { input } })
  }

  return (
    (hasRole('admin') || hasRole('author') || hasRole('publisher')) && (
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">New Post</h2>
        </header>
        <div className="rw-segment-main">
          <PostForm onSave={onSave} loading={loading} error={error} />
        </div>
      </div>
    )
  )
}

export default NewPost
