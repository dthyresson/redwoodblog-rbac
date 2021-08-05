export const schema = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime
    publishedAt: DateTime
    authorId: String
    editorId: String
    publisherId: String
    title: String!
    body: String!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post! @requireAuth(roles: ["editor"])
    #@requireAuth(roles: ["publisher"])
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
