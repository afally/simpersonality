const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  date: { type: String },
  number: { type: Number },
  question: { type: String },
  name: { type: String },
  optiona: { type: String },
  optionb: { type: String },
  optionc: { type: String },
  optiond: { type: String },
});

// Assign the model to variable before exporting
const Question = mongoose.model('question', questionSchema);
module.exports = Question;
