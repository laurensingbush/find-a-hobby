# Find-A-Hobby

A web app that helps users discover new hobbies to enjoy in their leisure time. Users are free to use the search engine without an account, but creating an account will allow them to save the hobbies they're interested in exploring and view them whenever they're signed in.

<img src="https://user-images.githubusercontent.com/43523243/142054490-5e9e5ed4-54bc-479c-b3d1-6a0cabcac3eb.png" alt="mobile" width="700">

## Getting Started

Ensure you have `node` and `npm` installed on your system.

```terminal
$ node -v
$ npm -v
```

### 1. Clone the repository and install dependencies

```terminal
$ git clone https://github.com/laurensingbush/find-a-hobby.git
$ cd find-a-hobby
$ npm install
```

### 2. Configure your local environment

Create a .env.local file in root and set your provider credentials and database connection URL.

e.g.

```
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_URL=
DATABASE_URL=
```

### 3. Configure Authentication Providers

When setting up OAuth in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.
e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

### 4. Start the application

To run your site locally, use:

```terminal
$ npm run dev
```

To run it in production mode, use:

```terminal
$ npm run build
$ npm run start
```

### 5. Preparing for Production

You must set the `NEXTAUTH_URL` environment variable with the URL of your site, before deploying to production.
e.g. in your `.env.local` file - `NEXTAUTH_URL=https://example.com`

Also make sure to set your `DATABASE_URL`, `{CLIENT}_ID`, and `{CLIENT}_SECRET` environment variables in your hosting providers dashboard.

## Built with:

- [Next.js](https://nextjs.org/) as the React framework
- [Prisma](https://www.prisma.io/) as the ORM for migrations and database access
- [PostgreSQL](https://www.postgresql.org/) as the database
- [NextAuth.js](https://next-auth.js.org/) for authentication via GitHub & Google (OAuth)
- [TypeScript](https://www.typescriptlang.org/) as the programming language
- [Vercel](https://vercel.com) for deployment
- [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page) for accessing their list of hobbies data
