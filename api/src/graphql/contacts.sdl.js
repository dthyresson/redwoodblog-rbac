export const schema = gql`
  type Contact {
    id: Int!
    createdAt: DateTime!
    name: String!
    email: String!
    message: String!
    userId: String
  }

  type Query {
    contacts: [Contact!]! @requireAuth(roles: "admin")
  }

  input CreateContactInput {
    name: String
    email: String
    message: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact @skipAuth
  }
`
