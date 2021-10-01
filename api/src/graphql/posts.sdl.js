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
    formattedDate: String @publishedDateFormatter
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post! @skipAuth
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
    createPost(input: CreatePostInput!): Post!
      @requireAuth(roles: ["admin", "author", "publisher"])
    updatePost(id: Int!, input: UpdatePostInput!): Post!
      @requireAuth(roles: ["admin", "editor", "publisher"])
    deletePost(id: Int!): Post! @requireAuth(roles: ["admin", "publisher"])
  }
`
