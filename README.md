# FamBestie

A platform assigns assistant workers to families to help them with daily routines and work such as housekeeping and fitness training.

## The Problem

Families need workers to help them in their routines and assist them with their tasks. Suppose you have an elderly father and you need a driver to be with him whenever he goes, or you and your wife lives in a huge house and she needs help doing the house work such as laundry and dishes.

## The Solution

We provide the families with honest, reliable, and experienced workers in five distinct specializations which are: Housekeeping, Driving, Personal Training, Guarding, and Babysitting.
The client can go to our website and ask to book a client specifically or apply his job post to the admin to send a worker for him.

## Database Schema

![Screenshot from 2023-02-11 18-56-54](https://user-images.githubusercontent.com/77394697/218270668-ca0577b1-ef40-46ed-b094-56c387d5a95b.png)

## User Stories

- As a user, I should be able to see the landing page when I first open the website.
- As a user, I should be able to signup or login if I'm not authenticated.
- As an admin user, I should be able to go to my dashboard when I click on the profile button in the account settings dialog.
- As a user, I should be able to logout by clicking on the logout button in the account settings dialog or the logout button in the header.
- As a user, I should be able to navigate between the sections of the landing page or the workers page from the header or the footer.
- As a user, I should be able to register my information as a worker from the 'Join Our Family -Worker-' in the landing page and wait for the company to contact me when they need new workers.
- As a user, I should be able to got to the workers page from the header or footer.
- As a user, I should be able to search for filter the workers by searching by their names or selecting a specialty.
- As a user, I should be able to navigate between cards by the pagination.
- As an admin user, I should be able to see the total income, number of hired workers, number of unemployed workers, number of jobs, and number of clients cards in the statistics section in the admin dashboard.
- As an admin user, I should be able to see a chart explains the number of jobs to their specialty.
- As an admin user, I should be able to clients table section and see more information about the user when I click the profile icon in the last column of the table.
- As an admin user, I should be able to go the workers table section in the admin page and see more information about the user when I click the profile icon in the last column of the table.
- As an admin user, I should be able to see the jobs cards and a table of the workers with the ability of filtering them with the specialty in the jobs section.
- As an client user, I should be able to go to my profile when I click the profile button from the setting dialog in the header.
- As an client user, I should be able to see my information in the my profile's info card.
- As an client user, I should be able to see the total amount of money I spent in my profile.
- As an client user, I should be able to see the workers who previously worked for me cards and their reviews.

## User Journey

- When the user first opens the website, he will see the landing page, from the landing page the user can navigate between the sections and the workers page from the nav bar.
- The user can login or signup if he/she is not authenticated.
- The user should go to the 'Join Our Family' form at the landing page to register a worker.
- If the user is authenticated, the admin user can go to the dashboard from the profile button in the account settings dialog.
- If the user is authenticated, the user can logout from the account settings dialog and the logout button in the header.
- In the dashboard, the admin can see the statistics, the clients table, the workers table, and the jobs dashboard.
- In the client's profile, the client can see his/her profile information, the total money the user has spent, and the workers he previously worked with and their reviews.

## How to Get the App Working on Your Local Machine

- Clone this repository by typing `git clone https://github.com/moustf/FamBestie.git`
- Run `npm i` on the root directory to install the packages of the backend.
- Navigate to client directory by typing the command `cd client/` and run `npm i`.

### Database Setup

You should install `PostgreSQL`.

- After installing `PostgreSQL`, type `psql` in the terminal to open the postgres repl.
- To create a database, type the command `CREATE DATABASE -database name-;`.
- Then create a user for this DB by typing `CREATE USER -user name- WITH superuser password -password-`.
- After that `ALTER DATABASE -database name- OWNER TO -user name-;` to connect the database to the user you have created.
- Now you need to update your database with the schema and seed that waits for you, all you need to do is just typing `npm run dbSeed` which re-creates the database schema and also updates the database with the seed data.

### Starting the App

- You can start the express server by writing `npm run dev` on the root directory.
- To start the react dev server, navigate to the client folder by typing `cd client/` and then `npm start`.

--> The port for the express server is `8080` and you can find the react dev server running on port `3000`, copy this link `http://localhost:3000` and paste it in the url bar in your browser to open the app.

## Technologies We Used

- Node.js
- React.js
- Redux.js
- Express.js
- JavaScript
- TypeScript
- PostgreSQL
- Sequelize
- Material UI
- use-hook-form
- react-query
- Eslint
- CSS3

## Mentor

I was supervised by [Imad Shatali](https://github.com/Amoodaa), a senior full stack engineer.

## Developer

This website was analyzed, designed, and developed by [Mustafa Salem](thhps://github.com/moustf), a junior full stack web developer.

## Useful Resources

- [Nodejs](https://nodejs.org/en/docs/).
- [Expressjs](https://expressjs.com/en/4x/api.html).
- [Reactjs](https://beta.reactjs.org/).
- [Reduxjs](https://redux.js.org/introduction/getting-started).
- [Postgresql](https://www.postgresqltutorial.com/).
- [Sequelize](https://sequelize.org/).
- [Ant Design](https://ant.design/).
- [React Router](https://reactrouter.com/en/main).
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html).
- [react-hook-form](https://react-hook-form.com/).
- [react-query](https://react-query-v3.tanstack.com/overview).
