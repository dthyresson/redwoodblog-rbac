import { useAuth } from '@redwoodjs/auth'
import StackedLayout from 'src/layouts/StackedLayout'
import UsersCell from 'src/components/UsersCell'

const UsersPage = () => {
  const { isAuthenticated, hasRole } = useAuth()

  return (
    <StackedLayout>
      {isAuthenticated && hasRole('admin') && <UsersCell />}
    </StackedLayout>
  )
}

export default UsersPage
