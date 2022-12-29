var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Student = new Schema({
    name: String,
    courses: [],
  });
module.exports = mongoose.model('students', Student); 