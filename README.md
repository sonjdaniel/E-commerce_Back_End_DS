# E-commerce_Back_End_DS

## Description

E-commerce Back End project is a functional Express.js API that uses Sequelize to create and modify tables in a MySQL database for e-commerce. For this project, Insomnia Core is used to test endpoints to **GET**, **POST**, **PUT** and **DELETE**.\
This API allows users to see, add, update and/or delete Categories, Products and products' Tags.\

## Installation

For this application, please use https://nodejs.org/en/ to install Node.js (version 16 is recommended).\
Run `npm i` in the terminal to install dependencies dotenv, Express, MySQL2 and Sequelize and Nodemon.

## Usage

To get access to the database to manage and view data, user needs to do the following:

1. Use .env.EXAMPLE to enter your MySQL username and password (remove .EXAMPLE)
1. To create the database:
   - In the command line (CLI), navigate to db folder (./Develop/db)
   - Type `mysql -u root -p`
   - Enter your password
   - Type `SOURCE schema.sql`
1. To seed data to the database:
   - In the CLI, navigate to the Develop folder
   - Type `npm run seed`
1. To connect to server:
   - In the CLI, navigate to server.js (./Develop/server.js)
   - Type `npm i` to guarantee dependencies are installed
   - Type `npm start`
1. After doing the steps above, open the Insomnia app.

   - To **GET**, **POST**, **PUT** and/or **DELETE** Category:
     **GET**,
     http://localhost:3001/api/categories
     http://localhost:3001/api/tags
     http://localhost:3001/api/products

     **GET**,
     http://localhost:3001/api/categories/1
     http://Localhost:3001/api/tags/1
     http://localhost:3001/api/products/1

     **POST**
     http://localhost:3001/api/categories

   Example:
   JSON
   {
   "category_name": "Underwear"
   }

   **PUT**
   http://localhost:3001/api/categories/6

   **DELETE**
   http://localhost:3001/api/categories/6

## Credits

With the help of instruction and guidance of the staff of the UofM coding boot camp, nor without the resources at W3 and the Mozilla Developers Network. I was able to write the code the best I can.

## License

The license for this project is **The MIT License**<br>
To learn more about this license, please access https://opensource.org/licenses/MIT

## Walkthrough Video

[Link to the walkthrough video](https://drive.google.com/file/d/1ZsW2yN5tVuFh4aU-at45M2X6MNizYwC3/view?usp=sharing)
