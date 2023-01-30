const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  surname: { type: String, required: true, minlength: 2 },
  class: { type: Number, required: true },
  email: String,
  age: Number,
  assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment',
      autopopulate: { maxDepth: 2 },
    },
  ],
});

StudentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Student', StudentSchema);
