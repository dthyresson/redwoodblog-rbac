/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  // Note: these lyric snippets are copyrighted by their authors.
  const existing = await db.post.findMany()

  if (!existing.length) {
    await db.post.create({
      data: {
        title: 'Feed the Tree',
        body:
          "This old man I've talked aboutBroke his own heart,\nPoured it in the ground\nBig red tree grew up and out,\nThrows up its leaves,\nSpins round and round.",
      },
    })

    await db.post.create({
      data: {
        title: 'Lime Tree Arbour',
        body:
          'The wind in the trees is whispering\nWhispering low that I love her\nShe puts her hand over mine\nDown in the lime tree arbour',
      },
    })
  }

  console.info('No data to seed. See api/prisma/seeds.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
