const mongoose = require("mongoose");
const validator = require("validator");

const jokesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "A joke must have a type or category"],
    unique: false,
    trim: true,
    maxlength: [
      40,
      "A joke type must have less than or equal to 40 characters",
    ],
    minlength: [1, "A joke type must have more or equal then 1 characters"],
  },

  setup: {
    type: String,
    required: [true, "A joke must have a setup"],
    trim: true,
    maxlength: [
      1000,
      "A joke setup must have less than or equal to 300 characters",
    ],
    minlength: [1, "A joke name must have more or equal then 1 characters"],
  },
  punchline: {
    type: String,
    required: [true, "A joke must have a punchline"],
    unique: true,
    trim: true,
    maxlength: [
      1000,
      "A joke punchline must have less than or equal to 1000 characters",
    ],
    minlength: [1, "A joke name must have more or equal then 1 characters"],
  },
});

const Joke = mongoose.model("Joke", jokesSchema);

module.exports = Joke;
