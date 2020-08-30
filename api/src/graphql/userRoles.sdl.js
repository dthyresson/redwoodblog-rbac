export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    UserProfile: UserProfile
    userProfileId: Int
  }

  type Query {
    userRoles: [UserRole!]!
  }

  input CreateUserRoleInput {
    name: String!
    userProfileId: Int
  }

  input UpdateUserRoleInput {
    name: String
    userId: Int
  }
`
