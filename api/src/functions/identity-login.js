export const handler = async (event, context) => {
  console.log(event)
  console.log(event.body)
  console.log(context)

  const adminToken = context.clientContext.identity.token
  console.log(adminToken)

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: 'identitySignup function',
    }),
  }
}
