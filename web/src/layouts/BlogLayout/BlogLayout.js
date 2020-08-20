const BlogLayout = ({ children }) => {
  return (
    <div className="bg-white pt-2 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Latest News
          </h2>
        </div>
        <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BlogLayout
