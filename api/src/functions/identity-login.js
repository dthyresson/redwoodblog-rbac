export const handler = async (req, _context) => {
  const body = JSON.parse(req.body)
  const eventType = body.event
  const user = body.user

  if (eventType === 'login') {
    console.log(`User: ${user.id} logged in`)
  }

  return {
    statusCode: 200,
  }
}
