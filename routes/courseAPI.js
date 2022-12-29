const app = require('express');
const router = app.Router();
const Course = require('../models/CourseModel.js');
const Student = require('../models/StudentModel.js');

  
//Öğrencileri kursa kaydetme işlemi
router.put("/courses/:courseid/students/:studentid", async (req, res) => {
    //Student ve course verilerini alıyoruz.
    const student = await Student.findById(req.params.studentid);
    const course = await Course.findById(req.params.courseid);

    //Öğrencinin courses alanına course'u push ediyoruz ve kaydediyoruz.
    student.courses.push(course);
    await student.save();
    res.send(student);
    });

//Bütün kursları getirir.
router.get('/courses', async (req, res) => {
const courses = await Course.find();
res.send(courses);
});

//Yeni kurs ekler
router.post('/courses', async (req, res) => {
const course = new Course(req.body);
await course.save();
res.send(course);
});

//Verilen ID ile kursu alır
router.get('/courses/:id', async (req, res) => {
const course = await Course.findById(req.params.id);
res.send(course);
});

//Verilen ID'deki kursu update eder.
router.put('/courses/:id', async (req, res) => {
const course = await Course.findByIdAndUpdate(req.params.id, req.body);
res.send(course);
});

//Verilen ID'deki kursu siler
router.delete('/courses/:id', async (req, res) => {
const course = await Course.findByIdAndDelete(req.params.id);
res.send(course);
});

module.exports = router;