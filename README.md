# student-api-server
Student Management API Server for Keploy Fellowship.
# 🎓 Student Manager API (Keploy Fellowship Task 1)

This is a full-stack Student Management API built using **Node.js**, **Express**, **MongoDB Atlas**, and an optional HTML + JS frontend. It allows users to **Create, Read, Update, and Delete (CRUD)** student records.

---

## 🚀 Features

- 📦 RESTful API using Express
- 💾 MongoDB Atlas integration with Mongoose
- 🔧 CRUD operations for student data
- 🌐 Simple HTML + JS frontend 
- 🧪 Tested using `curl`
- 🎥 Keploy used to record test sessions 

---

## 📁 Project Structure

student-api-server/
│
├── config/
│ └── db.js # MongoDB connection config
│
├── controllers/
│ └── studentController.js # API logic (CRUD functions)
│
├── models/
│ └── studentModel.js # Mongoose schema
│
├── routes/
│ └── studentRoutes.js # Express routes
│
├── public/
│ └── index.html # (Optional) Frontend UI
│
├── server.js # App entry point
├── .env # Environment variables
├── package.json
└── README.md # This file

---

## 🔗 API Endpoints

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | `/api/students`        | Get all students          |
| POST   | `/api/students`        | Add a new student         |
| PUT    | `/api/students/:id`    | Update a student by ID    |
| DELETE | `/api/students/:id`    | Delete a student by ID    |

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend (Optional):** HTML + JavaScript (Fetch API)
- **Testing:** Curl, Keploy (record only)
- **Platform:** Git, GitHub, WSL2 (Ubuntu)

---

## 🛠️ How to Run This Project

### ✅ Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kishorecodesinpython/student-api-server.git
   cd student-api-server