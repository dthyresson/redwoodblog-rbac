export const handler = async (req, _context) => {
  const body = JSON.parse(req.body)

  const eventType = body.event
  const user = body.user
  const email = user.email

  let roles = []

  if (eventType === 'signup') {
    if (email.includes('+author')) {
      roles.push('author')
    }

    if (email.includes('+editor')) {
      roles.push('editor')
    }

    if (email.includes('+publisher')) {
      roles.push('publisher')
    }

    console.log(`User: ${user.email} signed-up and given roles: ${roles}`)
    return {
      statusCode: 200,
      body: JSON.stringify({ app_metadata: { roles: roles } }),
    }
  } else {
    return {
      statusCode: 200,
    }
  }
}
