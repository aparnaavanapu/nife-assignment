### JWT Authentication (React + Express + PostgreSQL (Neon)) ###

# Project Overview

This project demonstrates JWT (JSON Web Token) based authentication using a React frontend and an Express backend with PostgreSQL (hosted on Neon).
It provides user signup, login, and protected route access when a valid token is present.

---

# Project Architecture

=> Frontend (React + Tailwind CSS)

**Repository root layout (relevant folders):**

NIFE-ASSIGNMENT/
│
├── frontend/                      # React app (created with Create React App)
│   ├── public/                    # index.html and static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomeRoute/
│   │   │   ├── LoginRoute/
│   │   │   ├── SignupRoute/
│   │   │   └── ProtectedRoute/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md

---

=> Backend (Node.js + Express)

backend/
│
├── controllers/
│   └── auth.controllers.js        # Handles signup, login, and JWT generation
│
├── Db/
│   └── connectDb.js               #PostgreSQL connection (uses `pg` POSTGRES_CONNECTION_URL)
│
├── routes/
│   └── auth.routes.js             # Defines /signup and /login routes
│
├── .env                           # Contains POSTGRES_CONNECTION_URL and JWT_SECRET
│
├── index.js                       # Entry point that sets up Express app (listens on port 5005)
│
├── package.json                   # Backend dependencies and scripts
└── package-lock.json
 ---

# Features

=> User Registration (Signup)
=> User Login with JWT generation
=> Token returned in JSON response (frontend can store it as needed)
=> Protected routes (frontend + backend)
=> Tailwind CSS UI styling
=> PostgreSQL database (Neon)

# Setup Instructions

1. Clone the Repository
   git clone https://github.com/aparnaavanapu/nife-assignment.git
2. Backend Setup
   ** Navigate to backend folder
   cd backend
   ** Install dependencies
   npm install
   ** Create `.env` file with the following variables (example):

   POSTGRES_CONNECTION_URL=postgresql://<user>:<password>@<host>/<database>
   JWT_SECRET=your_jwt_secret_key

   If you use Neon, set `POSTGRES_CONNECTION_URL` to the Neon connection string.

   ** Start the backend server

   node index.js
   Server will run on http://localhost:5005/

3. PostgreSQL (Neon) Setup
   Create a `users` table in your Postgres database. Example SQL:

   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL
   );


4. Frontend Setup
   ** Navigate to frontend folder
   cd frontend
   ** Install dependencies
   npm install
   ** Start the React app
   npm start
   Frontend runs on http://localhost:3000


# Authentication Flow

1. Signup — user registers with name, email, and password.
2. Backend — password is hashed with bcrypt and user is stored in PostgreSQL.
3. Login — user provides credentials.
4. Backend — verifies credentials and issues a JWT token (expires in 1 hour).
5. Frontend — receives token and should store it (e.g., in cookies or localStorage) and include it on protected requests.

# API Endpoints

| Method | Endpoint              | Description                      | Protected |
| ------ | --------------------- | -------------------------------- | --------- |
| POST   | `/api/auth/register`  | Register a new user              | ❌         |
| POST   | `/api/auth/login`     | Authenticate user and return JWT | ❌         |
| GET    | `/api/auth/protected` | Example of protected route       | ✅         |



# Tech Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| **Frontend** | React, Tailwind CSS, React Router, js-cookie |
| **Backend**  | Node.js, Express.js, JWT, bcrypt, pg         |
| **Database** | PostgreSQL (Neon or self-hosted)             |
| **Auth**     | JWT (JSON Web Token)                         |


# Scripts / How to run

Backend (from `backend/`):
 - Install: npm install
 - Start: node index.js

Frontend (from `frontend/`):
 - Install: npm install
 - Start: npm start

# Architecture Summary

**Controller Layer** → Handles core logic for user signup and login (password hashing, token generation, etc.).

**Route Layer** → Defines REST API endpoints (e.g., /register, /login, /protected) and connects them to controllers.

**Middleware Layer** → Validates and verifies JWT tokens to protect private routes and ensure authorized access.

**Frontend Layer (React)** → Contains components that manage authentication, store JWT tokens (securely via cookies or localStorage), and protect routes using conditional rendering.

**Database Layer (PostgreSQL on Neon)** → Stores user credentials such as name, email, and hashed password.
The backend connects to the Neon-hosted PostgreSQL database using the pg Node.js client or Sequelize ORM for secure and efficient data management.


# Notes

- The backend listens on port 5005 by default (see `backend/index.js`).
- The DB connection uses `process.env.POSTGRES_CONNECTION_URL` (see `backend/Db/connectDb.js`).
- JWT secret must be set in `process.env.JWT_SECRET` for token signing (see `backend/controllers/auth.controllers.js`).


```





