export const schema = gql`
  type AppMetadata {
    roles: [String]
  }

  type User {
    id: String!
    aud: String
    role: String
    email: String!
    confirmed_at: DateTime
    confirmation_sent_at: DateTime
    recovery_sent_at: DateTime
    app_metadata: AppMetadata
    user_metadata: UserMetadata
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth(roles: ["admin"])
    user(id: String!): User! @requireAuth(roles: ["admin"])
  }
`
