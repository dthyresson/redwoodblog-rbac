export const schema = gql`
  directive @requireAuth(roles: [String]) on FIELD_DEFINITION

  type Contact {
    id: Int!
    createdAt: DateTime!
    name: String!
    email: String! @requireAuth(roles: ["publisher"])
    message: String!
    userId: String
  }

  type Query {
    contacts: [Contact!]!
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
    createContact(input: CreateContactInput!): Contact
  }
`
