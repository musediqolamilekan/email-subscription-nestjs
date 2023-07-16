# Project Name: NestJS Email Subscription Service

A detailed description of the NestJS application that provides basic authentication and a subscription feature for users. It uses MongoDB as the database for storing user information.

## Overview
This application includes user authentication, subscription to a mailing list, confirmation email on subscription, and necessary error handling with data validation. It uses MongoDB for database operations with Mongoose as an Object Data Modeling (ODM) library to manage relationships between data and provides schema validation. 

## Project Setup

### Dependencies
To setup this project you need to have the following installed:

- Node.js
- NPM (comes with Node.js) or Yarn
- MongoDB
- NestJS CLI

### Getting Started
1. Clone the repository and navigate into it.

2. Install all dependencies using NPM or Yarn:

    ```
    npm install
    ```

    or

    ```
    yarn install
    ```

3. Set up your MongoDB database and get the connection URI.

4. Create a `.env` file in the root of your project and input your database connection details:

    ```
    DB_USER=yourDatabaseUser
    DB_PASSWORD=yourDatabasePassword
    DB_HOST=yourDatabaseHost
    DB_PORT=yourDatabasePort
    DB_NAME=yourDatabaseName
    EMAIL_USER=yourEmail
    EMAIL_PASS=yourEmailPassword
    ```

5. Start the application in development mode with:

    ```
    npm run start:dev
    ```

    or

    ```
    yarn start:dev
    ```

Your application is now running and listening for connections on http://localhost:3000.

## Usage

### User Registration
To register a user, send a `POST` request to `/auth/signup` with a body containing user `name`, `email`, and `password`.

### User Login
To login a user, send a `POST` request to `/auth/login` with a body containing user `email` and `password`. You will get a JWT access token.

### Email Subscription
To subscribe a user to the mailing list, send a `POST` request to `/email/subscribe` with the JWT token obtained from the login endpoint.

## Troubleshooting and Fixes
1. If you encounter an issue where you see a `TypeError: Cannot read properties of undefined (reading 'createTransport')`, make sure `nodemailer` is installed and properly imported. Run `npm install nodemailer` or `yarn add nodemailer`.

2. If you face issues related to TypeScript configuration, like 'Could not find a declaration file for module', make sure to install necessary type definitions using `@types/{module}` and ensure your `tsconfig.json` is correctly configured.

3. When dealing with environment variables, it is advisable to use the `@nestjs/config` package for managing configurations. This allows you to access environment variables anywhere in your application through dependency injection.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
