import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import UsersCell from 'src/components/UsersCell'

const UsersPage = () => {
  const { isAuthenticated, hasRole } = useAuth()

  return (
    <>
      <MetaTags title="Users" />

      {isAuthenticated && hasRole('admin') && (
        <div>
          <div className="max-w-7xl mx-auto mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-gray-100">
              Users
            </h1>
          </div>
          <UsersCell />
        </div>
      )}
    </>
  )
}

export default UsersPage
