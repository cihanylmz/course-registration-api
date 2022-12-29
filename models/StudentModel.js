var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Student modelini oluşturur.
const Student = new Schema({
    name: String,
    courses: [],
  });
module.exports = mongoose.model('students', Student); 