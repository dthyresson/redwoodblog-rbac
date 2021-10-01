import { UserInputError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  validate(input)

  return db.contact.create({
    data: {
      ...input,
      userId: context.currentUser?.sub,
      email: context.currentUser?.email || input.email,
      name: context.currentUser?.user_metadata.full_name || input.name,
    },
  })
}
