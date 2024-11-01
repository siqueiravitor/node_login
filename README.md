# Node.js Authentication API

A RESTful API for user authentication, built with **Node.js**, **Express**, and **MySQL**. This project adheres to **SOLID principles**, **Clean Architecture**, and **Clean Code** standards, ensuring modularity and ease of maintenance.

## Features

- **User Registration**: Allows new users to register with username and password.
- **User Login**: Authenticates users, providing JWTs for session management.
- **User Data Retrieval**: Access logged-in user's data using token-based authentication.
- **Security**: Password hashing and JWT-based authentication.
- **Middleware**: Implements middleware for protected routes.

## Technologies Used

- **Node.js** & **Express** for server and routing
- **MySQL** as the relational database
- **JWT** (JSON Web Tokens) for secure authentication
- **bcrypt** for password hashing
- **dotenv** for managing environment variables

## Architecture

This project follows **Clean Architecture** principles with a focus on **SOLID** principles. The codebase is structured to separate concerns:

- **Routes**: Define API endpoints
- **Controllers**: Handle request/response logic
- **Services**: Business logic and interaction with repositories
- **Repositories**: Handle data access (MySQL queries)
- **Middlewares**: JWT-based route protection

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MySQL](https://www.mysql.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

2. **Clone the repository:**
    ```bash
    npm install

3. **Create a .env file in the root directory with the following variables:**
    ```bash
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=user_auth
    JWT_SECRET=your_jwt_secret
    PORT=3000

4. **Initialize the database schema (optional step if SQL script or ORM migration is included):**
- Execute SQL script or ORM migration here.

5. **Start the server:**

    ```bash
    npm run start

-Your server should now be running at http://localhost:3000.

---

API Endpoints

| Endpoint         | Method | Description             |
| ---------------- | ------ | ----------------------- |
| `/auth/register` |  POST  | Register a new user     |
| `/auth/login`    |  POST  | Log in an existing user |

Folder Structure

    ```bash
    ├── src
    │   ├── controllers   # Route handlers
    │   ├── routes        # API routes
    │   ├── services      # Business logic
    │   ├── repositories  # Database operations
    │   ├── middlewares   # Authentication middleware
    │   ├── config        # Database configuration
    │   └── app.js        # Application entry point
    └── .env              # Environment variables
    ```

# Contributing
1. Fork the project
2. Create your feature branch (git checkout -b feature/new-feature)
3. Commit your changes (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/new-feature)
4. Open a Pull Request

# License
This project is licensed under the MIT License.


---

This README.md template is modular and descriptive, providing setup, configuration, and usage details, which makes it easy for anyone to understand and get started with your project. Let me know if you'd like to add more sections or details!