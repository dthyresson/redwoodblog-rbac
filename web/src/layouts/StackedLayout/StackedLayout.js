import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

import logo from './redwood_logotype.png'

const StackedLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, hasRole } = useAuth()

  return (
    <div className="min-h-full bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={logo}
                  alt="Redwood logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={logo}
                  alt="Redwood logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex">
                <NavLink
                  to={routes.home()}
                  activeClassName="inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  News
                </NavLink>
                <NavLink
                  to={routes.about()}
                  activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                  className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  About
                </NavLink>
                <NavLink
                  to={routes.contact()}
                  activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                  className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Contact
                </NavLink>
                {isAuthenticated &&
                  (hasRole('admin') ||
                    hasRole('author') ||
                    hasRole('editor') ||
                    hasRole('publisher')) && (
                    <NavLink
                      to={routes.posts()}
                      activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                      className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                      Manage Posts
                    </NavLink>
                  )}
                {isAuthenticated && (
                  <NavLink
                    to={routes.settings()}
                    activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Settings
                  </NavLink>
                )}
                {isAuthenticated && hasRole('admin') && (
                  <NavLink
                    to={routes.users()}
                    activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Manage Users
                  </NavLink>
                )}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {isAuthenticated && <div className="ml-3 relative"></div>}

              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  href="#"
                  onClick={isAuthenticated ? logOut : logIn}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
                >
                  {isAuthenticated && (
                    <svg
                      className="-ml-0.5 mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}

                  {!isAuthenticated && (
                    <svg
                      className="-ml-0.5 mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                  {isAuthenticated ? 'Log Out' : 'Log In'}
                </button>
              </span>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:hidden">
          <div className="pt-2 pb-3">
            <NavLink
              to={routes.home()}
              activeClassName="inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
              className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              News
            </NavLink>
            <NavLink
              to={routes.about()}
              activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
              className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              About
            </NavLink>
            <NavLink
              to={routes.contact()}
              activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
              className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              Contact
            </NavLink>
            {isAuthenticated && (
              <NavLink
                to={routes.settings()}
                activeClassName="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-orange-700 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-orange-700 transition duration-150 ease-in-out"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Settings
              </NavLink>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-6 text-gray-800">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-5 text-gray-500">
                  tom@example.com
                </div>
              </div>
            </div>
            <div
              className="mt-3"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Your Profile
              </a>

              <a
                href="#"
                className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-4">
        <main>
          <div className="min-h-screen max-w-7xl mx-auto sm:px-6 lg:px-8">
            <>{children}</>
          </div>
        </main>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center md:order-2">
            <a
              href="https://redwoodjs.com/"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">About</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 39 42">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4814 6.07243L18.6366 11.6391C18.8206 11.7617 19.0356 11.8288 19.2563 11.8326C19.4773 11.831 19.6928 11.7637 19.876 11.6391L28.0374 6.0537C28.3545 5.82665 28.5294 5.44815 28.4976 5.05762C28.4658 4.66709 28.2321 4.32232 27.8825 4.1503L19.7272 0.11258C19.4179 -0.0375265 19.0575 -0.0375265 18.7481 0.11258L10.6177 4.1503C10.2618 4.32324 10.025 4.67468 9.99683 5.0716C9.96867 5.46853 10.1535 5.8503 10.4814 6.07243ZM22.0264 13.3865C22.027 13.7557 22.2077 14.1009 22.5097 14.3101L29.0475 18.7785C29.466 19.067 30.026 19.031 30.4047 18.6911L35.889 13.7859C36.1334 13.5675 36.2691 13.2513 36.2595 12.9224C36.25 12.5935 36.0961 12.2858 35.8394 12.0822L30.603 7.89471C30.2223 7.59234 29.6914 7.57216 29.2892 7.84479L22.5097 12.4816C22.213 12.687 22.033 13.024 22.0264 13.3865ZM5.76549 19.4649C6.02972 19.7023 6.16556 20.0524 6.13111 20.4073C6.09678 20.7642 5.89064 21.0814 5.57958 21.256L1.67549 23.5962C1.27973 23.8328 0.780044 23.7987 0.419608 23.5105C0.0591727 23.2224 -0.0871399 22.74 0.0518789 22.2982L1.49577 17.755C1.60904 17.395 1.89615 17.1176 2.258 17.0186C2.61958 16.9133 3.00948 17.0056 3.2867 17.262L5.76549 19.4649ZM26.9405 19.9392L19.8822 15.1089C19.5071 14.8565 19.0179 14.8565 18.6428 15.1089L11.5844 19.9392C11.3037 20.1335 11.1259 20.4458 11.1011 20.7879C11.0828 21.1325 11.2193 21.467 11.4729 21.6991L18.525 28.0084C18.7284 28.1898 18.9908 28.2897 19.2625 28.2892C19.534 28.2891 19.7963 28.1893 19.9999 28.0084L27.0521 21.6991C27.3064 21.468 27.4412 21.1321 27.4177 20.7879C27.398 20.4458 27.2217 20.1322 26.9405 19.9392ZM8.11413 18.6911L2.63601 13.7859C2.38952 13.562 2.2535 13.2401 2.26419 12.906C2.27015 12.5767 2.42255 12.2674 2.67939 12.0635L7.91583 7.85102C8.2991 7.54952 8.83113 7.5294 9.23578 7.8011L16.0091 12.4379C16.3234 12.6441 16.513 12.9962 16.513 13.374C16.513 13.7518 16.3234 14.104 16.0091 14.3101L9.47747 18.7784C9.05639 19.0657 8.49565 19.0298 8.11413 18.6911ZM36.2422 25.7368L30.6649 22.398C30.2507 22.1484 29.7235 22.199 29.3635 22.5229L22.5469 28.6075C22.2593 28.8643 22.1243 29.2527 22.1899 29.6341C22.2556 30.0154 22.5125 30.3354 22.8691 30.4797L32.3257 34.3115C32.4554 34.3654 32.5944 34.393 32.7347 34.3926C33.1736 34.394 33.572 34.1347 33.751 33.7311L36.6822 27.1659C36.9207 26.6464 36.7308 26.0293 36.2422 25.7368ZM37.0168 17.755L38.4607 22.2982H38.4483C38.5551 22.638 38.4944 23.0088 38.285 23.2961C38.0756 23.5835 37.7426 23.7529 37.3886 23.7523C37.1901 23.7529 36.9951 23.699 36.8247 23.5963L32.9144 21.256C32.6097 21.0778 32.4108 20.7609 32.3815 20.4073C32.3449 20.0521 32.4811 19.7011 32.7471 19.4649L35.2259 17.2557C35.5059 17.0048 35.8929 16.9132 36.2546 17.0123C36.6162 17.1156 36.9023 17.3945 37.0168 17.755ZM16.3313 29.631C16.398 29.2512 16.2643 28.8638 15.9781 28.6075L9.16143 22.5229C8.80149 22.199 8.27425 22.1484 7.86007 22.398L2.28279 25.7368C1.79989 26.0306 1.60883 26.6399 1.83661 27.1597L4.77398 33.7249C5.01733 34.2723 5.6465 34.5285 6.19928 34.3053L15.6497 30.4735C16.0064 30.3304 16.2642 30.0117 16.3313 29.631ZM19.6777 31.5032L27.2628 34.5736C27.6337 34.7323 27.8899 35.0811 27.9321 35.4847C27.9801 35.8934 27.7986 36.295 27.4611 36.5269L19.8698 41.8003C19.6879 41.9281 19.4719 41.9977 19.2501 42C19.0285 41.9966 18.8129 41.9271 18.6304 41.8003L11.0453 36.5269C10.7066 36.2956 10.5229 35.8944 10.5682 35.4847C10.6188 35.0769 10.8842 34.7285 11.2622 34.5736L18.8473 31.5032C19.114 31.3968 19.411 31.3968 19.6777 31.5032Z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/dthyresson/redwoodblog-rbac"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/redwoodjs"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://discord.gg/jjSYEQd"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Discord Chat</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273l-1.47-1.338l-1.604-1.398l.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537c-1.336-.668-2.54-1.002-3.744-1.137c-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735c-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02c0 0 1 1.74 3.743 1.806c0 0 .4-.533.805-1.002c-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03c.33.136.66.27.93.4a8.18 8.18 0 0 0 1.8.536c.93.135 1.996.2 3.21 0c.6-.135 1.2-.267 1.8-.535c.39-.2.87-.4 1.397-.737c0 0-.6.936-2.205 1.404c.33.466.795 1 .795 1c2.744-.06 3.81-1.8 3.87-1.726c0-3.87-1.815-7.02-1.815-7.02c-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c0-.74.57-1.338 1.27-1.338z" />
              </svg>
            </a>

            <a
              href="https://community.redwoodjs.com/"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Discourse Forums</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9
                11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563a7.395 7.395
                0 0 0-6.337 3.57a7.247 7.247 0 0 0-.148 7.22L4.4
                19.61l4.794-1.074a7.424 7.424 0 0 0 8.136-1.39a7.256 7.256 0 0 0
                1.737-7.997a7.375 7.375 0 0 0-6.84-4.585h-.008z"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2020 Leaf me out it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackedLayout

{
  /* <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */
}

{
  /* <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg> */
}

{
  /* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */
}
