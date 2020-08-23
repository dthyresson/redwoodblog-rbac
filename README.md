# Redwood Tutorial-Blog with Netlify Identity and RBAC

[Welcome to Redwood!](https://redwoodjs.com/tutorial/welcome-to-redwood)

The [RedwoodJS tutorial](https://redwoodjs.com/tutorial/prerequisites) creates a basic blog engine. It [deploys](https://redwoodjs.com/tutorial/deployment) to [Netlify](https://www.netlify.com/), uses a PostgreSQL database hosted by [Heroku](https://www.heroku.com/), and introduces [Authentication](https://redwoodjs.com/docs/authentication) with [Netlify Identity](https://docs.netlify.com/visitor-access/identity/).

This `redwoodblog` app is a modified-version of the RedwoodJS blog engine tutorial with some added tweaks:

* TailwindCSS and UI
* User Profile / Settings
* Role-based Access Control (RBAC) on Posts
* User Management via Netlify Identity API (view users)
* Contact messages get associated with user, if logged in
* Posts have an optional author and publisher set by currentUser
* Uses Netlify Identity [Trigger Serverless function calls](https://docs.netlify.com/functions/functions-and-identity/#trigger-serverless-functions-on-identity-events) to assign roles when signing up
* Lists users (admin only) via Netlify Identity API

Note: This app does not store any User information in a database, but rather integrates with Netlify Identity.

You can access a demo at [https://redwoodblog-with-identity.netlify.app/](https://redwoodblog-with-identity.netlify.app/).



### Roles

There redwoodblog defines the following roles:

* Admin
* Author
* Editor
* Publisher

Depending on the user's role(s), their access to Posts will differ.

As in the current tutorial, everyone (even those not authenticated) can view posts and submit Contact messages.

### Access Control

In some blogs, certain individuals might author and certain people may edit (but not author).

Publishers might be able to author, edit and delete.

Admins could do everything -- as well as access user info (but authors, editors, and publisher cannot).

Users can be assigned roles. Given the role, their access to data and perform tasks can be controlled.

It is important when applying role-based access control (RBAC) that it be applied both in the `web` and `api` sides.

On the `web` side, you will control access on:

* Private Routes

```
<Private unauthenticated="home" role="admin">
  <Route path="/admin/users" page={UsersPage} name="users" />
</Private>
```

Note: in future release, Private Routes will be able to accept a list of roles.


* Within a page, cell, or component using `hasRole()`

```
{(hasRole('admin') || hasRole('author')) && (
  <Link to={routes.newPost()} className="rw-button rw-button-green">
    <div className="rw-button-icon">+</div> New Post
  </Link>
)}
```

On the `api` side:

* In a `service` via `requireAuth()`

```js
import { requireAuth } from 'src/lib/auth'

...

const CREATE_POST_ROLES = ['admin', 'author', 'publisher']

export const createPost = ({ input }) => {
  requireAuth({ roles: CREATE_POST_ROLES })

  return db.post.create({
    data: {
      ...input,
      authorId: context.currentUser.sub,
      publisherId: context.currentUser.sub,
    },
  })
}

```

Note: This app has a modified `requireAuth()` that accepts multiple roles:

```js
export const requireAuth = ({ roles } = {}) => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (
    typeof roles !== 'undefined' &&
    typeof roles === 'string' &&
    !context.currentUser.roles?.includes(roles)
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }

  if (
    typeof roles !== 'undefined' &&
    Array.isArray(roles) &&
    !context.currentUser.roles?.some((role) => roles.includes(role))
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
```

#### Posts

* **Admins** can create, update, and delete posts.

* **Authors** can create and update posts.

* **Editors** can update posts.

* **Publishers** can create, update, and delete Posts.

| Role  |  Create | Update   | Delete   | View   |
|---|---|---|---|---|
| Admin  | X  | X  | X  | X  |
| Author   | X  |   |   | X  |
| Editor  |   | X  |   | X  |
| Publisher  | X  | X  | X  | X  |

### Contacts

There is no RBAC when creating a Contact message.

However, if the user is logged in, the Contact is assigned a `userId` and the `email` is pulled from their `currentUser` information. The Contact form does not require `email` if authenticated.

### Users

* **Admins** can access User Management.

| Role  |  Create | Update   | Delete   | View   |
|---|---|---|---|---|
| Admin  |  |  |  | X  |
| Author   |   |   |   |   |
| Editor  |   |   |   |   |
| Publisher  |   |   |   |   |
---

# User Profile

The user's profile is entirely stored in the decoded access token.

By default, Netlify's JWT contains the following profile:

* sub - the User's id
* email
* full_name - in user_metadata
* roles - in app_metadata

```
{
  "exp": 1598058245,
  "sub": "ba931ab3-8cfd-32ba-c9c2-e51df1d860d",
  "email": "user@example.com",
  "app_metadata": {
    "provider": "email",
    "roles": [
      "admin",
      "author",
      "editor"
    ]
  },
  "user_metadata": {
    "full_name": "Example User"
  }
}
```

To get a list of users, Netlify provides a mechanism to get a short-lived token from a function's context.

One can use this token to call admi method of the GoTrue apil such as `/admin/users`/ to fet aq list of all Identity users.

While there is no `User` model or table, the `api/src/graphql/users.sdl.js` and `api/src/graphql/userMetadata.sdl.js` define the `User` types.

```js
  type UserMetadata {
    full_name: String!
  }

  type AppMetadata {
    roles: [String]
  }

  type User {
    id: String!
    aud: String
    role: String
    email: String!
    confirmed_at: DateTime
    confirmation_sent_at: DateTime
    recovery_sent_at: DateTime
    app_metadata: AppMetadata
    user_metadata: UserMetadata
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Query {
    userMetadata: UserMetadata!
    users: [User!]!
```

One can they query users from a service such as `users` by getting the short-lived `adminToken` from the `context.clientContext.identity`. With that you can call [GoTrue admin methods](https://github.com/netlify/gotrue-js#admin-methods).

```js
import got from 'got'
import { requireAuth } from 'src/lib/auth'

export const users = async () => {
  requireAuth({ role: 'admin' })

  const adminToken = context.clientContext?.identity?.token

  const { body } = await got.get(
    'https://<YOUR_SITE>.netlify.app/.netlify/identity/admin/users',
    {
      responseType: 'json',
      headers: {
        authorization: `Bearer ${adminToken}`,
      },
    }
  )

  return body['users']
}
```

## Netlify Identity Setup

You will need to [Enable Identity](https://docs.netlify.com/visitor-access/identity/#enable-identity-in-the-ui).

To enable Identity service on your site, select the Identity tab and click Enable Identity.

This will create an Identity service instance for your site, and allow you to invite Identity users and change settings.

### Manage Users and Roles
You can [access settings](https://docs.netlify.com/visitor-access/identity/manage-existing-users/) for an individual Identity user by clicking their entry in the list on the site's Identity tab.

After inviting users and they confirm, you can [add roles to their profile](https://docs.netlify.com/visitor-access/identity/manage-existing-users/#user-account-metadata).

Roles are not Identity user editable. You can assign one or more roles of your choosing, then use them to control access to areas or functionality in your site by checking this property: `"app_metadata": {"roles": ["admin"]}`.

### Trigger serverless functions on Identity events

You can [trigger serverless function calls](https://docs.netlify.com/functions/functions-and-identity/#trigger-serverless-functions-on-identity-events) when certain Identity events happen, like when a user signs up. The following events are currently available:

* `identity-validate`: Triggered when an Identity user tries to sign up via Identity.
* `identity-signup`: Triggered when an Identity user signs up via Netlify Identity. (Note: this fires for only email+password signups, not for signups via external providers e.g. Google/GitHub)
* `identity-login`: Triggered when an Identity user logs in via Netlify Identity

To set a serverless function to trigger on one of these events, match the name of the function file to the name of the event. For example, to trigger a serverless function on identity-login events, name the function file `identity-login.js`.

If you return a status other than 200 or 204 from one of these event functions, the signup or login will be blocked.

The payload in the body of an Identity event function looks like:

```js
{
  "event": "login|signup|validate",
  "user": {
    # an Identity user object
  }
}
```

If your serverless function returns a 200, you can also return a JSON object with new user_metadata or app_metadata for the Identity user. For example, if you return:

```js
{"app_metadata": {"roles": ["admin"]}}
```

The value of the Identity user's app metadata will be replaced with the above.

Note: To prevent external requests to event functions, Netlify generates a JSON web signature (JWS) for each event triggered by our platform, and verifies that the signature is correct before invoking an associated event function.

That means you cannot just call the function externally -- you will get a 403 Forbidden status..

### Sign Up

On signup, we will automatically assign you roles based on your email via the "Trigger serverless functions on Identity events" feature.

If your email contains:

* `+author` as in `example+author-example@gmail.com`, you will be assigned the `author` role
* `+editor` as in `example+editor-example@gmail.com`, you will be assigned the `editor` role
* `+publisher` as in `example+publisher-example@gmail.com`, you will be assigned the `publisher` role

See: `functions/identity-signup.js` function for implemenation details.

## New Environment Variables

```
GOTRUE_JWT_EXP - You can increase the expiration time of your JWT
SITE_NAME - Used to link to your Netlify Identity management page for your site
```

```
// redwood.toml
[web]
  port = 8910
  apiProxyPath = "/.netlify/functions"
  includeEnvironmentVariables = ['SITE_NAME', 'GOTRUE_JWT_EXP']
[api]
  port = 8911
  includeEnvironmentVariables = ['SITE_NAME']
```

---

# About Redwood
>**HEADS UP:** RedwoodJS is _NOT_ ready for use in Production. It relies heavily on Prisma2, which is currently in testing with an expected production release coming soon. See status at ["Is Prisma2 Ready?"](https://isprisma2ready.com)

## Getting Started
- [Redwoodjs.com](https://redwoodjs.com): home to all things RedwoodJS.
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.

### Updating Redwood

Redwood comes with a helpful command to update itself and its dependencies. Why not try a new and improved version today?

> :point_right: IMPORTANT: Skipping versions when upgrading is not recommended and will likely cause problems. Do read through all [Release Notes](https://github.com/redwoodjs/redwood/releases) between your current version and the latest version. Each minor release will likely require you to implement breaking change fixes and apply manual code modifications.

```terminal
yarn rw upgrade
```

## Development

### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.
