const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

//Oluşturduğumuz routeları require ediyoruz
const courseAPI = require('./routes/courseAPI.js');
const studentAPI = require('./routes/studentAPI.js');

//Gelen datayı json olarak almamızı sağlar
app.use(express.json());
//Browser'da Cors protokolu hatası almamızı engeller.
app.use(cors());

//MongoDB connection string
const uri = "mongodb+srv://CourseAdmin:GEv7puH1chNeCPyJ@courseregistrationclust.vah8t32.mongodb.net/?retryWrites=true&w=majority";

//Bu fonksiyon ile veri tabanına bağlanırız.
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

////Oluşturduğumuz routeları başlatıyoruz.
app.use('/courseAPI', courseAPI);
app.use('/studentAPI', studentAPI);
 
//Dinamik port ile port numarasını environment'tan almasını sağlıyoruz.
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})