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
- 🧪 Tested using `curl`, Jest & Supertest
- 🎥 Keploy used to record test sessions

---

## 📁 Project Structure

```
student-api-server/
│
├── config/
│   └── db.js                # MongoDB connection config
│
├── controllers/
│   └── studentController.js # API logic (CRUD functions)
│
├── models/
│   └── studentModel.js      # Mongoose schema
│
├── routes/
│   └── studentRoutes.js     # Express routes
│
├── public/
│   └── index.html           # (Optional) Frontend UI
│
├── tests/
│   └── students.test.js     # Jest + Supertest test cases
│
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── server.js                # App entry point
└── README.md                # This file
```

---

## 🔗 API Endpoints

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | `/api/students`     | Get all students       |
| POST   | `/api/students`     | Add a new student      |
| PUT    | `/api/students/:id` | Update a student by ID |
| DELETE | `/api/students/:id` | Delete a student by ID |

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend (Optional):** HTML + JavaScript (Fetch API)
- **Testing:** Jest, Supertest, Curl
- **Test Recorder:** Keploy
- **Platform:** Git, GitHub, WSL2 (Ubuntu)

---

## 🛠️ How to Run This Project

### ✅ Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kishorecodesinpython/student-api-server.git
   cd student-api-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file and add Mongo URI:**
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://arinkishore7:Arin%402283@cluster0.93nt3ru.mongodb.net/keployDB?retryWrites=true&w=majority&appName=Cluster0
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit `http://localhost:5000` to use the frontend.

---

## 🧪 Testing and Coverage

This project includes API tests written using **Jest** and **Supertest**.

### ✅ What’s Tested

- `POST /api/students` → Add new student
- `GET /api/students` → Get all students

### 🔍 Run Tests

```bash
npm test
```

### 🖼️ Test Coverage Screenshot

![Test Coverage](./Screenshot%202025-06-22%20153408.png)

---

## 🧠 Learnings

Through this task, I learned:

- Building and connecting an API with MongoDB Atlas
- Creating a simple UI with HTML + JS for real-time interaction
- Using Keploy to record and replay API calls
- Writing tests with Jest and Supertest
- Interpreting and improving test coverage

---