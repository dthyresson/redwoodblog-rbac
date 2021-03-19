import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { logger } from 'src/lib/logger'

const CREATE_POST_ROLES = ['admin', 'author', 'publisher']
const UPDATE_POST_ROLES = ['admin', 'editor', 'publisher']
const DELETE_POST_ROLES = ['admin', 'publisher']

export const posts = () => {
  logger.trace('Fetching posts...')
  return db.post.findMany({ orderBy: { title: 'asc' } })
}

export const post = async ({ id }) => {
  const post = await db.post.findUnique({
    where: { id },
  })

  logger.debug({ payload: post }, `Fetching post ${post.title}`)

  return post
}

export const createPost = ({ input }) => {
  requireAuth({ roles: CREATE_POST_ROLES })

  return db.post.create({
    data: {
      ...input,
      authorId: context.currentUser.sub,
      publisherId: context.currentUser.sub,
    },
  })
}

export const updatePost = ({ id, input }) => {
  requireAuth({ roles: UPDATE_POST_ROLES })

  return db.post.update({
    data: {
      ...input,
      editorId: context.currentUser.sub,
      publisherId: context.currentUser.sub,
      updatedAt: new Date(),
    },
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  requireAuth({ roles: DELETE_POST_ROLES })

  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  user: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).user(),
}
