export const schema = gql`
  type User {
    id: String!
    aud: String
    role: String
    email: String!
    confirmed_at: DateTime
    confirmation_sent_at: DateTime
    recovery_sent_at: DateTime
    app_metadata: JSON
    user_metadata: UserMetadata
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Query {
    users: [User!]!
    user(id: String!): User!
  }
`
