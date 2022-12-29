const app = require('express');
const mongoose = require('mongoose');
const router = app.Router();
const Student = require('../models/StudentModel.js');


router.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);
  });
  
router.post('/students', async (req, res) => {
const student = new Student(req.body);
await student.save();
res.send(student);
});

router.get('/students/:id', async (req, res) => {
const student = await Student.findById(req.params.id);
res.send(student);
});

router.put('/students/:id', async (req, res) => {
const student = await Student.findByIdAndUpdate(req.params.id, req.body);
res.send(student);
});

router.delete('/students/:id', async (req, res) => {
const student = await Student.findByIdAndDelete(req.params.id);
res.send(student);
});
module.exports = router;