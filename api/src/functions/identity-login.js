export const handler = async (req, _context) => {
  console.log(req)
  console.log(req.body)

  const eventType = req.body.event

  console.log(eventType)

  const eventType = req.body.event
  const user = req.body.user

  if (eventType === 'login') {
    console.log(`User: ${user.id} logged in`)
  }

  return {
    statusCode: 200,
  }
}
