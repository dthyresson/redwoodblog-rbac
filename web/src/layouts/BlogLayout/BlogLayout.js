const BlogLayout = ({ children }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-gray-100">
          News
        </h1>
      </div>
      <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
        {children}
      </div>
    </div>
  )
}

export default BlogLayout
