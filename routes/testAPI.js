const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const app = express();

// Parse incoming requests as JSON
app.use(express.json());

const uri = "mongodb+srv://CourseAdmin:GEv7puH1chNeCPyJ@courseregistrationclust.vah8t32.mongodb.net/?retryWrites=true&w=majority";


/* router.get("/",function(req,res,next) {
    res.send("API is working properly");
}) */


async function connect() {
    try
    {
        await mongoose.connect(uri);
        console.log("connected to mongoDb");
    } catch(error) {
        console.error(error);
    }
}
connect();

const Course = mongoose.model('Course', {
    name: String,
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    }],
  });
  
  const Student = mongoose.model('Student', {
    name: String,
  });
  
  // Set up the routes for the course and student resources
  app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
  });
  
  app.post('/courses', async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.send(course);
  });
  
  app.get('/courses/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.send(course);
  });
  
  app.put('/courses/:id', async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    res.send(course);
  });
  
  app.delete('/courses/:id', async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.send(course);
  });
  
  app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);
  });
  
  app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  });
  
  app.get('/students/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.send(student);
  });
  
  app.put('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send(student);
  });
  
  app.delete('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.send(student);
  });

app.listen(9000, () => {
    console.log("Server started on port 8000");
})


module.exports=router;