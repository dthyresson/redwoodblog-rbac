import { db } from 'src/lib/db'

export const userRoles = () => {
  return db.userRole.findMany()
}
