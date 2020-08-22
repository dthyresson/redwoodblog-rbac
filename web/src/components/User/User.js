const User = ({ user }) => {
  const obfuscate = (email) => {
    const [username, rest] = email.split('@')
    const obfuscatedUsername = `${username[0]}***${
      username[username.length - 1]
    }`
    return [obfuscatedUsername, rest].join('@')
  }

  return (
    <>
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
              {user.user_metadata.full_name}
            </h3>
            {(user.app_metadata?.roles || []).map((role) => (
              <span
                key={`${user.id}-${role}`}
                className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
            {obfuscate(user.email)}
          </p>
        </div>

        <img
          className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <div className="border-t border-gray-200">
        <div className="-mt-px flex">
          <div className="w-0 flex-1 flex border-r border-gray-200">
            <a
              href={`mailto:${user.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-0 flex-1 inline-flex items-center
              justify-center py-4 text-sm leading-5 text-gray-700 font-medium
              border border-transparent rounded-br-lg hover:text-gray-500
              focus:outline-none focus:shadow-outline-blue focus:border-blue-300
              focus:z-10 transition ease-in-out duration-150"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mail w-6 h-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="ml-3">Email</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={`https://app.netlify.com/sites/${process.env.SITE_NAME}/identity/${user.id}`}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="identification w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <span className="ml-3">Manage</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
