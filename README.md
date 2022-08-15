# express-prisma-boilerplate

An Express - Prisma ORM boilerplate
## Run Locally

Clone the project

```bash
  git clone https://github.com/dj0nny/express-prisma-boilerplate.git
```

Go to the project directory

```bash
  cd express-prisma-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to edit the following environment variables to your .env file

`DATABASE_URL`

## Prisma Configuration

For this boilerplate, the default database client is __Postgres__.

You can clean up the example migration with `rm -rf ./prisma/migrations` command.

Before running this boilerplate, you need to update your `schema.prisma` located in the `./prisma` folder.

Inside this file will go the model definitions of your database tables. Once you update the models, you can update the database running `npx prisma migrate dev --name migration-name`.
This command is going to do two things:
  1. It creates a new SQL migration file for this migration
  2. It runs the SQL migration file against the database
 
Whenever you make changes to your Prisma schema in the future, you manually need to invoke `prisma generate` in order to accommodate the changes in your Prisma Client API.

### Seed

This boilerplate provides a `seed.js` file located in the `./prisma` folder. You can run it using `npx prisma db seed`.

## Tech Stack

Node.js, Express, Prisma.js, Postgres
## Authors

- [@dj0nny](https://github.com/dj0nny/)