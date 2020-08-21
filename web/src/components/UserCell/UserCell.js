import User from 'src/components/User'

export const QUERY = gql`
  query UserQuery {
    user {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user }) => {
  return <User key={user.id} user={user} />
}
