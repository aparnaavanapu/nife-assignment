JWT Authentication (React + Express + MySQL)

# Project Overview

This project demonstrates JWT (JSON Web Token) based authentication using a React frontend and an Express backend with MySQL.
It provides user signup, login, and protected route access only when a valid token is present.

# Project Architecture

=> Frontend (React + Tailwind CSS)

NIFE-ASSIGNMENT/
│
├── login-form/
│   ├── public/                    # Contains index.html and static assets
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

=> Backend (Node.js + Express)

BACKEND/
│
├── controllers/
│   └── auth.controllers.js        # Handles signup, login, and JWT generation
│
├── Db/
│   └── connectDb.js               # MySQL connection using mysql2 
│
├── routes/
│   └── auth.routes.js             # Defines /register, /login, /protected routes
│
├── .env                           # Contains DB URI and JWT secret
│
├── index.js                       # Entry point that sets up Express app
│
├── package.json                   # Backend dependencies and scripts
└── package-lock.json


# Features

=> User Registration (Signup)
=> User Login with JWT generation
=> Token stored securely in cookies
=> Protected routes (frontend + backend)
=> Tailwind CSS UI styling
=> MySQL database connection

# Setup Instructions

1. Clone the Repository
   git clone https://github.com/<your-username>/nife-assignment.git

2. Backend Setup
   ** Navigate to backend folder
   cd BACKEND
   ** Install dependencies
   npm install
   ** Create .env file
    
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=assignment
    JWT_SECRET=your_jwt_secret_key

   ** Start the backend server

   npm start
   Server will run on "http://localhost:5000"

3. MySQL Database Setup
   ** Open your MySQL terminal (MySQL Workbench) and run

   CREATE DATABASE assignment;

   USE assignment;

   CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
   password VARCHAR(255) NOT NULL
   );



SELECT * FROM users;

4. Frontend Setup
   ** Navigate to frontend folder
   cd ../NIFE-ASSIGNMENT/login-form
   ** install dependencies
   npm install
   ** Start the React app
   npm start
   Frontend runs on "http://localhost:3000"


# Authentication Flow

| Step                | Description                                          |
| ------------------- | ---------------------------------------------------- |
| 1️ Signup          | User registers with username, email, password        |
| 2️ Backend         | Hashes password with bcrypt and saves to MySQL |
| 3️ Login           | User enters credentials                              |
| 4️ Backend         | Verifies credentials → issues JWT token              |
| 5️ Frontend        | Stores JWT token in cookies            |
| 6️ Protected Route | Valid token → access granted, else redirect to login |

# API Endpoints

| Method | Endpoint              | Description                 | Protected |
| ------ | --------------------- | --------------------------- | --------- |
| POST   | `/api/auth/register`  | Register a new user         | ❌         |
| POST   | `/api/auth/login`     | Login and receive JWT token | ❌         |
| GET    | `/api/auth/protected` | Access protected resource   | ✅         |


# Tech Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| **Frontend** | React, Tailwind CSS, React Router, js-cookie |
| **Backend**  | Node.js, Express.js, JWT, bcrypt             |
| **Database** | MySQL                       |
| **Auth**     | JWT (JSON Web Token)                         |


# Scripts

** Backend
   node index.js
** Frontend
   npm start

# Architecture Summary

Controller Layer → Handles business logic (register/login)

Route Layer → Defines Express routes

Middleware → Verifies JWT tokens

Frontend → React components handle authentication and route protection

Token Flow → Stored in cookies, validated on protected routes





