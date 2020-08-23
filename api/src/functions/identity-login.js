export const handler = async (event, _context) => {
  const eventType = event.body.event
  const user = event.body.user

  if (eventType === 'login') {
    console.log(`User: ${user.id} logged in`)
  }

  return {
    statusCode: 200,
  }
}
