export const schema = gql`
  type UserProfile {
    id: Int!
    uuid: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    userRoles: [UserRole]!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
  }

  input CreateUserProfileInput {
    uuid: String!
  }

  input UpdateUserProfileInput {
    uuid: String
  }
`
