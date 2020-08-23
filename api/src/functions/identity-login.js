export const handler = async (event, context) => {
  console.log(event)
  console.log(event.body)
  console.log(context)

  // const adminToken = context.clientContext.identity.token
  // console.log(adminToken)
  console.log('identity-login')
  return {
    statusCode: 200,
  }
}
