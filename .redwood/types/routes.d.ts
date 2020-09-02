
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                home: () => "/"
about: () => "/about"
contact: () => "/contact"
blogPost: () => "/blog-post/{id:Int}"
settings: () => "/settings"
newPost: () => "/admin/posts/new"
editPost: () => "/admin/posts/{id:Int}/edit"
post: () => "/admin/posts/{id:Int}"
posts: () => "/admin/posts"
users: () => "/admin/users"
              }
            }

            import type AboutPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/AboutPage/AboutPage'
import type BlogPostPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/BlogPostPage/BlogPostPage'
import type ContactPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/ContactPage/ContactPage'
import type EditPostPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/EditPostPage/EditPostPage'
import type FatalErrorPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/HomePage/HomePage'
import type NewPostPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/NewPostPage/NewPostPage'
import type NotFoundPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/NotFoundPage/NotFoundPage'
import type PostPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/PostPage/PostPage'
import type PostsPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/PostsPage/PostsPage'
import type SettingsPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/SettingsPage/SettingsPage'
import type UsersPageType from '/Users/dthyresson/Dropbox (Personal)/projects/redwoodjs/redwoodblog/web/src/pages/UsersPage/UsersPage'
            declare global {
              const AboutPage: typeof AboutPageType
const BlogPostPage: typeof BlogPostPageType
const ContactPage: typeof ContactPageType
const EditPostPage: typeof EditPostPageType
const FatalErrorPage: typeof FatalErrorPageType
const HomePage: typeof HomePageType
const NewPostPage: typeof NewPostPageType
const NotFoundPage: typeof NotFoundPageType
const PostPage: typeof PostPageType
const PostsPage: typeof PostsPageType
const SettingsPage: typeof SettingsPageType
const UsersPage: typeof UsersPageType
            }
          