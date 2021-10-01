import got from 'got'

export const users = async () => {
  const adminToken = context.clientContext?.identity?.token
  const identityEndpoint = context.clientContext?.identity?.url

  if (adminToken && identityEndpoint) {
    const { body } = await got.get(`${identityEndpoint}/admin/users`, {
      responseType: 'json',
      headers: {
        authorization: `Bearer ${adminToken}`,
      },
    })

    return body['users']
  } else {
    const user = {
      id: `${Date.now()}`,
      email: 'example@example.com',
      app_metadata: { roles: [] },
      user_metadata: { full_name: 'Xavier Example' },
    }

    return [user, user, user]
  }
}
