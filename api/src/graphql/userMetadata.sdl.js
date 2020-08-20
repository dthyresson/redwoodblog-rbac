export const schema = gql`
  type UserMetadata {
    full_name: String!
    favorite_color: String
  }

  type Query {
    userMetadata: UserMetadata!
  }

  input UpdateUserMetadataInput {
    full_name: String
    favorite_color: String
  }

  type Mutation {
    updateUserMetadata(input: UpdateUserMetadataInput!): UserMetadata!
  }
`
