const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// ✅ Load environment variables from .env file
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

const app = express();

// ✅ Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// ✅ Serve static files (HTML frontend) from /public folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API routes for student operations
app.use('/api/students', require('./routes/studentRoutes'));

// ✅ Export app for testing
module.exports = app;

// ✅ Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}
