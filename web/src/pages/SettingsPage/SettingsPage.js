import { useAuth } from '@redwoodjs/auth'
import SidebarLayout from 'src/layouts/SidebarLayout'

const SettingsPage = () => {
  const { isAuthenticated, currentUser, userMetadata, hasRole } = useAuth()

  const obfuscate = (email) => {
    const [username, rest] = email.split('@')
    const obfuscatedUsername = `${username[0]}***${
      username[username.length - 1]
    }`
    return [obfuscatedUsername, rest].join('@')
  }

  return (
    <SidebarLayout>
      {isAuthenticated && (
        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Settings
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                User profile and permissions.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-0">
              <dl>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {userMetadata.user_metadata.full_name}
                  </dd>
                </div>
                <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {obfuscate(userMetadata.email)}
                  </dd>
                </div>
                <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Roles
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md">
                      {currentUser.roles.map((role) => {
                        return (
                          <li
                            key={role}
                            className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                          >
                            <div className="w-0 flex-1 flex items-center">
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span className="ml-2 flex-1 w-0 truncate">
                                {role}
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              {hasRole('admin') && (
                                <a
                                  href={`https://app.netlify.com/sites/${process.env.SITE_NAME}/identity/${userMetadata.id}`}
                                  className="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Edit on Netlify
                                </a>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </SidebarLayout>
  )
}

export default SettingsPage
