# FullStack CRUD Assignment

This project implements a full-stack application with user authentication and CRUD operations on posts, focusing on update and delete with proper authorization.

## Features

- User registration and login
- Create, read, update, delete posts
- Ownership checks for edit/delete
- Confirmation dialogs for delete
- Error handling and optimistic UI updates

## Setup

1. Install dependencies for backend and frontend:
   - Backend: `cd backend && npm install`
   - Frontend: `cd frontend && npm install`

2. Start MongoDB locally or update MONGO_URI in backend/.env

3. Start servers:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm run dev`

## API Endpoints

- POST /api/auth/register - Register user
- POST /api/auth/login - Login user
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get post by ID
- POST /api/posts - Create post (auth required)
- PUT /api/posts/:id - Update post (auth + ownership required)
- DELETE /api/posts/:id - Delete post (auth + ownership required)

## Submission

1. Create branch `feature/crud-update-delete`
2. Implement features
3. Commit with meaningful message
4. Push to GitHub and create PR
5. Record video demonstrating:
   - Update flow with pre-filled form
   - Delete flow with confirmation
   - Authorization behavior
   - Error handling

Upload video to Google Drive with "Anyone with the link can edit" access.
