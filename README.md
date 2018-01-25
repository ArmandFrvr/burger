# Eat-Da-Burger

A sample burger-eating interface that noms your carefully-entered burgers into oblivion.

## Installation
1. Use the /db/schema.sql and /db/seeds.sql files to initialize your database.  Open a command prompt from the seeds directory and type:
`mysql -u root -p`
`source schema.sql`
`source seeds.sql`
1. Return to the application root directory and type `npm install` to install the packages
1. Start the application by typing `node server.js`

## Instructions
Enter the name of a burger to add it to the uneaten list.  Click the Eat Me button to move it to the eaten list.