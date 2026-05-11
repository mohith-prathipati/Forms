const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["text", "options"],
    required: true,
  },

  required: {
    type: Boolean,
    default: false,
  },

  options: {
    type: [String],
    default: [],
  },
});

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  questions: [questionSchema],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Survey",
  surveySchema
);