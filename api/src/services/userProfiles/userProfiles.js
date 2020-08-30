import { db } from 'src/lib/db'

export const userProfiles = () => {
  return db.userProfile.findMany()
}

export const UserProfile = {
  userRoles: (_obj, { root }) =>
    db.userProfile.findOne({ where: { id: root.id } }).userRoles(),
}
