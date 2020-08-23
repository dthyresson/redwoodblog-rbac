import SidebarLayout from 'src/layouts/SidebarLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <SidebarLayout>
      <BlogPostCell id={id}></BlogPostCell>
    </SidebarLayout>
  )
}

export default BlogPostPage
