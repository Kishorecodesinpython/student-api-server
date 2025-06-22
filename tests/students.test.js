jest.setTimeout(30000); // ⏱️ Increases test timeout to 30s

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Import your app
const Student = require('../models/studentModel');

beforeAll(async () => {
  // Connect to your test database (same DB is fine for now)
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  // Clean up after each test
  await Student.deleteMany();
});

describe('📘 API Tests - /api/students', () => {
  it('should create a new student', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        course: 'CSE',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Test User');
  });

  it('should return all students', async () => {
    // Add one first
    await Student.create({ name: 'Arin', email: 'arin@test.com', course: 'AI' });

    const res = await request(app).get('/api/students');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
