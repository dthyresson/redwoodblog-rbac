import User from 'src/components/User'
export const QUERY = gql`
  query UsersQuery {
    users {
      id
      email
      user_metadata {
        full_name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ users }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  )
}
