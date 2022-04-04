import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const BlogPost = ({ post }) => {
  const { hasRole } = useAuth()

  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <MetaTags title={post.title} />

      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto">
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-orange-700 font-semibold tracking-wide uppercase">
            <time dateTime={post.formattedDate}>{post.formattedDate}</time>
          </p>
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {post.title}
          </h1>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p>{post.body}</p>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          {(hasRole('admin') || hasRole('editor')) && (
            <Link
              to={routes.editPost({ id: post.id })}
              className="text-base leading-6 font-semibold text-red-600 hover:text-red-500 transition ease-in-out duration-150"
            >
              Edit
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
