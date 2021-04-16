import { Router, Route, Private, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import SidebarLayout from 'src/layouts/SidebarLayout'
import PostsLayout from 'src/layouts/PostsLayout'

import HomePage from 'src/pages/HomePage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[SidebarLayout]}>
        <Set wrap={BlogLayout}>
          <Route path="/" page={HomePage} name="home" prerender />
        </Set>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />

        <Private unauthenticated="home">
          <Route path="/settings" page={SettingsPage} name="settings" />
        </Private>

        <Private unauthenticated="home" role="admin">
          <Route path="/admin/users" page={UsersPage} name="users" />
        </Private>

        <Set wrap={[PostsLayout]}>
          <Route
            path="/blog-post/{id:Int}"
            page={BlogPostPage}
            name="blogPost"
          />

          <Private
            unauthenticated="home"
            role={['admin', 'author', 'publisher']}
          >
            <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
          </Private>

          <Private
            unauthenticated="home"
            role={['admin', 'editor', 'publisher']}
          >
            <Route
              path="/admin/posts/{id:Int}/edit"
              page={EditPostPage}
              name="editPost"
            />
          </Private>
          <Private
            unauthenticated="home"
            role={['admin', 'author', 'editor', 'publisher']}
          >
            <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
            <Route path="/admin/posts" page={PostsPage} name="posts" />
          </Private>
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
