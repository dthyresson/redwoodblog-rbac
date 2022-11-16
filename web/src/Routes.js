import { Router, Route, Private, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import SidebarLayout from 'src/layouts/SidebarLayout'
import HomePage from 'src/pages/HomePage'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={[SidebarLayout]}>
        <Set wrap={BlogLayout}>
          <Route path="/" page={HomePage} name="home" prerender />
        </Set>
        <Route path="/about" page={AboutPage} name="about" prerender />
        <Route path="/contact" page={ContactPage} name="contact" />

        <Private unauthenticated="home">
          <Route
            path="/settings"
            page={SettingsPage}
            name="settings"
            whileLoadingPage={<>Your settings await ....</>}
            prerender
          />
        </Private>

        <Private unauthenticated="home" role="admin">
          <Route
            path="/admin/users"
            page={UsersPage}
            name="users"
            whileLoadingPage={<>Fetching...</>}
            prerender
          />
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
            prerender
            whileLoadingPage={<>Fetching...</>}
          >
            <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
          </Private>

          <Private
            unauthenticated="home"
            role={['admin', 'editor', 'publisher']}
            prerender
            whileLoadingPage={<>Fetching...</>}
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
            prerender
            whileLoadingPage={<>Fetching...</>}
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
