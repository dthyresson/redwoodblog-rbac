export const schema = gql`
  type User {
    id: String!
  }

  type Query {
    users: [User!]!
    user(id: String!): User!
  }
`
