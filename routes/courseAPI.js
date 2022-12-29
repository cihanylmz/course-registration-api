const app = require('express');
const mongoose = require('mongoose');
const router = app.Router();

const Course = mongoose.model('Course', {
    name: String
  });
  
const Student = mongoose.model('Student', {
  name: String,
  courses: [],
});

router.put("/courses/:courseid/students/:studentid", async (req, res) => {
    const student = await Student.findById(req.params.studentid);
    const course = await Course.findById(req.params.courseid);

    student.courses.push(course);
    await student.save();
    res.send(student);
    });

router.get('/courses', async (req, res) => {
const courses = await Course.find();
res.send(courses);
});

router.post('/courses', async (req, res) => {
const course = new Course(req.body);
await course.save();
res.send(course);
});

router.get('/courses/:id', async (req, res) => {
const course = await Course.findById(req.params.id);
res.send(course);
});

router.put('/courses/:id', async (req, res) => {
const course = await Course.findByIdAndUpdate(req.params.id, req.body);
res.send(course);
});

router.delete('/courses/:id', async (req, res) => {
const course = await Course.findByIdAndDelete(req.params.id);
res.send(course);
});

module.exports = router;