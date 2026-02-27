# Task Management API

A robust Node.js REST API for managing tasks with MongoDB integration. This backend service provides a complete task management system with user authentication support and data persistence.

## Features

-  **Create Tasks** - Add new tasks with detailed information
-  **Retrieve Tasks** - Fetch all tasks with user information
-  **Delete Tasks** - Remove completed or unwanted tasks
-  **User Association** - Link tasks to specific users
-  **Task Status Tracking** - Mark tasks as completed or pending
-  **Email Validation** - Ensure unique email entries with MongoDB validation
-  **Error Handling** - Comprehensive error messaging and validation
-  **Environment Configuration** - Secure configuration with environment variables

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js (v5.2.1)
- **Database:** MongoDB with Mongoose ODM (v9.1.6)
- **Environment Management:** dotenv (v17.2.4)
- **Development Tools:** Nodemon (v3.1.11)

## Project Structure

```
TASK1-To-Do List/
├── server.js           # Main application entry point
├── package.json        # Project dependencies and metadata
├── .env               # Environment variables (not included in repo)
├── .gitignore         # Git ignore rules
├── models/
│   └── Task.js        # Mongoose Task schema
└── routes/
    └── taskRoutes.js  # API routes and controllers
```

## Installation

1. **Clone or download the project**
   ```bash
   cd TASK1-To-Do\ List
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory**
   ```
   MONGODB_URL=mongodb://localhost:27017/task-management
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   Or with Nodemon for development:
   ```bash
   npx nodemon server.js
   ```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URL` | MongoDB connection string | Required |
| `PORT` | Server port | 3000 |

## API Endpoints

### Create a Task
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Buy groceries",
  "isCompleted": false,
  "email": "user@example.com",
  "user": "user_id_from_mongodb"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "isCompleted": false,
    "email": "user@example.com",
    "user": "user_id_from_mongodb",
    "createdAt": "2024-02-12T10:30:00Z"
  }
}
```

### Get All Tasks
```
GET /api/tasks
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Buy groceries",
      "isCompleted": false,
      "email": "user@example.com",
      "user": {
        "_id": "user_id",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "createdAt": "2024-02-12T10:30:00Z"
    }
  ]
}
```

### Delete a Task
```
DELETE /api/tasks/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- **400 Bad Request** - Invalid input or duplicate email
- **500 Internal Server Error** - Server-side errors

**Error Response Format:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Task Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String |  Yes | Task title/description |
| `isCompleted` | Boolean | No | Completion status (default: false) |
| `email` | String | No | Email associated with task (unique) |
| `user` | ObjectId | No | Reference to User document |
| `createdAt` | Date | No | Timestamp (auto-generated) |

## Getting Started

1. Ensure MongoDB is running on your system
2. Configure your `.env` file with MongoDB connection details
3. Run `npm install` to install all dependencies
4. Start the server with `npm start` or `npx nodemon server.js`
5. Test endpoints using Postman or cURL

## Example Usage with cURL

**Create a task:**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete API documentation",
    "email": "dev@example.com"
  }'
```

**Get all tasks:**
```bash
curl http://localhost:3000/api/tasks
```

**Delete a task:**
```bash
curl -X DELETE http://localhost:3000/api/tasks/507f1f77bcf86cd799439011
```

## Future Enhancements

- [ ] Update/Edit task functionality (PUT endpoint)
- [ ] User authentication and authorization
- [ ] Task filtering and sorting
- [ ] Task categories or tags
- [ ] Due date tracking
- [ ] Task priority levels
- [ ] Pagination for large datasets
- [ ] Unit and integration tests

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve this project.

## License

ISC

## Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

---

**Last Updated:** February 2024  
**Version:** 1.0.0
