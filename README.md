# College Discovery Platform API

A backend-first College Discovery Platform built as part of an AI Software Engineer Internship assignment.

The platform helps students discover, compare, and save colleges through a structured set of APIs with authentication, filtering, pagination, and comparison capabilities.

---

## Live Demo

Vercel Deployment: [<YOUR_VERCEL_URL>](https://ai-signal-task.vercel.app/)

---

## Tech Stack

### Backend

* Next.js 15 API Routes
* TypeScript
* PostgreSQL
* Prisma ORM
* JWT Authentication
* Zod Validation

### Database

* PostgreSQL
* Neon Database

### Deployment

* Vercel

---

## Features

### Authentication

* User Registration
* User Login
* Current User Profile
* JWT-based Authorization
* Password Hashing using bcrypt

### College Discovery

* College Listing
* Search by College Name
* Filter by Location
* Filter by Fee Range
* Sorting
* Pagination

### College Details

* College Overview
* Courses
* Placements
* Reviews

### Saved Colleges

* Save College
* Get Saved Colleges
* Remove Saved College

### College Comparison

Compare up to 3 colleges based on:

* Fees
* Ratings
* Location
* Average Package
* Highest Package
* Value Score

---

## Database Design

### User

Stores user information and authentication data.

### College

Stores college information including fees, ratings, and location.

### Course

Stores courses offered by a college.

### Placement

Stores placement statistics.

### Review

Stores student reviews and ratings.

### SavedCollege

Many-to-many relationship between users and colleges.

---

## Architecture

The application follows a layered architecture:

Route → Validation → Service → Prisma → Database

### Folder Structure


├── app/api

├── services

├── schemas

├── validations

├── lib



### Design Decisions

* Service layer separates business logic from routes.
* Zod is used for request validation.
* Prisma handles database access.
* Async wrapper centralizes error handling.
* Standardized API responses across all endpoints.
* Database indexes added on searchable fields.

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

### Colleges

GET /api/colleges

GET /api/colleges/:id

### Saved Colleges

POST /api/saved

GET /api/saved

DELETE /api/saved/:collegeId

### Compare Colleges

GET /api/compare?ids=id1,id2,id3

---

## Installation

Clone repository

Install dependencies

npm install

Configure environment variables

NODE_ENV=

DATABASE_URL=

JWT_SECRET=

Run migrations

npx prisma migrate dev

Seed database

npx prisma db seed

Start development server

npm run dev

---

## Future Improvements

* Advanced recommendation engine
* College predictor tool
* Caching with Redis
* Role-based authorization
* OpenAPI/Swagger documentation
* Analytics dashboard

---

## Author

Lachapeta Sunil
