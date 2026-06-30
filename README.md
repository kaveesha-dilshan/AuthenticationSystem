# Advanced Authentication System

A secure and scalable REST API built with Node.js, Express.js, MongoDB, and JWT Authentication.

## Features

### Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes

### Authorization

* Role-Based Access Control (User/Admin)
* Admin-Only Routes

### User Management

* Get User Profile
* Update User Profile
* Change Password

### Password Recovery

* Forgot Password
* Reset Password
* Secure Reset Tokens
* Token Expiration Handling

### Security

* Password Hashing with bcryptjs
* JWT Authentication
* Input Validation with express-validator
* Centralized Error Handling

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* express-validator
* dotenv

## API Endpoints

### Authentication

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| POST   | /api/auth/register        | Register User        |
| POST   | /api/auth/login           | Login User           |
| POST   | /api/auth/forgot-password | Generate Reset Token |
| POST   | /api/auth/reset-password  | Reset Password       |

### User

| Method | Endpoint                  | Description         |
| ------ | ------------------------- | ------------------- |
| GET    | /api/auth/profile         | Get User Profile    |
| PUT    | /api/auth/update          | Update User Profile |
| PUT    | /api/auth/change-password | Change Password     |

### Admin

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | /api/auth/admin/users | Get All Users (Admin Only) |

## What I Learned

* Building REST APIs with Express.js
* MongoDB data modeling with Mongoose
* JWT Authentication and Authorization
* Password Hashing using bcrypt
* Middleware Architecture
* Role-Based Access Control
* Input Validation
* Error Handling
* Password Reset Workflows
* Secure Token Generation with Crypto

## Author
kaveesha-dilshan
