import BlogLayout from 'src/layouts/BlogLayout'
import StackedLayout from 'src/layouts/StackedLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <StackedLayout>
      <BlogLayout>
        <BlogPostsCell />
      </BlogLayout>
    </StackedLayout>
  )
}

export default HomePage
