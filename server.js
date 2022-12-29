const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

const courseAPI = require('./routes/courseAPI.js');
const studentAPI = require('./routes/studentAPI.js');

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://CourseAdmin:GEv7puH1chNeCPyJ@courseregistrationclust.vah8t32.mongodb.net/?retryWrites=true&w=majority";

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

app.use('/courseAPI', courseAPI);
app.use('/studentAPI', studentAPI);
  
app.listen(8000, () => {
    console.log("Server started on port 8000");
})