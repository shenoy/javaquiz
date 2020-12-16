const mongoose = require("mongoose");
const validator = require("validator");

const quizSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "A quiz must have a type or category"],
    unique: false,
    trim: true,
    maxlength: [
      40,
      "A quiz type must have less than or equal to 40 characters",
    ],
    minlength: [1, "A quiz type must have more or equal then 1 characters"],
  },

  question: {
    type: String,
    required: [true, "A quiz must have a question"],
    trim: true,
    maxlength: [
      1000,
      "A quiz setup must have less than or equal to 1000 characters",
    ],
    minlength: [1, "A quiz name must have atleast one character"],
  },
  answer: {
    type: String,
    required: [true, "A quiz must have an answer"],
    unique: true,
    trim: true,
    maxlength: [
      1000,
      "A quiz answer must have less than or equal to 1000 characters",
    ],
    minlength: [1, "A quiz name must have more or equal then 1 characters"],
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
