const Student = require('../models/studentModel');

// @desc    Get all students
const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};

// @desc    Get a single student by ID
const getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.status(200).json(student);
};

// @desc    Create a new student
const createStudent = async (req, res) => {
  const { name, email, course } = req.body;
  const newStudent = await Student.create({ name, email, course });
  res.status(201).json(newStudent);
};

// @desc    Update a student
const updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.status(200).json(student);
};

// @desc    Delete a student
const deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.status(200).json({ message: 'Student deleted' });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
