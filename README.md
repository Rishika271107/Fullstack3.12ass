# FullStack CRUD App with Pagination

A full-stack web application implementing Create and Read operations with pagination for user-generated content (posts). Built with Node.js/Express backend and React frontend.

## Features

- User authentication (register/login)
- Create posts
- View paginated list of user's posts
- Secure API with JWT authentication
- Responsive frontend with loading/error states

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

### Frontend

- React
- Axios for API calls
- CSS for styling

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or connection string)

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd FullStack3.12ass
   ```

2. Backend setup:

   ```bash
   cd backend
   npm install
   # Create .env file with:
   # MONGO_URI=mongodb://localhost:27017/fullstack
   # JWT_SECRET=your_jwt_secret
   # PORT=5000
   npm run dev
   ```

3. Frontend setup:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Usage

1. Open browser to `http://localhost:3000`
2. Register a new account or login
3. Create posts using the form
4. View posts in the dashboard with pagination controls

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts (requires authentication)

- `POST /api/posts` - Create new post
- `GET /api/posts?page=1&limit=5` - Get paginated posts

## Pagination

The read API supports pagination with query parameters:

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

Response includes pagination metadata:

```json
{
  "posts": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalPosts": 23,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## License

MIT License
