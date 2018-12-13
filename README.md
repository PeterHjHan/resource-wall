# WallNOPOLY

A collaborative resource wall (Pinterest clone) with a Monopoly property card theme.
Any resource can be found through the topics dropdown or search query. Registered/logged in users are able to create, like, rate, and comment on other users' posts. On users' pages, created and liked posts are saved for convenient referral.

This was a collaborative project with [Peter Han](https://github.com/PeterHjHan), [Bassem Kaddour](https://github.com/bassemkaddour), and [Monica Lee](https://github.com/monicasoojilee).

## Final Product
![Major Features Walkthrough](https://github.com/bassemkaddour/resource-wall/blob/master/public/WallNOPOLY-demo.gif)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- bcryptjs
- body-parser
- cookie-session
- EJS
- Express
- Node 5.10.x or above
- NPM 3.8.x or above
- PostgreSQL
- Knex
