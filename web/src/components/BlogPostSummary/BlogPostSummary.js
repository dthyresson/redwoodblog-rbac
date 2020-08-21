import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import moment from 'moment'

const BlogPostSummary = ({ post, concise = false }) => {
  const { hasRole } = useAuth()

  return (
    <div className="bg-white">
      <p className="text-sm leading-5 text-gray-500">
        <time
          dateTime={moment(post.createdAt).format('dddd, MMMM Do YYYY, h:mm a')}
        >
          {moment(post.createdAt).format('dddd, MMMM Do YYYY, h:mm a')}
        </time>
      </p>
      <a href="#" className="block">
        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
          {post.title}
        </h3>
        <p className="mt-3 text-base leading-6 text-gray-500">
          {concise ? `${post.body.slice(0, 200)} ...` : post.body}
        </p>
      </a>
      <div className="mt-3">
        <Link
          to={routes.blogPost({ id: post.id })}
          className="text-base leading-6 font-semibold text-orange-800 hover:text-orange-700 transition ease-in-out duration-150 mr-3"
        >
          Read full story
        </Link>
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
  )
}

export default BlogPostSummary
