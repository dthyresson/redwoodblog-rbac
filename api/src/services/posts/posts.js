import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const posts = () => {
  logger.trace('Fetching posts...')

  return db.post.findMany({ orderBy: { title: 'asc' } })
}

export const post = async ({ id }) => {
  logger.trace({ postId: id }, 'Fetching post...')

  return await db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  logger.trace('Creating post...')

  return db.post.create({
    data: {
      ...input,
      authorId: context.currentUser.sub,
      publisherId: context.currentUser.sub,
    },
  })
}

export const updatePost = ({ id, input }) => {
  logger.trace({ postId: input.id }, 'Updating post...')

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
  logger.trace({ postId: id }, 'Deleting post...')

  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  user: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).user(),
}
