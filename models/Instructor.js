const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  surname: { type: String, required: true, minlength: 2 },
  email: String,
  age: Number,
});

module.exports = mongoose.model('Instructor', InstructorSchema);
