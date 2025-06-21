const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

// GET all students
router.get('/', getStudents);

// GET a single student by ID
router.get('/:id', getStudentById);

// POST a new student
router.post('/', createStudent);

// PUT update a student
router.put('/:id', updateStudent);

// DELETE a student
router.delete('/:id', deleteStudent);

module.exports = router;
