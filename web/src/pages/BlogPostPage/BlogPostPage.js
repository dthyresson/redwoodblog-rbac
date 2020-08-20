import StackedLayout from 'src/layouts/StackedLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <StackedLayout>
      <BlogPostCell id={id}></BlogPostCell>
    </StackedLayout>
  )
}

export default BlogPostPage
