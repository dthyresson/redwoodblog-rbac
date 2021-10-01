import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const posts = () => {
  logger.trace('Fetching posts...')

  return db.post.findMany({ orderBy: { title: 'asc' } })
}

export const post = async ({ id }) => {
  logger.trace('Fetching post...')

  return await db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  return db.post.create({
    data: {
      ...input,
      authorId: context.currentUser.sub,
      publisherId: context.currentUser.sub,
    },
  })
}

export const updatePost = ({ id, input }) => {
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
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  user: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).user(),
}
