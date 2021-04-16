import { useAuth } from '@redwoodjs/auth'

const AboutPage = () => {
  const { logIn, signUp, isAuthenticated } = useAuth()

  return (
    <>
      {!isAuthenticated && (
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-orange-900 sm:text-4xl sm:leading-10">
              Ready to start blogging?
            </h2>
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
              Create an account today.
            </h3>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-900 hover:bg-orange-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  onClick={signUp}
                >
                  Get started
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-800 bg-orange-100 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
                  onClick={logIn}
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <div className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Try Out Roles
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                On signup, we will automatically assign you roles based on your
                email via the Trigger serverless functions on Netlify Identity
                events feature.
              </p>
            </div>
            <div className="mt-10">
              <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-800 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Author
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Use `+author` as in `example+author-example@gmail.com`,
                        you will be assigned the `author` role and you can
                        create posts.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-800 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Publisher
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Use `+publisher` as in
                        `example+publisher-example@gmail.com`, you will be
                        assigned the `publisher` role and can create, edit and
                        delete posts.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-800 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Editor
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Use `+editor` as in `example+editor-example@gmail.com`,
                        you will be assigned the `editor` role and be able to
                        update posts.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-800 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Admin
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Sorry. We don&#39;t let you sign up as an administrator.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  <a name="about">What can I do as an author?</a>
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    You can create posts.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What can I do as an editor?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    You can update any post.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What can I do as a publisher?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    You can create posts, update any post -- and even delete
                    one.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What can I do as an admin?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    Everything a publisher can do as well as manage users.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  What happened to the post I created? I do not see it here
                  anymore.
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    We refresh the database each night to remove all posts and
                    reset to the seed posts.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  How do you refresh the database?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    We use{' '}
                    <a
                      className="text-orange-900"
                      href="https://www.repeater.dev"
                    >
                      repeater.dev
                    </a>{' '}
                    to schedule a webhook to repdploy the site on Netlify. As
                    paert of the build process, we reseed the database.
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  How was this site built?
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    It is built using&nbsp;
                    <a
                      className="text-orange-900"
                      href="https://www.redwoodjs.com"
                    >
                      RedwoodJS
                    </a>
                    {'!'}
                  </p>
                </dd>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                  Tell me more!
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base leading-6 text-gray-500">
                    Sure thing. Try some of the links below to visit the
                    RedwoodJS Community, the GitHub repositories, follow
                    RedwoodJS on Twitter and more.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
