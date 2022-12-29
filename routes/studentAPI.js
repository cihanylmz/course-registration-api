const app = require('express');
const router = app.Router();
const Student = require('../models/StudentModel.js');

//Bütün öğrencileri getirir.
router.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);
  });
  
//Yeni öğrenci ekler
router.post('/students', async (req, res) => {
const student = new Student(req.body);
await student.save();
res.send(student);
});

//Belirli ID'deki öğrenciyi getirir.
router.get('/students/:id', async (req, res) => {
const student = await Student.findById(req.params.id);
res.send(student);
});

//Belirli ID'deki öğrenciyi update eder.
router.put('/students/:id', async (req, res) => {
const student = await Student.findByIdAndUpdate(req.params.id, req.body);
res.send(student);
});

//Belirli ID'deki öğrenciyi siler.
router.delete('/students/:id', async (req, res) => {
const student = await Student.findByIdAndDelete(req.params.id);
res.send(student);
});

module.exports = router;