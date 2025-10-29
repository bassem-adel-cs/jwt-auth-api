# jwt-auth-api

**jwt-auth-api** is a **Node.js + Express.js** project for user registration and login using **JWT**, with secure password handling using **bcrypt** and proper data validation.

---

## 🔹 Features

- Register new users and check if the email is already registered.  
- Login with email and password verification, with clear error messages.  
- Protect routes using **JWT**.  
- Password hashing using **bcrypt**.  
- Centralized error handling with **asyncHandler**.  
- Organized project structure with **controllers / routes / middleware / models / validation**.

---
## 📡 API Routes

| Method | Route        | Description |
|--------|-------------|-------------|
| `POST` | `/register`  | Register a new user. Checks if email already exists. |
| `POST` | `/login`     | Login user, verify email and password. |
| `GET`  | `/users`     | Fetch all registered users (protected route if required). |

---

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JSON Web Token (JWT)  
- bcrypt for password hashing  
- asyncHandler for error handling  
- Middleware for route protection  
- Validation for user input  

---

## 🔒 Authentication Flow

1. **Register:**  
   - User provides email and password.  
   - The system checks if the email already exists.  
   - If already registered, an error message is returned: `"Email already exists"`.

2. **Login:**  
   - User provides email and password.  
   - System verifies email and password.  
   - If invalid, returns: `"Invalid email or password"`.  
   - If valid, a **JWT token** is issued.

3. **Protected Routes:**  
   - Any protected route verifies the **JWT token** before granting access.

---

## ⚡ Notes

- Add a **.env** file for environment variables like `MONGO_URI` and `JWT_SECRET`.  
- Do not push `node_modules/` (already in `.gitignore`).  
- Use `asyncHandler` for all async functions to handle errors via `next(err)`.

---

## 📌 Example Usage

```javascript
// Register a new user
POST /register
{
  "email": "user@example.com",
  "password": "123456"
}

// Login
POST /login
{
  "email": "user@example.com",
  "password": "123456"
}

// Get all users
GET /users
Authorization: Bearer <JWT_TOKEN>
