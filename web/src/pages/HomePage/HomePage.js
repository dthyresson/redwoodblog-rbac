import BlogLayout from 'src/layouts/BlogLayout'
import SidebarLayout from 'src/layouts/SidebarLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <SidebarLayout>
      <BlogLayout>
        <BlogPostsCell />
      </BlogLayout>
    </SidebarLayout>
  )
}

export default HomePage
