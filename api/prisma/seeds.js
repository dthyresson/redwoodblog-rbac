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
          "This old man I've talked aboutBroke his own heart,  Poured it in the ground  Big red tree grew up and out,  Throws up its leaves,  Spins round and round.",
      },
    })

    await db.post.create({
      data: {
        title: 'Lime Tree Arbour',
        body:
          'The wind in the trees is whispering  Whispering low that I love her  She puts her hand over mine  Down in the lime tree arbour',
      },
    })

    await db.post.create({
      data: {
        title: 'Fake Plastic Trees',
        body:
          'A green plastic watering can  For a fake Chinese rubber plant  In the fake plastic earth  That she bought from a rubber man  In a town full of rubber plans  To get rid of itself',
      },
    })

    await db.post.create({
      data: {
        title: 'Shaking the Tree',
        body:
          "Souma Yergon, Sou Nou Yergon  We are shakin' the tree  Souma Yergon, Sou Nou Yergon  We are shakin' the tree",
      },
    })

    await db.post.create({
      data: {
        title: 'A Forest',
        body:
          'I hear her voice  Calling my name  The sound is deep  In the dark  I hear her voice  And start to run  Into the trees  Into the trees',
      },
    })

    await db.post.create({
      data: {
        title: 'I Am a Tree',
        body:
          "I am a tree - I show my age when I don't cry  I have the leaves that will fall off when wind blows by  Don't strip off my bark - I have been stripped of it before  Yesterday's gone and tomorrow has so much more in store  You are a bird - you're taking off in every way  Say the last word until there is nothing more to say  Don't interrupt - you know the squirrels are my friends  Get off my limb - for I will break before I bend  I'm planning to see  I'm planning to feel you all over me  So climb up my trunk and build on your nest  Come and get the sap out if me  I am a tree!  Fruitless and free!  No symmetry!  Touch me and…",
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
