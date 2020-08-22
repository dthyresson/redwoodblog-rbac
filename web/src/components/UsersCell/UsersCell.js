import User from 'src/components/User'
export const QUERY = gql`
  query UsersQuery {
    users {
      id
      email
      user_metadata {
        full_name
      }
      app_metadata {
        roles
      }
    }
  }
`

export const Loading = () => {
  const user = {
    id: '',
    email: '',
    app_metadata: { roles: [] },
    user_metadata: { full_name: '' },
  }
  const users = [user, user, user, user, user, user]
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <li
          key={`${user.id}-item`}
          className="col-span-1 bg-white rounded-lg shadow"
        >
          <User key={user.id} user={user} />
        </li>
      ))}
    </ul>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ users }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <li
          key={`${user.id}-item`}
          className="col-span-1 bg-white rounded-lg shadow"
        >
          <User key={user.id} user={user} />
        </li>
      ))}
    </ul>
  )
}
