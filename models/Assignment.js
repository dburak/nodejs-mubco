const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 30,
    required: true,
  },
  desc: {
    type: String,
    default: '',
    maxlength: 500,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor',
    autopopulate: { maxDepth: 1 },
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    autopopulate: { maxDepth: 1 },
  },
});

AssignmentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Assignment', AssignmentSchema);
