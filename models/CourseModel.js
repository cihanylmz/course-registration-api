//Course modelini oluşturur.
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
    name: String
  });
module.exports = mongoose.model('courses', Course); 